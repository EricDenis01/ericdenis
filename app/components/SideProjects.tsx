"use client";

import { motion } from "framer-motion";
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

type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  role: string;
  metrics: { value: string; label: string }[];
  body: string;
  links: ProjectLink[];
  span?: "wide" | "tall";
};

const PROJECTS: Project[] = [
  {
    title: "NEST Festival",
    role: "Founder & CEO · 5 editions",
    metrics: [
      { value: "€70K+", label: "annual budget" },
      { value: "8", label: "partner-leads" },
      { value: "50+", label: "staff + volunteers" },
      { value: "30", label: "artists · latest edition" },
      { value: "500+", label: "attendees" },
      { value: "5 / 5", label: "editions delivered" },
    ],
    body:
      "A boutique micro-festival in the hills of Alt Penedès, an hour outside Barcelona — vineyards, pine forests, 12–14 June 2026 for the 5th edition. I founded it and run it as CEO. I built the entire operating system from scratch — people management, ops control, production roadmap, partner workflows, single point of contact for every external stakeholder. Eight partner leads each run their own track (operations, marketing, decoration, artist relations, bar, food, logistics, production), with 50+ staff and volunteers reporting in. This is a real entrepreneurial operation, not a side project.",
    links: [
      { label: "nestmicrofest.com", href: "http://nestmicrofest.com/" },
      { label: "@nestmicrofest", href: "https://instagram.com/nestmicrofest" },
    ],
    span: "wide",
  },
  {
    title: "CMYK Music",
    role: "Founder · YouTube + DJ alias",
    metrics: [
      { value: "79M+", label: "views" },
      { value: "4.3M", label: "hours watched · ~490 yrs" },
      { value: "142K+", label: "subscribers" },
    ],
    body:
      "Started in Brussels in 2013 to share vinyl rips that weren't online — grown into one of the bigger curated channels for house, UK garage, and funky electro. Heavy on 1996–2006 archival material plus contemporary demos. 4.3 million hours of cumulative attention is the strongest signal: people don't just click, they stay.",
    links: [
      { label: "soundcloud.com/cmykitsme", href: "https://soundcloud.com/cmykitsme" },
    ],
  },
  {
    title: "Kommuna Records & Events",
    role: "Co-founder · Barcelona, since 2015",
    metrics: [
      { value: "12", label: "vinyl releases" },
      { value: "5,000+", label: "copies sold worldwide" },
      { value: "100+", label: "events / 11 years" },
    ],
    body:
      "Independent label and event series in Barcelona, co-curated with pekkuliar. Vinyl-focused releases (KMN001 → KMN012), event bookings including Vera, XDB, El-B, Cassy, Voigtmann. Pressing, distribution, A&R, party promotion — every operational lever an indie label has.",
    links: [
      { label: "@kommunabcn", href: "https://www.instagram.com/kommunabcn/" },
      { label: "soundcloud.com/kommunabcn", href: "http://soundcloud.com/kommunabcn" },
      { label: "discogs", href: "https://www.discogs.com/label/1587128-Kommuna" },
    ],
  },
  {
    title: "Kanvas.fm",
    role: "Founder · web radio",
    metrics: [
      { value: "5,000+", label: "hand-curated tracks" },
      { value: "24/7", label: "algorithmic web radio" },
    ],
    body:
      "A unique selection of mellow grooves. Self-hosted Icecast on a VPS, multi-platform distribution (web stream, YouTube algorithmic segments, SoundCloud archive), listed on Streema and myTuner. Discontinued as a station but the selection lives on through my chillout DJ sets around the EU.",
    links: [
      { label: "@kanvasfm", href: "https://www.instagram.com/kanvasfm/" },
      { label: "soundcloud.com/kanvasfm", href: "https://soundcloud.com/kanvasfm" },
    ],
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
              <header>
                <h3
                  className="font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                  style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-amber)]">
                  {p.role}
                </p>
              </header>

              <ul
                className={`grid gap-4 ${
                  p.span === "wide"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
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

              {p.links.length > 0 ? (
                <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-rule)] pt-4">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper)] transition-colors duration-300 hover:text-[var(--color-amber)]"
                      >
                        ↗ {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
