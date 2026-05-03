"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";
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

type Project = {
  title: string;
  role: string;
  url?: string;
  metrics: { value: string; label: string }[];
  body: string;
  span?: "wide" | "tall";
};

const PROJECTS: Project[] = [
  {
    title: "NEST Festival",
    role: "Founder & CEO",
    metrics: [
      { value: "€70K+", label: "budget" },
      { value: "22", label: "artists · 8 international" },
      { value: "500+", label: "guests · 5th edition" },
    ],
    body: "A boutique festival I founded and lead end-to-end — direct manager of 11 partners, indirect manager of 30+ collaborators. Five editions and counting.",
    span: "wide",
  },
  {
    title: "CMYK Music",
    role: "Founder · YouTube",
    metrics: [
      { value: "79M+", label: "views" },
      { value: "4.3M", label: "hours watched · ~490 yrs" },
      { value: "142K+", label: "subscribers" },
    ],
    body: "Hand-curated music selections and mixes. 4.3 million hours of cumulative attention — roughly 490 years — is the strongest signal: people don't just click, they stay.",
  },
  {
    title: "Kommuna Records & Events",
    role: "Co-founder",
    metrics: [
      { value: "12", label: "vinyl releases" },
      { value: "5,000+", label: "copies sold worldwide" },
      { value: "100+", label: "events / 11 years" },
    ],
    body: "Independent label and event series. Pressing, distribution, A&R, party promotion — every operational lever an indie label has.",
  },
  {
    title: "Kanvas.fm",
    role: "Founder · web radio",
    metrics: [
      { value: "5,000+", label: "hand-curated tracks" },
      { value: "24/7", label: "algorithmic web radio" },
    ],
    body: "Self-hosted Icecast on a VPS, multi-platform distribution (web, YouTube, SoundCloud, Streema, myTuner). Discontinued but a unique selection of mellow grooves.",
  },
];

export default function SideProjects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="06"
          label="Entrepreneurial"
          title={
            <>
              Operator, not just{" "}
              <span className="text-[var(--color-amber)]">observer</span>.
            </>
          }
          subtitle="The other half of the trifecta — the projects I run that put me on the same side of the table as the rights-holders my products serve."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              custom={0.1 + i * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className={`group flex flex-col gap-6 border border-[var(--color-rule)] p-7 transition-colors duration-300 hover:border-[var(--color-paper-muted)] md:p-9 ${
                p.span === "wide" ? "md:col-span-2" : ""
              }`}
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                    style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-amber)]">
                    {p.role}
                  </p>
                </div>
                {p.url ? (
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[var(--color-paper-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                ) : null}
              </header>

              <ul
                className={`grid gap-4 ${
                  p.span === "wide"
                    ? "grid-cols-1 sm:grid-cols-3"
                    : p.metrics.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {p.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="border-l border-[var(--color-rule)] pl-4"
                  >
                    <div
                      className="font-display text-xl leading-none tracking-tight text-[var(--color-paper)] md:text-2xl"
                      style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper-muted)]">
                      {m.label}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-base leading-relaxed text-[var(--color-paper-muted)]">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
