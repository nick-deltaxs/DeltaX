"use client";

import { motion } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function FinalCTA() {
  return (
    <SectionWrapper id="cta" background="primary" glow="none">
      {/* Teal radial glow - centered behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,155,191,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Card wrapper — scale entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo - dimmed with pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <DeltaXLogo
            size={80}
            className="text-text-hero glow-breathe mb-8 md:w-[80px] w-[60px]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 }}
          className="font-display text-4xl md:text-5xl text-text-hero tracking-[-0.02em] mb-4"
          style={{ textWrap: "balance" }}
        >
          Ready to build.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.28 }}
          className="font-body text-lg text-text-secondary mb-8"
          style={{ textWrap: "balance" }}
        >
          One conversation. No commitments. Just clarity.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.42 }}
        >
          <Button variant="primary" size="large" href="/contact">
            Start a Project
          </Button>
        </motion.div>

        {/* Email fallback */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.55 }}
          className="mt-4"
        >
          <span className="font-body text-sm text-text-muted">or email </span>
          <a
            href="mailto:hello@thesx.co"
            className="font-body text-sm text-text-body hover:underline"
          >
            hello@thesx.co
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
