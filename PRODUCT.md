# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed 2026-11-09:

1. **Hiring managers and recruiters** for backend / software engineer roles (Node.js, TypeScript, PostgreSQL, GCP, BigQuery/Looker). Situation: they arrive from a CV link, a LinkedIn post, or a GitHub profile, usually on desktop, with a few minutes to decide whether to open a conversation. Job: confirm the person has shipped real production work and can own a problem end to end.
2. **Freelance clients**: small businesses and founders who need a website, an app, or a data/automation job built. Often on mobile. Job: see finished work, trust the person, and find a way to reach them.

## Product Purpose

A single-page personal portfolio for Dhrupesh Brahmbhatt (he/him), Ahmedabad, India. It exists to turn a visit into a message: a job conversation or a freelance brief. Success is a visitor who understands within seconds what Dhrupesh has built, for whom, with what result, and then emails or opens LinkedIn.

## Positioning

A backend engineer who is also forward deployed: he sits with aviation operations people, maps their workflow, then builds and runs the service himself. The claim a neighbour cannot copy: measured outcomes on real operational systems (a Qlik dashboard replacement that went from 2-3 minutes to 2-3 seconds; 60+ SSRS reports migrated to BigQuery and Looker in 1.5 months with AI-built tooling), plus shipped products of his own (Know Your Buy). AI is positioned as an engineering-process tool he builds, not a buzzword.

## Operating Context

- Deployed as a static export to GitHub Pages at `https://dhrupeshbrahmbhatt.github.io/portfolio/` (repo `dhrupeshbrahmbhatt/portfolio`, replacing the old v1 site there). The repo `portofliov2` and its URL stay untouched because the current CV and LinkedIn link to it.
- Linked from: CV (PDF in `public/`), LinkedIn headline, GitHub profile.
- The owner updates content by editing TypeScript content files; no CMS.

## Capabilities and Constraints

- Next.js 16 App Router, static export (`output: "export"`), `basePath` must equal the repo name used for Pages (`/portfolio`).
- Tailwind v4, framer-motion and lucide-react already installed.
- No backend: contact is email + LinkedIn links only (confirmed). No contact form.
- Google Analytics ID `G-W12B3ZEG2C` stays.
- Resume PDF served from `public/`; the newest CV (Oct 2026) replaces the April one.
- Sections confirmed: hero, work experience (aviation at DnT Infotech, including SSRS to BigQuery/Looker migration, data engineering, AI developer-workflow automation), selected projects, skills, contact.
- Undecided: a headshot. None exists in the repo; the old v1 used a broken external image. Design must stand without a photo and accept one later.

## Brand Commitments

- Name used everywhere: "Dhrupesh Brahmbhatt".
- Voice: plain, specific, numbers over adjectives (matches his LinkedIn writing). No "passionate", no "cutting-edge".
- Links: GitHub `https://github.com/dhrupeshbrahmbhatt`, LinkedIn `https://www.linkedin.com/in/dhrupesh-brahmbhatt`, email `dhrupesh840@gmail.com`.
- Headline positioning confirmed: freelance clients and hiring managers both; lead with backend / forward deployed engineering and show the aviation industry work.

## Evidence on Hand

Confirmed facts (source: CV Oct 2026 and LinkedIn profile read 2026-11-09):

