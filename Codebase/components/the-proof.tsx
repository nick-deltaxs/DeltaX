"use client";

import { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionOverline } from "@/components/ui/section-overline";

const EASE_OUT = "cubic-bezier(0.25, 0.1, 0.25, 1)";

// Case study row data
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

const caseStudies = [
  {
    client: "Luxe Fashion",
    sector: "Premium Fashion",
    delivered: "Complete digital transformation with e-commerce, inventory management, and marketing automation.",
  },
  {
    client: "CloudFlow",
    sector: "SaaS",
    delivered: "Automated workflow platform reducing manual tasks by 60% and improving team productivity.",
  },
  {
    client: "ConsultPro",
    sector: "Service Business",
    delivered: "Rebranding and lead generation system that increased qualified leads by 5x in 90 days.",
  },
  {
    client: "TechStart",
    sector: "Technology",
    delivered: "Full-stack development with scalable architecture and CI/CD pipeline implementation.",
  },
];

export default function TheProof() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const [counterComplete, setCounterComplete] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const activeCase = caseStudies[activeTab];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counterComplete) {
          let start = 0;
          const end = 10;
          const duration = 1500;
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOut);
            
            setDisplayValue(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounterComplete(true);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, counterComplete]);

  // Handle hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tabId = hash.replace("#", "");
      const tabIndex = caseStudies.findIndex(
        (c) => c.client.toLowerCase() === tabId.toLowerCase()
      );
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    }
  }, []);

  return (
    <SectionWrapper id="proof" background="primary" glow="soft">
      {/* Gold radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Overline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: EASE_OUT }}
        >
          <SectionOverline number="02" label="THE PROOF" className="mb-4" />
        </div>

        {/* Intro Text */}
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: EASE_OUT }}
        >
          <p className="text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto text-center mb-8">
            Every solution we scope must return at least 10 times its cost. This is how we scope every engagement.
          </p>
        </div>

        {/* 10x Animated Counter */}
        <div
          ref={counterRef}
          className={`text-center mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionTimingFunction: EASE_OUT }}
        >
          <div
            className="font-display text-[#6366F1] text-6xl md:text-7xl lg:text-[clamp(5rem,15vw,8.75rem)]"
            aria-live="polite"
            aria-label={counterComplete ? "10x return on investment" : undefined}
          >
            {displayValue}x
          </div>
          <p className="font-semibold text-base text-white text-center mt-4">
            Per engagement. That&apos;s the scoping standard.
          </p>
        </div>

        {/* Transition text */}
        <p className="text-sm text-[var(--text-secondary)] text-center mt-8">
          Here&apos;s what that looks like:
        </p>

        {/* Tab row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-12 mb-8">
          {caseStudies.map((study, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={study.client}
                onClick={() => setActiveTab(index)}
                className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 cursor-pointer rounded-lg transition-all duration-200 hover:translate-x-1 ${
                  isActive
                    ? "border-2 border-[#6366F1] bg-white/5"
                    : "border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                <span
                  className={`font-display text-xl transition-colors duration-200 ${
                    isActive ? "text-[#6366F1]" : "text-white/60"
                  }`}
                >
                  {study.client}
                </span>
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 group-hover:text-white/80"
                  }`}
                >
                  {study.sector}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          {/* Gold glow behind content */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08), transparent 60%)`,
            }}
          />

          <div className="relative z-[1] transition-all duration-300">
            {/* Case study details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column - main content */}
              <div className="space-y-6">
                {/* Client badge */}
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-[#6366F1]/50">
                  <span className="font-display text-lg text-[#6366F1]">
                    {activeCase.client.charAt(0)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-[#6366F1]">
                  {activeCase.client}
                </h3>

                {/* Sector */}
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                  {activeCase.sector}
                </p>

                {/* Delivered */}
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {activeCase.delivered}
                </p>
              </div>

              {/* Right column - stats */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-[#6366F1]">
                    Impact
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Complete transformation from brand identity to market presence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-[#6366F1]">
                    Timeline
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    3 months from concept to launch
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study Rows Table */}
            <div className="mt-8 max-w-4xl mx-auto">
              {CASE_STUDY_ROWS.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline py-6 border-b border-white/[0.06] transition-all duration-200 rounded-sm px-4 -mx-4 hover:bg-white/[0.03] hover:translate-x-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionTimingFunction: EASE_OUT,
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                    {row.label}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-display text-2xl text-[#6366F1]">
                      {row.stat}
                  </span>
                    <span className="text-green-400 ml-1">{row.arrow}</span>
                  </div>
                  <p className="text-base text-[var(--text-secondary)]">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className={`text-xs text-[var(--text-secondary)] text-center mt-8 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Based on our methodology and projected outcomes. Named case studies available upon request.
        </p>
      </div>
    </SectionWrapper>
  );
}
