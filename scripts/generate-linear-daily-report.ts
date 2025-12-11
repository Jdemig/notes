#!/usr/bin/env bun
/**
 * Script to generate a daily report of Linear activity.
 *
 * Usage:
 *   # Generate report for past 24 hours
 *   bun scripts/generate-linear-daily-report.ts
 *
 *   # Generate report for a specific number of days
 *   bun scripts/generate-linear-daily-report.ts --days 1
 *
 *   # Generate report and save to file
 *   bun scripts/generate-linear-daily-report.ts --output scalis/daily/daily-report.md
 *
 * Environment Variables Required:
 *   LINEAR_API_KEY - Your Linear API key (get from https://linear.app/settings/api)
 *                     Create a Personal API Key in Linear Settings > API
 *
 * This script will:
 * 1. Fetch issues you've updated/commented on in the past day
 * 2. Fetch comments you've made on tickets
 * 3. Format as a bullet-point report
 */

const LINEAR_API_URL = 'https://api.linear.app/graphql'

interface LinearIssue {
  id: string
  identifier: string
  title: string
  description?: string
  url: string
  state: {
    name: string
    type: string
  }
  assignee?: {
    name: string
    email: string
  }
  updatedAt: string
}

interface LinearComment {
  id: string
  body: string
  createdAt: string
  issue: {
    id: string
    identifier: string
    title: string
    url: string
  }
}

interface LinearUser {
  id: string
  name: string
  email: string
}

interface LinearActivity {
  issues: LinearIssue[]
  comments: LinearComment[]
}

/**
 * Make a GraphQL request to Linear API
 */
async function linearGraphQLRequest(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<unknown> {
  const apiKey = process.env.LINEAR_API_KEY

  if (!apiKey) {
    console.error('❌ LINEAR_API_KEY environment variable is required')
    console.error('   Get your API key from: https://linear.app/settings/api')
    process.exit(1)
  }

  const postData = JSON.stringify({
    query,
    variables,
  })

  try {
    const response = await fetch(LINEAR_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: postData,
    })

    const data = await response.json()

    if (data.errors) {
      throw new Error(`Linear API error: ${JSON.stringify(data.errors)}`)
    }

    return data.data
  } catch (error) {
    throw new Error(`Failed to make request: ${error}`)
  }
}

/**
 * Get the current user's information
 */
async function getCurrentUser(): Promise<LinearUser> {
  const query = `
    query {
      viewer {
        id
        name
        email
      }
    }
  `

  const data = (await linearGraphQLRequest(query)) as { viewer: LinearUser }
  return data.viewer
}

/**
 * Get issues updated by the user in the past N days
 */
async function getUpdatedIssues(userId: string, days: number): Promise<LinearIssue[]> {
  const since = new Date()
  since.setDate(since.getDate() - days)
  const sinceISO = since.toISOString()

  const issuesQuery = `
    query($since: DateTimeOrDuration!) {
      issues(
        filter: {
          updatedAt: { gte: $since }
          assignee: { id: { eq: "${userId}" } }
        }
        first: 100
        orderBy: updatedAt
      ) {
        nodes {
          id
          identifier
          title
          description
          url
          state {
            name
            type
          }
          assignee {
            name
            email
          }
          updatedAt
        }
      }
    }
  `

  try {
    const data = (await linearGraphQLRequest(issuesQuery, { since: sinceISO })) as {
      issues: { nodes: LinearIssue[] }
    }
    return data.issues.nodes
  } catch (error) {
    console.warn('⚠️  Could not fetch updated issues:', error)
    return []
  }
}

/**
 * Get comments made by the user since a specific date
 */
async function getComments(userId: string, sinceDate: Date): Promise<LinearComment[]> {
  const sinceISO = sinceDate.toISOString()

  const query = `
    query($since: DateTimeOrDuration!) {
      comments(
        filter: {
          createdAt: { gte: $since }
          user: { id: { eq: "${userId}" } }
        }
        first: 100
        orderBy: createdAt
      ) {
        nodes {
          id
          body
          createdAt
          issue {
            id
            identifier
            title
            url
          }
        }
      }
    }
  `

  try {
    const data = (await linearGraphQLRequest(query, { since: sinceISO })) as {
      comments?: { nodes: LinearComment[] }
    }
    return data.comments?.nodes || []
  } catch (error) {
    console.warn('⚠️  Could not fetch comments:', error instanceof Error ? error.message : error)
    return []
  }
}

/**
 * Get all issues the user has been active on (only issues with comments or newly assigned)
 * This filters out issues where only priority or other metadata was changed
 */
