"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

function LinkedinIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
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

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "eric.denis01@gmail.com",
    href: "mailto:eric.denis01@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/eric-denis-b977028a",
    href: "https://www.linkedin.com/in/eric-denis-b977028a/",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+34 633 474 375",
    href: "tel:+34633474375",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Barcelona — open to remote",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="07"
          label="Contact"
          title={
            <>
              Let&apos;s <span className="text-[var(--color-amber)]">work together</span>.
            </>
          }
          subtitle={
            <>
              Two doors. Same person. Pick the one that fits.
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.a
            custom={0.1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            href="mailto:eric.denis01@gmail.com?subject=Senior%20PM%20role%20%E2%80%94%20conversation"
            className="group flex flex-col justify-between gap-8 border border-[var(--color-rule)] p-8 transition-colors duration-300 hover:border-[var(--color-amber)] hover:bg-[var(--color-amber)]/[0.03] md:p-10"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                Door 01
              </span>
              <h3
                className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
              >
                Hire me full-time
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
                Senior PM roles at AI / music-tech companies. Bring the trifecta —
                product expertise, industry operator experience, and the ability
                to ship code — to your team.
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-paper)]">
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </motion.a>

          <motion.a
            custom={0.25}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={REVEAL}
            href="mailto:eric.denis01@gmail.com?subject=Build%20me%20a%20prototype"
            className="group flex flex-col justify-between gap-8 border border-[var(--color-rule)] p-8 transition-colors duration-300 hover:border-[var(--color-amber)] hover:bg-[var(--color-amber)]/[0.03] md:p-10"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                Door 02
              </span>
              <h3
                className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
              >
                Build me a prototype
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
                Websites, mobile and web app prototypes, vibe-coded fast. Or
                expert calls on music tech, royalties, and rights — exactly the
                kind of niche advisory I&apos;ve done for ICE, Musimap, Allfeat.
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-paper)]">
              Pitch me your project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </motion.a>
        </div>

        <motion.ul
          custom={0.4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={REVEAL}
          className="mt-16 grid gap-6 border-t border-[var(--color-rule)] pt-10 md:grid-cols-4"
        >
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
                  <Icon size={12} aria-hidden />
                  {label}
                </span>
                <span className="mt-3 block text-sm text-[var(--color-paper)]">
                  {value}
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group block transition-colors duration-300 hover:text-[var(--color-amber)]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div>{inner}</div>
                )}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
