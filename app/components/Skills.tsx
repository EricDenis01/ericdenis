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
    label: "Product",
    title: "Strategy & delivery",
    items: [
      "Roadmap & backlog prioritization",
      "Stakeholder management",
      "Agile / Scrum at scale",
      "Distributed remote squads",
      "JIRA · Miro · Slack · Google Suite",
      "Wireframes · Figma · Zeplin",
    ],
  },
  {
    label: "Music-tech domain",
    title: "Where the rights live",
    items: [
      "Royalty flows · CMOs · PROs",
      "DDEX / ERN reporting",
      "Distribution & DSP analytics",
      "Content recognition / ACR",
      "Copyright & neighbouring rights",
      "Snowflake on Spotify / YouTube / Meta data",
    ],
  },
  {
    label: "Build / AI",
    title: "Ship + apply ML",
    items: [
      "Next.js · React · Tailwind",
      "Vibe-coding mobile + web prototypes",
      "Applied LLMs · MCP · RAG",
      "Deep learning fundamentals · TensorFlow",
      "SQL · Python basics",
      "Stata · Matlab · Eviews (quant background)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="06"
          label="Skills & Stack"
          title={
            <>
              The toolkit, in <span className="text-[var(--color-amber)]">three buckets</span>.
            </>
          }
          subtitle="Product strategy, music-tech domain depth, and the actual ability to build the thing."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {BUCKETS.map((b, i) => (
            <motion.article
              key={b.label}
              custom={0.1 + i * 0.12}
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
                className="mt-4 font-display text-2xl leading-snug tracking-tight text-[var(--color-paper)] md:text-3xl"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
              >
                {b.title}
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-paper-muted)] md:text-base">
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