async function getActiveIssues(userId: string, sinceDate: Date): Promise<LinearIssue[]> {
  const sinceISO = sinceDate.toISOString()

  // Only get issues that have comments from the user in the time period
  // This filters out issues where only priority or metadata was changed
  const commentsQuery = `
    query($since: DateTimeOrDuration!) {
      comments(
        filter: {
          createdAt: { gte: $since }
          user: { id: { eq: "${userId}" } }
        }
        first: 100
      ) {
        nodes {
          issue {
            id
            identifier
            title
            description
            url
            state {
              name
              type
            }
            assignee {
              name
              email
            }
            updatedAt
          }
        }
      }
    }
  `

  // Also get issues that were newly assigned to the user in the time period
  // (these are meaningful even without comments)
  const newlyAssignedQuery = `
    query($since: DateTimeOrDuration!) {
      issues(
        filter: {
          assignee: { id: { eq: "${userId}" } }
          createdAt: { gte: $since }
        }
        first: 100
        orderBy: createdAt
      ) {
        nodes {
          id
          identifier
          title
          description
          url
          state {
            name
            type
          }
          assignee {
            name
            email
          }
          updatedAt
        }
      }
    }
  `

  const issuesMap = new Map<string, LinearIssue>()

  try {
    // Get issues from comments (most meaningful activity)
    const commentsData = (await linearGraphQLRequest(commentsQuery, { since: sinceISO })) as {
      comments?: { nodes: Array<{ issue: LinearIssue }> }
    }
    if (commentsData.comments?.nodes) {
      commentsData.comments.nodes.forEach(({ issue }) => {
        issuesMap.set(issue.id, issue)
      })
    }
  } catch (error) {
    console.warn('⚠️  Could not fetch issues from comments:', error instanceof Error ? error.message : error)
  }

  try {
    // Get newly assigned issues (also meaningful)
    const assignedData = (await linearGraphQLRequest(newlyAssignedQuery, { since: sinceISO })) as {
      issues?: { nodes: LinearIssue[] }
    }
    if (assignedData.issues?.nodes) {
      assignedData.issues.nodes.forEach((issue) => {
        // Only add if not already added from comments
        if (!issuesMap.has(issue.id)) {
          issuesMap.set(issue.id, issue)
        }
      })
    }
  } catch (error) {
    console.warn('⚠️  Could not fetch newly assigned issues:', error instanceof Error ? error.message : error)
  }

  return Array.from(issuesMap.values())
}

/**
 * Format the report as markdown
 */
