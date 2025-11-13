# Scalis Job Platform Plan

## Phase 1 – Expand Job Supply & Ingestion Infrastructure

### Phase 1.1 – Link/Click Tracking with Provenance

**What we'll ship**
- Build an `/out/{job_id}` redirect so every “Apply” click hits us first, letting us log each click against the job and provider, run basic bot/duplicate suppression, and keep the provider’s tracking parameters intact when forwarding seekers.
- Stand up a `link_tracking` table with one row per click (job, provider, seeker ID, campaign ID, timestamp) so we can slice performance by partner and rebuild reporting even if schemas evolve.
- Ask @João whether these click rows should stay in the primary transactional DB or be streamed to a warehouse/MongoDB Atlas so we don’t overload Postgres with high-volume writes.
- Provide lightweight internal reporting (CSV/export is fine) so agencies get trustworthy click counts even before we negotiate CPCs.

**Why first**
- We can’t pursue paying partners without proving we know which listings came from them and how they perform. The redirect + provenance ensures that confidence and also protects us as we continue scaling the scraper.

### Phase 1.2 – Onboard Paid Agency Feeds & Provider Controls

**What we'll ship**
- Define the feed contract (XML/JSON over HTTPS or SFTP) that accepts job payloads with IDs, canonical URLs, campaign status, and any query-string parameters that must be preserved.
- Ingest the payloads so the full posting lives on Scalis while the Apply button redirects through our endpoint, forwarding the provider’s tracking parameters and adding our `from=scalis` source tag.
- Maintain a provider-level toggle so we can instantly disable a feed if budgets pause, payments lapse, or there’s a dispute—jobs disappear from the UI/API while their OpenSearch documents (and history) remain intact.
- Start introductions to programmatic networks (Recruitics, PandoLogic, Appcast), RPO partners, and staffing firms already buying PPC inventory on Indeed/ZipRecruiter so we can pilot revenue-positive campaigns.

**Why now**
- Paid feeds give us structured inventory and revenue with far less normalization pain than scraping. With 1.1 in place we can report performance from day one and cut traffic immediately if a provider’s data misbehaves.

### Phase 1.3 – Broaden Crawler Coverage & Dedupe

**What we'll ship**
- Expand scraping into the next tier of ATS sources, slot new parsers into the ingestion pipeline, and tag every job with its origin so provider toggles still work.
- Tighten dedupe logic (hashing, canonical URLs, strong title/company/location matching) and rank Scalis-hosted or paid listings above third-party supply so we honor partners paying for visibility.
- Validate crawler output against the click-tracking data from 1.1 to monitor traffic quality as volume grows.

**Why third**
- Once agency feeds are stable we can widen the crawler without starving the board. Sequencing this after 1.2 prevents us from undercutting paying partners and lets us blend organic + paid supply intelligently.

## Phase 2 – Resume Variants & Recommendations

### Phase 2.1 – Resume Variant Schema

**What we'll ship**
- Design and migrate the data model to support multiple resume/profile variants while the UI continues to surface a single resume for seekers.
- Document the schema contract for downstream consumers (recommendations, notifications, search) so variant-aware features rest on a stable foundation.
- Coordinate with @João on migration sequencing/backfills to avoid losing the primary variant and confirm where high-volume change logs should live.

**Why now**
- The recommendation engine will soon depend on variant-aware data. Dropping the schema here avoids a refactor later and allows services to start recording variant metadata even before the UI exposes it.

### Phase 2.2 – Recommendation Engine & Notifications

**What we'll ship**
- Implement the variant-aware recommendation algorithm, expose match scores on the job board, and update ranking logic to leverage the new schema.
- Refresh in-app notifications and the recommendation email so both channels run off the same scoring output; keep the “profile required before apply” guardrail while smoothing the onboarding flow.
- Add digest/batching logic so seekers get consolidated alerts instead of notification spam and extend internal reporting to track match performance across variant types.

**Why second**
- With richer supply from Phase 1 and variant schema work complete, the matching surface finally reflects meaningful variety. Bundled notifications turn into a retention lever rather than noise, and every improvement in the scoring engine lifts both email and in-app channels immediately.

## Phase 3 – Resume Variant Adoption

**What we'll ship**
- Deliver the seeker-facing experience for creating and managing variant resumes, including guardrails for a primary variant, validation on metadata, and education on when to create alternates.
- Harden the service layer and external APIs so downstream consumers (recommendations, notifications, employer views) respect variant data, and add metrics that surface adoption or data-quality issues quickly.

**Why third**
- Once variant data and recommendations are stable, exposing variant management in the UI lets seekers benefit from the groundwork without blocking earlier phases. Sequencing it here keeps the product experience aligned with the data model and minimizes rework.

## Phase 4 – AI Profile Editing Agent

**What we'll ship**
- Develop the Scalis AI assistant that helps jobseekers refine their profiles/resumes using the variant-aware data we’ve accumulated.
- Staff the effort with at least two engineers so the AI workstream stays unblocked while the rest of the roadmap continues.

**Why last**
- The AI assistant is a multi-engineer lift that only pays off once job supply, matching, notifications, and variant data are solid. Building it on top of the completed foundation prevents backtracking and ensures the agent has rich data to work with from day one.
