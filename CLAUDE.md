@AGENTS.md

# CLAUDE.md — Eric Denis Personal Portfolio

> Project brief and content reference for AI coding assistants. Read this before suggesting changes.

---

## What we're building

A personal portfolio site for **Eric Denis**, a senior product leader in AI and music technology, based in Barcelona. The site has two audiences:

1. **Hiring managers** evaluating Eric for senior full-time product roles
2. **Prototype / freelance clients** evaluating Eric for build / vibe-coding gigs

The site needs to serve both audiences without compromising either. Two CTAs in the hero reflect this split: "Hire me full-time" and "Build me a prototype."

## Positioning

Eric's edge is the **trifecta**:

- **Deep music-tech product expertise** — 10+ years at BMAT, Utopia Music, Revelator
- **Active music industry operator** — festival CEO, label co-founder, 140k+ YouTube
- **Ships code** — vibe-codes mobile/web apps, built FestiPal end-to-end

Most senior PMs have one of these. Eric has all three. The site should make this trifecta the central narrative.

**Tagline**: *"A product leader at the intersection of AI, music rights, and builder culture."*

---

## Tech stack

- **Next.js 16.2.4** (App Router, `app/` at project root — NOT `src/app/`, TypeScript)
- **React 19.2.4**
- **Tailwind CSS v4** (config lives in `app/globals.css` via `@theme` — there is no `tailwind.config.js`)
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
[ MONO LABEL · SECTION NUMBER ]
Big Display Heading
Optional italic subtitle in Fraunces
---horizontal rule (var(--color-rule))---
Content
```

Example: `[ 02 / Selected Work ]` → `Where I've shipped.` → italic subtitle → rule → cards.

### Editorial flourishes to lean into

- Mono section numbers in brackets
- Date stamps in mono
- Unicode arrows (`→`, `↳`, `↗`) for navigation hints
- Subtle pulsing amber dot for "open to work" / live indicators
- Film grain overlay (added via `.grain` class in `globals.css`)

---

## Site structure

| #  | Section            | Status   | File / Notes                                     |
| -- | ------------------ | -------- | ------------------------------------------------ |
| —  | Navigation (sticky)| Pending  | `app/components/Navigation.tsx`                  |
| 01 | Hero               | Pending  | `app/components/Hero.tsx`                        |
| 02 | About              | Pending  | Short bio, more personal than CV                 |
| 03 | Selected Work      | Pending  | BMAT / Utopia / Revelator with metrics           |
| 04 | Consulting         | Pending  | ICE / Musimap / Allfeat case studies             |
| 05 | FestiPal           | Pending  | Largest visual treatment, screenshots            |
| 06 | Side Projects      | Pending  | NEST / CMYK / Kommuna / Kanvas / nestmicrofest   |
| 07 | Skills & Stack     | Pending  | Three buckets: Product, Music-Tech Domain, Build |
| 08 | Contact            | Pending  | Form + Cal.com + email + LinkedIn                |
| 09 | Footer             | Pending  | Editorial-style colophon                         |

Anchor IDs in nav (must match): `#work`, `#consulting`, `#festipal`, `#projects`, `#contact`.

---

## Content reference

### Personal info

- **Name**: Eric Denis
- **Email**: eric.denis01@gmail.com
- **Phone**: +34 633 474 375
- **Location**: Barcelona, Spain
- **LinkedIn**: https://www.linkedin.com/in/eric-denis-b977028a/

### Languages

- French (native)
- English (fluent)
- Spanish (advanced)
- Japanese (intermediate)

### Education

- **MSc Economics and Finance, 2013** — Barcelona Graduate School of Economics
  - Admitted to PhD (Top 10 worldwide)
  - Full tuition waiver & scholarship
- **BSc Economics, 2011** — HEC Lausanne
  - Faculty Prize (best grade of the BSc)
  - Best grade of 2nd year (out of 320 students)
  - Exchange scholarship to HEC Montréal

### Profile bio (from CV — can be polished for site)

