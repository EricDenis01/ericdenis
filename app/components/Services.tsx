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

type Service = {
  number: string;
  title: string;
  blurb: string;
  format: string;
  forWho: string;
  proof: string[];
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "AI-augmented product management",
    blurb:
      "Roadmaps, specs, backlogs, cross-functional team leadership — multiplied by AI tooling, and shipping AI features into production.",
    format: "Full-time roles · senior consulting",
    forWho: "SaaS companies (B2B / B2C), music-tech, AI-feature-heavy products",
    proof: [
      "Revelator AI roadmap",
      "Utopia ACR scaled to 45,000 radios",
      "BMAT €500K SPRE project, −80% cost",
    ],
  },
  {
    number: "02",
    title: "Apps & prototypes",
    blurb:
      "SaaS web apps, mobile apps, interactive prototypes, MVPs — vibe-coded fast, designed to validate ideas in market.",
    format: "Project-based engagements",
    forWho: "Founders, startups, internal innovation teams, validation projects",
    proof: ["FestiPal — concept → mobile app → web app → prototype, end-to-end"],
  },
  {
    number: "03",
    title: "Websites & UI/UX",
    blurb:
      "Marketing sites, portfolios, landing pages, Figma-to-React, component systems — shipped fast, designed to convert.",
    format: "Project-based engagements",
    forWho: "Small-to-mid teams who need a real site shipped fast, or design-to-code work",
    proof: [
      "This portfolio (Next.js + Tailwind, vibe-coded)",
      "nestmicrofest.com administration",
      "Strapi / Heroku CMS deployments",
    ],
  },
  {
    number: "04",
    title: "Music-tech advisory",
    blurb:
      "Patent advisory, investment due diligence, whitepaper review, royalty / rights strategy — delivered at the executive level.",
    format: "Referral · retainer · expert networks (Catalant, GLG, AlphaSights)",
    forWho:
      "Investors, music-tech startups, rights organizations, blockchain-music projects",
    proof: [
      "ICE — investment advisory",
      "Musimap — patent advisory EU/US",
      "Allfeat — whitepaper, strategy, smart contracts",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="02"
          label="Services"
          title={
            <>
              How I can{" "}
              <span className="text-[var(--color-amber)]">work with you</span>.
            </>
          }
          subtitle="Four offerings, two doors. Pick the lane that fits — full-time, project, or advisory."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.number}
              custom={0.1 + i * 0.12}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="flex flex-col gap-6 border border-[var(--color-rule)] p-7 transition-colors duration-300 hover:border-[var(--color-paper-muted)] md:p-9"
            >
              <header>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                  Offering {s.number}
                </span>
                <h3
                  className="mt-3 font-display text-2xl leading-tight tracking-tight text-[var(--color-paper)] md:text-3xl"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
                >
                  {s.title}
                </h3>
              </header>

              <p className="text-base leading-relaxed text-[var(--color-paper-muted)]">
                {s.blurb}
              </p>

              <dl className="grid gap-3 border-t border-[var(--color-rule)] pt-5 text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)] sm:w-20 sm:shrink-0">
                    For
                  </dt>
                  <dd className="text-[var(--color-paper-muted)]">{s.forWho}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)] sm:w-20 sm:shrink-0">
                    Format
                  </dt>
                  <dd className="text-[var(--color-paper-muted)]">{s.format}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)] sm:w-20 sm:shrink-0">
                    Proof
                  </dt>
                  <dd>
                    <ul className="space-y-1 text-[var(--color-paper-muted)]">
                      {s.proof.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-[var(--color-amber)]">↳</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
