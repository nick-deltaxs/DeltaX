"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const STEPS = [
  {
    id: "step-01",
    number: "STEP 01",
    headline: "Talk to us.",
    body: "A 30-minute call. No pitch deck. Just your challenges and our honest assessment.",
    color: "#00B4D8",
  },
  {
    id: "step-02",
    number: "STEP 02",
    headline: "We audit your system.",
    body: "CoreXs maps your business. Where you\u2019re leaking time, money, and opportunity.",
    color: "#8A8A8A",
  },
  {
    id: "step-03",
    number: "STEP 03",
    headline: "We build the machine.",
    body: "All four engines activate. You watch the system work while you focus on what matters.",
    color: "#D4AF37",
  },
];

const STEP_DELAYS = [0.1, 0.5, 0.9];

export function YourPath() {
  return (
    <SectionWrapper id="path" background="primary" glow="gold">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <SectionOverline number="04" label="YOUR PATH" className="mb-4" />
        <h2
          className="font-display text-2xl md:text-4xl text-text-hero"
          style={{ textWrap: "balance", letterSpacing: "-0.03em" }}
        >
          Three steps. One conversation.
        </h2>
      </motion.div>

      <div className="relative mt-12 pl-8 md:pl-12">
        {/* Timeline — static background track */}
        <div
          className="absolute top-0 w-px"
          style={{
            left: 5,
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Timeline — animated fill line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
          className="absolute top-0 w-px"
          style={{
            left: 5,
            height: "100%",
            background: "linear-gradient(to bottom, #00B4D8, #8A8A8A, #D4AF37)",
            transformOrigin: "top",
            maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          }}
        />

        {/* Steps */}
        <div className="space-y-16">
          {STEPS.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: STEP_DELAYS[index],
                }}
                className="absolute top-[6px] rounded-full"
                style={{
                  left: -1,
                  width: 12,
                  height: 12,
                  backgroundColor: step.color,
                }}
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: EASE_OUT,
                  delay: STEP_DELAYS[index],
                }}
                className="pl-8"
              >
                <span
                  className="font-mono text-xs uppercase tracking-[0.12em]"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-display text-2xl text-text-hero mt-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {step.headline}
                </h3>
                <p
                  className="font-body text-base text-text-secondary mt-2 max-w-[480px]"
                  style={{ textWrap: "balance" }}
                >
                  {step.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

