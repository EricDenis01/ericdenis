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
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] shadow-xl shadow-[var(--color-amber)]/30 ring-1 ring-[var(--color-paper)]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-amber-500/40 md:bottom-8 md:right-8 md:px-6 md:py-3.5"
          style={{
            background:
              "linear-gradient(135deg, var(--color-amber) 0%, var(--color-plum) 100%)",
          }}
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
