"use client";

import Link from "next/link";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Consulting", href: "#consulting" },
  { label: "FestiPal", href: "#festipal" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-rule)] px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Colophon */}
        <div>
          <Link
            href="#top"
            className="flex items-baseline gap-2 font-display text-2xl leading-none tracking-tight"
            style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
          >
            <span className="text-[var(--color-paper)]">Eric Denis</span>
            <span className="text-[var(--color-amber)]">.</span>
          </Link>
          <p className="mt-4 max-w-md font-display text-base italic leading-snug text-[var(--color-paper-muted)]"
             style={{ fontVariationSettings: "'opsz' 24, 'SOFT' 50, 'WONK' 0" }}>
            Product leader at the intersection of AI, music rights, and builder culture.
          </p>
        </div>

        {/* Nav */}
        <nav>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
            Navigate
          </span>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-paper)] transition-colors duration-300 hover:text-[var(--color-amber)]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Colophon meta */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
            Colophon
          </span>
          <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-paper-muted)]">
            <li>Set in Fraunces, DM Sans &amp; JetBrains Mono</li>
            <li>Built with Next.js · Tailwind · Framer Motion</li>
            <li>Hosted on Vercel</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-start justify-between gap-2 border-t border-[var(--color-rule)] pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)] md:flex-row md:items-center">
        <span>© {year} Eric Denis · Barcelona</span>
        <span>Vol. 01 · Edition 2026</span>
      </div>
    </footer>
  );
}
