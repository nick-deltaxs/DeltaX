"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMotionValue, useInView, animate } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TheProof() {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, 10, {
        duration: 1.5,
        ease: "easeOut",
      });
      const unsubscribe = motionValue.on("change", (latest: number) => {
        setDisplayValue(Math.round(latest));
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, motionValue]);

  return (
    <SectionWrapper id="proof" background="secondary">
      {/* Gold radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: "radial-gradient(ellipse at center, rgba(240, 180, 41, 0.10) 0%, transparent 70%)" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label and intro */}
        <ScrollReveal delay={0}>
          <div className="text-center">
            <SectionLabel color="core">THE PROOF</SectionLabel>
            <p className="font-body text-base lg:text-lg text-text-body max-w-2xl mx-auto text-center mt-6">
              Every solution we scope must return at least 10 times its cost. This is how we scope every engagement.
            </p>
          </div>
        </ScrollReveal>

        {/* 10x stat with animated counter */}
        <div className="text-center mt-12">
          <div 
            ref={counterRef}
            className="font-display text-gold text-6xl md:text-7xl lg:text-[clamp(5rem,15vw,8.75rem)]"
            aria-live="polite"
            aria-label={displayValue === 10 ? "10x return on investment" : undefined}
          >
            {displayValue}x
          </div>
          <p className="font-body font-semibold text-base text-text-hero text-center mt-4">
            Per engagement. That's the scoping standard.
          </p>
        </div>

        {/* Transition text */}
        <p className="text-sm text-text-muted text-center mt-8">
          Here's what that looks like:
        </p>

        {/* Case study table */}
        <div className="mt-12 max-w-4xl mx-auto">
          {/* Row 1 */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline py-6 border-b border-[rgba(255,255,255,0.06)] transition-all duration-200 rounded-sm px-4 -mx-4 hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1">
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                PREMIUM FASHION BRAND
              </div>
              <div className="font-display text-2xl text-gold">
                3.2x<span className="text-success ml-1">↑</span>
              </div>
              <div className="text-base text-text-body">
                Revenue growth in 6 months. Rebuilt their sales engine with SCALE + CODE.
              </div>
            </div>
          </ScrollReveal>

          {/* Row 2 */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline py-6 border-b border-[rgba(255,255,255,0.06)] transition-all duration-200 rounded-sm px-4 -mx-4 hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1">
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                SAAS STARTUP
              </div>
              <div className="font-display text-2xl text-gold">
                60%<span className="text-success ml-1">↓</span>
              </div>
              <div className="text-base text-text-body">
                Cost reduction through automation. Streamlined ops with CORE + CODE.
              </div>
            </div>
          </ScrollReveal>

          {/* Row 3 */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline py-6 border-b border-[rgba(255,255,255,0.06)] transition-all duration-200 rounded-sm px-4 -mx-4 hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1">
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                SERVICE BUSINESS
              </div>
              <div className="font-display text-2xl text-gold">
                5x<span className="text-success ml-1">↑</span>
              </div>
              <div className="text-base text-text-body">
                Lead generation in 90 days. Repositioned with STYLE + SCALE.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-text-muted text-center mt-8">
          Based on our methodology and projected outcomes. Named case studies available upon request.
        </p>
      </div>
    </SectionWrapper>
  );
}
