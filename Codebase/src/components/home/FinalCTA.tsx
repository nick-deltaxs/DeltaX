"use client";

import { motion } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCTA() {
  return (
    <SectionWrapper id="cta" background="primary" glow="deltax">
      {/* Background atmosphere image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/cta-atmosphere.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo - dimmed with pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <DeltaXLogo
            size={80}
            className="text-text-hero opacity-60 glow-breathe mb-8 md:w-[80px] w-[60px]"
          />
        </motion.div>

        {/* Headline */}
        <ScrollReveal delay={0.2}>
          <h2
            className="font-display text-4xl md:text-5xl text-text-hero tracking-[-0.02em] mb-4"
            style={{ textWrap: "balance" }}
          >
            Ready to build?
          </h2>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={0.4}>
          <p
            className="font-body text-lg text-text-secondary mb-8"
            style={{ textWrap: "balance" }}
          >
            One conversation. No commitments. Just clarity.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.6}>
          <Button variant="primary" size="large" href="/contact">
            Start a Project
          </Button>
        </ScrollReveal>

        {/* Email fallback */}
        <ScrollReveal delay={0.8}>
          <div className="mt-4">
            <span className="font-body text-sm text-text-muted">or email </span>
            <a
              href="mailto:hello@thesx.co"
              className="font-body text-sm text-accent-gold hover:underline"
            >
              hello@thesx.co
            </a>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
