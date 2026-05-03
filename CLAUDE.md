@AGENTS.md

# CLAUDE.md — Eric Denis Personal Portfolio

> Project brief and content reference for AI coding assistants. Read this before suggesting changes. Place this file at the project root — Claude Code auto-loads it as context.

---

## What we're building

A personal portfolio site for **Eric Denis**, an AI-augmented product manager specialised in music and technology, based in Barcelona. The site converts two distinct audiences:

1. **Hiring managers** evaluating Eric for senior full-time PM roles or long consulting engagements
2. **Project clients** evaluating Eric for app prototypes, websites, and front-end / UI&UX work

The site needs to serve both without compromising either. Two CTAs in the hero reflect this split: *"Hire me full-time"* and *"Build me a prototype."*

---

## Positioning

### Core tagline

> **An AI-augmented product manager building at the intersection of music and technology.**

### The trifecta (Eric's edge)

Most senior PMs have one of these. Eric has all three:

1. **AI-augmented PM craft** — Uses AI as a multiplier in PM work (specs, research, analysis) *and* ships AI features into products (LLMs, MCP, deep learning at Revelator)
2. **Music & technology domain specialist** — 10+ years in rights, royalties, ACR, distribution at BMAT, Utopia, Revelator
3. **Hands-on builder** — Designs *and* codes. Front-end, UI/UX, mobile and web prototypes, websites — not just specs

### Why this matters

Eric ships **B2B SaaS** professionally (BMAT/Utopia/Revelator — music industry orgs, rights bodies, distributors) *and* runs **B2C** music ventures personally (NEST Festival, CMYK YouTube 142k+, Kommuna Records, Kanvas.fm, FestiPal). That dual fluency — building for industry AND for end-users — is rare in music-tech and powers everything from rights UX to consumer feature design.

---

## Service offerings

These are the four buckets the site needs to merchandise:

### 1. AI-Augmented Product Management

- **For**: SaaS companies (B2B / B2C), music-tech, AI-feature-heavy products
- **What**: Roadmaps, specs, backlogs, cross-functional team leadership — multiplied by AI tooling
- **Format**: Full-time roles · senior consulting engagements
- **Proof points**: Revelator AI roadmap · Utopia ACR scaled to 45,000 radios · BMAT €500K/year SPRE project, −80% costs

### 2. Apps & Prototypes

- **For**: Founders, startups, internal innovation teams, validation projects
- **What**: SaaS web apps · mobile apps · interactive prototypes · MVPs
- **Format**: Project-based engagements
- **Proof points**: FestiPal (concept → mobile app → web app → prototype, end-to-end)

### 3. Websites & UI/UX

- **For**: Small-to-mid teams who need a real site shipped fast, or design-to-code work
- **What**: Marketing sites · portfolios · landing pages · Figma-to-React · component systems
- **Format**: Project-based engagements
- **Proof points**: This portfolio site (vibe-coded with Claude in Next.js + Tailwind) · nestmicrofest.com administration · Strapi/Heroku CMS deployments

### 4. Music-Tech Advisory

- **For**: Investors, music-tech startups, rights organizations, blockchain-music projects
- **What**: Patent advisory · investment due diligence · whitepaper review · royalty / rights strategy
- **Format**: By referral, retainers, and via expert networks (Catalant, GLG, AlphaSights)
- **Proof points**: ICE (investment advisory) · Musimap (patent advisory EU/US) · Allfeat (whitepaper + strategy + smart contracts)

---

## Tech stack (this site)

- **Next.js 16.2.4** (App Router, `app/` at project root — NOT `src/app/`, TypeScript)
- **React 19.2.4**
- **Tailwind CSS v4** (config lives in `app/globals.css` via `@theme` — no `tailwind.config.js`)
- **Framer Motion** (animations)
- **lucide-react** (icons — use no other icon libraries)
- **Vercel** (planned deployment)
- **Domain**: `ericdenis.com` (registered on OVH, no DNS records yet)