**DnT Infotech LLP, Ahmedabad. Software Developer, Dec 2025 to present (internship Jun to Nov 2025).**
- Rebuilt an operations-critical aviation app (frontend + backend) replacing a legacy Qlik dashboard and its WizLib writeback connector; queried Parquet sources directly; load time 2-3 minutes to 2-3 seconds, best response under 100 ms.
- Forward deployed with aviation ops teams: AMOS/MM data, aircraft ground events, MEL processes.
- 5+ production services: Node.js, Express, TypeORM, JWT auth, unit tests. Deployed to GCP with Docker and CI/CD.
- Migrated 60+ legacy SSRS reports to Google BigQuery + Looker in 1.5 months: medallion architecture (bronze/silver/gold), fact and dimension tables, scheduled Dataform pipelines on GCP.
- Built AI automation (Claude skills) that traced table/view dependencies and generated missing layers; all gold tables and views done in 2 weeks. Second skill "BQ to Looker" rebuilt SSRS reports as Looker dashboards with identical columns, filters and layout.
- Security fixes and Node.js upgrades across 50+ repositories, zero breaking changes, all shipped.
- Migrated 10+ legacy scheduled jobs to Node.js cron services.
- AI-assisted delivery workflow: ticket, discovery, isolated git worktree, implementation, validation, PR; rules + skills + agent definitions, harness-independent.
- Internship: 300+ technical and data-flow diagrams in 3 months including a master diagram still used for onboarding; reusable AI prompt templates in Eraser adopted as company standard.
- Served one week as team Scrum Master.

**Sourced from the owner's own LinkedIn posts (read 2026-11-09):** the SSRS reports had run "wired into .NET code for years"; the team was "backend developers who had never built a data warehouse"; the AI delivery workflow had been in use for 6 months at the time of the post. The CV states the workflow increased ticket throughput (no figure given).

**Cognifyz Technologies. Web Development Intern, Aug 2024 (remote).** Built Sure-Supply (food waste management, React/Node/MongoDB).

**Projects (confirmed to feature):**
- Know Your Buy (2026): portable used-laptop health check. C# / .NET 8, WPF, Native AOT, single portable exe, Windows first, Mac in testing. Checks battery wear, SSD/HDD SMART + speed, CPU/GPU/RAM/model, per-core temps, fan, PDF report, self clean-up. Verdict Buy / Negotiate / Walk Away in under 10 minutes, offline. Site: `https://knowyourbuy.com` (Next.js, Cloudflare Pages). App repo private; downloads not public yet (do not claim a download is available).
- ThinkTank, AI portfolio generator: Next.js, TypeScript, Node.js, MongoDB, GitHub API, OpenAI API; ETL of GitHub/LinkedIn data; deployed AWS EC2 + S3. Repo `https://github.com/dhrupeshbrahmbhatt/ThinkTank`.
- CampusConnect: alumni to first-year mentorship platform; React, Node, Express, MongoDB, Socket.io chat, JWT, RBAC; Vercel + Railway. Won 1st place at the college project expo (2023). Repo `https://github.com/dhrupeshbrahmbhatt/campusconnect`.
- WebChat: blockchain-backed chat with E2EE and post-quantum cryptography, WebSockets. Repo `https://github.com/dhrupeshbrahmbhatt/Webchat`.

**Education:** B.E. Computer Engineering, Shree Swaminarayan Institute of Technology, Ahmedabad, 2022 to 2026.

**Assets:** CV PDF (`~/Downloads/Dhrupesh_Brahmbhatt_Software_Developer_CV (1).pdf`, to be copied into `public/`). Know Your Buy reel posters at `~/Projects/KnowYourBuy/marketing/reel-01/{en,hi}/poster-16x9.jpg`. No project screenshots for ThinkTank, CampusConnect or WebChat exist in the repos. No headshot. Nothing may be fabricated: no testimonials, no client logos, no invented metrics.

## Product Principles

1. Every claim carries its number or its artefact; nothing generic survives.
2. The aviation work leads: it is the proof a stranger cannot get elsewhere.
3. Both audiences reach contact in one scroll or one tap; email and LinkedIn are the only two actions.
4. AI shows up as process the owner built, never as decoration.
5. Content lives in data files so the owner can update it without touching layout.

## Accessibility & Inclusion

Keyboard reachable throughout, visible focus, reduced-motion respected for every animation, contrast at WCAG AA. Visitors on mid-range Android phones in India are a confirmed audience: keep the page light.
