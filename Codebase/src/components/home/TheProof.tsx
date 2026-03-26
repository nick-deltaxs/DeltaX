"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { caseStudies } from "@/data/caseStudies";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const contentVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: EASE_OUT },
  },
};

export function TheProof() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = caseStudies[activeTab];

  // Read URL hash to set active tab
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tabId = hash.replace('#', '');
      const tabIndex = caseStudies.findIndex(c => c.client.toLowerCase() === tabId.toLowerCase());
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    }
  }, []);

  return (
    <SectionWrapper id="proof" background="primary" glow="gold">
      <div className="relative z-10">
        {/* Overline */}
        <SectionOverline number="02" label="THE PROOF" className="mb-4" />

        {/* Headline */}
        <h2
          className="font-display text-4xl md:text-5xl text-text-hero tracking-[-0.02em] mb-4"
          style={{ textWrap: "balance" }}
        >
          Numbers don't need decoration.
        </h2>

        {/* Subtext */}
        <p className="font-body text-lg text-text-secondary max-w-[640px] mb-12">
          Real results from real partnerships. Every number represents a business transformation.
        </p>

        {/* Tab row - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          {caseStudies.map((study, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={study.client}
                onClick={() => setActiveTab(index)}
                className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 cursor-pointer rounded-lg transition-all duration-200 ${
                  isActive
                    ? "border-2 border-accent-gold bg-tertiary/50"
                    : "border border-elevated bg-secondary/50 hover:bg-tertiary/30"
                }`}
              >
                <span className={`font-display text-xl transition-colors duration-200 ${
                  isActive ? 'text-accent-gold' : 'text-text-secondary'
                }`}>
                  {study.client}
                </span>
                <span className={`font-body text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-text-hero' : 'text-text-secondary group-hover:text-text-body'
                }`}>
                  {study.sector}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel - Card Style */}
        <div className="relative overflow-hidden rounded-xl border border-elevated bg-secondary/30 p-6 md:p-8">
          {/* Gold glow behind content */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at 20% 50%, rgba(240,180,41,0.08), transparent 60%)`,
              transition: 'background 300ms ease',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left column - main content */}
              <div className="space-y-6">
                {/* Client badge */}
                <div className="w-12 h-12 rounded-lg bg-tertiary flex items-center justify-center border border-accent-gold">
                  <span className="font-display text-lg text-accent-gold">
                    {activeCase.client.charAt(0)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-accent-gold">
                  {activeCase.client}
                </h3>

                {/* Sector */}
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
                  {activeCase.sector}
                </p>

                {/* Delivered */}
                <p className="font-body text-base text-text-body leading-relaxed">
                  {activeCase.delivered}
                </p>
              </div>

              {/* Right column - stats placeholder */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-accent-gold">
                    Impact
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    Complete transformation from brand identity to market presence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-accent-gold">
                    Timeline
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    3 months from concept to launch
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}

