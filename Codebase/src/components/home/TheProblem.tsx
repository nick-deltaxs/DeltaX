"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { motion } from "framer-motion";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

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

const leftContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const rightContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mb-4"
        >
          <SectionOverline number="00" label="THE PROBLEM" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0 }}
          className="font-display text-5xl text-text-hero tracking-[-0.02em] mb-16"
          style={{ textWrap: "balance" }}
        >
          Most agencies are a black box.
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12">
          {/* Left column - red */}
          <motion.div
            variants={leftContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-sm font-medium uppercase text-scale-bright mb-6"
            >
              What you get today
            </motion.p>
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-[3px] border-scale-bright/30 pl-4 mb-6"
              >
                <p className="font-body text-lg text-text-secondary leading-[1.8]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column - teal */}
          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-sm font-medium uppercase text-core-bright mb-6"
            >
              What you actually need
            </motion.p>
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-[3px] border-core-bright/30 pl-4 mb-6"
              >
                <p className="font-body text-lg text-text-body leading-[1.8]">
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
