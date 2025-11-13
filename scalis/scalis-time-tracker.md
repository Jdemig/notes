# Scalis Time Tracker


Tuesday Nov 5th
- Initial meeting (1 hr)
- Got project running
- Created a employer and employee test account on local
- Logged into employee account and looked for jobs (2 hr)
    - No jobs found
    - Looked into why
        - Turns out that OpenSearch is pulling data and there is data there?
    - But there is no data in the local postgres database
        - Might need to create a seed file?
- Built progress loader (1hr)
- Started building generate-resume components (2hr)


Wed Nov 6th
- Resolved merge conflicts (1hr)
    - Need to talk to the team about altering history on main (no no)
- Continued working on generate resume components
- Create toggle-group component (2hr)
- Create Card in generate resume (really just used the Card that already exists) (1hr?)
    - Created the Card story to show how it could be used
- Create draggable sections (2hr)
- Open PR and cleanup (1hr)


Thur Nov 7th
- Fix PR requests (1hr)
- Start working on optimizations (6hr)
    - Removed packages
    - Rewrote some aws-sdk stuff with smaller libs
        - Fixed TypeScript issues and compile issues with new libs
        - Got tests passing
    - Removed some unused files _app.tsx, _document.tsx, 404.tsx
    - Wrote Linear tickets
    - Made scripts async in layout.tsx
    - Tried to replace Spinner component in reactstrap (might have a test case issue)


Friday 8th
- Fixed test issues (2hr)
- keyv 4.5.4
- Get CI passing for package removal / optimization branch (2hr)


Saturday 9th
- Get CI passing for turbopack (3hr)

Sunday 10th
- Get CI passing for AI resume branch (1hr)


Monday 11th
- Build Tone component in resume drawer (2hr)
- Work on PDFViewer component (5hr)


Tuesday 12th
- Merge optimization PR - had to resolve more annoying CI issues and conflicts (1.5hr)
- Build a PDFViewer component (7hr)



Wednesday 13th
- Unblock Mihai from potential turbopack bug (1hr)
- Bug squash PR - fixed React.Fragment issue (1.5hr) 
- Build semicircle progress bar (1hr)
- Build match score component (0.5hr)
- Update Tab components to handle children for content (1hr)
- Populate the content with accordions and other information (1hr)


Thursday 14th
- Start on scalis profile in generate resume drawer (0.5hr)
- Talk through API endpoints for generating resume (0.5hr)
- Requisition editor bug fix (6hr)
    - lots of other bugs that got in the way



Friday 15th
- nested button bug fix (8hr)
    - removed tabler icons library
    - refactors all of the <Icon references to have a wrapping button element
    - fixed tests


Saturday 16th

- “Unauthorized” bug fix research (4hr)
- Work on updating job description cards (2hr)

==== paid

Sunday 17th

- Work on updating the search bar
    - Update employment type to v2 (1hr)
    - Update location search to v2 (3hr)
        - create new component
    - Update text search to v2 (1hr)
    - Location search component turned out to be a bit challenging with some tricky logic (1hr)
        - overall not a great component would recommend rewriting


Monday 18th

- Auth discussion meeting (1hr)
- Read Gabriels PRs (0.5hr)
- Fix unauthorized bug (2hr)
- Start working on building new job details page (5hr)
    - Lots of refactor work needed
    - Needed to get real data from the database because if i didn’t then i would be wasting time on the UI
    - 


Tuesday 19th

- Read Irene PRs (0.5hr)
- Read Andrew PRs (0.5hr)
- Read Gabriel PRs (0.5hr)
- Meeting w Parker (0.5hr)
- Meeting w Lizzy (1hr)
- Work on job listing page (3hr)
    - Worked on fetching data with getServerProps for job listing page
        - Chat about getServerProps in Slack
- Merge in JobCard and get that working on the job listing page (2hr)




Wednesday 20th

- Build search graphql query (2hr)
- Create new gql query to resolve suggested listings alongside details page (2hr)
- Update getServerProps for both details and listing page (2hr)
- Update card to handle data from gql (1hr)
- Update job details page to handle data from gql (2hr)
- Update job listing page to handle data from gql (2hr)


Thursday 21st

- Fix CI issues with job details page cleanup PR (1hr)
- Remove unused components & fix type issues from missing imports from moved components (2hr)
- Go through and test a couple different pages to make sure things are working as expected. (1hr)
- Fix some of the layout on the pages (2hr)
    - Organize the layouts a bit more
- Fix layout on requisition flow - overflow scroll issue and background color issues (2hr)
- Fix CI issues and merge conflicts (2hr)


Friday 22nd

- Reverted Ron change on job details page (1hr)
- Fixed issues with job details page breaking pipeline and other dashboard issues (2.5hr)
- Open up new PR for job details and other fixes (4.5hr)


Saturday 23rd

- Write some more bug fixes for the dashboard (2hr)
- Write an auth fix (auto log out user on token expiration) (1hr)


Sunday 24th

- Merge auth fixes (1hr)
- Merge fix for wrong opensearch index (1hr)
- Fix some issues with opensearch query. Wasn’t querying the right fields (2hr)



Monday 25th

- Research auth bugs (6hr)
- Work on /etc/host subdomain setup (2hr)


Tuesday 26th

- Get /etc/hosts subdomain setup working (5hr)
- Work on navbar (4hr)


Wednesday 27th

- Fix bug with pagination on jobs page & change to external title (1hr)
- Update more UI for nav bar to better reflect mockups (3hr)
- Fix CI (0.5hr)
- Update auth PR and open pull request (2hr)

Thursday 28th

- Fix Wiltersons comments on auth PR (3hr)
- Fix CI and tests (1.5hr)
- Update generate resume drawer PR so that Guga can integrate (2hr)


Friday  29th

- Check out Roys branch to see Editor issues (1hr)
- Work on getting subdomain routing PR merged  (2hr)
    - Update route
- Work on getting drawer PR merged - for some reason there were some more CI issues (1.5hr)
- Review alexanders PR (1hr)
- Fix circular dependency in jobs (1hr)
- More CI issues (1.5hr)


Saturday 30th

- Resolve comments from Dmytro on subdomain PR (1hr)
- Resolve merge conflicts and CI issues on subdomain PR (1hr)
- Help irene w logout button not showing up (0.5hr)
- Rework subdomain push logic (0.5hr)
- Update links to go to correct subdomains (0.5hr)


Sunday 1st

- Reworking the NavBarTemplate (3hr)
- Update routing logic (we need a way to have some routes be branded)
- Work on fixing tests and CI issues for linking and get it merged (1hr)


=== invoice sent


Monday 2nd

- Meeting w team about auth / routing (1hr)
- Work on bug fixes (8hr)
    - Cleanup CSS and markup for job details page
    - Implement quick fix for job description showing html
    - Fix navigating to a new route not loading session subdomain
    - Fix some links going to the wrong place
    - Update navbar for some /application routes
    - Fix some links showing up incorrectly on nav bar on some routes
    - Remove some old code
    - Fix bug for /api/auth/me
    - Fix job-card little dot showing up if location doesnt exist
- Fix bug w workspaces not showing up (0.5hr)
- Fix bug with requisitions not scrolling (0.5hr)
- Fix bug with pagination showing too many pages (0.5hr)


Tuesday 3rd

- Call with Alexander (0.5hr)
- Start working on bug w sign up redirecting you
    - Researching different solutions (2hr)
        - One solution contemplated was setting session after email verification on server side (seemed like there was no support for that)
        - Another solution was to authenticate the user right away before they verify
- Implement logic to authenticate right on sign up (2hr)
- Implement logic to set emailVerified flag on session (1hr)
- Implement logic to redirect users to appropriate locations if they are not emailVerified (1hr)
- Look into pipeline bug with z-index probably caused by my previous changes to the requisitions page (1hr)
- Get tests passing CI for PR for redirect bug fix (1.5hr)


Wednesday 4th

- Read Wiltersons PR and give him some feedback (1hr)
- Look into bug with Nylas (probably best to use next 14 for now) (1hr)
- Help Roy debug (1hr)
- Fix bug with infinite page reload (1hr)
- Work on mobile navigation fixes (3hr)
    - Get new drawer to show up on all locations
- Look into CI issues (1hr)
    - Look into why there is sometimes a third github action


Thursday 5th

- Meeting with Dymytro to go over his image PR (1hr)
- Look into datadog logging issues from Steve (1hr)
- Call w Mihai, Wilteson about opensearch (1hr)
- Fix bug with branded routes redirecting to /error (2hr)
- Call with Roy, Parker and Lizzy about losing session bug (1hr)
- Call w Parker about /user/profile showing blank bug
- Look into why /user/profile infite loads (1hr)
- Downgrade nextjs to 14 (2hr)
- Look into token expiration in Cognito and implement a fix to push users out when tokens expire (1.5hr)


Friday 6th

- Hop on call (0.25hr)
- Look into …nextauth token expiration setup (1hr)
- Work on graphql.ts error handling (1hr)
- Work on fixing NylasScheduling component (1hr)
- Meeting w Mihai about scraper (0.5hr)
- Get Nylas working with next15 (2.5hr)
- Work bug fix for /user/profile and requisition-details page (2hr)
    - both pages show blank
    - unwrapped in Suspense boundary
- Merge pull requests for updating api tests and logout logic and updating error handling (0.5hr)




Saturday 7th

- Bug fixes (3hr)
    - auth - refresh token 
    - auth - logout & better error handling
    - remove logs
    - remove unused access_token

Sunday 8th

- Fix quick apply button going to wrong place on details page (0.5hr)
- Fix layouts basic-layout etc (1hr)
- Fix quick apply button not being greyed out (3.5hr)


Monday 9th

- Morning meeting (0.5hr)
- Answer dev questions (0.5hr)


Tuesday 10th

- Merge login shouldn’t redirect to workspace select if they have no workspaces (0.5hr)
- Work on tests not passing for error update PR (3hr)
- Work on generate resume integration (4.5hr)
    - Refactoring resume generator to maintain state in drawer instead of child components


Wednesday 11th

- Work on resume generator (8hr)
    - Continue finish refactor of props / state location
    - Work on hitting API
        - Turns out API doesn’t really work all that well
    - We need a way to generate a PDF from HTML whether that be server side or client side
    - Start researching ways to generate PDF


Thursday 12th

