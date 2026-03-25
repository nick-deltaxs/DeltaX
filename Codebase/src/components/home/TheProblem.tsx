"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { motion } from "framer-motion";

// Inline SVG icons (avoids lucide-react dependency)
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const leftItems = [
  "Endless meetings with no outcomes.",
  "Developers who disappear mid-project.",
  "Designs that look like templates.",
  "Marketing that burns budget, not pipeline.",
  "A founder doing everything.",
];

const rightItems = [
  "A system that audits before it builds.",
  "Engineers who compete to write better code.",
  "Design that makes competitors nervous.",
  "Growth that compounds, not spikes.",
  "A partner who builds the machine.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function TheProblem() {
  return (
    <SectionWrapper id="problem" background="primary" glow="none" className="relative">
      {/* Dual glow backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(154,21,21,0.06), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(0,99,129,0.06), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        {/* Overline */}
        <SectionOverline number="00" label="THE PROBLEM" className="mb-4" />

        {/* Headline */}
        <ScrollReveal delay={0}>
          <h2
            className="font-display text-4xl md:text-5xl text-text-hero tracking-[-0.02em] mb-16"
            style={{ textWrap: "balance" }}
          >
            Most agencies are a black box.
          </h2>
        </ScrollReveal>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left column - problems with X icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-scale-bright mb-8">
              What you get today
            </p>
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-start gap-4 mb-6 p-3 -ml-3 rounded-lg transition-colors duration-300 hover:bg-scale-bright/5"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-scale-bright/10 flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-scale-bright/20">
                  <XIcon className="w-4 h-4 text-scale-bright" />
                </div>
                <p className="font-body text-lg text-text-secondary leading-[1.6]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column - solutions with check icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-core-bright mb-8">
              What you actually need
            </p>
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-start gap-4 mb-6 p-3 -ml-3 rounded-lg transition-colors duration-300 hover:bg-core-bright/5"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-core-bright/10 flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-core-bright/20">
                  <CheckIcon className="w-4 h-4 text-core-bright" />
                </div>
                <p className="font-body text-lg text-text-body leading-[1.6]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
