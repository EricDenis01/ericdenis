"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Copy, Check } from "lucide-react";
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

type DoorCardProps = {
  number: string;
  title: string;
  accent: string;
  subject: string;
  body: string;
  delay: number;
};

function DoorCard({ number, title, accent, subject, body, delay }: DoorCardProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available — fall back to selecting text via prompt-style
      window.prompt("Copy this email", EMAIL_ADDRESS);
    }
  };

  return (
    <motion.article
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={REVEAL}
      className="card-lift relative flex flex-col gap-8 border border-[var(--color-rule)] p-8 md:p-10"
    >
      <div>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: accent }}
        >
          {number}
        </span>
        <h3
          className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--color-paper)] md:text-4xl"
          style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 100, 'WONK' 0" }}
        >
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-muted)]">
          {body}
        </p>
      </div>

      {/* Action row — email button + copy button. Always reachable, never silent. */}
      <div className="relative z-[2] flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <a
          href={mailto(subject)}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, var(--color-plum) 100%)`,
            boxShadow: `0 12px 30px -10px ${accent}66`,
          }}
        >
          <Mail size={14} />
          Email me
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <button
          type="button"
          onClick={onCopy}
          aria-live="polite"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:border-[var(--color-paper)] hover:bg-[var(--color-paper)]/5"
          style={{
            borderColor: copied ? accent : "var(--color-rule)",
            color: copied ? accent : "var(--color-paper)",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2"
              >
                <Check size={14} />
                Copied!
              </motion.span>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2"
              >
                <Copy size={14} />
                Copy email
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Visible email — always selectable, fallback for users with no mail client */}
      <div className="relative z-[2] -mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)]">
        {EMAIL_ADDRESS}
      </div>
    </motion.article>
  );
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
          <DoorCard
            number="01"
            title="Hire me · full-time"
            accent="var(--color-amber)"
            subject="Hire me · full-time"
            body="Senior PM roles. SaaS, music tech, AI products. Remote-first since 2016. I'll also write code."
            delay={0.1}
          />
          <DoorCard
            number="02"
            title="Hire me · per project"
            accent="var(--color-plum)"
            subject="Hire me · per project"
            body="Websites, web and mobile prototypes, MVPs. Or an expert call on music tech, royalties, or rights — the kind of advisory I've done for ICE, Musimap, and Allfeat."
            delay={0.25}
          />
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