> AI & Music-Tech Product Leader with 10+ years building SaaS for Music Rights, Royalties & Data-Driven Products, using technology to make the music ecosystem smarter, faster, and more accountable.
>
> I lead distributed squads across R&D, Data, Engineering, and Design to deliver complex, multi-year product roadmaps end to end, leveraging cutting-edge AI (Deep Learning, LLMs), purpose-built music data pipelines, and scalable platform architecture to turn messy industry data into revenue-driving tools.
>
> Also active as a label owner, producer, and touring artist, I bring a lifelong passion for music into my work, combining real-world creative experience with deep technical insight to build products that truly serve the rights-holders.

---

## Work experience (with metrics for site copy)

### Revelator — Senior PM, AI & Distribution Data Analytics · 2024–2025

- Led the AI roadmap, identifying high-impact opportunities across product suite via deep audits of internal systems and customer workflows
- Trained deep learning models that automatically flag suspicious streams and files (fraud detection)
- Developed LLM- and MCP-powered products including real-time Insight Reports
- Structured internal data to build a Knowledge Base for an AI support chatbot
- Led complete revamp of client-facing dashboards and analytics tools
- Created a unified, actionable Entity Relationship Diagram serving as foundation for backend architecture and front-end UX (new types of rights and assets)
- Hands-on Snowflake / SQL analyzing DSP reports (Spotify, YouTube, Meta), turning multivariate data into actionable UX flows

### Utopia Music — Senior PM, R&D · Content Recognition Tech · 2022–2024

- Managed fully remote, distributed team of up to **12 engineers and data scientists**
- Defined priorities and facilitated squad operations to build global music monitoring tech (Back-End, Front-End, R&D, Data)
- **Founded the R&D department** and led it through specs & roadmaps
- Deployed best-in-class **Automatic Content Recognition AI** on **45,000 radios and 1,500 TVs** scanned in real time
- Built wireframes for end-user webapp and dashboards
- Implemented Agile practices and tools (JIRA, Miro, Slack, Scrum)

### BMAT — Product Manager, Music Monitoring & Royalties · France · 2016–2022

- Spearheaded TV and Radio monitoring system for **SPRE** (French neighbouring rights society)
- **Doubled revenues to €500K / year**
- **Reduced costs by 80%** through automations
- Defined specs, built roadmaps, prioritized backlogs, streamlined workflows
- Product Owner on dynamic, complex project — interface between client, engineering, leadership
- Coordinated cross-functional teams (BE, FE, R&D, Operations) within Agile/Scrum
- Recruited and trained team of 5 freelancers
- Attended major industry events for biz dev

### Earlier roles

- Economist, Focus Economics (2015–2016)
- Junior Economist, UN ILO (2014)
- Trainee, European Central Bank (2014)
- Trainee, European Commission (2013)
- Applied quantitative modeling & statistical analysis (Matlab, Stata) to complex datasets
- Automated and restructured data workflows
- Contributed to academic and institutional research used in economic policymaking

---

## Skills

### Product / Strategy

- Music Data, Copyright & Royalty Flows — DDEX/ERN, CMOs/PROs Reporting, DSPs, Distribution
- Agile & Remote Work Tools — JIRA, Miro, Slack, Scrum, Google Suite
- Stakeholder management, roadmap, backlog prioritization

### Data / Analysis

- Data Analysis & BI — Excel, Tableau, Looker Studio, SQL Basics
- Advanced Statistical Analysis — Stata, Eviews, Matlab, Python Basics
- Snowflake (hands-on at Revelator)

### AI / Deep Learning

- Theory & Applications — Linear Algebra, TensorFlow Basics
- Applied LLMs and MCP for product features

### Build / Prototype

- Phone & Web Apps — Figma, Canva, Zeplin, Strapi, Adobe, UI/UX Basics
- Vibe coding — Next.js, React, Tailwind

---

## Consulting work

### ICE — https://www.iceservices.com/

Advised executives on music technology investment decisions.

### Musimap — https://musimap.ai/

Music technology patent advisory for submission and review in the EU and US.

### Allfeat — https://allfeat.org/

Reviewed and edited whitepaper, advised on strategy for blockchain music tech company.

