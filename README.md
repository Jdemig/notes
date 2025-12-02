# Notes

Personal notes and scripts.

## Linear Daily Report Script

Generate a daily report of your Linear activity.

### Setup

1. **Install Bun** (if not already installed):

   ```bash
   # Using Homebrew (macOS)
   brew install bun

   # Or using the official installer
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Set your Linear API key**:

   ```bash
   export LINEAR_API_KEY="your-api-key-here"
   ```

   Get your API key from: https://linear.app/settings/api

### Usage

```bash
# Generate report for past 24 hours (prints to console)
pnpm linear:report

# Generate report and save to file
pnpm linear:report:output

# Custom options
bun scripts/generate-linear-daily-report.ts --days 2 --output scalis/daily/custom-report.md
```

### Script Options

- `--days <number>` - Number of days to look back (default: 1)
- `--output <path>` - Save report to file instead of printing to console
- `--help, -h` - Show help message