> **IMPORTANT**: Next.js 16 has breaking changes from your training data (e.g. `params` and `searchParams` are now Promises, Tailwind v4 has no config file). Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.

---

## Design system

### Aesthetic direction

**Vinyl-sleeve-meets-builder-workshop.** Editorial magazine layout (mastheads, section numbers, generous typography) crossed with builder/coder restraint (mono labels, technical accents). Deliberately different from generic navy/teal "tech portfolio."

### Color palette

```css
--color-ink: #0a0a0a       /* off-black background */
--color-paper: #f5f1e8     /* warm cream foreground */
--color-amber: #e8765c     /* burnt sienna accent */
--color-rule: rgba(245, 241, 232, 0.12)  /* dividers */
```

**Always reference via CSS variables** (`var(--color-amber)` or Tailwind utilities `bg-amber`/`text-amber` from @theme). Never hardcode hex values in components.

### Typography

- **Display**: Fraunces (variable serif, axes loaded: `opsz`, `SOFT`, `WONK`)
- **Body**: DM Sans
- **Mono**: JetBrains Mono

Use Tailwind utilities `font-display`, `font-body`, `font-mono` (defined in @theme). For display headlines, set `style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}` for a soft, organic look. For subtitles, use `'opsz' 24, 'SOFT' 50`.

### Motion conventions

- One **orchestrated page-load reveal per section** with staggered delays (0.2s → 1.3s) — not scattered micro-interactions
- Headline easing: `[0.2, 0.8, 0.2, 1]` (snappy in, smooth out)
- Hover transitions: 300ms color, button arrows translate ~0.5px
- Avoid bouncy / spring physics — the vibe is restrained editorial, not playful

### Section header pattern

Every section follows editorial conventions:

```
[ NN / Section Name ]
Big Display Heading
Optional italic subtitle in Fraunces
---horizontal rule (var(--color-rule))---
Content
```

### Editorial flourishes

- Mono section numbers in brackets
- Date stamps in mono
- Unicode arrows (`→`, `↳`, `↗`) for navigation hints
- Subtle pulsing amber dot for "open to work" / live indicators
- Film grain overlay (already in `.grain` class)

---

## Site structure

| #  | Section            | Status   | Purpose                                                               |
| -- | ------------------ | -------- | --------------------------------------------------------------------- |
| —  | Navigation (sticky)| Built    | Anchored nav                                                          |
| 01 | Hero               | Built    | Positioning + dual CTAs                                               |
| 02 | About              | Built    | Trifecta — AI-augmented PM × music-tech domain × hands-on builder     |
| 03 | **Services**       | Pending  | The four offerings, explicit                                          |
| 04 | Selected Work      | Built    | BMAT / Utopia / Revelator with metrics                                |
| 05 | Consulting         | Built    | ICE / Musimap / Allfeat case studies                                  |
| 06 | FestiPal           | Built    | Largest visual treatment, build proof                                 |
| 07 | Side Projects      | Built    | NEST / CMYK / Kommuna / Kanvas — operator credentials                 |
| 08 | Skills & Stack     | Built    | Mapped to service offerings — 7 buckets                               |
| 09 | Contact            | Built    | Two-door CTAs + email/LinkedIn/GitHub/phone                           |
| 10 | Footer             | Built    | Editorial-style colophon                                              |

Anchor IDs in nav (must match): `#services`, `#work`, `#consulting`, `#festipal`, `#projects`, `#contact`.

---

## Content reference

### Personal info

- **Name**: Eric Denis
- **Email (public)**: contact@ericdenis.com — domain mailbox at OVH, this is what the site exposes
- **Email (private)**: eric.denis01@gmail.com — internal only, NOT to appear on public surfaces
- **Phone**: NOT public. Eric prefers it kept off the site and any GitHub-rendered files.
- **Location**: Barcelona, Spain
- **Working style**: Remote-first since 2016 (10+ years pre-COVID)
- **LinkedIn**: https://www.linkedin.com/in/eric-denis-b977028a/
- **GitHub**: https://github.com/EricDenis01

