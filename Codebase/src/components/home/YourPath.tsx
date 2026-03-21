"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function YourPath() {
  return (
    <SectionWrapper id="path" background="break" className="border-t border-b border-[rgba(26,155,191,0.15)]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <SectionLabel color="core">YOUR PATH</SectionLabel>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[1.25rem] md:left-[2rem] top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.15)]" />
          
          {/* Step 1 */}
          <ScrollReveal delay={0} direction="up">
            <div className="relative pl-16 md:pl-24 py-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-display text-core-bright text-5xl md:text-6xl lg:text-[clamp(2rem,4vw,3.5rem)] absolute left-0 top-8"
              >
                01
              </motion.span>
              <h3 className="font-display text-lg lg:text-xl text-text-hero mt-2">
                JOIN THE WAITLIST
              </h3>
              <p className="font-body text-base text-text-body mt-2 max-w-lg">
                Secure your spot. We're onboarding in waves — early access means priority.
              </p>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={0.15} direction="up">
            <div className="relative pl-16 md:pl-24 py-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-display text-core-bright text-5xl md:text-6xl lg:text-[clamp(2rem,4vw,3.5rem)] absolute left-0 top-8"
              >
                02
              </motion.span>
              <h3 className="font-display text-lg lg:text-xl text-text-hero mt-2">
                GET YOUR DIAGNOSTIC
              </h3>
              <p className="font-body text-base text-text-body mt-2 max-w-lg">
                We analyze your business across all 4 engines. You get a diagnostic report + custom roadmap. The audit is standalone — no commitment beyond it.
              </p>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={0.3} direction="up">
            <div className="relative pl-16 md:pl-24 py-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-display text-core-bright text-5xl md:text-6xl lg:text-[clamp(2rem,4vw,3.5rem)] absolute left-0 top-8"
              >
                03
              </motion.span>
              <h3 className="font-display text-lg lg:text-xl text-text-hero mt-2">
                DEPLOY THE SYSTEM
              </h3>
              <p className="font-body text-base text-text-body mt-2 max-w-lg">
                Strategy, tech, growth, and brand — designed together, deployed in 90-day sprints. You see results in weeks, not quarters.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