function formatReport(
  user: LinearUser,
  issues: LinearIssue[],
  comments: LinearComment[],
  sinceDate: Date
): string {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const sinceDateStr = sinceDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  let report = `# Linear Daily Report - ${date}\n\n`
  report += `Generated for: **${user.name}** (${user.email})\n`
  report += `Time period: Since ${sinceDateStr}\n\n`
  report += '---\n\n'

  // Group comments by issue ID
  const commentsByIssueId = new Map<string, LinearComment[]>()
  comments.forEach((comment) => {
    const issueId = comment.issue.id
    if (!commentsByIssueId.has(issueId)) {
      commentsByIssueId.set(issueId, [])
    }
    commentsByIssueId.get(issueId)!.push(comment)
  })

  // Group issues by state
  const issuesByState = new Map<string, LinearIssue[]>()
  issues.forEach((issue) => {
    const stateName = issue.state.name
    if (!issuesByState.has(stateName)) {
      issuesByState.set(stateName, [])
    }
    issuesByState.get(stateName)!.push(issue)
  })

  // Issues section with comments included
  if (issues.length > 0) {
    report += '## Issues Worked On\n\n'
    const sortedStates = Array.from(issuesByState.entries()).sort((a, b) => {
      // Sort states: In Progress first, then others
      if (a[0] === 'In Progress') return -1
      if (b[0] === 'In Progress') return 1
      return a[0].localeCompare(b[0])
    })

    for (const [stateName, stateIssues] of sortedStates) {
      report += `### ${stateName}\n\n`
      for (const issue of stateIssues) {
        report += `- **${issue.identifier}** ${issue.title}\n`
        
        // Include description if available
        if (issue.description) {
          const cleanDescription = issue.description
            .replace(/```[\s\S]*?```/g, '[code block]')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .trim()

          if (cleanDescription) {
            // Split by newlines and format as indented bullet points
            const lines = cleanDescription.split('\n').filter((line) => line.trim())
            lines.forEach((line) => {
              report += `  - ${line.trim()}\n`
            })
          }
        }
        
        // Include comments for this issue if any
        const issueComments = commentsByIssueId.get(issue.id)
        if (issueComments && issueComments.length > 0) {
          for (const comment of issueComments) {
            // Strip markdown formatting for cleaner display, but keep basic structure
            const cleanBody = comment.body
              .replace(/```[\s\S]*?```/g, '[code block]')
              .replace(/`([^`]+)`/g, '$1')
              .replace(/\*\*([^*]+)\*\*/g, '$1')
              .replace(/\*([^*]+)\*/g, '$1')
              .trim()

            if (cleanBody) {
              // Split by newlines and format as indented bullet points
              const lines = cleanBody.split('\n').filter((line) => line.trim())
              lines.forEach((line) => {
                report += `  - ${line.trim()}\n`
              })
            }
          }
        }
      }
      report += '\n'
    }
  } else {
    report += '## Issues Worked On\n\n'
    report += '_No issues found for this time period._\n\n'
  }

  report += '---\n\n'
  report += `_Report generated at ${new Date().toLocaleString()}_\n`

  return report
}

/**
 * Generate a date-based filename from a given date
 */
function generateDateFilename(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `scalis/daily/my-daily-${year}-${month}-${day}.md`
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2)
  let days = 1
  let outputPath: string | null = null
  let sinceDate: Date | null = null

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--days' && args[i + 1]) {
      days = parseInt(args[i + 1], 10)
      if (isNaN(days) || days < 1) {
        console.error('❌ --days must be a positive number')
        process.exit(1)
      }
      i++
    } else if (args[i] === '--since' && args[i + 1]) {
      // Parse date string (supports ISO format or YYYY-MM-DDTHH:mm:ss)
      const dateStr = args[i + 1]
      sinceDate = new Date(dateStr)
      if (isNaN(sinceDate.getTime())) {
        console.error(`❌ Invalid date format: ${dateStr}`)
        console.error('   Use ISO format: 2025-12-01T08:00:00 or 2025-12-01T08:00:00-05:00')
        process.exit(1)
      }
      i++
    } else if (args[i] === '--output' && args[i + 1]) {
      outputPath = args[i + 1]
      i++
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`
Usage: bun scripts/generate-linear-daily-report.ts [options]

Options:
  --days <number>    Number of days to look back (default: 1)
  --since <datetime> Start time in ISO format (e.g., 2025-12-01T08:00:00)
                     Overrides --days if specified
  --output <path>    Save report to file (default: scalis/daily/my-daily-YYYY-MM-DD.md)
  --no-file          Print to console instead of saving to file
  --help, -h         Show this help message

Environment Variables:
  LINEAR_API_KEY     Your Linear API key (required)
                      Get from: https://linear.app/settings/api

Examples:
  bun scripts/generate-linear-daily-report.ts
  bun scripts/generate-linear-daily-report.ts --days 7
  bun scripts/generate-linear-daily-report.ts --since 2025-12-01T08:00:00
  bun scripts/generate-linear-daily-report.ts --since "2025-12-01T08:00:00-05:00"
  bun scripts/generate-linear-daily-report.ts --output custom-report.md
  bun scripts/generate-linear-daily-report.ts --no-file
      `)
      process.exit(0)
    } else if (args[i] === '--no-file') {
      outputPath = null
    }
  }

  // Calculate sinceDate if not provided
  if (!sinceDate) {
    sinceDate = new Date()
    sinceDate.setDate(sinceDate.getDate() - days)
  }

  console.log('📊 Generating Linear daily report...\n')

  try {
    // Get current user
    console.log('👤 Fetching user information...')
    const user = await getCurrentUser()
    console.log(`   Found user: ${user.name} (${user.email})\n`)

    // Get comments first
    console.log('💬 Fetching comments...')
    const comments = await getComments(user.id, sinceDate)
    console.log(`   Found ${comments.length} comment${comments.length !== 1 ? 's' : ''}\n`)

    // Get active issues (only those with comments or newly assigned - filters out priority-only changes)
    const sinceStr = sinceDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    console.log(`🔍 Fetching issues since ${sinceStr}...`)
    const issues = await getActiveIssues(user.id, sinceDate)
    console.log(`   Found ${issues.length} issue${issues.length !== 1 ? 's' : ''} (filtered to exclude priority-only changes)\n`)

    // Generate report
    const report = formatReport(user, issues, comments, sinceDate)

    // Default to date-based filename if no output specified and not --no-file
    // Use the start date (sinceDate) for the filename
    if (outputPath === null && !args.includes('--no-file')) {
      outputPath = generateDateFilename(sinceDate)
    }

    if (outputPath) {
      // Bun.write is the native Bun API for writing files
      await Bun.write(outputPath, report)
      console.log(`✅ Report saved to: ${outputPath}\n`)
    } else {
      console.log(report)
    }
  } catch (error) {
    console.error('❌ Error generating report:', error)
    process.exit(1)
  }
}

// Run the script
main().catch((error) => {
  console.error('❌ Unexpected error:', error)
  process.exit(1)
})
