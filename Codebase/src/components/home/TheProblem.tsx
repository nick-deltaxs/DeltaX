"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

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
        {/* Headline */}
        <ScrollReveal delay={0}>
          <h2
            className="font-display text-5xl text-hero tracking-[-0.02em] mb-16"
            style={{ textWrap: "balance" }}
          >
            Most agencies are a black box.
          </h2>
        </ScrollReveal>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12">
          {/* Left column - red */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-body text-sm font-medium uppercase text-scale-bright mb-6">
              What you get today
            </p>
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-[3px] border-scale-bright/30 pl-4 mb-6"
              >
                <p className="font-body text-lg text-secondary leading-[1.8]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column - teal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-body text-sm font-medium uppercase text-core-bright mb-6">
              What you actually need
            </p>
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-[3px] border-core-bright/30 pl-4 mb-6"
              >
                <p className="font-body text-lg text-body leading-[1.8]">
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