- Work on resume generator (6.5hr)
    - Update API to return better more consistent results
    - Clean results for JSON.parse(
    - Update results to have steps to improve etc
- Help Irene with SSR (1hr)
- Fix some CSS issues in user profile (0.5hr)
- Half hour for charges to my personal OpenAI API Key (0.5hr)
- There’s a bug in creating experiences on user profile that I feel like I gotta fix because I can’t create a third experience (1hr)


Friday 13th

- Finish up resume generator and open up a PR (8hr)
    - Run a migration to fix a bug with saving experience section
    - Clean up types and tests
    - Open PR


Monday 16th

- Open PR to merge .env.development (1hr)
- Look at blog page (0.5hr)
- Start work on Scorecard (6.5hr)



Tuesday 17th

- Work on logging issue with multiple lines (2hr)
- Meeting about moving over python function to TypeScript (1.5hr)
- Ask more questions about current match score system & lambda functions & architecture (1hr)
- Work on logging issue - found multiple locations where we need to remove the winston from (3.5hr)



Wednesday 18th

- In the logging error ticket found multiple files that mistakenly import unnecessary files (2hr)
- Found many files where winston was used (1hr)
- Fixed tests where we used logger instead of using winston-logger (1hr)
- Work on question for create / upsert scorecard (4hr)


Thursday 19th

- Resolve some change requests on logger PR (2hr)
- Work on upsert scorecard (6hr)


Friday 20th

- Work on upsert template (8hr)
    - Need to create options for edit archive etc on the templates that show up
    - Need to make changes to upsert API (needs to have archive as boolean)

Saturday 21st

- There’s a bug that occurs when you try to create a template with more than 1 skill (2hr)
    - Unique constraint violation
    - Working on solving that


Sunday 22nd

- Work on preview template (3hr)
- Create endpoint for archiving templates (1hr)
- Work on some bugs with editing templates and moving to archive (1hr)


Monday 23rd

- Work on bug for not being able to create a new template from an existing template (4hr)
- Fix CI tests and types (1hr)
- Start work on completing scorecard drawer (1.5hr)



Friday 27th

- Work on merging new changes into AI resume generator PR (1hr)
- Update AI resume generator PR to handle new URLs etc from scraped jobs (1hr)






Saturday 28th

- Improve the logout logic on token expiration (0.5hr)
    - Prompt the user to logout with a dialog and give them no option to cancel. This is a big improvement because they are now aware that their session expired and aware of the page they were on allowing them to go back to it once they log in.
- Work on integrating AI resume generator (2.5hr)
    - Update prompt to handle section ordering (had a hard time adhering to section ordering)
    - Update prompt to adhere to page number (opted to instead change the input label to “max page length”) instead of page length to allow the AI some freedom. Sometimes there isn’t enough content and forcing it to be 2 pages might lower the content quality


Sunday 29th

- Customizing prompt a bit to improve reliability (1hr)
- Change match score to only a single score that the AI generates for us (0.5hr)
- Get CI passing (1hr)


Monday 30th

- Work on getting add dialog session timeout PR merged (1hr)
- Get scalis.loc working as a secure environment (need to update chrome flags in chrome://flags) (1hr)
- Working on scorecards table in the candidate drawer (4hr)
- Create gql queries for upserting and fetching scorecards (2hr)


Tuesday 31st


- Work on moving create scorecard dialog into new component (1hr)
- Work on the scorecards table in the candidate drawer (5hr)
- 


Thursday 2nd

- Work on scorecard (8hrs)
    - Finish Grid
    - Add options / actions to grid rows
    - Create drawer
        - Create rating select component
    - Render components and enable controlling state 

Friday 3rd

- Work on scorecard drawer (8hrs)
    - Create different question options
    - Run migration to allow template description and overall recommendation
    - Get it creating answers for each question and editing those
        - Upserting works 
    - Work on issue with overallRecommendation



Sunday 5th

- Finish up scorecard (5hrs)
    - Work on grid actions
    - Create the view scorecard drawer



Monday 6th

- Work on scorecard (9hrs)
    - Fix CI
        - Types were throwing
        - Had to remove deprecated files to fix types
        - Merged changes and realized that Dmytro already removed some of the files I was removing
        - Reverted my changes
        - Merged Dmytros
        - Fixed CI issues from Dmytros merge
        - Got types tests and build passing
    - Fix send-reminder-candidate-scorecard.use-case 
    - Fix migration (drop enum was added by someone else)
    - 
    - 

Tuesday 7th

- Fix pull request comments on scorecard (8hrs)
    - See pull request for detail: https://github.com/scalis-io/scalis-io/pull/3055
- Build email template (1hr)
- Update send email use case (0.5hr)



Wedneday 8th

- Finish up change requests from Dmytro (7hr)
- Try to get the suspense boundary removed (1hr)



Thursday 9th

- Get scorecards merged (1hr)
    - Fix CI types
- Fix generate resume issues (3hr)
    - double border
    - zoom issues
- Work on download DocX for generate resume (3hr)
    - Tried a couple of different options
        - html-to-docx library (didn’t work client side)
        - docxtemplater (didn’t work with free verion)
        - tried vanilla js option but there are too many edge cases to handle (does work tho)


Friday 10th

- Continue looking into HTML to Docx conversion (8hrs)
    - html-to-docx - this didn’t work client side (i still need to try it out on the server. i can do that and get back to you.
    - html-docx-js - this worked client side but is not openable in Google Docx (only works in Microsoft Word) also can’t open it on some mac devices
    - docxtempater - this costs money to convert from html to docx client side (i think it might work if we paid but haven’t tried it)
    - pandoc - still need to try
    - https://www.convertapi.com/html-to-docx - seems to work well!
- Starting to land on using using https://www.convertapi.com/a/api/html-to-docx




Monday 13th

- Continue working on getting the documents to match between docx and pdf (2hr)
    - this mostly involves editing the html example doc for the AI and then seeing what the output is
- Work on integrating API to convert to docx
- Tried TinyMCE but it’s only available for the TinyMCE editor
- 


Thursday 16th

- Working on building compare scorecard drawer


Friday Jan 17th

- Read parkers login modal PR


Tuesday 21st

- Compare scorecard drawer
    - Finished adding candidate select component
        - Needed to be updated so that it displayed as tags instead of a list
    - Work on change requests from Dmytro for compare scorecards drawer
    - broke upsert-scorecard-drawer into smaller components
- Fixed change requests from Joao for the conversion of html to docx API
    - Moved logic into a use case
    - PR got merged this morning by Parker




Wednesday 22nd

- Wasting time seeding the database
    - Had to run a migration
    - Now my DB is in a broken state
    - Tried to dump old database data but it’s now giving me issues


- Fixed more change requests on the upsert-scorecard pull request




Thursday 23rd

- Compare scorecard drawer was merged
- Create StageSettingsDialog
    - Add button to Select input dropdown (so that you can create a new scorecard from the dropdown)
- Update the upsert-scorecard-drawer so that we can create a scorecard without a template
    - clean up some things
        - remove section as prop and instead just use formValues
- Review Parkers PR




Wed 29th

- Review Dmytros PR
    - Ran into suspense boundary CI issues
- Wiltersons meeting
- Worked on “Add score answer checkbox” - got the PR merged
- Worked on sellwild-tag and messaged them about another bug
- Review Wiltersons PR for creating order references



Thursday 30th

- Remove subdomain from session token? 
- Look into Datadog logs issues?
- Look into performance issue on job page?
- 
- Started on https://linear.app/scalis/issue/S24-5220/ability-to-click-through-multiple-scorecards-from-list-pipeline-and
- Had call over creating extension
- Open PR to disable share email endpoint
- Found a fixfor the quick apply page bug showing a blank screen
- Open PR to fix the job listing active toggle and the job requisition skills updating the job listings





Friday 31st

- figure out how we had an API key leak
- look into why we redirect to quick apply page
- review dmytros PR

- On the candidate view you need to hide the years field if there is no years for the skill
- The user description also seems to not be escaping markup
- Work with LIzzy to find out why job application descriptions are showing html markup in the description
- Fix drag and drop bug on stages when creating a pipeline
- Work on Avatar initials not showing up


Monday 3rd

- Work with Roy for undo for candidate rejection (auto rejection?)
- Review wiltersons PR
- Start on a PR to fix scorecard bugs
    - Fixed description not visible etc
    - Noticed that we could do some consolidation of the preview scorecard logic and moved them to a single component
- Merged a PR for sellwild-ad tag


Tuesday

- 2hrs in meetings (got 0 value from them)

- Add ability to forward and backward through scorecards in the candidate list
- Add in candidate profile header to the scorecard
- Scorecard bugs
    - Fixed bug with recommendation not showing in scorecard content list
    - Scorecard is still populated if you create two in a row
    - Z-index of scorecard drawer too low



Wednesday

- Merged PR with fixes for scorecards
    - contained a fix for prefill with previous scorecard info
    - contained a fix for stage selection not fixed when working in a given stage
    - contained a fix for user assign not validating properly
    - contained a fix for “preview scorecard” inconsistency
    - contained a fix for “compare scorecard” appearing at the wrong time - should only appear when multiple scorecards are selected


Thursday

- Fixed bug with attaching resume, removing resume and reattaching resume
- Fixed bug with resume fields being overwritten after uploading resume
- Update quick apply button to reflect if you have already applied
    - remove quick-apply page and instead have just the application/profile page
    - update some login callbacks
    - update some callbacks on applying so that you get redirected back to where you were in the job board






Friday
- Fix bug in sign up with resume fields overwriting new fields (refactored to use state vs fetching from API)
- Fix bug with uploading files multiple times (resume upload bug)
- Update the quick apply and apply buttons
    - Users that applied could go through apply flow again
    - Fix callbackUrls
    - Refactor quick apply page to just be application / profile page
- Fix bug on Experience form with dates
    - Not all field errors would update when a relvant field was changed
- Update the PR for removing deprecated endpoints
    - now passing tests and ready for review






Monday

- Fixed year and experience on skill tag showing empty
- Finished on cancel rejection
- Fix bug in job details page routing to the screening questions page
- 


Tuesday

- write and merge PR for bug fix for the date fields bug in a couple of other locations
- write and merge PR for adding in the preview-scorecard-updates component
- update the linked in URL in the basic-info component



Wed

- Update sellwild ad
- Work on refactoring session logic


Thu Feb 20th


- Looked into some options to solve the callback url not redirecting properly
    - Ended up deciding that getting https setup makes the most sense
    - Got https setup and working
    - Opened a pull request for https setup
    - Updated the readme to explain the https setup
- Fixed a bug Andrei pointed out in the auth PR



Monday Feb 24th

- Finished up https for local PR
    - Removed debug statements
    - Update nginx conf to handle hot module reloading
- Start on chrome extension
    - Look through current mockups
    - Meeting w Lizzy & Karolina on chrome extension mockups
    - Started looking into setting up chrome extension product
        - manifest.json
        - vite + React




Tuesday 25th

- Work on Mihai’s PR for using Ngrok as a Nginx replacement
    - Purchased Ngrok to try it out
    - Learned that ngrok wildcard subdomains only work for the $39/user/month plan
    - 
- Work on the chrome extension
    - Got the extension compiled and loaded into chrome
    - Used Vite to build




Wednesday 26th

- Merge https changes
    - Help some developers with the https chances
    - Roy had some issues with it and gave me a call around 7 and let me know I should inform the team about the new setup
        - Wrote out a message informing the team on how to get things set up and changed the onboarding doc
- Work on new chrome extension
    - Get tailwind up and running in the new extension



Friday 28th

- Spent half the day on increasing the header buffer size for nginx because I got stuck on a bug that was introduced to main that prevented CI
- Add in fontawesome to the extension
- Add in some UI for the unauthenticated state



Monday 3rd

- Get .env variables working in popup.tsx
Thursday


* S24-5883 | Fix hydration error for subdomain link
* S24-5883 | Update husky ruff command
* S24-5883 | Log right away if winston is used


- Fix workspace change not working bug
    - It was getSubdomain not getting the origin when it was getting the host


- Review Parkers PR



Friday


- Fixed a bug with the SCALIS Profile link going to the wrong place

- Review parkers PR

- Meeting to discus project cleanup
    - Microservice folders
    - Remove old V1 stuff
    - NestJS



Monday

- Review “add user groups management” PR
- Fix bug in use-company-users.ts (need to check subdomain)
- Looked into google location API
    - https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    - https://docs.google.com/document/d/1YASDng6lDv9sjsMOf-sGyADhFHNGQc7XdIa_6W8ik9w/edit?tab=t.0
    - Write some pseudo code for the new location input form that we need (changes based on country code)
- Work on the extension
    - Had some issues with tailwind colors in the config (fixed those)
    - Had an issue with authentication (it was caching the session token)
    - Start building the profile header component
        - Need an avatar component (going to take pieces of the main avatar component shadcn)
        - Update the Icon component to handle sizes with “md” | “lg” etc
        - 



Tuesday

- Helped Guga get dev env setup
- Updated docs to include information about local.scalis.io setup
- Started working on Google auth
    - Read through Wiltersons PR
    - Pushed a change to Wiltersons PR for redirecting the user on successful auth



Wednesday

- Finished up getting auth working


Thursday

- Merge extension boilerplate PR
    - Wrote first draft of endpoint
- Look into forcing google account selection on google auth
    - Tried a couple different options but it seems like Cognito doesn’t support the prompt="select_account" flag that we need to trigger it. A ticket at AWS was opened in 2020 but wasn’t resolved for this
    - 



Monday

- Get Google OIDC working locally
- Document Google Cloud setup
- Work on getting terragrunt working to document AWS setup




Wednesday

- Reviewed parkers pull request
- Worked with Steve to finalized terraform config
- Created the redirect loading page for social authentication and update redirect logic to always redirect to that page on authentication
    - add in middleware auth guard to that page
- Meeting with Roy


Friday, March 21st

- Worked on parsing the LinkedIn Profile HTML and displaying that information in the user profile header
- Worked on parsing the LInkedIn Profile HTML and entering that information into the database



Monday

- Worked on the HTML parser
    - Wrote a few bug fixes / improvements to the accuracy and tested it on multiple linkedin profiles
    - I’d say it’s probably 95% there. We may need to make tweaks if LinkedIn changes their UI
    - I think we should have some tests that run regularly to see if the UI has changed


Tuesday

- Work on UI for uploaded candidate profile
- Build the experience section and tweak the parser to handle company logos
- Fix bug with storybook not building


Wednesday
- Work on the UI for the uploaded candidate profile
- Build the education section and tweak the parser to handle various edge cases I’ve been running into on other profiles
- Changed legal links to be the full link vs relative link
    - cherry pick changes to prod as well



Thursday, March 27th
- Review Steve production / staging deployment process
- Prepare for chrome extension presentation
- Fixed chrome extension scroll behavior
- Fixed chrome extension bug on Parkers profile (was issue with .split())
- Fixed chrome extension jitter on loading
- Registered us for the Chrome Web Developer program
- We have the problem where we want to scrape data from multiple different sources but there will be overlap of fields and we will have to pick which fields from which platforms we want. And so we need to silo the data from different platforms
    - Solution: Use the type column in the UploadedCandidate schema to segregate the data


Friday, March 28th

- Writing logic to segregate and merge data from different platforms
- Fixed bug with Google auth
    - Fixed sign out bug by updated env variables
    - Sign in bug seems to be caused by outdated cookies / site data?
        - Looks like it’s a bug with cookies not being invalidated and nextauth storing some redirect state in there
        - Turns out it was the callbackUrl cookie was not being reset


Monday, March 31st
- Remove experimental fetchContactInfoHTML
- Refactor linkedin endpoint to social endpoint so that it’s more generic for when we handle multiple different profiles
- Update graphql to make profile details optional
- Create candidate profile as an uploaded type



Tuesday, April 1st

- Test out Crustdata and People Data Labs 
- Build new table for keeping track of enriched emails
- Build new table to keep track of links between scraped data and merged data
- Start writing algorithm to enrich and merge data



Wednesday, April 2nd

- Playing around with query builder for People Data Labs
- Finish first draft for merging data
    - Migration for tables enrich_email & candidate_merge
    - Add profileUrl to UploadeCandidate
    - Write algorithm for merging data
    - Pull data from Crustdata initially
    - 


Thursday April 3rd

- Create a profile each time and create enriched emails for uploaded candidates that are merged
- Update get-uploaded-candidate use case to fetch the merged UploadedCandidate
- Update the get-candidate-profile use case to handle the filters for candidate that do not have an application as well as those that do
- Refactor call to Crustdata into adapter
- Look into bugs with download PDF / DOCX
    - Propose a fix for each


Friday April 4th

- Scrum
- Review Steve PR
    - Suggest using an alternative to playwright to generate PDF
- Update chrome extension PR
    - Remove axiosClient
    - Instead of copying and pasting bff we should use package.json link
    - Refactor crustdata into adapter - move crustdata call outside of transaction
- Look into bug where users get redirected to login when clicking on “SCALIS Profile”
- Open PR for env variables added to GitHub actions
- Open PR for removing html to docx function from html to buffer use case because it’s potentially causing 401
- Open a PR for chrome build process to deploy to chrome web store


Monday April 7th

- Upload to web store manually
    - Get image description etc
    - Get reasons for different permissions
- Check out migration fail
- Merge pull request to create CI process for chrome extension
- Remove unused permissions from chrome extension to try and speed up review process
- Update env var for production



Tuesday April 8th

- Work on add to job section of the chrome extension
    - Created workspace dropdown selector
    - Update apollo client to use x-scalis-subdomain
    - Workspace selector updates x-scalis-subdomain in chrome storage
    - Create form for adding the user to the job
- Start looking into bug with page not showing the correct results
    - Why would we have UUID in the job-listings index for the company.id column?
    - Looks like the alias was added recently? Was there an OpenSearch migration for that?
    - I think we should disable cache on the useGetSearchResults query because it’s returning the same company for multiple results for some reason. I think it may be seeing some results as identical because they have the same company id
    - 


Wednesday April 9th

- Investigate the Google Auth issue
    - Andrei seems to only have the issue on one of his accounts
    - Get access to production database
    - Setup 
- Investigate issue with PDF download


Thursday April 10th
- Investigate issue with PDF download
    - Build docker image
    - Run into issue with running the docker image locally
    - Implement a workaround with a mock user
    - Document the mock user
- Write a “fix”
    - It’s to avoid using puppeteer and use the frontend to download the PDF


Friday April 11th

- Create interaction diagram
- Work on getting Docker running with puppeteer on nextjs
    - Ran into lots of build issues
- Start on microservice for puppeteer


Saturday April 12th

- Build microservice for puppeteer
    - Build endpoint
    - Build Docker for production env
    - Build composer up for dev env

Sunday April 13th

- Open pull request for auth fix
    - Fixes email verification bug where the email verification row is set to false because a user can sign up with another provider first and social provider expects it to be set to true automatically


Monday April 14th

- Fix login redirect issue
    - Seems some of the time the callbackUrl has a invalid value without the subdomain. So it points to a company path without a subdomain and that leads to a broken redirect which then redirects back to /login
    - Fixed this by avoiding assuming the domain if the callbackUrl has just a path
    - Also fixed it by checking for a broken url specifically in the sign in flow


Tuesday April 15th

- Andrei noticed some unauthorized error when signing in with automated-tests@scalis.ai
    - Not entirely sure at the moment
    - Commented out the callback url in nextauth and used default behaviour so we don’t overwrite the callback for the signIn() function
    - Get pull request passing tests
    - Merge PR
    - Didn’t quite fix the issue
- Get new NestJS microservice running with frontend



Wednesday April 16th

- Update PDF Generation pull request comments
- Look into auth bug again
    - Redirect issue
    - Eventually found that there was a 301 redirect causing permanent redirect in chrome
- Merge pull requests for PDF Generation


Thursday April 17th

- Work on Chrome extension
    - Reorganize folder structure
    - Clean up notification for candidate in database
    - Fix authenticated bug
    - Fix bug with workspace loader


Friday April 18th

- Got PDF generation working in dev env


Monday April 21s

- 
- Fix bug where logo does not show up on the branded login page
- Write tests for getSubdomain
    - clean up some getSubdomain functions 
- Chrome extension
    - Update login font
    - Update extracting loading state
    - Add hover to buttons because of shadcn bug
    - Update workspace padding to remove jitter on load
    - Add cursor pointer to dropdown menu for workspaces
    - Hide workspaces if companies length <= 1
    - Display more items in the uploaded candidate table
        - Update frontend and backend to render more content
    - Update PeopleDataLabs enrichment process
        - Add some tables for Location and Phone number



Tuesday April 22nd

- Scalis-io
    - Decrease animation time for notification / toast
- Chrome extension
    - Merge migrations
    - Clean up enrichEmail functions to be more dry
    - Add in sonner notifications for extension
    - Fix bug in add to job form - using wrong candidate profile id
    - Add fontawesome pro icons
    - Update add to job form styles
    - Recognized that it would be better to implement the merge functionality as an upsert vs a create
        - Work on creating an automerge-scraped-candidates.use-case.ts
        - Created extract-social-profile.helper


Wednesday April 23rd

- Chrome extension
    - Add link component
    - Rework extract logic to upsert instead of create
    - Fix migrations
    - Start writing tests for extract-social-profile



Thursday April 24th

- Chrome extension
    - Finish up writing tests
    - Clean up CI
    - Request reviews
    - Fix review requests



Friday April 25th

- Chrome extension
    - Fix suggestions
    - Run into failing test that seems unrelated? It’s with the candidate interview creation
    - Look into adding the candidate to the application
    - Need to test “Send to Sourcing Stage” & “Invite to Apply”
- Review Wiltersons PR
- Fix bug with user profile settings




Monday April 28th

- Chrome extension
    - Fix CI
    - Add in CI type check for scalis-extension
    - Add in an error for when the uploaded users email could not be found
    - Search in multiple locations for user email
- Released new version of the chrome extension



Tuesday April 29th

- Hotfixed bug on job board for sanitizing job descriptions of html
- Fixed a bug on the chrome extension parsing logic for pulling out experience from a user that has two job titles at the same company
- Fixed bug with filters
    - Released to production




Wednesday April 30th

- Started on email settings
- Reviewed PR for duplicate applications by Alex and Parker
- Review PR by Gabriel on some job board issues
- Fixed bug with email case sensitivity
- Merged hotfix to prod


Thursday

- Started working on the connect email integration
- Refactor connect-email into components
- Change get email settings to array
- Resolve merge conflicts for chrome extension
- Production release for chrome extension



Friday

- Work on email integration
    - Work on enabling multiple connected emails
    - Update exchange-connected-email-token.use-case to create emails instead of update
    - Update UI to use Grid - create new Grid component for viewing linked emails
- Review Gabriels PR for job search filteres
- Review Parkers PRs
    - One for pipeline mapping



Monday May 5th

- Update navbar for non-workspaces to have py-2
- Work on connect email pull request
    - Create a page specifically for Nylas callback because Nylas cannot handle dynamic callback URLs
    - Rename dialog
    - Pass tests and get Joao approval
- Work on creating Configure Mailbox Settings modal
    - Create new schema in DB
    - Create endpoint for updating email settings


Tuesday May 6th

- Meeting to go over the next steps for getting scopes approved for email as well as some other essential items for email connection
- 
- Add template owner column to email templates table
- Put email settings tab behind feature flag
    - Add functionality for the features flag to be controlled based on the role of the ScalisUser
- Fix CI
- 


Wednesday May 7th

- Stand up meeting
- PDL Meeting
- Review candidate label feature part 2 pull request
- Looked into Login bug
    - Seems to be redirecting to scalis.ai “randomly”
- Helped resolve type issues for David’s PR
- Deployed to prod so that I can create a video of the Email Settings for approval for google scopes
- Look into nextauth SSO
    - WorkOS?
    - 



Thursday May 8th

- Read Nylas docs on getting Email scopes set up
- Look into different SSO providers and setups
    - Leaning towards WorkOS
    - It would be nice to maintain cognito as the single source of truth for all our users but that might not be possible still investigating


Friday May 9th

- Submit scopes to Google for verification
    - Create YouTube video explaining scopes
- Create Nylas connection for Gmail
- Look into ways to integrate SSO
    - WorkOS would work but pricing is not great - would be $1200/yr +



Monday May 12th

- Study Kubernetes
    - Minikube
- Meeting w Steve on Kubernetes
- Meeting w Steve over getting emails from Google support
- Submit new logo for Google 
- Research Keycloak more
- Move all my tickets over to my scalis email in linear


Tuesday May 13th

- Look into Keycloak SSO more
    - Okay so here is my thinking. I think maybe Cognito is the way to go since we are already using it. It also wouldn't require Steve to setup anything infra wise. I could just use Terraform to get it working. Next I'm thinking that we should do what Notion does where there is a setup process for the IdP. So a user would have to login as an Admin and then setup SSO for their organization in the workspace. Once that's setup when a user then tries to login to their organization with SSO we can check their domain against what is setup on our backend (so I'm thinking a custom endpoint on our end to check this). So with that endpoint we would know which IdP we need to sign them in with. So from the users perspective all they enter is their work email and we would know which IdP to sign them in with. Then we I guess use the signIn() function with the right IdP? I think that approach makes the most sense.
    - 
- Look into Cognito SSO more
    - Start setting up Cognito in Terraform
    - Start setting up Okta and connecting to Cognito



Wednesday May 14th

- Write frontend for connecting an IDP
    - Create Security Settings tab in company settings
    - Create a modal for updating the OrganizationSSO settings table
    - Put frontend behind feature flag
- Write some backend code for connecting AWS Cognito to IDP dynamically




Thursday May 15th

- Write endpoint to get OrganiztionSSO
- Start working on domain verification
    - Create Domain table
    - Create UI for verifying domain
- Fix prod bugs




Friday May 16th

- Present SSO auth
- Fix redirect after applying to job
    - Fixed redirect
    - Fixed tests to verify onboarding for users
- Fixed backToJobSearchUrl window.location undefined error


Saturday 17th

- Setup dev instance for another video for Email auth
    - Needed to use production keys for video
    - Needed to build frontend for selecting from email




Monday May 19th

- Build frontend for selecting an email
- Create video and upload the new video to GCP
- Get Azure setup
- Set up Nylas connections for Microsoft for all environments
- Create enterprise terms page
    - Update PDF viewer
        - Add hover effects



Tuesday May 20th

- Work on endpoint for reject candidate flow
- Update connected-email-dialog-content to use cursor pointer
- Work on getting Azure setup with Nylas
    - Updated the get-connected-email-auth-url use case
        - Removed loginHint to allow users to select other emails to login with
    - Updated all environments to be connected to the Azure instance
    - Tested the connect email functionality with the Azure account
    - Ran into error with “Error: missing scope required to send email”
- 



Wednesday May 21st

- Read Mihai’s PR for 
- Investigate issue with dev job search not working
    - Seems like maybe the GitHub dev opensearch URL is correct
    - I see no errors in Datadog
    - I see no errors in the console in dev
- Write bug fix for sorting on screening questions
- Start on bug fix for deleting questions (only if they have not been answered yet)



Thursday May 22nd

- Add in update to use fragments
- Update requisition endpoint to use pascal case (had to update a bunch of tests) (ended up taking longer than I thought but it was bothering me for a while)
- Merge pull request for deleting question
- Update Azure & Nylas to use the Mail.ReadWrite permission
- Test application to make sure we are able to send email through Microsoft
    - It works!
- Start working on updating reject candidate logic
    - Updated the frontend to have the dropdown
    - Started working on passing that frontend email that’s selected through the reject candidate API -> through Bull MQ -> all the way to where the email is actually sent
- 



Friday May 23rd

- Update launch.json to debug with brave 
- Tweak e2e tests
- Update dialog to use cursor pointer
- Update reject candidate flow to send email through Nylas is options are passed
- Open pull request in reject candidate flow microservice
    - Test - works locally
- 




Monday May 26th

- Investigate tokens implementation
- Frontend meeting for tech debt
- Bug fix for padding on job cards in production
- Update frontend in the bulk rejection modal to match the reject and other modals
- Update some of the backend mostly the email is passed through
- 



Tuesday May 27th

- Fixed a bug with the bulk reject drawers where they would show the prev bulk reject modal when you were shown the confirmation dialog
- Finish bulk reject
- Fix CI
- Ask about possible solutions to auto reject
- Fixed bug with drawer scrolling
- Start working on offer letter
    - Add frontend UI




Wednesday May 28th

- Fix a bug with the alert dialog that indicates the offer letter was sent
    - It was showing the overlay behind the drawer that was behind it
    - I added some functionality to increase the z-index
- Fix a bug with offer letter where the alert dialog that indicates success would show up delayed so you would just see the old create offer drawer behind it just sitting there which isn’t a great user experience
    - I created a new alert to indicate loading and hit the drawer
    - Then when it’s successful it show the success alert dialog
- Finish backend for offer letter email sending and push to GitHub
- Continue on to auto reject
- Fix a bug with the website_or_social_media getting bad inputs
    - Many facets
        - One is that the input validation on the user side isn’t great (fixed that)
        - Another is we need a migration to fix current inputs (wrote that)
        - And the final is we need to stop it at the other source which is the resume parser



Thursday May 29th

- Review Parkers PR for the “Profile Fields” and “Application Fields”
- Finish the auto reject flow
- Finished frontend and backend for send-scheduler-link-invite flow
- Finished frontend and backend for invite candidate to apply flow
- Get reviews from Roman & Wilterson
    - Fix some of Romans comments
        - Great comments by the way



Friday May 30th


- Fix “Showing 0 jobs” while loading
- Fix filters on mobile for job search page?
    - The issue was that the footer was being cut off on mobile for iPhone because the search input hid it
- Fix zoom on iPhone
- Fix call to action size on mobile
- Fix size of hamburger on mobile
- Merge PR for custom email sender added to endpoints and frontend
- 



Monday Jun 2nd

- Merged PR for some CSS fixes for the jobs search page
- Worked on bug with scrollbar on iPhone
    - Wasn’t all that simple
    - Required changing the layout in multiple locations
    - Had to use min-h-[calc(—vh,1vh)*100)] because the iPhone viewport height is calculated without the height of the search bar in some areas
- Overall I think it’s a big improvement on scrolling on iOS but let me know if you run into issues in any other cases
- Started working on an update for the feature flag to only allow SCALIS_ADMINS to view feature flags because anyone can be a SUPER_ADMIN
    - So creating anew role and updating code to allow that new role all permissions that SUPER_ADMIN’s have


Tuesday June 3rd

- Updated feature flags
    - Added new Role for SCALIS_ADMIN
        - Required updating many permissions locations
        - Added migration
    - Update the way feature flags work. Now we can individually control feature flags per environment. They default to off unless in the array for the env
    - Update env variables for all environment for NODE_PUBLIC_ENV
    - Added docs for roles and permissions including the update I made
    - Added a test
- Fixed layout zoom bug on Mac
- Add env variables for the Nylas Email integration to all environments
- Production release



Wednesday Jun 4th

- Work on adding tokens to the Editors on the frontend
- Fixed a bug with the backend not parsing out the highlighted token wrapper
    - 


Thursday Jun 5th

- Started working on creating the email tab in the candidate panel
    - Created a send email drawer
    - Started on a EmailController component that will house send email components
        - Email template
        - Send to
        - Send from
        - CC & BCC
        - And the message which will be token enabled


Friday June 6th

- Created send email drawer
- Updated our from email from general@scalis.ai to noreply@scalis.ai
- Dynamically imported drawers for application actions context to reduce initial load time
- Update send-email-to-candidate-profile-mutation to be a generic send email mutation
    - Handles all the logic for whether it comes from noreply@scalis.ai or the connected email
    - Just provide the from address
- Enabled token parsing for subject field for the send email drawer
- 



Monday June 9th

- Reviewed Parkers PR for the endpoint for tokens
- Update isTestingAccount to include development environment
- Add in the new EmailController component to advance candidate


Tuesday June 10th

- Implement email-controller in the reject and bulk reject components
- Update the backend for the reject and bulk reject to use the new send-email-to-candidate-profile.use-case.ts
- Added in the ability for the email-controller to have a template type that’s optional


Wednesday June 11th

- Update email controller to be camelCase and then update the forms it uses to be camel case
- Update step form to use link component
- Update use cases to use the send-email-to-candidate-profile
- Update advance reject and bulk reject forms to use the new email-controller
- Update the match candidate drawer to use the new email controller
- Remove a component that we don’t need & one other component
- Fixed types and e2e tests


Thursday June 12th

- Integrate new endpoint for determining which tokens to display
    - Update the endpoint to allow offer letter token enum to be used
    - Create migration for offer letter enum
    - Add enum values to all locations where the Editor with tokens or where the EmailController is used
- Fix tests and merge issues with PR
- CRM meeting
    - Parker didn’t show up so we just landed on getting Gabriel to create some frontend displaying the need for the read scopes
- Helping Wilterson a little bit with the PeopleDataLabs API
- Fixing tests took a long time
    - Worked on a test for a while from an import for @scalis/components in the new packages folder. Turns out those are server components? Only if they get imported in index. So I just kep tht ecomponnt in there and 


Friday June 13th

- Work on e2e test for reject candidate flow
    - Fix tests merge PR
- Andrei found bugs 
    - We should whitelist certain tokens that we know work
- Started trying to create a video but setting up Sequences has been a pain
    - It doesn’t work and there doesn’t seem to be logic for creating an email or activity log in a sequence so I can’t show google anything
- 



Saturday June 15th

- Work on whitelisting tokens for
    - Added a check for if a token is available before displaying it
        - So we try to replace it and if it can be replaced then we dispaly it
- Remove email settings from feature flag
- Add caching to getting the default token for 10 minutes
- Fix a bug with the span tag not being removed
- Update send offer form letter with email controller



Monday June 16th

- Worked on getting the sequences up and running
    - Got scalis-crm running
- Created video demo for Google to get gmail.readonly scope
- Worked on going through the tokens that work and don’t work and creating a whitelist



Tuesday Jun 17th

- Whitelist more tokens
- Fix some broken strategies 
    - Find my-first-name, my-full-name, annual-salary, benefits, job-title, and hourly-rate 
- Fix use of logger when it should be winston logger
- Add html cleaning to publicDescription before we send off email
- Add error handling to create pipeline template (we were letting through empty names for stages)
    - Caused some issues with the pipeline not working at all
- Add error handling to sequence actions for resuming sequence
    - Found an error that occurs when the connected email doesn’t exist
- 


Wednesday June 18th

- Work on updating email templates
    - Create mapping between template type and system feature enum which then maps to the tokens that are available
        - if there is overlap the arrays get merged
    - Update EmailController and interpolationOptions to handle an array of system feature enums
    - Create more message types for email templates
    - Added subject, cc, bcc and from address to the template
    - 



Thursday June 19th

- Update email templates to have cc, bcc, sender address, etc
- Update email-controller to update all those fields when template changes
- Add send email drawer to candidate view
- Add cc and bcc to send email drawer
- Fix bug with send email drawer



Friday June 20th

- Help Wilterson with frontend resume parser issues
- Fix bug with Chrome extension
    - Race condition between fetching auth and getting the workspace
- Start on email tab inside the candidate drawer
- 


Monday June 23rd

- Solved subject not prefilled bug from the template in sequence step
- Solved email from should not be specified for sequence type on email template
- Solved inconsistency between fields displayed on email template and advanced candidate
- Start working on displaying emails
    - Inquire about email list query
        - We don’t have a good query
    - Look into schema
        - We don’t have a good schema
    - Start working on better schema
    - Lots wrong with current implementation
        - Email attachments are stored as a Base64 encoding in the database which could lead to a lot of bloat and slow queries down.
        - We have a table for both send emails (connected_email and received emails candidate_incoming_email)
            - That should be consolidated
        - We don’t have a table for storing Postmark emails (sort of use activity table but that’s not the best option going forward)
- 


Tuesday June 24th

- Get schema suggestions
- Work on bug fix for scheduler link templates
- Help with feature flag
    - Merge to production
- Work on redirect when workspace doesn’t line up with user company because it was annoying to sometimes have no subdomain and get an error and sometimes have the wrong subdomain but not have access and you would still see the dashboard
    - The fix required a small change to the extension. Update extension to set the x-scalis-subdomain if no subdomain exists
    - Update the extension to have better workspace dropdown
        - add colors to indicate different subdomains
- Update e2e tests script to be easier to run and add comment
- Improve email template usability
    - Disable email template if no templates match the current feature and let the user know they can create one of the given feature with a tooltip
    - Disable from field if only one from exists (noreply)
    - Change format to have bcc cc side by side and to and from side by side
- 


Wednesday

- Fix tests for PR that updates the company pages to redirect when the workspaces isn’t found
    - One test wasn’t passing because I needed to update a redirect on stripe callback
    - The other test wasn’t passing because I needed to update the test itself to redirect properly (update RequisitionDetailsPage.navigate)
    - merge PR
- Meeting to go over next steps w Joao and Gabriel
- Create Nylas grant Ids for Google and Microsoft calendar connection so that the e2e tests will pass after I made an update to the nylas client ids
- Remove nylas loginHint
- PR for callbacks
    - Add callback page for the calendar linking because now we are guarding any page that has an invalid subdomain
    - Fix callback page for email because now we are guarding invalid subdomains
    - Fix tests and merge PR
- 



Thursday


- Merge a PR to add in the SELF_SCHEDULER_TOKEN for the send email drawer
    - https://github.com/scalis-io/scalis-io/pull/4385
- Disable email sending if the candidate doesn’t have an email associated with it
    - https://github.com/scalis-io/scalis-io/pull/4389/files
- Fix a bug with connecting email & calendar
    - URL needed to be decoded
- Fixed a bug with connecting the calendar
    - Bug only occurred on staging and prod
    - Turns out it was an issue with getSubdomainFromURL - it was not parsing out the path
- 


Friday

- Small tweak to getSubdomainFromURL
    - Still functions the same and passes the same test cases but the function names are a little better and there is no duplicate replaces
- Look into ml-apis
- Add self scheduler link to other drawers throughout project
    - Advance candidate working
    - Reject candidate working
    - Send candidate offer working
    - Generate offer intentionally disabled
- Fix bugs with match candidate drawer where the drawer pulls candidate emails (use new Joao get email from candidate func)
- 



Monday June 30th

- Merge scheduler link token and bug fix
- Look into bug with calendar connection
    - There is an issue where you can click disconnect twice which triggers cannot find setting etc
    - Improve loading state - add skeleton loader
    - Fix bug with connection where we use the current user email
        - We need to use the email in the connection settings
    - Fix refetch after connecting or disconnecting calendar
    - Fix button hover etc
    - Fix typography for email component
    - Speed up disconnect calendar endpoint (we can fire and forget the destroyGrant command nylas has
- 



Tuesday Jul 1st

- Look into Prisma V6 Upgrade
    - Look into getting data on API request latency (CPU, Memory etc)
    - Look into OpenTelemetry & Grafana & Datadog (maybe Datadog APM?)
    - Watch video Steve sent on OpenTelemetry & Grafana
- Work on bug for bulk send email
    - Add bulk send email
    - 

Wednesday Jul 2nd

- Work on bulk email send
    - Enable dropdown select to have multiple candidate for to email
    - Pass multiple candidate ids to the send email drawer
    - Cleaned up activity logs (some messages included a bunch of html so that needed to be parsed out)
    - 


Thursday Jul 3rd

- Work on Prisma V6 upgrade
    - Run e2e tests. Get logs and put average in spreadsheet
    - Upgrade Prisma to V6
    - Upgrade Pothos
    - Run e2e tests again and place logs in spreadsheet
- Work on plan for OpenTelemetry implementation


Friday July 4th

- Work on Prisma V6 upgrade
    - Work on trying to get e2e tests to run in CI with logs
    - Fix types and tests
    - Document performance improvement
- Ended up with roughly a 20% performance improvement based on data from e2e tests (average endpoint latency of 287ms down to 223ms)
    - https://docs.google.com/spreadsheets/d/1NI-q1xWULF5v3N0d9wtIxHkh8n6HcOQd7a7nHdvTlpo/edit?gid=1233484234#gid=1233484234
    - https://docs.google.com/spreadsheets/d/1ZHshLhNrJMHPR5iUs9OFHWnieXOx_omjBEEhwUFtvYk/edit?gid=1182735253#gid=1182735253
- Fix extra send email button in email-content file
- 




Monday July 14th

- Merge main into prisma v6 upgrade
    - Merge prisma v6 to main
- Start work on scalis profile not showing up from uploaded / scraped candidates
    - Most of the work was finished
    - Ended up fixing a bug in the Chrome extension preventing scraped data from loading in
    - Close this ticket https://linear.app/scalis/issue/S24-6821/generated-scalis-profile-resume-from-linkedin-not-parsing-into-company
- Added testing to chrome extension
    - https://github.com/scalis-io/scalis-io/pull/4507
    - We needed some sort of testing for the workspace provider
- Fix bug with download documents button on profile not working
- Fix bug with view documents on profile button not working
- Fix a bug with calendar events not having tokens replaced and html parsed out
- 


Tuesday July 15th

- Parse out tokens and html for manual interview schedule too (merge pr)
- Fix upload candidate drawer
    - Bug with source name being auto created as “Upload Candidate”. Should prevent empty source name and not auto create as Upload Candidate
    - Add link to manage sources so people can create their own source name if they would like
- Start working on fixing tokens in the Sequences
    - While getting sequences running did some investigation into how it functions
        - Suggested some changes to Lizzy and Parker
- 



Wednesday July 16th

- Adding tokens to sequence emails
- Add HSP logo to home page
- Fix more tokens
    - Fix interviewer_name token
- Finish all sequence tokens because most can’t be used so I marked them as red in the spreadsheet
- Work on bug with candidate name not found on the send scheduler link feature
    - Still investigating
- Fix bug with INTERVIEW_SUMMARY inserting all other tokens and formatting incorrectly



Thursday July 17th

- Go through all tokens and test to see which are working an which aren’t
- Fix company-name, office-address, office-name, and start-date strategies
- Fix bug with scheduler link calendar invites not showing the correct token replacements
- Fix bug with calendar invites showing &nbsp in messages
- 


Friday July 18th

- Create helpdesk overview page
- Enable more tokens
    - Enable more tokens for the sequences
        - Fix a couple of broken strategies
    - Remove unused enum token name





Monday July 21st

- Work on interview tokens
    - Enabled INTERVIEW_DATE, INTERVIEW_END_TIME, INTERVIEWER_NAME, INTERVIEW_INVITE_LOCATION, INTERVIEW_NAME, INTERVIEW_START_TIME for manually schedule interview
    - Enabled INTERVIEWER_NAME and INTERVIEW_NAME for send scheduler link



Tuesday July 22nd

- Create the /interview-kit page
    - Page checks if user is logged in (if not redirects them to log in and then back to this page)
    - If they are logged in it checks if they are a company user and either redirects them to the candidate page interview tab with the specific stage open OR directs them to the candidates applications page
    - Updated the interview kit link strategy so that we direct to the new page with stageId (passed stageId all the way from manually create interview to here) (and scheduler link)
    - Add code that automatically opens the scorecard if the user navigates to the interview and candidate section from the interview kit and if the scorecard exists
- 

Wednesday July 23rd

- Merge interview-kit page
    - Add in auto open scorecard
    - Fix e2e tests
        - Fix bug with viewLoading (it would previously break if there were no saved views)
        - Fix time zone bug for interview (we should check for MST instead of GMT-7) but for now I removed the time zone check and just checked the time without the time zone
        - We don’t need to call .open_accordion() because it automatically opens
- Fix bug with CC and BCC on email template being required


Thursday July 24th

- Bug fix - The number of active jobs on the pipeline templates was hardcoded
    - So I updated the list-template-pipelines.use-case to pull in the JobListings and calculate the number of active job listings and return that as a custom property in graphql
- Bug fix - the number of questions is incorrect on the scorecard template page
    - Update the calculation to exclude the sections that are not type Question
- Bug fix  - scorecard template drawer was not on top of the candidate drawer
    - Update the z-index
- Bug fix - when creating a scorecard it complained about a scorecard name already existing when it shouldn’t
    - Turns out it was because there was an invisible scorecard
    - Fix is to not check for invisible scorecards when checking if the name already exists - only check for visible


Friday July 25th

- Fix “My Job Title” token which could be undefined
    - Added code that checks if it exists in the UI before giving it to the user as a selectable option
    - Fix test
- Fix candidate profile drawer being transparent
- Fix a strategy that was connecting the wrong tables and throwing an error
- Fix has-role - it was using memoize with an array which was rendering it useless and forcing it to consume more memory
- Remove old prismaClient and all dependencies

- Improve timezone utility function - should use toLowerCase() for case insensitivity



Monday July 28th

- Fix link on Editor component
    - Create a link dropdown which allows the user to input a link for a given piece of text
- Fix an issue with Editor highlighting - could not highlight multiple lines
- Now working on Vanta
    - 



Tuesday July 29th

- Fix bug with token replacement in the notifications
- Fixed a bug with a pub sub class / singleton not being initialized at server startup
- Look into Vanta
    - Assign some tickets to myself
- Look into the “Configuration management system established” control in Vanta





Wednesday July 30th


- Vanta Controls
    - Configuration management system established
    - Change management procedures enforced
    - Production deployment access restricted


- Documents
    - ✅ CI/CD system in use | Upload proof of our production CI / CD process to Vanta
- Tests
    - 🟡 Company has an approved Operations Security Policy | Started on policy document but needs more work as we go through security measures
    - ✅ Application changes reviewed | Updated all repositories to require 1 reviewer for main and production branches - Steve does need to take a look at gitops-workloads still
    - 🟡 Ensure branch protection rules are enforce for admin | Asked chat if we can just accept the risk - created a risk and will link it and “Deactivate”


- Fix bug with copying over a sequence
    - Sequence email, settings, and enrollments were not copied over
    - Built function to properly duplicate sequences inside of the create-sequence.use-case





Thursday July 31st

- Look into Candidate Phone number not showing up in tokens by Parkers request
    - Seems to be working as expected


- Work on more Vanta tasks


- Tests
    - 🟡 Ensure branch protection rules are enforce for admin | Deactivated test and linked risk scenario
    - 🟡 Company has an approved Business Continuity and Disaster Recovery Plan | Started on doc
    - 🟡 Company has an approved Operations Security Policy | Edited doc
    - 🟡 Company has an approved Data Management Policy | Started doc
    - 🟡 Company has an approved Asset Management Policy | Started doc
    - 🟡 Tabletop disaster recovery exercise | Created 6 exercises


- Work on bug on candidate phone number not displaying correctly in candidate profile




Friday August 1st

- Created linear tickets for all markup / document tasks
- Wrote information and security policy
- Wrote security job descriptions
- Created scalis org chart
- Look into bulk send dropping some of the selected candidates?



Monday August 4th

- Work on anonymous whistleblower form
    - Create google form - might not be anon enough - i anonned it enough for now
    - Look into other options - they cost money…
    - 
- Create code-of-conduct
- Create contractor-agreement-template.md and docx
- Update cryptography policy & other docs for consistency
- Hand policies over to JP


Tuesday August 5th

- Document access & permissions in company
    - Documented all external services
- Create external integrations doc
- Update business disaster doc with external services risk
- Passed off document to JP


Wednesday August 6th

- Fix bug with companies list overflowing viewport
- Fix bug with Day # on sequences resetting
- Work on vendors
    - Start on doc for security assessment of Vanta for vendors
- Request access to Vanta trust center to use their SOC-2 report for our security assessment of them
- Write report for Google Cloud AWS and Google Workspace



Thursday August 7th

- Propose architecture for scheduling microservice
- Meeting over scheduler architecture
- Work on SOC-2 documents
    - Do github, linear, slack docs
- Worked on docs for scheduler
- Start on scalis-crm bug



Friday August 8th

- Update vendor assessment docs to new format from Conor
- SOC-2 meeting
- Fix bug with replies on the sequences not showing in the same thread



Saturday August 9th

- Fix bug with interview kit link
    - stageId not passed to token context
    - interview stages fail to load occasionally because of job id not updating



Monday August 11th
 
- Review Parkers pull request for approval workflows
- Create general scheduler docs and opened PR
    - Set up meeting for Tuesday
- Fix email formatting for advance candidate
    - Create company logo above company name
    - Clean up wording


Tuesday August 12th

- Fix email css / formatting
    - add company logo
    - padding
    - header size
- Fix bug with uploaded candidates invited to apply not receiving an email invite
- Look into bug with emails being sent to rejected candidates regardless of “notifyCandidate”
    - Andrei found it was because we hadn’t deployed code yet in the scalis-rejection-flow
- Meeting over new scheduler architecture
- Start working on scheduler
    - Create scheduler repo from microservice template
    - Build scaffolding
        - Endpoint to trigger
        - Function to call back to webhook
    - 



Wednesday August 13th

- Work on updating the upsert req and upsert listing to update the OpenSearch index
    - Updated areas using upsert req to use upsert listing
        - This improved performance of the query and reduced the number of database queries we made considerably
    - Tweak upsert req to upsert listing and opensearch index
    - Update types and tests



Thursday August 14th

- Clean up requisition external id
    - Fix bug with create requisition frontend infinite loop
    - Force external req id to be unique
        - Fix tests
    - Remove unnecessary requisition ext id table
- Start testing the general scheduler



Friday August 15th

- General scheduler
    - Tested instant sending and delayed sending with CRM
    - Add task number for convenience
    - Update env vars for https to work locally without valid certs
    - Add custom backoff function
    - Update API guard to use only a single key
    - Update the README
- Looked through vanta risks and added a couple of the defaults for John




Monday August 18th

- Create cryptographic google sheet with uses and algorithms for JP
- Update BullMQ to have cron tasks running in the background
    - These tasks trigger a webhook URL in this case the same one as the delayed tasks webhook
    - Update readme
- SOC-2 Meeting
    - Added some risks in Vanta




Tuesday August 19th

- Work on SOC-2
    - Update docs to reflect JP’s changes
- Look into MCP options for a general scalis chat bot
    - stream websocket vs graphql subscription
- Fix a bug with logo not appearing while logged out
    - Was because we tried to get a signed url - it worked when logged in but it didn’t work when logged out - fix was to just not get it signed because it’s a public url anyway
- Work on email subscriptions / unsubscriptions




Wednesday August 20th

- Work on email subscriptions
    - Frontend
        - two pages one for unsubscribing all / types
        - one page for one click unsubscribe
    - Backend endpoint to fetch job types and if they are subscribed
    - 


Thursday August 21st

- Work on email subscriptions
    - Create some new subscription types
    - Create mapping between subscription and titles
    - Create a way to check if a given subscription type if for a company or for scalis so we don’t show company type subscriptions to the scalis page and vice versa
    - Push code and fix types and tests
- Look into the bug with the candidate profile email not showing up


Friday August 22nd

- Fix bug with scalis report builder - prisma schema upgrade
- Fix bug with primary email not showing up on candidate drawer
- Meet with brandon over email subscription - just need to add general marketing email type
- Work on interview process doc
    - 


Monday August 25th

- Work on generic scheduler webhook
    - Build system for rescheduling tasks within a window
    - Idea is there is 1 daily task an those get rescheduled to a window or specific time based on internal logic to the given strategy
    - Add in email frequency enum
    - Add scheduler adapter
    - Create getJobRecommentations function that hits appcast


Tuesday August 26th

- Work on unsubscribe page
    - Meeting w Brandon & Parker
    - Fix some bugs with frequency enum
    - Fix dropdown bug - would not hide dropdown when selecting a frequency
    - Add error handlers when selecting new states
    - Fix bugs with companyId not defined
    - Send job recommendations email
        - Add in logic that sends an email only after 45 days of an application to a company OR if they have applied to more than one company on the platform
- Fix a bug with the ActionBar on Safari
    - The fixed position was not working because a parent element had the translate attribute and that’s a bug on Safari. Fixed it by using React createPortal to attach it to body
- Created doc for screening resumes



Wednesday August 27th

- Work on unsubscribe page
    - Test it thoroughly
    - Fix bugs
        - Lat long bug with spacing
        - Both recommendationLink and unsubscribeLink vs single link param
    - Fix email template
        - Fix border around logos
        - Fix magic wand SVG - needed to be png - uploaded to aws
    - Update schema - companyId can be optional for EmailThread because we need to allow for SCALIS threads to be tracked
    - Created a match score function based on the location and title




Thursday August 28th

- Meeting over roles and permissions logic
- Fix types and tests with general scheduler and get merged to main
- Clean up email vertical align with link and match score
- Fix bug with updating the email 
    - companyId could not be null
- 




Friday August 29th

- Fix bug with company dropdown in edit experience
    - Check for companyGlobalId being non uuid
    - Check for companyGlobalId existing when we create or search as a raw string - can just delete it
- Looked into general scheduler errors in Datadog
    - Fix an env variables mismatch between the general scheduler and the email send & redeploy with new vars
- Started working on new permissions work



Monday September 1st

- Working on permissions changes
    - Added a query to the provider-hydrator that pulls the permissions
    - Pass that through to the user-provider
    - Create higher order component that pulls from the context
    - Double check that the logic makes sense
        - I’m thinking that we could make permissions a bit more intuitive by taking some hints from GitHub. I like the terms they use, “Admin”, “Maintain”, “Write”, “Read”. I also like that they have a simple one or two sentence explanation of the role. Another thought I had to keep things intuitive is to default the job level permission to a state that does nothing. I think this is important because a user may not be aware of job level permissions when they first start using the application, but it is something that when they need they may search for. And once they find it the behavior will make sense to them. I think if the job level permissions are enabled by default then we’ll run into situations where a user might be an “Admin” but cannot edit the job because their job level permissions do not allow it. Another complexity to think about is that this Google Sheet does not fully describe all of the possible states we may have. This is because a user may be an “Admin” and also a “Recruiter”. So in order to describe all possible states we would need 3 dimensional grid. We also have stage collaborator which technically would add a fourth dimension. So earlier when I was describing the complexity here this is part of what I was alluding to. I’m not sure how to create a 3d grid to represent this. One thought I had was that we can simplify the mental model by ignoring less granular permission if a more granular permission is enabled. For example. Org level permissions always apply unless an Admin has enabled job level permissions for a given user. If they have then the job level permissions apply an the org level permission are ignored. Same goes for stage collaborator. If a user is added as a stage collaborator then both org and job level permissions are ignored for that stage. Meaning they would be able to take any action and view anything for that stage. I also think we could simplify the job level roles as “Admin”, “Read”, “Write”. Three roles keeps it a little more intuitive. An admin could add other people to the job level permissions and change them. A read user can only read. A write user can make any changes to the job (maybe baring deleting the job).
- 



Tuesday September 2nd

- Update env vars for scheduler webhook
- Update scheduler retry logic to rely more on the failure queue
- Add endpoint to scheduler to retry failed events
- Screened some frontend candidates for Grant Strom - he will handle the screening call
- Update hasPermissions logic and hide advance and reject
- Disabled “Upload Candidate” behind hasPermissions
- 


Wednesday September 3rd

- Fix “Error needs to be moved to winston logger” for stripe webhook
- Fix general scheduler
    - Retry logic wouldn’t trigger on “Unauthorized” error so I added a check for a !res.ok in fetch
    - Update env vars in .github workflows
    - Fix a bug with the scheduler running for each node in Kubernetes (now high availability mode works)
- Add better error logging to nylas webhook
- Read Alexanders PR & run it
    - only one suggestion was to remove library
- 


Thursday September 4th

- Add enterprise-terms page
- Create robots.txt
- Disable robots.txt when not prod
- Update footer on landing pages
- Update sitemap
- Update env var in scheduler for appcast api key
- Read Joao’s PR for debezium-cdc-pipeline
- Update priorites on sitemap - PR failed e2e test - just merged in main because it was likely the Nylas issue Andrei was talking about



Friday September 5th

- Redeploy scheduler with new time
- Reviewed about 40 resumes and moved some of them to Screening Call for Grant to review
- Organized Linear tickets
- Fixed a typo on the home page
- Opened a pull request for improvements to the match score on the job recommendations emails
    - fixed tests etc got it merged



Monday September 8th

- Worked on getting frontend permissions pull request ready to merge
    - Removed useGetCandidateActionsRowItems from CandidateActionBar
    - Fixed tests
- Work on Vanta package upgrade



Tuesday Sept 9th

- Update org chart
- Read through backend applicants in the pipeline and push more to the screening call stage
- Found a couple frontend bugs and assinged to alexander and alexandr
    - One was that the candidate select in the reject flow drops the candidate
- Interview Mathias
- Update the pull request for permissions and merge. fixed tests.



Wednesday Sep 10th

- Update more packages in multiple repositories
- Two screening interviews
    - Natalya & Jason
    - One is a Frontend and the other is a Product Manager / Product Designer / Frontend
- Worked on PR review for survey forms
    - 
- Upgraded storybook in scalis-io





Thursday Sep 11th

- Update Parkers survey PR with an upsert-server-form-answers.use-case
- Interview with Kristofer Kuusik
- Fix bug with interview kit link
    - Deployed to staging and production
- Work on issues with “Candidate(s) being rejected” dropdown
    - Create new search endpoint
    - Create new CandidateSelect component
- Consider using memo for some components
- Working on some optimizations for core components
    - considering using react memo and useMemo in a couple locations




Friday Sep 12th


- Work on new candidates search
    - Create new query
    - create new component
    - Update reject cand flow to reject cand without a confirmation dialog
    - 
- Add links to nav for blog etc to header
- Update job rec strategy so that we can trigger it on a one off
- Create a runtime config file and table in the database so that we can enable or disable things or change values without having to redeploy 





Monday Sep 15th

- Interview Jean Duart - felt like he lacked depth of knowledge
- Interview Eduardo Lara - no show
- Test send recommendation email deployment in dev
- Reviewed Parkers PR
- Fix talent pool test
    - expect id
- Fix connect email test
    - wait for button to be visible first before clicking
- Fix other e2e tests that were failing because of memo



Tuesday Sep 16th

- Create interview docs
    - A document for each type of interview listed here:

* • auth flows (oauth, jwt, sessions)
* • db schema design & migrations
* • caching (redis, cdn)
* • background jobs & queues
* • file uploads & storage
* • realtime (websockets, pub/sub)
* • forms & validation
* • state management
* • testing (unit + e2e)
* • deploys & monitoring



- Update case studies and blog image to cover

- Interview with Roberto Rosa (frontend candidate) - will likely reject - seemed pretty knowledgable but asking for $120k USD in brazil


- Created a frontend interview take home assessment



Wed Sep 17th

- Update scalis take home
    - Add in jobs page with new prisma models
    - Add in new page for backend test for creating endpoint for jobs search
- Fix formatting issue with scorecard template numerical answers - inputs were squished
- Speed up e2e tests.
    - Try parallel jobs to build each microservice. Mostly got it to work but it didn’t speed things up much because of the setup cost - it may speed things up if we keep adding new microservices
    - Try parallel actions with a github actions plugin
        - no luck so far
- Update candidate search / candidate select component to use a form control instead of a form object




Thursday Sep 18th


- Try to implement parallel actions for e2e
    - not gonna work for now
- Fixed candidates search PR and merged
- Fixed bug with tabs on the pipeline page not having a default value
- Fixed a bug with the chat - there should be no chat button for uploaded candidates (at least temporarily)
- Fixed a couple bugs with scorecards - will continue working on it today 
    - A second bug will be bundled in. The scorecard drawer for filling out the scorecard was not pulling deleted scorecards which is an issue because when a scorecard is edited we never alter the old one we just create a new one so that the user doesn't try to fill out a scorecard with a different shape.
    - Other bug is the checkbox
    - Bug with 




Friday Sep 19th

- Work on scorecard template bugs
    - merge it
- Improve e2e test flakeyness
    - e2e tests now wait for page to mount and in dev mode they wait for the second mount because of react strict mode (yes strict mode is disabled but that doesn’t disable it for client side)
- Upgraded nextjs
    - reduced build time down to 2 minutes from 6 minutes
    - removed server code from client - prisma was being bundled
        - this reduced the client bundle size and will improve page load times
        - this speeds up e2e tests
- Refactor scorecard templates and drawer management - create global confirm dialog provider
- Sped up e2e tests from ~6.5 minutes to ~5.5minutes
    - this is likely from smaller client build from removing prisma from client bundle
    - also could be because i enabled 1 more core in pytest and i was able to do this because it’s no longer as flakey
- e2e tests down from 16 minutes to 12.5 minutes





Sunday Sep 21st

- Rework candidate labels to remove race condition and improve reliability - fixes flakey e2e tests and removes 




Monday Sep 22nd

- Look into E2E Tests running locally on Andreis machine
- Look into failing deployment in ArgoCD


Tuesday Sep 23rd

- Fix failing deployment in ArgoCD
    - Fixed dockerfile path

- Upgraded merge main to use turbopack so now instead of an update taking 30 minutes it takes about 15

- Fix e2e tests issues
    - Remove E2ETestReadyProvider because now we don’t double render
        - The double render issue was caused by a KnockProvider wrapping the entire application and fetching data after component mounts and then dynamically wrapping the UI in a provider if loaded data


- Fix candidate details drawer buttons hitbox too large (clicking below the actiosn buttons doesn’t close the drawer)



Wednesday Sep 24th


- Work on updating job recommendation email after a couple of suggestions from brandon
    - Change link to unsubscribe to be smaller
    - Add a button to manage job search preferences
    - Add company details “copyright 2025 scalis” “company address” “

- Fix tabs hitbox on candidate profile drawer

- Remove pages directory
    - migrated over all pages directory items to app directory
    - need to work on getting some e2e tests to pass

- Fix issue with the cover photo on integrations page



Thursday Sep 25th

- Finished removing the pages directory - merged the PR
    - Required fixing some tests locally
    - had to get the extension e2e test to work on my machine
        - Andrei helped me out with this
        - updated readme for that

- Merged recommendation email PR

- Worked on token bugs




Friday Sep 25th

- Fixed offer letter token bugs - added commas - added dollar sign for currency
- Added custom from email to postmark email function allowing us to send from ‘jobs-noreply@scalis.ai’
- Update postmark with new jobs-noreply@scalis.ai
- Steve created new jobs-noreply@scalis.ai email and added credentials to 1Password
- 



Monday Sep 29th


- Create add label functionality inside of dropdown
    - Optimize get candidate label use case - fetch label instead of N+1 candidate profile x candidate label query - also fetch in parallel
    - Add loading state to tags when initially fetching
    - 


Tuesday Sep 30th

- Fix issues with website
    - Footer, image cover, link going to blog when it should go to integrations
- Fix candidate label e2e test
    - Add in loading state instead of optimistically adding label text
- Interview with BE candidate
- Look into upgrading to http2 / http3

- ￼



Wednesday Oct 1st

- Fix many hydration bugs i.e. button cannot be descendant of button
- Fix Knock errors polluting console drawer
- Fix size of candidate profile next prev buttons
- Fix loader on requisitions
- Remove N+1 query on get-sidebar-requisitions



Thursday Oct 2nd

- Added in knip to cleanup files - added in CI to check if we introduce any new unused files
    - Cleaned up around 200 files
- Merged pull request which fixes a bunch of hydration bugs - cleans up console drawer from knock and other errors - cleans up get recommendations circular dep error
    - Cleaned up tests and merged




Friday October 6th


- Open WIP PR for adding in bounce, click and open rates in postmark
- Created hubspot chat component - limit locations it’s used in Hubspot UI
- Updated e2e test to use more memory for build step because it seems to take a long time occasionally and it may be due to memory pressure
- Updated the chrome extension to use new endpoint




Monday October 7th

- Interview with Mathias who we are planning on giving an offer to. He’ll be a frontend developer
- Added Hubspot chat environment variable and planned for deployment next day
- Update Hubspot Regex
- Added some logic to hide Hubspot on page change




Tuesday October 8th

- Send recommendation email to another batch
    - Monitor open rate etc
- Fix UX with location-auto-complete
    - Update font size
    - Add loading state
    - Disable 1Password suggestions because they were hiding our suggestions dropdown
- Add AI credits to a couple of companies Brandon wanted
- Get cdc pipeline running and etc os running



Wednesday October 9th

- Created a page for /enterprise-retained-search-terms
- Add domains to allowed domains for hubspot Content Security Policy
- Fix a bug with modals overlapping — modal was being opened too early



Thursday October 10th

- Got CDC pipeline working
    - Added some readme tweaks
    - Suggested change to .npmrc
    - Made small change to script to get cdc and other etc services - pulled vars from .env if provided
- Look into bug with invalid links on candidate profile page
    - One user is complaining that users are providing invalid links to LinkedIn
    - I implemented one solution which filters out links that are not external
    - There may be another fix, but I’m waiting for some feedback on the exact candidate with issues
- Fix bugs and typos with the blog, integrations, and case studies pages
    - When adding in search term it would not clear page and so you might end up on page that does not exist
    - The state was not updated in the input search (not properly managed by spreading form control)
    - Page numbers were off for some searches (needed to add filter to page number query as well)
- Work on adding legal docs to website



Friday October 11th

- Add legal documents
    - Migrate over from old legal doc layout to simply using PDFViewer
    - Rework PDFViewer so that we can highlight text and follow links
    - Remove old components
- Try a fix for failing e2e nextjs build step
    - Skip the server init step - it may be opening up too many knock connections and timing out
- Migrate over all the deprecated Body, Title, and Caption components to our typography classes



Monday October 13th

- Dynamically import the PDF viewer
- Review Alexander’s PR
    - Spinner updated to use duotone
- Work on AI sourcing agent
    - Get running
    - Improve some loading state UX
- Look into bug with Nylas permissions - it was just a missing permission in the Nylas UI



Tuesday October 14th

- Add email and calendar scopes to prevent bad grants being granted
    - Will now throw an error if scopes don’t match in Nylas to the scopes we request in code
- Fixed some UX with calendar connection
- Fixed a bug with disconnecting the calendar - email was used to search but there could be soft deleted emails - also it’s just generally better to use an id so switched over to id for disconnection
- Look into e2e tests failing because of slow CDC pipeline locally
    - curl to update opensearch refresh interval helps



Wednesday October 15th

- Review Alexanders PR for modal migration changes
- Updated pre-commit hook for ruff check to give you an error if there is a python format issue (previously just fixed it and you had to commit again)
- Removed mkcert docker container because it generated invalid certs
- Updated e2e test to more consistently generate a timezone in different environments
- Update run-docker-images.sh to pull from github and clone and build the image if there are new things to pull
- Update run-e2e.sh to use nylas client secret env variable
- Fix bug with chrome extension


Thursday October 16th

- Updated chrome extension PR
- Upgrade to react 19 PR - tests passing - had to fix quite a few unit tests
- Add cp .env.development .env command to run-docker-images
- Fixed dynamically update pdf viewer type check
- Fix spinner sizes
- Cleaned up folders
    - Moved the icons folder into components
    - moved the helper folder content into utils



Friday October 17th

- Worked on a better PR review process
    - We should all work on reviewing PRs more thoroughly
    - Author needs to give the reviewer some information on what to review and how thorough they need to be
    - We now require a comment on all pull requests describing to the reviewer the level of risk and involvement necessary in the review
    - I also think from now on we should talk about at least one pull request you reviewed the previous day. You could spend only 10 minutes on the review but it’s important you’re spending some time every day reading other people’s code.
- Merge dynamically import the PDF viewer
- Work on the chrome extension
    - Needed to use both internal and external titles
    - Some other bugs
    - Created new endpoint with fewer connecting tables



Monday October 20th

- Moved middleware.ts file
- Added hsp brands to list of allowed iframe domains
- Started on pull request for dynamically pulling list of allowed domains
- Merge pull request fix for the chrome extension
- Push chrome extension version to the app store
- Simplify steps to test chrome extension in e2e
    - remove e2e manifest in favor of using pnpm release:test command with vite.config.ts command handling manifest property differences needed between testing, prod and dev
- Try to get migrate body, title, and caption pr merged
    - some things that cursor didn’t migrate well need to be fixed




Tuesday October 21th

- Added some redirects from old routes to new routes
- Updated document pages to have the footer in their layout - on mobile footer is removed to create space
- Clean up body, title, caption migration PR
    - Move some caption css






Wednesday October 22nd

- Fixed and merged the PR for migrating away from Body, Title, Caption etc
- Fixed and merged the PR for upgrading to React 19
- Refreshed the vulnerability checker and it resolved quite a few of the issues from previous changes I made
- Fixed two critical priority package issues in Vanta



Thursday October 23rd

- Fixed all the “critical” vulnerabilities in vanta for the scalis-io project
- Added an Alert to let users know when they have selected a candidate with no email
- Add better error handling if a user tries to advance candidate with no email
- Or send an email
- Look into why Google Places API is so expensive (5x more over last month)



Friday October 24th

- Fix vulnerabilities in vanta
- Fix a scrollbar issue with the PDFViewer component
- Add empty state and spinner to resume pdf viewer
- Fix a error with awaiting headers - removed user agent in favor of media query
- Reduce the number of times we hit the google places API



Monday October 27th


- Looked into client bug
- Fix e2e test - selecting date on date picker was flakey
- Looked into Vanta vulnerabilities for microservices



Tuesday October 28th

- Refetch the connected email settings when a user navigates to another tab and then back to the current tab
- Update loader sizes
- Work on e2e tests
    - Update job description page loader - loading state is now based of the query network status and we display a spinner correctly there
    - Add loading state to the job details page as well
    - Add loading state to the skill and preferences page




Wednesday October 29th

- Update XML feed to include
    - global about company statement
    - global footer statement
    - company department
- Update env.example in ml-apis
    - Upgrade cdktf library
- Update .env.development in scalis-rejection-flow
    - Update cdktf library
- Clean up setup in scalis-io
    - We no longer need the .env file - I updated the prisma commands to pull from .env.development
- Clean up e2e test in scalis-io
    - Fixed a bug with .env.local
- Addressed some of Andrei’s concerns about my test changes
- Fix tokens on manually schedule interview form




Thursday October 30th

- Remove swagger-ui-react package for Vanta
- Client was requesting that their links to the job should have their company and the job name in the title when sharing the link
    - I updated the metadata
    - Had to change things around a bit so that we had the job information server side
    - Larger change but will benefit us quite a bit since the job page is now indexable by search engines much more easily
    - Tested it without javascript to make sure SSR was working
- Some other small bugs
    - Fix Redis docker changes for local development



Friday October 31st

- Fix run-e2e.sh
    - It previously didn’t upsert specific variables. That’s important because if you use the .env.local instead of .env then you need to be able to keep all the vars you have set in there and only upsert specific ones for e2e tests
- There was an issue with the reject candidate flow running locally
    - It was pointing to the wrong endpoint for scalis-io
    - Changing it in the dockerfile seemed to break e2e 
    - Ended up fixing it by update the e2e yml file to add APP_URL to the env
- Run the job recommendations email - check click through rate and open rate - looks good - will likely keep the current rate of email sending unless click through goes down
- Reviewed Parkers PR for the copy requisition fix
    - Found some issues with the findNextAvailableExtRequisitionId - it was running prisma queries in a loop
    - Found some other concerns
    - Parker ended up pushing a frontend fix instead



Monday November 3rd

- Fix next-auth email sending vulnerability - required a package update - tested and merged
- Add fontawesome icons without script tag (merged but then so far it’s reverted so steve can add .npmrc)


Tuesday November 4th

- Look into ticket where we could not find the document template when creating an offer letter
    - Turns out the document template was not “verified”
    - Decided to make verification automatic - well sort of remove it entirely because we already have interpolation options - so we should probably just make the token check in interpolation options more thorough
    - Opened a PR for some changes there
- Remove cache for apollo client on the job page - this helps make e2e more reliable
- Added force dynamic to the blog pages in an effort to fix the build timeout issue that has been pretty common on e2e tests



Wednesday November 5th

- Work in Vanta
    - Remove users that no longer belong in Vanta
    - Update SAAS platform risk assessments
    - Vanta found security issues in Linear - resolved all of those
- 


Thursday November 6th

- Meetings
- Worked on a bug fix in the send scheduler link drawer
    - It previously sent out two emails and we only need one.
    - Now there is a default message body that can be customized
- Fix loader and interpolation options PR e2e tests - the PR was for fixing some issues with the tokens loader and number of times we hit the listtokens query
- Helping JP with SOC-2
    - Reading through docs
    - Filling out some documents



Friday November 7th

- Get John (JP) all final legal documents
- Plan for more security ticket fixes in December
- Create status page
- Create changelog page
- Fix drawers width
- 



Sunday November 9th

- Remove other icon libraries and replace with fontawesome
- Update pipeline advance and reject to use rounded so it’s consistent
- Fix a render issue with the linkedin icon
- Fix some drawer width issues
    - There were some individual drawers that needed to be updated
- Fix some spinner sizes - we now have an SVG for the Spinner component to prevent a flicker when loading. Basically we don’t want our loader symbol to take time to load so SVG is best until we fully migrate over to the fontawesome npm packages
- 


Monday November 10th

- Changed email recommendation frequency to twice weekly instead of 3 times
- Met with Jitesh over roadmap plans
- Met with Mattias over plan for email preview component
- Managed postmark email suppression - we had some users requesting to be removed from recommendation email - apparently couldn’t unsubscribe - strange considering plenty of other people were able to.

- Looked into bug with documents being downloaded - couldn’t reproduce
- Worked on SOC-2 - Talked to JP about the plan - Vulnerabilies can be worked on later - we’ll slowly go through them and try to prioritize bigger issues first


Tuesday November 11th

- Look into bug with downloading a resume
    - Was CORS issue
    - Noticed I was able to reproduce on prod and staging but not dev
    - Looked into AWS bucket CORS settings noticed that dev had * for origin and staging and prod had no cors settings
    - Wrote code to set CORS in CDK - Ran code in dev and staging. Tested dev and staging. Worked. Deployed to production
- Found another bug with documents - Cannot delete a document
    - This bug was from a foreign key constraint - we need to delete connection row first and then delete the actual row
    - Opened PR
- Also noticed that the “primary” status tag for a resume / document has an issue. If the column is empty it looks odd. A user might wonder why there is space there
    - So I removed the column if there is no primary for any row.
- Reviewed Mathias’ PR - Add a couple suggestions for frontend consistency - Mentioned some existing patterns we use




Wednesday November 12th

- e2e tests for client download bug wouldn’t pass - updated just the dev env to allow host headers [“*”] so gh actions can hit it
- Meeting with Circle
- Answer Circle questions about Zoom integration
    - Clarified questions with David - 
- Worked on email preview pull request
    - Updated the defaults that go into the email templates and email drawers - moved those defaults into a consolidated location that can be referenced by message type
    - Updated the email templates page to replace the message content with the default when switching between template type
        - This update will happen automatically - if you have made a change to the input it will prompt you if you want to switch over
    - Lots more work to do. We need to continue to switch each template out with “additional message” to allowing the user to customize the entire message



- Use for availability request





Thursday November 13th

- Work on roadmap for Jitesh
    - Long story
        - first create way to pull in jobs so we can have more jobs on the job board
        - then update recommendation engine to recommend jobs to candidates in the job search / job board
        - then create notifications for candidates
        - then create resume / profile variants
        - then create AI agent
- Meeting with ISC
    - Took lots of roadmap notes






TODO:
- Reject Quan Pham
- Message in channel to get everyone to do Cern background check
- Look into setting up Dependabot like Andrei suggested
- Disconnect zoom modal doesn’t disappear
- Look into why email unsubscriptions are not working





Meeting key points

- Anything important anyone would like to bring up before we start?
- If not lets start off with X person
- Before we stop are there any final questions or points to bring up?


