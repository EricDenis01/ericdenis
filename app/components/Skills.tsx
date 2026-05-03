"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Brain, Hammer, MessagesSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

type Group = {
  label: string;
  hook: string;
  items: string[];
};

type Bucket = {
  label: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  groups: Group[];
};

const BUCKETS: Bucket[] = [
  {
    label: "Product & AI",
    title: "Senior PM craft, AI on top.",
    icon: Brain,
    accent: "var(--color-amber)",
    groups: [
      {
        label: "Product",
        hook: "Roadmaps, specs, backlogs",
        items: [
          "Distributed-team leadership across R&D, Data, Engineering, Design",
          "Stakeholder management · exec storytelling",
          "Discovery · validation · go-to-market",
        ],
      },
      {
        label: "AI in production",
        hook: "LLMs, MCP, RAG",
        items: [
          "Insight Reports + AI knowledge base shipped at Revelator",
          "Deep-learning fraud detection on stream/file data",
          "AI-augmented PM workflows · Cursor · Claude Code · ChatGPT",
        ],
      },
      {
        label: "Music-tech specialism",
        hook: "Where the rights live",
        items: [
          "DDEX / ERN · CMOs / PROs reporting",
          "DSPs: Spotify · YouTube · Meta · Apple",
          "Automatic Content Recognition · royalty + rights flows",
          "Web3 + smart contracts for music (Allfeat)",
        ],
      },
    ],
  },
  {
    label: "Build & ship",
    title: "Vibe-coding to live URL.",
    icon: Hammer,
    accent: "var(--color-plum)",
    groups: [
      {
        label: "Front-end",
        hook: "Pixel-perfect, fast",
        items: [
          "Next.js · React · TypeScript · Tailwind · Framer Motion",
          "Figma · UI / UX · component systems",
          "Mobile + web prototypes",
        ],
      },
      {
        label: "Backends + integrations",
        hook: "Wiring it together",
        items: [
          "REST · OpenAPI / Swagger · OAuth · webhooks",
          "Stripe (payments) · Docusign (e-signature)",
          "WordPress · Strapi · Supabase · Firebase",
          "Vercel · Netlify · Cloud Functions",
        ],
      },
      {
        label: "Data hands-on",
        hook: "Numbers into UX",
        items: [
          "Snowflake · SQL on DSP reports",
          "Tableau · Looker Studio · ERD modelling",
        ],
      },
    ],
  },
  {
    label: "Conversational",
    title: "What I plug into.",
    icon: MessagesSquare,
    accent: "var(--color-sage)",
    groups: [
      {
        label: "Platform engineering",
        hook: "Working knowledge",
        items: [
          "GCP · AWS basics · Kubernetes · Docker",
          "Firebase / Firestore · Cloud Functions",
          "Vector databases (Milvus) · AI evals",
          "Comfortable in conversations with platform eng — not building it solo",
        ],
      },
      {
        label: "Data + research basics",
        hook: "Read it, ask the right Qs",
        items: [
          "Python · BigQuery · TensorFlow (basics)",
          "Stata · Eviews · Matlab (econ background)",
        ],
      },
      {
        label: "Ways of working",
        hook: "How I plug into eng teams",
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
              The <span className="gradient-text">toolkit</span>.
            </>
          }
          subtitle="Three lanes — senior PM craft, hands-on building, and the things I'm conversational about. Honest qualifiers — 'basics' means basics."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-7">
          {BUCKETS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.article
                key={b.label}
                custom={0.1 + i * 0.12}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={REVEAL}
                className="card-lift relative flex flex-col gap-7 border border-[var(--color-rule)] p-7 md:p-8"
              >
                <header className="flex items-start gap-5 border-b border-[var(--color-rule)] pb-6">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${b.accent} 12%, transparent)`,
                      color: b.accent,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: b.accent }}
                    >
                      0{i + 1} / {b.label}
                    </span>
                    <h3
                      className="mt-2 font-display text-[1.7rem] leading-tight tracking-tight text-[var(--color-paper)]"
                      style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
                    >
                      {b.title}
                    </h3>
                  </div>
                </header>

                <div className="flex flex-col gap-6">
                  {b.groups.map((g) => (
                    <div key={g.label}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper)]">
                          {g.label}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
                          {g.hook}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {g.items.map((it) => (
                          <li
                            key={it}
                            className="text-sm leading-relaxed text-[var(--color-paper-muted)]"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
