"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

type Props = {
  number: string;
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export default function SectionHeader({ number, label, title, subtitle }: Props) {
  return (
    <header className="mb-14 md:mb-20">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={REVEAL}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-paper-muted)]"
      >
        <span className="h-px w-8 bg-[var(--color-paper-muted)]" />
        <span>
          [ {number} / {label} ]
        </span>
      </motion.div>

      <motion.h2
        custom={0.15}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={REVEAL}
        className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-[var(--color-paper)]"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          custom={0.3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-5 max-w-2xl font-display text-xl italic leading-snug text-[var(--color-paper-muted)] md:text-2xl"
          style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
        >
          {subtitle}
        </motion.p>
      ) : null}

      <motion.div
        custom={0.45}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={REVEAL}
        className="mt-10 h-px w-full bg-[var(--color-rule)]"
      />
    </header>
  );
}
