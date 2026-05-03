"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Variants } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40"
    >
      {/* Decorative spinning vinyl — anchored top-right, peeks behind the name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
        animate={{ opacity: 0.55, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: EASE, delay: 0.4 }}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 z-0 h-[420px] w-[420px] md:-right-16 md:top-24 md:h-[560px] md:w-[560px]"
      >
        <div className="vinyl h-full w-full" />
      </motion.div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        {/* Eyebrow rule */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="show"
          variants={REVEAL}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-paper-muted)]"
        >
          <span className="h-px w-8 bg-[var(--color-paper-muted)]" />
          <span>AI-Augmented Senior PM · Barcelona · Open to work</span>
        </motion.div>

        {/* Big serif name */}
        <motion.h1
          custom={0.4}
          initial="hidden"
          animate="show"
          variants={REVEAL}
          className="mt-6 font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.92] tracking-tight text-[var(--color-paper)]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
        >
          Eric
          <br />
          Denis<span className="gradient-text">.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={0.6}
          initial="hidden"
          animate="show"
          variants={REVEAL}
          className="mt-8 max-w-2xl font-display text-2xl italic leading-snug text-[var(--color-paper-muted)] md:text-3xl"
          style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
        >
          An <span className="text-[var(--color-paper)]">AI-augmented product manager</span>.
          Ten years of <span className="text-[var(--color-paper)]">SaaS</span>, with a{" "}
          <span className="text-[var(--color-paper)]">music-tech specialism</span>{" "}
          and a 360° view from the deep tech to the stage.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          custom={0.9}
          initial="hidden"
          animate="show"
          variants={REVEAL}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-paper)]"
          >
            Hire me · full-time
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-paper-muted)] px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)] transition-colors duration-300 hover:border-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
          >
            Hire me · per project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Footer row of meta */}
      <motion.div
        custom={1.3}
        initial="hidden"
        animate="show"
        variants={REVEAL}
        className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-start justify-between gap-4 border-t border-[var(--color-rule)] pt-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)] md:flex-row md:items-center"
      >
        <div className="flex items-center gap-2">
          <MapPin size={12} aria-hidden />
          <span>Barcelona</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Remote-first since 2016</span>
          <span className="hidden md:inline">·</span>
          <span>FR · EN · ES</span>
        </div>
        <span className="hidden md:inline">↓</span>
      </motion.div>
    </section>
  );
}
