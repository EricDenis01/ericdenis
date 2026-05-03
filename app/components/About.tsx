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
    tag: "Product Manager",
    title: "Senior PM in music-tech SaaS.",
    body: "Ten years building SaaS for music rights, royalties, and data-driven products. AI roadmaps at Revelator (LLMs, MCP, deep learning). Founded R&D at Utopia Music — content recognition AI deployed on 45,000 radios. Doubled SPRE revenues to €500K/year at BMAT. I lead distributed squads across R&D, Data, Engineering, and Design.",
  },
  {
    tag: "Creative Projects",
    title: "Active in the music industry.",
    body: "Founder & CEO of NEST Festival. Co-founder of Kommuna Records — 12 vinyl releases, 5,000+ copies sold worldwide. Founder of CMYK Music on YouTube — 79M views, 4.3M hours watched, 142k subscribers. Touring DJ. The other side of the table from the SaaS.",
  },
  {
    tag: "Entrepreneur",
    title: "Builder, top to bottom.",
    body: "FestiPal is mine end-to-end — idea, concept, web app, mobile app, prototypes, all my work. Strong business acumen, an eye for beautiful design, and intuition for what users actually need. I prefer when the prototype that proves an idea is the actual prototype, not a deck.",
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
              Senior PM with a
              <br />
              <span className="text-[var(--color-amber)]">360° view</span>.
            </>
          }
          subtitle="AI-augmented product work in SaaS, with a music-tech specialism. Behind the curtain at the rights bodies and distributors, on stage at the labels, festivals, and YouTube channels. The playbook works anywhere; the music context is just where I sharpened it."
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
            Strong business acumen, an eye for beautiful design, and intuition
            for what users actually need. Always at the cutting edge — testing
            the latest tools, models, and possibilities.
          </p>
          <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
            <li>Based — Barcelona</li>
            <li>Remote-first since 2016</li>
            <li>Languages — FR / EN / ES</li>
            <li>Available — full-time + freelance</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
