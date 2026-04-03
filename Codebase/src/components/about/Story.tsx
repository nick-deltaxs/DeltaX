"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

// Circuit decoration component
function CircuitLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-px bg-gradient-to-r from-transparent via-core-bright/40 to-transparent"
    />
  );
}

export function Story() {
  return (
    <SectionWrapper id="story" background="secondary" glow="none" className="relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="story-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 V60 M0 30 H60" stroke="white" strokeWidth="0.5" fill="none"/>
              <circle cx="30" cy="30" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#story-grid)"/>
        </svg>
      </div>

      {/* Corner glow effects */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-40">
        <div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 100% 0%, rgba(26,155,191,0.1) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-40">
        <div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 0% 100%, rgba(110,117,255,0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[720px] mx-auto">
        {/* Section overline */}
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              [01] Origin Story
            </span>
            <CircuitLine delay={0.2} />
          </div>
        </ScrollReveal>

        {/* Paragraph 1 - Glassmorphism card */}
        <ScrollReveal delay={0.1}>
          <div 
            className="relative p-6 rounded-xl border mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(17,17,22,0.8) 0%, rgba(10,10,11,0.9) 100%)",
              borderColor: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0"
              whileHover={{ opacity: 1 }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(26,155,191,0.1), transparent)",
              }}
            />
            <p className="font-body text-base text-text-body leading-[1.7] relative z-10">
              DeltaX started with a question: why does every growing business need four different agencies that never talk to each other? Dave Benrouz and Ramtin Ghaffary spent years watching companies waste money on disconnected teams — one for strategy, one for code, one for marketing, one for design. The result was always the same: friction, delays, and a founder stuck managing it all.
            </p>
          </div>
        </ScrollReveal>

        {/* Paragraph 2 - Glassmorphism card with different accent */}
        <ScrollReveal delay={0.2}>
          <div 
            className="relative p-6 rounded-xl border mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(17,17,22,0.8) 0%, rgba(10,10,11,0.9) 100%)",
              borderColor: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="font-body text-base text-text-body leading-[1.7]">
              The answer wasn't better agencies. It was a system. Four engines — CoreXs for strategy, CodeXs for engineering, ScaleXs for growth, StyleXs for design — built to operate independently but feed into each other. Inside CodeXs, two dev teams compete on every build. The best code wins. Quality isn't a process — it's a structure.
            </p>
          </div>
        </ScrollReveal>

        {/* Pull quote - Enhanced with glow */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative pl-6 max-w-[600px] my-12"
        >
          {/* Glowing left border */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full overflow-hidden">
            <div 
              className="w-full h-full"
              style={{
                background: "linear-gradient(180deg, #f0b429 0%, #d4a017 50%, #f0b429 100%)",
              }}
            />
            {/* Animated glow overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(180deg, transparent, #f0b429, transparent)",
                filter: "blur(4px)",
              }}
            />
          </div>
          
          <p className="font-body italic text-2xl text-text-body leading-[1.5]">
            "We don't hire people to fill roles. We build engines that make roles unnecessary."
          </p>
          
          {/* Attribution */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-px bg-accent-gold/50" />
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
              DeltaX Founders
            </span>
          </div>
        </motion.div>

        {/* Paragraph 3 */}
        <ScrollReveal delay={0.3}>
          <div 
            className="relative p-6 rounded-xl border"
            style={{
              background: "linear-gradient(135deg, rgba(17,17,22,0.8) 0%, rgba(10,10,11,0.9) 100%)",
              borderColor: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="font-body text-base text-text-body leading-[1.7]">
              Today, DeltaX is a team of 16 specialists across four countries. Every engine has a lead. Every project runs through the same system. And every founder who works with us gets one thing they've never had before: time to focus on what actually matters.
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom circuit decoration */}
        <div className="mt-12">
          <CircuitLine delay={0.4} />
        </div>
      </div>
    </SectionWrapper>
  );
}
