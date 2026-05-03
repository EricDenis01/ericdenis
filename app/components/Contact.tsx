"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

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

function GithubIconSm({ size = 12 }: { size?: number }) {
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

const EASE = [0.2, 0.8, 0.2, 1] as const;

const REVEAL: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const EMAIL_ADDRESS = "contact@ericdenis.com";

function mailto(subject?: string) {
  return `mailto:${EMAIL_ADDRESS}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL_ADDRESS,
    href: mailto(),
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/eric-denis-b977028a",
    href: "https://www.linkedin.com/in/eric-denis-b977028a/",
  },
  {
    icon: GithubIconSm,
    label: "GitHub",
    value: "@EricDenis01",
    href: "https://github.com/EricDenis01",
  },
  {
    icon: MapPin,
    label: "Based",
    value: "Barcelona — remote-first",
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          number="08"
          label="Contact"
          title={
            <>
              Get in <span className="text-[var(--color-amber)]">touch</span>.
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
            href={mailto("Hire me · full-time")}
            className="card-lift group flex flex-col justify-between gap-8 border border-[var(--color-rule)] p-8 hover:border-[var(--color-amber)] hover:bg-[var(--color-amber)]/[0.03] md:p-10"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                01
              </span>
              <h3
                className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
              >
                Hire me · full-time
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
                Senior PM roles. SaaS, music tech, AI products. Remote-first
                since 2016. I&apos;ll also write code.
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
            href={mailto("Hire me · per project")}
            className="card-lift group flex flex-col justify-between gap-8 border border-[var(--color-rule)] p-8 hover:border-[var(--color-amber)] hover:bg-[var(--color-amber)]/[0.03] md:p-10"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
                02
              </span>
              <h3
                className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
                style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
              >
                Hire me · per project
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
                Websites, web and mobile prototypes, MVPs. Or an expert call on
                music tech, royalties, or rights — the kind of advisory I&apos;ve
                done for ICE, Musimap, and Allfeat.
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
          className="mt-16 grid gap-6 border-t border-[var(--color-rule)] pt-10 sm:grid-cols-2 md:grid-cols-4"
        >
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
                  <Icon size={12} aria-hidden />
                  {item.label}
                </span>
                <span className="mt-3 block text-sm text-[var(--color-paper)]">
                  {item.value}
                </span>
              </>
            );
            const isLink = "href" in item && item.href;
            return (
              <li key={item.label}>
                {isLink ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
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
