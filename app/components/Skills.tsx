"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

type Group = {
  label: string;
  body: string;
  items: string[];
};

type Bucket = {
  label: string;
  title: string;
  groups: Group[];
};

const BUCKETS: Bucket[] = [
  {
    label: "Product & AI",
    title: "Senior PM craft, AI on top.",
    groups: [
      {
        label: "Product",
        body: "Roadmaps, specs, backlogs",
        items: [
          "Distributed-team leadership across R&D, Data, Engineering, Design",
          "Stakeholder management, exec storytelling",
          "Discovery, validation, go-to-market",
        ],
      },
      {
        label: "AI in production",
        body: "LLMs, MCP, RAG",
        items: [
          "Production deployments at Revelator (Insight Reports, knowledge base)",
          "Deep learning models for fraud detection",
          "AI-augmented PM workflows: Cursor, Claude Code, ChatGPT",
        ],
      },
      {
        label: "Music-tech specialism",
        body: "Where the rights live",
        items: [
          "DDEX / ERN, CMOs / PROs reporting",
          "DSPs: Spotify, YouTube, Meta, Apple",
          "Automatic Content Recognition, royalty + rights flows",
          "Web3 + smart contracts for music (Allfeat)",
        ],
      },
    ],
  },
  {
    label: "Build & ship",
    title: "Vibe-coding to live URL.",
    groups: [
      {
        label: "Front-end",
        body: "Pixel-perfect, fast",
        items: [
          "Next.js · React · TypeScript · Tailwind · Framer Motion",
          "Figma · UI / UX · component systems",
          "Mobile + web prototypes",
        ],
      },
      {
        label: "Backends + integrations",
        body: "Wiring it together",
        items: [
          "REST · OpenAPI / Swagger · OAuth · webhooks",
          "Stripe (payments), Docusign (e-signature)",
          "WordPress · Strapi · Supabase · Firebase",
          "Vercel · Netlify · Cloud Functions",
        ],
      },
      {
        label: "Data hands-on",
        body: "Numbers into UX",
        items: [
          "Snowflake, SQL on DSP reports",
          "Tableau, Looker Studio, ERD modelling",
        ],
      },
    ],
  },
  {
    label: "Conversational",
    title: "What I plug into.",
    groups: [
      {
        label: "Platform engineering",
        body: "Working knowledge",
        items: [
          "GCP · AWS basics · Kubernetes · Docker",
          "Firebase / Firestore · Cloud Functions",
          "Vector databases (Milvus), AI evals",
          "Comfortable in conversations with platform eng — not building it solo",
        ],
      },
      {
        label: "Data + research basics",
        body: "Read it, ask the right Qs",
        items: [
          "Python · BigQuery · TensorFlow (basics)",
          "Stata · Eviews · Matlab (econ background)",
        ],
      },
      {
        label: "Ways of working",
        body: "How I plug into eng teams",
        items: [
          "Git / GitHub flow · feature branches · PR-driven dev · code review",
          "Async-first · distributed teams across timezones · Agile / Scrum",
          "JIRA · Linear · Notion · Miro · Slack · VS Code",
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="07"
          label="Stack & specialisms"
          title={
            <>
              The <span className="text-[var(--color-amber)]">toolkit</span>.
            </>
          }
          subtitle="Three lanes: senior PM craft, hands-on building, and the things I'm conversational about. Honest qualifiers — 'basics' means basics. No inflation."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {BUCKETS.map((b, i) => (
            <motion.article
              key={b.label}
              custom={0.1 + i * 0.12}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="card-lift flex flex-col gap-7 border border-[var(--color-rule)] p-7 hover:border-[var(--color-paper-muted)] md:p-8"
            >
              <header className="border-b border-[var(--color-rule)] pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                  0{i + 1} / {b.label}
                </span>
                <h3
                  className="mt-3 font-display text-2xl leading-snug tracking-tight text-[var(--color-paper)] md:text-[1.7rem]"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
                >
                  {b.title}
                </h3>
              </header>

              <div className="flex flex-col gap-6">
                {b.groups.map((g) => (
                  <div key={g.label}>
                    <div className="mb-2 flex items-baseline gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper)]">
                        {g.label}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
                        — {g.body}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-sm leading-relaxed text-[var(--color-paper-muted)]">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5">
                          <span className="mt-2 inline-block h-px w-2 shrink-0 bg-[var(--color-paper-muted)]" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
