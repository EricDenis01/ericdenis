"use client";

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
    title: "10+ years in music-tech product",
    body: "BMAT, Utopia Music, Revelator. Royalties, content recognition, AI roadmaps — shipped to PROs, DSPs, and the world's biggest rights-holders.",
  },
  {
    tag: "Operator",
    title: "Active in the music industry",
    body: "CEO of NEST Festival, co-founder of Kommuna Records, founder of CMYK Music. I run the same kind of business my products serve.",
  },
  {
    tag: "Builder",
    title: "I ship code, not just specs",
    body: "Vibe-coding mobile and web apps end-to-end. FestiPal — concept, mobile app, web app, prototypes, front-end — built top to bottom.",
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
              Three jobs.
              <br />
              <span className="text-[var(--color-amber)]">One operator.</span>
            </>
          }
          subtitle={
            <>
              Most senior PMs in music tech have one of these. I have all three —
              and they reinforce each other.
            </>
          }
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
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
                className="mt-4 font-display text-2xl leading-snug tracking-tight text-[var(--color-paper)] md:text-3xl"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
              >
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
                {p.body}
              </p>
            </motion.article>
          ))}
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
            I lead distributed squads across R&D, Data, Engineering, and Design to
            turn messy industry data into revenue-driving tools — and I bring a
            lifelong passion for music into every product I touch.
          </p>
          <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
            <li>Based — Barcelona</li>
            <li>Languages — FR / EN / ES / JA</li>
            <li>Available — full-time + freelance</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
