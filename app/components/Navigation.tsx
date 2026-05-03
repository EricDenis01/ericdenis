"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Consulting", href: "#consulting" },
  { label: "FestiPal", href: "#festipal" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-rule)] bg-[var(--color-ink)]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display text-lg leading-none tracking-tight"
          style={{ fontVariationSettings: "'opsz' 24, 'SOFT' 50, 'WONK' 0" }}
        >
          <span className="text-[var(--color-paper)]">ED</span>
          <span className="text-[var(--color-amber)]">→</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper-muted)] transition-colors duration-300 hover:text-[var(--color-paper)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)] transition-colors duration-300 hover:text-[var(--color-amber)]"
        >
          <span className="pulse-dot" aria-hidden />
          <span className="hidden sm:inline">Open to work</span>
        </Link>
      </nav>
    </motion.header>
  );
}
