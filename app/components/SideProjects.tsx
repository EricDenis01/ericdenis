"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sun, Disc3, Music2, Radio, ArrowUpRight } from "lucide-react";
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

type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  role: string;
  metrics: { value: string; label: string }[];
  body: string;
  primary: { label: string; href: string };
  links: ProjectLink[];
  icon: LucideIcon;
  accent: string;
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
      "A boutique micro-festival in the hills of Alt Penedès, an hour outside Barcelona — vineyards, pine forests, 12–14 June 2026 for the 5th edition. I built the operating system from scratch — people management, ops control, production roadmap, partner workflows, single point of contact for every external stakeholder.",
    primary: { label: "nestmicrofest.com", href: "http://nestmicrofest.com/" },
    links: [{ label: "@nestmicrofest", href: "https://instagram.com/nestmicrofest" }],
    icon: Sun,
    accent: "var(--color-amber)",
    span: "wide",
  },
  {
    title: "CMYK Music",
    role: "Founder · YouTube + DJ alias",
    metrics: [
      { value: "79M+", label: "views" },
      { value: "4.3M", label: "hours · ~490 yrs" },
      { value: "142K+", label: "subscribers" },
    ],
    body:
      "Started in Brussels in 2013 to share vinyl rips that weren't online. Grown into one of the bigger curated channels for house, UK garage, and funky electro — heavy on 1996–2006 archival material plus contemporary demos.",
    primary: { label: "soundcloud.com/cmykitsme", href: "https://soundcloud.com/cmykitsme" },
    links: [],
    icon: Disc3,
    accent: "var(--color-plum)",
  },
  {
    title: "Kommuna Records & Events",
    role: "Co-founder · Barcelona, since 2015",
    metrics: [
      { value: "12", label: "vinyl releases" },
      { value: "5,000+", label: "copies sold" },
      { value: "100+", label: "events / 11 yrs" },
    ],
    body:
      "Independent label and event series in Barcelona, co-curated with pekkuliar. Vinyl-focused releases (KMN001 → KMN012), event bookings including Vera, XDB, El-B, Cassy, Voigtmann. Pressing, distribution, A&R, party promotion — every operational lever an indie label has.",
    primary: { label: "@kommunabcn", href: "https://www.instagram.com/kommunabcn/" },
    links: [
      { label: "soundcloud", href: "http://soundcloud.com/kommunabcn" },
      { label: "discogs", href: "https://www.discogs.com/label/1587128-Kommuna" },
    ],
    icon: Music2,
    accent: "var(--color-sage)",
  },
  {
    title: "Kanvas.fm",
    role: "Founder · web radio",
    metrics: [
      { value: "5,000+", label: "hand-curated tracks" },
      { value: "Up to 500+", label: "monthly listeners" },
      { value: "24/7", label: "algorithmic radio" },
    ],
    body:
      "A unique selection of mellow grooves. Self-hosted Icecast on a VPS, multi-platform distribution (web stream, YouTube algorithmic segments, SoundCloud archive). Discontinued as a station but the selection lives on through my chillout DJ sets around the EU.",
    primary: { label: "@kanvasfm", href: "https://www.instagram.com/kanvasfm/" },
    links: [
      { label: "soundcloud", href: "https://soundcloud.com/kanvasfm" },
    ],
    icon: Radio,
    accent: "var(--color-amber-warm)",
  },
];

export default function SideProjects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="06"
          label="Side projects"
          title={
            <>
              Off the{" "}
              <span className="gradient-text">clock</span>.
            </>
          }
          subtitle="A festival, a record label, a YouTube channel, a web radio. The reason my product instincts are where they are."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                custom={0.1 + i * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={REVEAL}
                className={`card-lift group relative flex flex-col gap-6 border border-[var(--color-rule)] p-7 md:p-9 ${
                  p.span === "wide" ? "md:col-span-2" : ""
                }`}
              >
                <header className="flex items-start gap-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-12"
                    style={{
                      background: `color-mix(in srgb, ${p.accent} 14%, transparent)`,
                      color: p.accent,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                      style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
                    >
                      {/* Stretched primary link — covers whole card */}
                      <a
                        href={p.primary.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative outline-none before:absolute before:inset-0 before:content-[''] before:z-[1] focus-visible:underline"
                        aria-label={`${p.title} — open ${p.primary.label}`}
                      >
                        {p.title}
                      </a>
                    </h3>
                    <p
                      className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em]"
                      style={{ color: p.accent }}
                    >
                      {p.role}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[var(--color-paper-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
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

                {/* Footer link strip — primary + secondary, all clickable above the stretched-link layer */}
                <ul className="relative z-[2] flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-rule)] pt-4">
                  <li>
                    <a
                      href={p.primary.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper)] transition-colors duration-300 hover:text-[var(--color-amber)]"
                    >
                      ↗ {p.primary.label}
                    </a>
                  </li>
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-muted)] transition-colors duration-300 hover:text-[var(--color-amber)]"
                      >
                        ↗ {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
