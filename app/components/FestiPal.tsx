"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

type Slide = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    type: "image",
    src: "/festipal/welcome-desktop.png",
    alt: "FestiPal — welcome onboarding, desktop",
    caption: "Onboarding · welcome",
  },
  {
    type: "image",
    src: "/festipal/signup-desktop.png",
    alt: "FestiPal — sign-up flow, desktop",
    caption: "Sign-up · pick your lane",
  },
  {
    type: "image",
    src: "/festipal/done-desktop.png",
    alt: "FestiPal — onboarding complete, desktop",
    caption: "Onboarding · complete",
  },
];

function FestiPalSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((c) => (c + 1) % SLIDES.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setI((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setI((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[i];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide stage — 16:9 to match desktop screenshots */}
      <div className="relative aspect-video w-full overflow-hidden border border-[var(--color-rule)] bg-[var(--color-ink)] shadow-2xl shadow-[var(--color-amber)]/[0.04]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Subtle vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent"
        />

        {/* Prev / Next */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/70 p-2 text-[var(--color-paper-muted)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-paper)] hover:bg-[var(--color-ink)]/90 hover:text-[var(--color-paper)] md:left-5"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/70 p-2 text-[var(--color-paper-muted)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-paper)] hover:bg-[var(--color-ink)]/90 hover:text-[var(--color-paper)] md:right-5"
        >
          <ChevronRight size={18} />
        </button>

        {/* Caption + counter */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-[var(--color-rule)] bg-[var(--color-ink)]/80 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-muted)] backdrop-blur-md md:px-7 md:py-4 md:text-xs">
          <span>{slide.caption}</span>
          <span>
            {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1 transition-all duration-300 ${
              idx === i
                ? "w-12 bg-[var(--color-amber)]"
                : "w-6 bg-[var(--color-rule)] hover:bg-[var(--color-paper-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const SCOPE = [
  { tag: "Idea & concept", body: "From blank page to validated product." },
  { tag: "Web · festipal.io", body: "Next.js 16, App Router, Tailwind v4, Firebase Hosting + SSR." },
  { tag: "Mobile · app.festipal.io", body: "React Native + Expo, multi-language, role-based perms." },
  { tag: "Tickets · tickets.festipal.io", body: "Host-routed B2C consumer surface." },
  { tag: "FestiLink directory", body: "Marketplace connecting organizers · suppliers · venues." },
  { tag: "Front-end + UI/UX", body: "Pixel-perfect, light + dark, five languages." },
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
          label="FestiPal"
          title={
            <>
              I had the idea.
              <br />
              I <span className="text-[var(--color-amber)]">built it</span>.
            </>
          }
          subtitle="An event management OS for festival organizers, suppliers, venues, and talent — with a B2C ticketing layer. Concept, web, mobile, prototypes — built end-to-end. Launching soon."
        />

        {/* Slider */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mb-16"
        >
          <FestiPalSlider />
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
              The operating system for the modern festival — organizers,
              suppliers, venues, and talent in one workspace, with a consumer
              ticketing layer on top.
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
              B2B,{" "}
              <span className="text-[var(--color-paper)]">app.festipal.io</span>{" "}
              for the Expo mobile + web app, and{" "}
              <span className="text-[var(--color-paper)]">tickets.festipal.io</span>{" "}
              for consumer ticketing. Firebase backend, five languages,
              role-based permissions, Stripe and Resend wired in.
            </motion.p>
            <motion.p
              custom={0.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={REVEAL}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-paper-muted)]"
            >
              I had the idea, defined the concept, designed the workspace, and
              built the front-end. Ten years of music-tech product work meets
              ten years of running NEST. Same person on both sides of the
              workflow.
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
              Built top to bottom
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
            Stack
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