### Languages

- French (native)
- English (fluent)
- Spanish (advanced)

### Education

- **MSc Economics and Finance, 2013** — Barcelona Graduate School of Economics
  - Admitted to PhD (Top 10 worldwide)
  - Full tuition waiver & scholarship
- **BSc Economics, 2011** — HEC Lausanne
  - **Faculty Prize — best grade in a 300-student cohort**
  - Best grade in 2nd year (out of 320 students)
  - Exchange scholarship to HEC Montréal

### Profile bio (CV version — should be polished and shortened for site)

> AI & Music-Tech Product Leader with 10+ years building SaaS for Music Rights, Royalties & Data-Driven Products, using technology to make the music ecosystem smarter, faster, and more accountable.
>
> I lead distributed squads across R&D, Data, Engineering, and Design to deliver complex, multi-year product roadmaps end to end, leveraging cutting-edge AI (Deep Learning, LLMs), purpose-built music data pipelines, and scalable platform architecture to turn messy industry data into revenue-driving tools.
>
> Also active as a label owner, producer, and touring artist, I bring a lifelong passion for music into my work, combining real-world creative experience with deep technical insight to build products that truly serve the rights-holders.

---

## Work experience (B2B SaaS track — for Selected Work + Hire-me-full-time CTA)

### Revelator — Senior PM, AI & Distribution Data Analytics · 2024–2025
*B2B SaaS for music distributors and labels.*

- Led the AI roadmap, identifying high-impact opportunities across the product suite via deep audits of internal systems and customer workflows
- Trained deep learning models that automatically flag suspicious streams and files (fraud detection)
- Developed LLM- and MCP-powered products including real-time Insight Reports
- Structured internal data to build a Knowledge Base for an AI support chatbot (RAG architecture)
- Led complete revamp of client-facing dashboards and analytics tools
- Created a unified, actionable Entity Relationship Diagram serving as foundation for backend architecture and front-end UX
- Hands-on Snowflake / SQL analyzing DSP reports (Spotify, YouTube, Meta), turning multivariate data into actionable UX flows

### Utopia Music — Senior PM, R&D · Content Recognition Tech · 2022–2024
*B2B SaaS for monitoring, rights, royalties.*

- Managed fully remote, distributed team of up to **12 engineers and data scientists**
- Defined priorities and facilitated squad operations to build global music monitoring tech (BE, FE, R&D, Data)
- **Founded the R&D department** and led it through specs & roadmaps
- Deployed best-in-class **Automatic Content Recognition AI** on **45,000 radios and 1,500 TVs** scanned in real time
- Built wireframes for end-user webapp and dashboards
- Implemented Agile practices and tools (JIRA, Miro, Slack, Scrum)

### BMAT — PM, Music Monitoring & Royalties · France · 2016–2022
*B2B SaaS for collective management organisations.*

- Spearheaded TV and Radio monitoring system for **SPRE** (French neighbouring rights society)
- **Doubled SPRE project revenues to €500K / year**
- **Reduced costs by 80%** through automations
- Defined specs, built roadmaps, prioritized backlogs, streamlined workflows
- Product Owner on dynamic, complex project — interface between client, engineering, leadership
- Coordinated cross-functional teams (BE, FE, R&D, Operations) within Agile/Scrum
- Recruited and trained team of 5 freelancers

### Earlier roles

- Economist, Focus Economics (2015–2016)
- Junior Economist, UN ILO (2014)
- Trainee, European Central Bank (2014)
- Trainee, European Commission (2013)
- Applied quantitative modeling & statistical analysis (Matlab, Stata) to complex datasets
- Automated and restructured data workflows
- Contributed to academic and institutional research used in economic policymaking

---

## Stack & specialisms

*This block matches the GitHub profile README exactly. Keep them in sync.*