### nestmicrofest.com — http://nestmicrofest.com/

Administrator of the website, handled all payment platforms.

---

## Entrepreneurial projects

### NEST Festival (Founder & CEO)

- €70K+ budget
- 22 artists (8 internationals)
- Direct manager of 11 partners
- Indirect manager of 30+ collaborators
- 500+ guests expected for 5th edition

### CMYK Music YouTube Channel (Founder)

- 70M+ views
- 140K+ subscribers
- Curated music selections / mixes

### Kommuna Events & Label (Co-Founder)

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

## FestiPal (flagship side project)

- Eric had the **idea**, built the **concept**, **mobile app**, **web app**, **website**, **prototypes**, and **front-end** end-to-end
- Looking to launch soon
- GitHub repo exists (Eric to provide URL + screenshots)
- **Should get the largest visual treatment on the site** — proves the "I can build, not just spec" narrative and is the strongest signal for prototype-gig clients

---

## Conventions for AI coding assistants

When extending this site:

1. **Always use CSS variables for colors** (`var(--color-amber)` or Tailwind classes from @theme). Never hardcode hex.
2. **Use Tailwind utilities** `font-display`, `font-body`, `font-mono` — these come from the @theme block in `globals.css`.
3. **Icons**: lucide-react only.
4. **Animations**: Framer Motion. One orchestrated reveal per section, not scattered micro-interactions.
5. **Section anchor IDs** must match the navigation: `#work`, `#consulting`, `#festipal`, `#projects`, `#contact`.
6. **Section header pattern**: `[ NN / Section Name ]` mono label, then Fraunces display title, then optional italic subtitle, then a rule.
7. **Responsive**: Mobile-first, use `md:` breakpoint as default desktop transition.
8. **Copy tone**: confident but not corporate. Music-magazine-meets-product-blog. Use specific numbers (€500K, 45,000 radios, 70M views, 5,000 tracks) — they do the heavy lifting.
9. **No emojis** unless decorative. Use unicode arrows (`→`, `↳`, `↗`) for editorial flavor.
10. **Don't add new fonts** without discussing — three is the limit.
11. **Don't use generic AI portfolio aesthetics** (purple gradients, Space Grotesk, glassmorphism, geometric shapes floating). Stay in the editorial / vinyl lane.
12. **Eric is vibe coding, not engineering** — explain changes in plain language, prefer simple solutions over clever abstractions, and offer file paths + line ranges when suggesting edits.
13. **Project uses `app/` at project root, NOT `src/app/`**. Components live in `app/components/`.

---

## Files in the project

- `app/globals.css` — Tailwind v4 config (`@theme`), color/font tokens, base styles, film-grain texture
- `app/layout.tsx` — Root layout with Fraunces, DM Sans, JetBrains Mono via `next/font/google`
- `app/page.tsx` — Composes all sections
- `app/components/` — All section components

---

## Off-site actions (separate from build)

Freelance platforms to register on, in priority order:

- **Tier 1 (this week)**: Malt (strong in FR/ES), Contra, LinkedIn Open to Work + Services
- **Tier 2 (later)**: Toptal, Wellfound, YunoJuno
- **Tier 3 (specialist)**: Catalant, GLG, AlphaSights — expert networks paying €200–500/hr for music-industry expert calls. Eric's consulting profile (ICE / Musimap / Allfeat) makes him a strong fit.

---

## Asset wishlist (Eric to provide)

- Professional photo for About section (CV photo works as a starting point)
- FestiPal screenshots (mobile app, web app, website, prototypes)
- FestiPal GitHub URL
- NEST Festival photos (best 3–5)
- Vinyl release covers (Kommuna Records)
- CMYK YouTube thumbnails / channel banner
- Kanvas.fm visual identity (from Internet Archive if needed — Wayback Machine has snapshots)
- Logos for ICE, Musimap, Allfeat, nestmicrofest (with permission for case studies)
- Consulting case study confirmation — what Eric is permitted to share publicly about each engagement

---

*Last updated: 2026-05-03. Update this file whenever positioning, content, or conventions change.*
