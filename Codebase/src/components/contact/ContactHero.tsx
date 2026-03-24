"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-primary py-24 lg:py-32">
      <div className="atmosphere-grid absolute inset-0 pointer-events-none" />
      <div className="atmosphere-vignette" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-text-hero text-[56px] tracking-[-0.03em]"
          style={{ textWrap: "balance" }}
        >
          Let&apos;s talk.
        </motion.h1>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16 mt-8"
        >
          {/* Email */}
          <div className="flex items-center gap-3 md:justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-muted"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              href="mailto:hello@thesx.co"
              className="font-body text-text-body hover:text-accent-gold transition-colors duration-150"
            >
              hello@thesx.co
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 md:justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-muted"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span className="font-body text-text-body">Remote-first. Global.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
