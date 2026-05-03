import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-paper-muted)]">
        Error · 404 · Not found
      </span>

      <h1
        className="mt-8 font-display text-[clamp(4rem,14vw,12rem)] leading-[0.92] tracking-tight text-[var(--color-paper)]"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
      >
        404<span className="text-[var(--color-amber)]">.</span>
      </h1>

      <p
        className="mt-6 max-w-xl font-display text-xl italic leading-snug text-[var(--color-paper-muted)] md:text-2xl"
        style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 80, 'WONK' 0" }}
      >
        That page got lost between the grooves. Let&apos;s get you back to the masthead.
      </p>

      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-paper)]"
      >
        ← Back to home
      </Link>
    </main>
  );
}
