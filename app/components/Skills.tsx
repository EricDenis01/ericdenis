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

type Bucket = {
  label: string;
  title: string;
  items: string[];
};

const BUCKETS: Bucket[] = [
  {
    label: "AI-augmented PM",
    title: "Ship AI features. Multiply PM craft.",
    items: [
      "LLMs · MCP · RAG in production",
      "AI evals",
      "Vector databases (Milvus)",
      "AI-augmented workflows · Cursor · Claude Code · ChatGPT",
      "Roadmaps · specs · backlogs",
      "Distributed-team leadership",
    ],
  },
  {
    label: "Music-tech domain",
    title: "Where the rights live.",
    items: [
      "DDEX / ERN",
      "CMOs / PROs reporting",
      "DSPs — Spotify, YouTube, Meta, Apple",
      "Automatic Content Recognition",
      "Royalty & rights flows",
      "Web3 + smart contracts for music (Allfeat)",
    ],
  },
  {
    label: "APIs & integrations",
    title: "Wiring systems together.",
    items: [
      "REST",
      "OpenAPI / Swagger",
      "Postman",
      "OAuth · webhooks",
      "Stripe (payment processing)",
      "Docusign · ERD modelling",
    ],
  },
  {
    label: "Build & deploy",
    title: "From Figma to live URL.",
    items: [
      "Next.js · React · TypeScript",
      "Tailwind · Framer Motion",
      "Figma · UI / UX",
      "WordPress · Strapi (headless CMS)",
      "Vercel · Netlify · Supabase",
      "Mobile + web prototypes",
    ],
  },
  {
    label: "Data",
    title: "Numbers into UX.",
    items: [
      "Snowflake",
      "BigQuery (basics)",
      "SQL",
      "Python (basics)",
      "TensorFlow (basics)",
      "Tableau · Looker Studio · Stata",
    ],
  },
  {
    label: "Infrastructure literacy",
    title: "Conversational, not expert.",
    items: [
      "GCP (working knowledge)",
      "Kubernetes (working knowledge)",
      "Docker (working knowledge)",
      "Comfortable in conversations with platform engineering",
    ],
  },
  {
    label: "Ways of working",
    title: "How I plug into eng teams.",
    items: [
      "Git / GitHub flow · feature branches · PR-driven dev",
      "Code review · semantic versioning",
      "Async-first · distributed teams across timezones",
      "Agile / Scrum",
      "JIRA · Linear · Notion · Miro · Slack · VS Code",
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
          subtitle="Honest qualifiers — 'basics' means basics. No inflation."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {BUCKETS.map((b, i) => (
            <motion.article
              key={b.label}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="border-t border-[var(--color-rule)] pt-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                0{i + 1} / {b.label}
              </span>
              <h3
                className="mt-4 font-display text-xl leading-snug tracking-tight text-[var(--color-paper)] md:text-2xl"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
              >
                {b.title}
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-paper-muted)]">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--color-paper-muted)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