### AI-augmented PM
LLMs / MCP / RAG in production · AI evals · vector databases (Milvus) · AI-augmented workflows (Cursor, Claude Code, ChatGPT) · roadmaps, specs, backlogs · distributed-team leadership

### Music-tech domain
DDEX / ERN · CMOs / PROs reporting · DSPs (Spotify, YouTube, Meta, Apple) · Automatic Content Recognition · royalty and rights flows · Web3 and smart contracts for music (Allfeat)

### APIs & integrations
REST · OpenAPI / Swagger · Postman · OAuth · webhooks · Stripe (payment processing) · Docusign (e-signature) · ERD modelling

### Build & deploy
Next.js · React · TypeScript · Tailwind · Framer Motion · Figma · UI / UX · WordPress · Strapi (headless CMS) · Vercel · Netlify · Supabase · mobile and web prototypes

### Data
Snowflake · BigQuery (basics) · SQL · Python (basics) · TensorFlow (basics) · Tableau · Looker Studio · Stata

### Infrastructure literacy
GCP · Kubernetes · Docker (working knowledge — comfortable in conversations with platform engineering)

### Ways of working with engineering teams
Git / GitHub flow · feature branches · PR-driven development · code review · semantic versioning · async-first · distributed remote teams across timezones · Agile / Scrum · JIRA · Linear · Notion · Miro · Slack · VS Code

---

## Consulting work (proof for Music-Tech Advisory offering)

### ICE — https://www.iceservices.com/

Advised executives on music technology investment decisions.

### Musimap — https://musimap.ai/

Music technology patent advisory for submission and review in the EU and US.

### Allfeat — https://allfeat.org/

Reviewed and edited whitepaper, advised on strategy for blockchain music tech company. Smart contracts exposure.

### nestmicrofest.com — http://nestmicrofest.com/

Administrator of the website, handled all payment platforms (Stripe).

---

## Entrepreneurial projects (B2C track + operator credentials)

### NEST Festival — Founder & CEO

- €70K+ budget
- 22 artists (8 internationals)
- Direct manager of 11 partners
- Indirect manager of 30+ collaborators
- 500+ guests expected for 5th edition

### CMYK Music YouTube Channel — Founder

- **79M+ views**
- **4.3M hours of watch time** *(roughly 490 years of cumulative human attention — strongest signal on the channel)*
- **142k+ subscribers**
- Curated music selections / mixes

### Kommuna Events & Label — Co-Founder

- 12 vinyl releases
- 5,000+ copies sold worldwide
- 100+ events over 11 years
- 100–500 guests per event

### Kanvas.fm — Non-profit web radio (discontinued)

- 24/7 algorithmic web radio
- 5,000+ hand-curated tracks on shuffle with automatic blending
- Self-hosted Icecast on a VPS
- Multi-platform distribution: web stream, YouTube algorithmic segments, SoundCloud archive
- Listed on Streema, myTuner Radio
- Tagline: "A unique selection of mellow grooves"

---

## FestiPal (flagship build proof)

- Eric had the **idea**, built the **concept**, **mobile app**, **web app**, **website**, **prototypes**, and **front-end** end-to-end
- Looking to launch soon
- GitHub repo exists (Eric to provide URL + screenshots + product description)
- **Should get the largest visual treatment on the site** — this is the single strongest signal for the "Apps & Prototypes" service offering. If the site converts a prototype client, FestiPal is doing it.
- *TODO: Eric to write 1–2 sentences describing what FestiPal does, who it's for, and the primary use case. Without this, the section copy will be generic.*

---

## Conventions for AI coding assistants

When extending this site:

