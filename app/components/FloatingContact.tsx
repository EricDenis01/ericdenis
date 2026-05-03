"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;

      // Hide when the contact section is already in view (avoid double CTA)
      const contact = document.getElementById("contact");
      const contactInView =
        contact !== null &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.6;

      setShow(past && !contactInView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          key="floating-contact"
          href="#contact"
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] shadow-lg shadow-[var(--color-ink)]/40 ring-1 ring-[var(--color-ink)]/10 transition-colors duration-300 hover:bg-[var(--color-paper)] md:bottom-8 md:right-8 md:px-6 md:py-3.5"
        >
          Hire me
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
