"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.04c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-1.97c-3.2.7-3.87-1.55-3.87-1.55-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.3-5.24-1.29-5.24-5.74 0-1.27.45-2.31 1.18-3.13-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.18 1.19a10.95 10.95 0 0 1 5.78 0c2.21-1.5 3.18-1.19 3.18-1.19.62 1.61.23 2.8.11 3.1.74.82 1.18 1.86 1.18 3.13 0 4.46-2.7 5.43-5.27 5.72.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.45 23.5 17.13 23.5 12.04 23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}
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

const SCOPE = [
  { tag: "Concept", body: "From blank page to validated product idea." },
  { tag: "Mobile app", body: "Native-feeling experience, end-to-end." },
  { tag: "Web app", body: "Full-stack flows for festival-goers." },
  { tag: "Marketing site", body: "Landing, copy, design, deploy." },
  { tag: "Prototypes", body: "Figma to working code, fast." },
  { tag: "Front-end", body: "Pixel-perfect implementation." },
];

export default function FestiPal() {
  return (
    <section
      id="festipal"
      className="relative border-y border-[var(--color-rule)] bg-[var(--color-paper)]/[0.015] px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="04"
          label="Flagship · FestiPal"
          title={
            <>
              I had the idea.
              <br />
              I <span className="text-[var(--color-amber)]">built it</span>.
            </>
          }
          subtitle="The proof I'm not just a spec-writer. FestiPal — concept, mobile app, web app, marketing site, prototypes, and front-end — all built end-to-end. Launching soon."
        />

        {/* Hero placeholder — Eric to drop a real device mock or screenshot here */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="relative mb-16 aspect-[16/9] w-full overflow-hidden border border-[var(--color-rule)] bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-ink)] to-[#1a0f0d]"
        >
          {/* Centered placeholder treatment — replaced once Eric provides screenshots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-tight text-[var(--color-paper)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                Festi<span className="text-[var(--color-amber)]">Pal</span>
              </div>
              <p
                className="mt-6 font-display text-xl italic text-[var(--color-paper-muted)] md:text-2xl"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
              >
                Your festival, in your pocket.
              </p>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-dim)]">
                ↳ Screenshots & device mocks coming soon
              </p>
            </div>
          </div>
          {/* Decorative grid lines */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <motion.h3
              custom={0.2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]"
            >
              What it is
            </motion.h3>
            <motion.p
              custom={0.3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-4 font-display text-2xl leading-snug text-[var(--color-paper)] md:text-3xl"
              style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
            >
              A companion app for festival-goers — schedules, line-ups, social,
              and on-site experience, designed by someone who actually runs
              festivals.
            </motion.p>
            <motion.p
              custom={0.4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-paper-muted)]"
            >
              FestiPal is the bridge between my decade of music-tech product work
              and my decade of running events as CEO of NEST Festival. Every flow
              is shaped by what real festival-goers (and organizers) actually
              need on the ground.
            </motion.p>

            <motion.div
              custom={0.55}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-[var(--color-paper-muted)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)] transition-colors duration-300 hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
              >
                <GithubIcon size={14} />
                View on GitHub
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)]">
                Repo URL → coming soon
              </span>
            </motion.div>
          </div>

          <motion.ul
            custom={0.4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="grid gap-4 self-start"
          >
            <li className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
              Built top to bottom →
            </li>
            {SCOPE.map((s) => (
              <li
                key={s.tag}
                className="flex items-start gap-4 border-t border-[var(--color-rule)] pt-3"
              >
                <span className="mt-1 inline-block h-px w-4 shrink-0 bg-[var(--color-amber)]" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)]">
                    {s.tag}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-paper-muted)]">
                    {s.body}
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