1. **Always use CSS variables for colors** (`var(--color-amber)` or Tailwind classes from @theme). Never hardcode hex.
2. **Use Tailwind utilities** `font-display`, `font-body`, `font-mono` — these come from the @theme block in `globals.css`.
3. **Icons**: lucide-react only.
4. **Animations**: Framer Motion. One orchestrated reveal per section, not scattered micro-interactions.
5. **Section anchor IDs** must match the navigation: `#services`, `#work`, `#consulting`, `#festipal`, `#projects`, `#contact`.
6. **Section header pattern**: `[ NN / Section Name ]` mono label, then Fraunces display title, then optional italic subtitle, then a rule.
7. **Responsive**: Mobile-first, use `md:` breakpoint as default desktop transition.
8. **Copy tone**: confident but not corporate. Music-magazine-meets-product-blog. Use specific numbers (€500K, 45,000 radios, 79M views, 4.3M hours, 5,000 tracks) — they do the heavy lifting.
9. **Lead with "AI-augmented"** when describing Eric's PM work — it's the differentiated positioning, not "PM who knows AI."
10. **B2B and B2C** should both appear — Eric's dual fluency is a feature, not a footnote.
11. **Honest qualifiers required** — for infrastructure (GCP, K8s, Docker), data tools (Python, BigQuery), and AI tools (TensorFlow), use "basics" or "working knowledge." Do NOT inflate to "expert."
12. **No emoji** unless decorative (like the `→` after `ED`). Use unicode arrows (`→`, `↳`, `↗`) for editorial flavor.
13. **Don't add new fonts** without discussing — three is the limit.
14. **Don't use generic AI portfolio aesthetics** (purple gradients, Space Grotesk, glassmorphism, geometric shapes floating). Stay in the editorial / vinyl lane.
15. **Eric is vibe coding, not engineering** — explain changes in plain language, prefer simple solutions over clever abstractions, and offer file paths + line ranges when suggesting edits.
16. **Project uses `app/` at project root, NOT `src/app/`**. Components live in `app/components/`.

---

## Files in the project

- `app/globals.css` — Tailwind v4 config (`@theme`), color/font tokens, base styles, film-grain texture
- `app/layout.tsx` — Root layout with Fraunces, DM Sans, JetBrains Mono via `next/font/google`
- `app/page.tsx` — Composes all sections
- `app/components/` — All section components
- `CLAUDE.md` — This file

---

## Related artifacts (kept in sync)

- **GitHub profile README** — at `github.com/EricDenis01/EricDenis01` (the special profile repo). Public-facing summary of the same positioning. Stack & specialisms section must stay identical between this CLAUDE.md and the README. When updating one, update the other.

---

## Off-site actions (separate from build)

Freelance platforms to register on, in priority order:

- **Tier 1 (this week)**: Malt (strong in FR/ES), Contra, LinkedIn Open to Work + Services
- **Tier 2 (later)**: Toptal, Wellfound, YunoJuno
- **Tier 3 (specialist)**: Catalant, GLG, AlphaSights — expert networks paying €200–500/hr for music-industry expert calls. Eric's consulting profile (ICE / Musimap / Allfeat) makes him a strong fit here.

For each platform, the profile copy should mirror this CLAUDE.md positioning: lead with "AI-augmented PM," lead the build offerings with FestiPal as the example, and feature the music-tech advisory track as a separate, premium offering.

---

## Asset wishlist (Eric to provide)

- Professional photo for About section (CV photo works as a starting point)
- FestiPal product description (1–2 sentences: what it does, for whom, primary use case)
- FestiPal screenshots (mobile app, web app, website, prototypes)
- FestiPal GitHub URL
- NEST Festival photos (best 3–5)
- Vinyl release covers (Kommuna Records)
- CMYK YouTube thumbnails / channel banner
- Kanvas.fm visual identity (from Internet Archive / Wayback Machine if needed)
- Logos for ICE, Musimap, Allfeat, nestmicrofest (with permission for case studies)
- Consulting case study confirmation — what Eric is permitted to share publicly about each engagement
- Day rate / project rate ranges Eric is comfortable publishing or quoting privately

---

*Last updated: 2026-05-03. Update this file whenever positioning, content, or conventions change. Keep in sync with the GitHub profile README.*
