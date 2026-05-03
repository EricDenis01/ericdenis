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

type Engagement = {
  client: string;
  url: string;
  domain: string;
  scope: string;
  body: string;
};

const ENGAGEMENTS: Engagement[] = [
  {
    client: "ICE",
    url: "https://www.iceservices.com/",
    domain: "iceservices.com",
    scope: "Music-tech investment advisory",
    body: "Advised executives on music-technology investment decisions — evaluating vendors, opportunities, and competitive positioning at the executive level.",
  },
  {
    client: "Musimap",
    url: "https://musimap.ai/",
    domain: "musimap.ai",
    scope: "Patent advisory · EU & US",
    body: "Music-technology patent advisory for submission and review across the EU and US — translating product features into defensible IP.",
  },
  {
    client: "Allfeat",
    url: "https://allfeat.org/",
    domain: "allfeat.org",
    scope: "Whitepaper · strategy · smart contracts",
    body: "Reviewed and edited the whitepaper, advised on strategy for a blockchain music-tech protocol bridging rights-holder data and on-chain primitives. Smart contracts exposure throughout.",
  },
  {
    client: "NEST Microfest",
    url: "http://nestmicrofest.com/",
    domain: "nestmicrofest.com",
    scope: "Site admin + Stripe payments",
    body: "Administrator of the website and operator of the full payment stack — Stripe-powered ticketing turning a small festival operation into a self-serve experience.",
  },
];

export default function Consulting() {
  return (
    <section id="consulting" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="04"
          label="Consulting"
          title={
            <>
              Niche advisory at the
              <br />
              <span className="text-[var(--color-amber)]">executive level</span>.
            </>
          }
          subtitle="Brought in for the corners of music tech most product people never touch — patents, blockchain rights, exec investment calls."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ENGAGEMENTS.map((e, i) => (
            <motion.a
              key={e.client}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              custom={0.1 + i * 0.12}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="group flex flex-col justify-between gap-6 border border-[var(--color-rule)] p-7 transition-colors duration-300 hover:border-[var(--color-paper-muted)] hover:bg-[var(--color-paper)]/[0.02] md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                    style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
                  >
                    {e.client}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-amber)]">
                    {e.scope}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[var(--color-paper-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-amber)]"
                />
              </div>

              <p className="text-base leading-relaxed text-[var(--color-paper-muted)]">
                {e.body}
              </p>

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)]">
                ↗ {e.domain}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          custom={0.6}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-12 max-w-3xl font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)]"
        >
          Available for expert calls, due diligence, and short-term advisory engagements
          → reach out via{" "}
          <a href="#contact" className="text-[var(--color-paper)] underline decoration-[var(--color-amber)] underline-offset-4">
            contact
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
