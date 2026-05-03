"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles, Rocket, LayoutTemplate } from "lucide-react";
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

type Service = {
  number: string;
  title: string;
  blurb: string;
  format: string;
  forWho: string;
  proof: string[];
  icon: LucideIcon;
  accent: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Product management",
    blurb:
      "Specs, roadmaps, backlogs, and the calls about what to build next. I write code and run AI evals as part of the work, not instead of it.",
    format: "Full-time · senior consulting",
    forWho: "SaaS in music tech, AI-feature work, anything that needs a senior PM who shows up to the codebase.",
    proof: [
      "Revelator — AI roadmap, LLM/MCP-powered Insight Reports",
      "Utopia — ACR deployed on 45,000 radios",
      "BMAT — SPRE project, €500K/yr, −80% cost",
    ],
    icon: Sparkles,
    accent: "var(--color-amber)",
  },
  {
    number: "02",
    title: "Apps & prototypes",
    blurb:
      "Working software in days, not slides in weeks. Mobile, web, full-stack. Built, deployed, handed over.",
    format: "Project · fixed scope or weekly",
    forWho: "Founders validating an idea, teams that need an MVP yesterday, anyone tired of figma-only handoffs.",
    proof: ["FestiPal — concept, mobile app, web app, prototypes, all mine"],
    icon: Rocket,
    accent: "var(--color-plum)",
  },
  {
    number: "03",
    title: "Websites & UI/UX",
    blurb:
      "Marketing sites, landing pages, Figma-to-React. Designed to convert; shipped to a real domain with a real CMS.",
    format: "Project",
    forWho: "Small-to-mid teams that need a site live this month, or design that needs to become code.",
    proof: [
      "This site (Next.js + Tailwind)",
      "nestmicrofest.com — site + Stripe payments",
      "Strapi · Heroku CMS deployments",
    ],
    icon: LayoutTemplate,
    accent: "var(--color-sage)",
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
              Three ways to{" "}
              <span className="text-[var(--color-amber)]">work together</span>.
            </>
          }
          subtitle="Full-time or per project. Same person, different scope."
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
            <motion.article
              key={s.number}
              custom={0.1 + i * 0.12}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="card-lift flex flex-col gap-7 border border-[var(--color-rule)] p-8 hover:border-[var(--color-paper-muted)] md:p-10 md:gap-8"
            >
              <header className="flex items-start gap-5">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `color-mix(in srgb, ${s.accent} 14%, transparent)`,
                    color: s.accent,
                  }}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: s.accent }}
                  >
                    {s.number}
                  </span>
                  <h3
                    className="mt-2 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-[2.1rem]"
                    style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 80, 'WONK' 0" }}
                  >
                    {s.title}
                  </h3>
                </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
