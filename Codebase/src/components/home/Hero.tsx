"use client";

import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: glow moves at 0.2x speed, max 30px
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="hero"
      background="primary"
      glow="none"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-24"
    >
      {/* Teal radial glow — centered behind the logo with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
        style={{
          y: glowY,
          background:
            "radial-gradient(ellipse at center, rgba(26,155,191,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <DeltaXLogo
            size={120}
            className="text-text-hero mb-6 w-[90px] md:w-[120px] h-auto"
          />
        </motion.div>

        {/* Headline */}
        <ScrollReveal delay={0.2}>
          <h1
            className="font-display text-text-hero tracking-[-0.03em]"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              textWrap: "balance",
            }}
          >
            Four engines. One system.
          </h1>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={0.4}>
          <p className="font-body text-lg md:text-xl text-text-body max-w-[600px] mx-auto leading-[1.6] mt-6">
            Strategy, engineering, design, and growth — working as one machine
            to build businesses that don't depend on their founders.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={0.6}>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 w-full md:w-auto">
            <Button variant="primary" size="large" href="/contact">
              Start a Project
            </Button>
            <Button variant="secondary" size="large" href="#system">
              See the System
            </Button>
          </div>
        </ScrollReveal>

        {/* Scroll indicator — below buttons, centered, with bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 cursor-pointer"
          onClick={() => {
            document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L10 10L19 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
