"use client";

import Link from "next/link";
import Image from "next/image";
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

const SCOPE = [
  { tag: "Idea & concept", body: "From blank page to validated product." },
  { tag: "Web — festipal.io", body: "Next.js 16, App Router, Tailwind v4, Firebase Hosting + SSR." },
  { tag: "Mobile — app.festipal.io", body: "React Native + Expo, multi-language, role-based perms." },
  { tag: "Tickets — tickets.festipal.io", body: "Host-routed B2C consumer surface." },
  { tag: "FestiLink directory", body: "Marketplace connecting organizers ↔ suppliers ↔ venues." },
  { tag: "Front-end + UI/UX", body: "Pixel-perfect, light + dark, multi-language (5)." },
];

const STACK = [
  "Next.js 16",
  "React 19",
  "React Native + Expo",
  "Tailwind v4",
  "TypeScript",
  "Firebase Auth + Firestore",
  "Cloud Functions (SSR)",
  "Resend",
  "Stripe",
];

export default function FestiPal() {
  return (
    <section
      id="festipal"
      className="relative border-y border-[var(--color-rule)] bg-[var(--color-paper)]/[0.015] px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="05"
          label="Flagship · FestiPal"
          title={
            <>
              I had the idea.
              <br />
              I <span className="text-[var(--color-amber)]">built it</span>.
            </>
          }
          subtitle="An event management operating system for festival organizers, suppliers, venues, and talent — with a B2C ticketing layer. Concept, web, mobile, prototypes, and front-end, all built end-to-end. Launching soon."
        />

        {/* Hero screenshot */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="relative mb-16 overflow-hidden border border-[var(--color-rule)] bg-[var(--color-ink)]"
        >
          <Image
            src="/festipal/welcome-desktop.png"
            alt="FestiPal onboarding — welcome screen, dark mode, desktop"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </motion.div>

        {/* Description + scope grid */}
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
              FestiPal is the operating system for the modern festival —
              connecting organizers, suppliers, venues, and talent in one
              workspace, plus a consumer ticketing layer on top.
            </motion.p>
            <motion.p
              custom={0.4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-paper-muted)]"
            >
              Three host-routed surfaces on one Next.js codebase:{" "}
              <span className="text-[var(--color-paper)]">festipal.io</span> for
              B2B marketing + workspace,{" "}
              <span className="text-[var(--color-paper)]">app.festipal.io</span>{" "}
              for the Expo mobile + web app, and{" "}
              <span className="text-[var(--color-paper)]">tickets.festipal.io</span>{" "}
              for consumer ticketing. Firebase backend, multi-language (EN / FR / DE / ES / IT),
              role-based permissions, Stripe + Resend integrations.
            </motion.p>
            <motion.p
              custom={0.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-paper-muted)]"
            >
              I had the idea, defined the concept, designed the workspace, built
              the front-end, and wired the prototypes — all bridged by my decade
              of music-tech product work and my decade of running festivals as
              CEO of NEST.
            </motion.p>

            <motion.div
              custom={0.65}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="https://github.com/FestiPal"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-[var(--color-paper-muted)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)] transition-colors duration-300 hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
              >
                <GithubIcon size={14} />
                github.com/FestiPal
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)]">
                festipal.io · launching soon
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

        {/* Secondary screenshots */}
        <motion.div
          custom={0.55}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6"
        >
          <div className="overflow-hidden border border-[var(--color-rule)] bg-[var(--color-ink)]">
            <Image
              src="/festipal/signup-desktop.png"
              alt="FestiPal sign-up flow"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden border border-[var(--color-rule)] bg-[var(--color-ink)]">
            <Image
              src="/festipal/done-desktop.png"
              alt="FestiPal completed onboarding"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden border border-[var(--color-rule)] bg-[var(--color-ink)]">
            <Image
              src="/festipal/welcome-mobile.png"
              alt="FestiPal mobile onboarding"
              width={750}
              height={1334}
              className="h-auto w-full"
            />
          </div>
        </motion.div>

        {/* Tech stack strip */}
        <motion.div
          custom={0.7}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-rule)] pt-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
            Stack →
          </span>
          {STACK.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper-dim)]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
