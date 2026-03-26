"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useInView, animate, useScroll, useTransform } from "framer-motion";
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

// Case study row data from Run-1 spec
const CASE_STUDY_ROWS = [
  {
    label: "PREMIUM FASHION BRAND",
    stat: "3.2x",
    arrow: "↑",
    description: "Revenue growth in 6 months. Rebuilt their sales engine with SCALE + CODE.",
  },
  {
    label: "SAAS STARTUP",
    stat: "60%",
    arrow: "↓",
    description: "Cost reduction through automation. Streamlined ops with CORE + CODE.",
  },
  {
    label: "SERVICE BUSINESS",
    stat: "5x",
    arrow: "↑",
    description: "Lead generation in 90 days. Repositioned with STYLE + SCALE.",
  },
];

export function TheProof() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = caseStudies[activeTab];
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: glow moves at 0.4x speed, max 30px
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // 10x Counter animation
  const counterRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterRef, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [counterComplete, setCounterComplete] = useState(false);

  useEffect(() => {
    if (isCounterInView) {
      const controls = animate(motionValue, 10, {
        duration: 1.5,
        ease: "easeOut",
        onComplete: () => setCounterComplete(true),
      });
      const unsubscribe = motionValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isCounterInView, motionValue]);
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
    <SectionWrapper ref={sectionRef} id="proof" background="primary" glow="none">
      {/* Gold radial glow with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0"
        style={{
          y: glowY,
          background:
            "radial-gradient(ellipse at center, rgba(240, 180, 41, 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Overline */}
        <SectionOverline number="02" label="THE PROOF" className="mb-4" />

        {/* Intro Text - Run-1 copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="font-body text-base lg:text-lg text-text-body max-w-2xl mx-auto text-center mb-8"
        >
          Every solution we scope must return at least 10 times its cost. This is how we scope every engagement.
        </motion.p>

        {/* 10x Animated Counter */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center mt-12"
        >
          <div
            className="font-display text-accent-gold text-6xl md:text-7xl lg:text-[clamp(5rem,15vw,8.75rem)]"
            aria-live="polite"
            aria-label={counterComplete ? "10x return on investment" : undefined}
          >
            {displayValue}x
          </div>
          <p className="font-body font-semibold text-base text-text-hero text-center mt-4">
            Per engagement. That&apos;s the scoping standard.
          </p>
        </motion.div>

        {/* Transition text */}
        <p className="font-body text-sm text-text-muted text-center mt-8">
          Here&apos;s what that looks like:
        </p>

        {/* Tab row - Card Style with hover translate */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-12 mb-8">
          {caseStudies.map((study, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={study.client}
                onClick={() => setActiveTab(index)}
                className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 cursor-pointer rounded-lg transition-all duration-200 hover:translate-x-1 ${
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
          {/* Gold glow behind content with parallax */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              y: glowY,
              background: `radial-gradient(ellipse at 20% 50%, rgba(240,180,41,0.08), transparent 60%)`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-[1]"
            >
              {/* Case study details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

                {/* Right column - stats */}
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
              </div>

              {/* Case Study Rows Table - Run-1 style */}
              <div className="mt-8 max-w-4xl mx-auto">
                {CASE_STUDY_ROWS.map((row, index) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: EASE_OUT,
                      delay: 0.1 + index * 0.1,
                    }}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline py-6 border-b border-white/[0.06] transition-all duration-200 rounded-sm px-4 -mx-4 hover:bg-white/[0.03] hover:translate-x-1"
                  >
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      {row.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="font-display text-2xl text-accent-gold">
                        {row.stat}
                      </span>
                      <span className="text-success ml-1">{row.arrow}</span>
                    </div>
                    <p className="font-body text-base text-text-body">
                      {row.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.4 }}
          className="font-body text-xs text-text-muted text-center mt-8"
        >
          Based on our methodology and projected outcomes. Named case studies available upon request.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}

