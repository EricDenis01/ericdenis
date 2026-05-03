"use client";

import { useEffect, useRef } from "react";

/**
 * Soft warm spotlight that follows the cursor. Sits behind page content
 * (z-index: 2 — between body::before mesh and main content) and only
 * shows on devices with a fine pointer (no spotlight on touch).
 */
export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
      style={{
        background:
          "radial-gradient(540px circle at var(--mx, 50%) var(--my, 50%), rgba(232, 118, 92, 0.10), transparent 50%)",
        mixBlendMode: "multiply",
      }}
    />
  );
}
