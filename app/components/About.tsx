"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const PILLARS = [
  {
    tag: "Product",
    title: "Senior PM in music tech.",
    body: "BMAT, Utopia Music, Revelator. Royalty flows, content recognition, DSP analytics, AI roadmaps. I lead the product, prioritise the backlog, and ship to PROs, distributors, and the labels that actually use this stuff.",
  },
  {
    tag: "Operator",
    title: "I run music ventures too.",
    body: "Founder & CEO of NEST Festival. Co-founder of Kommuna Records. CMYK Music on YouTube — 142k subscribers, 79M views. The same business my software is supposed to serve.",
  },
  {
    tag: "Builder",
    title: "I write code, not just specs.",
    body: "FestiPal — the event management OS — concept, web app, mobile app, prototypes, all built end-to-end. Same with this site. I prefer when the prototype that proves an idea is the actual prototype, not a deck.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="01"
          label="About"
          title={
            <>
              Music product, music ventures,
              <br />
              <span className="text-[var(--color-amber)]">code</span>.
            </>
          }
          subtitle="Three things, one person. They reinforce each other more than they conflict."
        />

        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:gap-16 md:items-start">
          {/* Photo */}
          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            className="relative h-56 w-56 shrink-0 overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper)]/[0.03] md:h-64 md:w-64"
          >
            <Image
              src="/eric.jpg"
              alt="Eric Denis"
              fill
              sizes="(min-width: 768px) 16rem, 14rem"
              className="object-cover"
            />
          </motion.div>

          {/* Pillars */}
          <div className="grid gap-8 md:gap-10">
            {PILLARS.map((p, i) => (
              <motion.article
                key={p.tag}
                custom={0.2 + i * 0.15}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={REVEAL}
                className="border-t border-[var(--color-rule)] pt-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                  {p.tag}
                </span>
                <h3
                  className="mt-3 font-display text-2xl leading-snug tracking-tight text-[var(--color-paper)] md:text-3xl"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-paper-muted)]">
                  {p.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          custom={0.8}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-20 grid gap-10 border-t border-[var(--color-rule)] pt-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-3xl font-display text-xl italic leading-relaxed text-[var(--color-paper-muted)] md:text-2xl"
             style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}>
            B2B SaaS for the music industry by day. Festival, label, and a music
            channel after hours. I&apos;ve been on both sides of the table for
            ten years.
          </p>
          <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
            <li>Based — Barcelona</li>
            <li>Remote — 10+ yrs · pre-COVID</li>
            <li>Languages — FR / EN / ES</li>
            <li>Available — full-time + freelance</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
