"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Story() {
  return (
    <SectionWrapper id="story" background="secondary" glow="none" className="relative">
      <div className="relative z-10 max-w-[720px] mx-auto">
        {/* Paragraph 1 */}
        <ScrollReveal delay={0}>
          <p className="font-body text-base text-text-body leading-[1.6]">
            DeltaX started with a question: why does every growing business need four different agencies that never talk to each other? Dave Benrouz and Ramtin Ghaffary spent years watching companies waste money on disconnected teams — one for strategy, one for code, one for marketing, one for design. The result was always the same: friction, delays, and a founder stuck managing it all.
          </p>
        </ScrollReveal>

        {/* Gap */}
        <div className="h-8" />

        {/* Paragraph 2 */}
        <ScrollReveal delay={0.2}>
          <p className="font-body text-base text-text-body leading-[1.6]">
            The answer wasn't better agencies. It was a system. Four engines — CoreXs for strategy, CodeXs for engineering, ScaleXs for growth, StyleXs for design — built to operate independently but feed into each other. Inside CodeXs, two dev teams compete on every build. The best code wins. Quality isn't a process — it's a structure.
          </p>
        </ScrollReveal>

        {/* Gap */}
        <div className="h-12" />

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-[3px] border-accent-gold pl-6 max-w-[600px]"
        >
          <p className="font-body italic text-2xl text-text-body leading-[1.5]">
            "We don't hire people to fill roles. We build engines that make roles unnecessary."
          </p>
        </motion.div>

        {/* Gap */}
        <div className="h-12" />

        {/* Paragraph 3 */}
        <ScrollReveal delay={0.6}>
          <p className="font-body text-base text-text-body leading-[1.6]">
            Today, DeltaX is a team of 16 specialists across four countries. Every engine has a lead. Every project runs through the same system. And every founder who works with us gets one thing they've never had before: time to focus on what actually matters.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
