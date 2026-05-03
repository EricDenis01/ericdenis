"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

type Role = {
  company: string;
  role: string;
  years: string;
  hook: string;
  metrics: { value: string; label: string }[];
  bullets: string[];
};

const ROLES: Role[] = [
  {
    company: "Revelator",
    role: "Senior PM — AI & Distribution Data Analytics",
    years: "2024 — 2025",
    hook: "Led the AI roadmap end-to-end. Trained fraud-detection deep learning models, shipped LLM/MCP-powered Insight Reports, rebuilt client-facing analytics from the data model up.",
    metrics: [
      { value: "LLM + MCP", label: "shipped to production" },
      { value: "Snowflake", label: "hands-on SQL on DSP reports" },
      { value: "1 unified", label: "ERD for the whole platform" },
    ],
    bullets: [
      "Audited internal systems and customer workflows to identify high-impact AI opportunities",
      "Trained DL models that flag suspicious streams and files (fraud detection)",
      "Structured internal data into a Knowledge Base for an AI support chatbot",
      "Hands-on Snowflake / SQL on Spotify, YouTube, Meta DSP reports",
    ],
  },
  {
    company: "Utopia Music",
    role: "Senior PM, R&D — Content Recognition Tech",
    years: "2022 — 2024",
    hook: "Founded the R&D department. Managed a fully-remote 12-person squad of engineers and data scientists. Deployed best-in-class ACR AI at industrial scale.",
    metrics: [
      { value: "45,000", label: "radios scanned in real time" },
      { value: "1,500", label: "TVs scanned in real time" },
      { value: "12", label: "engineers + data scientists managed" },
    ],
    bullets: [
      "Founded the R&D department; led specs, roadmaps, squad operations",
      "Deployed best-in-class Automatic Content Recognition AI at scale",
      "Built wireframes for end-user webapp and dashboards",
      "Implemented Agile practices across distributed teams (JIRA, Miro, Slack, Scrum)",
    ],
  },
  {
    company: "BMAT",
    role: "Product Manager — Music Monitoring & Royalties · France",
    years: "2016 — 2022",
    hook: "Spearheaded the TV and Radio monitoring system for SPRE — the French neighbouring rights society. Doubled their revenue, slashed cost, defined the product end-to-end.",
    metrics: [
      { value: "€500K", label: "annual revenue, 2× growth" },
      { value: "−80%", label: "cost reduction via automation" },
      { value: "5", label: "freelancers recruited & trained" },
    ],
    bullets: [
      "Product Owner — interface between client, engineering, and leadership",
      "Defined specs, roadmaps, prioritized backlogs, streamlined workflows",
      "Coordinated cross-functional teams (BE, FE, R&D, Operations) in Agile/Scrum",
      "Attended major industry events for biz dev",
    ],
  },
];

function Card({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      custom={0.1 + index * 0.1}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={REVEAL}
      className="group grid gap-8 border-t border-[var(--color-rule)] py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-14"
    >
      <header className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">
          {role.years}
        </span>
        <h3
          className="font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
          style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
        >
          {role.company}
        </h3>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-paper-muted)]">
          {role.role}
        </p>
      </header>

      <div className="flex flex-col gap-8">
        <p className="font-display text-xl italic leading-snug text-[var(--color-paper)] md:text-2xl"
           style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 60, 'WONK' 0" }}>
          {role.hook}
        </p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {role.metrics.map((m) => (
            <li key={m.label} className="border-l border-[var(--color-rule)] pl-4">
              <div
                className="font-display text-2xl leading-none tracking-tight text-[var(--color-amber)] md:text-3xl"
                style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 80, 'WONK' 0" }}
              >
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper-muted)]">
                {m.label}
              </div>
            </li>
          ))}
        </ul>

        <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-paper-muted)] md:text-base">
          {role.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--color-amber)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="03"
          label="Selected work"
          title={
            <>
              Three companies.
              <br />
              <span className="text-[var(--color-amber)]">Ten years</span>.
            </>
          }
          subtitle="Music-rights monitoring, content recognition, AI roadmaps. The full stack."
        />

        <div>
          {ROLES.map((role, i) => (
            <Card key={role.company} role={role} index={i} />
          ))}
        </div>

        <motion.p
          custom={0.5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-10 border-t border-[var(--color-rule)] pt-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)]"
        >
          Earlier roles → Focus Economics, UN ILO, European Central Bank, European Commission.
        </motion.p>
      </div>
    </section>
  );
}
