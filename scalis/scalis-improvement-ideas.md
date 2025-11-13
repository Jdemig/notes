SCALIS Improvement Ideas


Features
- Limit the number of applicants that can apply to an opening. Companies might not like it but they don’t even have to know. Companies might think they want all the applicants they can get but really it’s just a waste of everyone’s time. Job seekers and employers. Employers cant possibly sift through all the applicants. This is probably partly why LinkedIn has people pay to promote their job postings. It’s a way to make money and limit exposure of a listing. Or maybe the best option would be to limit the amount of time a listing can be open. I know companies might not like it but I think as a platform we can add a ton of value by wasting as little time as possible for everyone in the process. Every automation matters. Every bad resume automatically sifted through. Or every second saved clicking in the pipeline with slow queries matters. This could be a major differentiator for us because the biggest pain point in the hiring process is how tedious and slow the process is. For companies it’s how tedious and time consuming it is. For job seekers it’s the same problem but it’s also feeling like resumes go into a black void. It’s job seekers feeling like they will never hear back and this likely won’t work out.
- Update the job board algorithm to not just search by the users query but to also prioritize listings that we think they would be a good candidate for based on their scalis resume. This should hopefully allow users to waste lest time on both ends. We can make this transparent to the job seeker so that they are aware that updates to their SCALIS resume will reflect job listing order in order to save them time. This will also allow them to be aware that they need to keep their SCALIS resume up to date.
- Allow users to have separate resumes - maybe one for frontend and one for backend if they want to tailor resumes to specific companies

- Create a general SCALIS AI agent that can educate the user and execute tasks

- Create a tool for migrating from other ATS systems to ours. Make it automatic.

- SCALIS Subscriptions?
    - We still have the open subscription modal PR open
        - https://github.com/scalis-io/scalis-io/pull/2607
        - https://linear.app/scalis/issue/S24-2977/component-scalis-subscription-modal

- Anything message channel related
    - Favoriting message channels?
    - Do they work well?
    - Chat doesn’t populate with the user you wanted to chat with automatically - https://linear.app/scalis/issue/S24-8489/chatting-with-a-user-doesnt-automatically-pull-the-user-up
    - Chat could be a growth vector if we send out emails to uploaded candidates stating that they have a message on the SCALIS platform - although messaging people about something they never signed up for might not be the best.
        - Either way should probably allow people to message uploaded candidates through email

- Need to finish this - https://linear.app/scalis/issue/S24-7620/handle-processing-uploaded-resume-in-uploaded-candidate

- External and internal candidates are a separate index - https://linear.app/scalis/issue/S24-7141/combine-external-and-internal-candidate-indexes-in-opensearch

- We need a way to add primary email for users that signed in with Google - https://linear.app/scalis/issue/S24-8359/we-need-another-way-to-authenticate-google-users


- Chrome extension needs to be able to add to a talent pool - https://linear.app/scalis/issue/S24-8475/chrome-extension-add-to-talent-pool
    - button for adding contact info - also searchable dropdown



- Passwordless login



Bugs
- Stages should sort by match score automatically
- Match score doesn’t do a good job of picking out quality candidates in the pipeline page. Sort by match score still shows bad candidates. Also if there are any deleted candidates that have an empty name and empty resume then it puts that at the top above the high match scores when those should be at the bottom
- We need to fix the candidate profile bug that happens when you advance a candidate and it pulls up the wrong next candidate in the list
- Maybe we can use AI to fill in advance and reject candidates messages - sometimes the reject response may feel super generic and it might be nice to improve it to feel a little more personal
- Offer letter still has bugs
    - https://linear.app/scalis/issue/S24-4571/integration-dropbox
    - E-Signature issues
        - https://linear.app/scalis/issue/S24-7393/e-signature-flow-email-from-dropbox-doesnt-look-as-expected
        - https://linear.app/scalis/issue/S24-7395/e-signature-flow-unexpected-behavior-after-finishing-sign-ing-flow
        - https://linear.app/scalis/issue/S24-7392/e-signature-flow-incorrect-email-is-sent-from-scalis-during-e
        - https://linear.app/scalis/issue/S24-7394/e-signature-flow-mark-as-hired-is-not-shown
    - Create / Edit Offer Drawer - https://linear.app/scalis/issue/S24-5981/createedit-offer-additional-compensationbenefits-should-be-closed
- Backend Validate Email in bulk enroll use case - https://linear.app/scalis/issue/S24-7347/validate-candidates-without-email
- Job campaign product filter broken - https://linear.app/scalis/issue/S24-5208/job-campaigns-product-filters-dont-filter-results-correctly
- Mobile view on pipeline page doesn’t work
    - In terms of priorities I think it would be important to have mobile working. I know you mentioned that mobile wasn’t a priority but I think that its going to be pretty common 
- Create Req - Target Hire Date - https://linear.app/scalis/issue/S24-5741/create-requisition-target-hire-date-is-incorrectly-filled-in
- Create Req - Generate with AI Bug - https://linear.app/scalis/issue/S24-8360/new-req-generate-with-ai-bug
- Stage collaborators aren’t visible after adding - https://linear.app/scalis/issue/S24-8017/stage-collaborator-arent-visible-after-adding-or-removing-them
- End time can be smaller than start time - https://linear.app/scalis/issue/S24-8013/schedule-end-time-can-be-smaller-than-start-time
- Can’t navigate to pages past 1000 - https://linear.app/scalis/issue/S24-6276/cant-navigate-to-any-page-after-1000
- Saving & pinning views is broken - https://linear.app/scalis/issue/S24-6343/savingpinningremovingdeleting-view-works-entirely-incorrectly
- Job seeker contact company button - https://linear.app/scalis/issue/S24-4461/job-seeker-sees-contact-company-button-if-they-were-not-contacted
- 









- Matching algorithm should take both job seekers and job posting as input. And spit out a match. (duh?) It should have weights and biases that are trained. It should care about some important skills. Specific skills. It should take into account job history. If they search for senior it should show the person has a senior amount of experience or was promoted exceptionally quickly and maybe a standout. It should consider education history similar to experience. As in if they have education thats valuable but only as valuable as experience maybe? Or half as valuable? Maybe valuable as experience with a weighting based on how similar the degree is to the job they are applying for. Like physics but the guy applies to a coding job. Probably not that relevant but at least they are good at math. 






Business

- We should have junior developer have a set of criteria. 
    - They should have to have at least one senior review their PR.
    - They cannot bypass the PR rules.







Week 2



Features

- Add job req activity log - https://linear.app/scalis/issue/S24-4657/add-job-requisition-activity-log
- 
