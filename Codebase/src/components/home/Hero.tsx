"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <SectionWrapper
      id="hero"
      background="primary"
<<<<<<< HEAD
      glow="none"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-16 lg:pt-16 pb-12 md:pb-20 lg:pb-20"
    >
      {/* Teal radial glow — centered behind the logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(21,51,154,0.14) 0%, transparent 60%)",
        }}
      />

      {/* Background atmosphere image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-atmosphere.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.7,
        }}
      />

=======
      glow="deltax"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-16 pb-12 md:pb-20"
    >
>>>>>>> Widi-azm
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
            to build businesses that don&apos;t depend on their founders.
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#system" className="block text-text-muted hover:text-text-body transition-colors duration-150">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bounce-indicator"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
