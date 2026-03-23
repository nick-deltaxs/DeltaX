"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";

const steps = [
  {
    number: "01",
    label: "STEP 01",
    colorClass: "text-core-bright",
    circleClass: "bg-core-bright",
    title: "Talk to us.",
    description:
      "A 30-minute call. No pitch deck. Just your challenges and our honest assessment.",
  },
  {
    number: "02",
    label: "STEP 02",
    colorClass: "text-code-bright",
    circleClass: "bg-code-bright",
    title: "We audit your system.",
    description:
      "CoreXs maps your business. Where you're leaking time, money, and opportunity.",
  },
  {
    number: "03",
    label: "STEP 03",
    colorClass: "text-accent-gold",
    circleClass: "bg-accent-gold",
    title: "We build the machine.",
    description:
      "All four engines activate. You watch the system work while you focus on what matters.",
  },
];

export function YourPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="path" background="primary" glow="gold">
      <div ref={containerRef}>
        <SectionOverline number="04" label="YOUR PATH" />

        <h2
          className="font-display text-2xl text-text-hero mt-4"
          style={{ textWrap: "balance", letterSpacing: "-0.03em" }}
        >
          Three steps. One conversation.
        </h2>

        <div className="relative mt-12 pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-elevated">
            <motion.div
              className="absolute inset-0 bg-elevated origin-top"
              style={{ scaleY: lineScale }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Circle */}
                <motion.div
                  className={`absolute left-0 md:left-[4px] top-[6px] w-3 h-3 rounded-full ${step.circleClass}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.3 + 0.2,
                  }}
                />

                {/* Content */}
                <div className="pl-8">
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.08em] ${step.colorClass}`}
                  >
                    {step.label}
                  </span>
                  <h3
                    className="font-display text-2xl text-text-hero mt-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-text-secondary mt-2 max-w-[480px]" style={{ textWrap: "balance" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

