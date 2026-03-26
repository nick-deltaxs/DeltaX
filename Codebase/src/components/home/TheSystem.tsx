"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";

const pillars = [
  {
    id: "core",
    name: "CoreXs",
    logo: "/logos/corexs-teal.png",
    title: "CoreXs — The Audit.",
    description:
      "Every project starts with a systematic diagnosis. We map your revenue streams, team structure, operations, and bottlenecks before writing a single line of code.",
    capabilities: [
      { name: "Business Audit", detail: "Revenue, team, operations, bottleneck mapping" },
      { name: "Market Analysis", detail: "Competitive positioning and opportunity gaps" },
      { name: "System Design", detail: "Architecture before code, strategy before campaigns" },
    ],
    brightClass: "text-core-bright",
    borderClass: "border-core-bright",
    cssColor: "var(--core-bright)",
    glowColor: "rgba(26,155,191,0.08)",
  },
  {
    id: "code",
    name: "CodeXs",
    logo: "/logos/codexs-light.png",
    title: "CodeXs — The Machine.",
    description:
      "Two development teams. One codebase. The best code wins. Nick controls quality while Team Razm and Team Bazm compete on every build.",
    capabilities: [
      { name: "Team Razm", detail: "Frontend, backend, mobile — led by Arvin" },
      { name: "Team Bazm", detail: "Same capabilities, parallel track — led by Ali" },
      { name: "Quality Gate", detail: "Every commit reviewed. Every deploy verified." },
    ],
    brightClass: "text-code-bright",
    borderClass: "border-code-bright",
    cssColor: "var(--code-bright)",
    glowColor: "rgba(138,138,138,0.08)",
  },
  {
    id: "scale",
    name: "ScaleXs",
    logo: "/logos/scalexs-red.png",
    title: "ScaleXs — The Fuel.",
    description:
      "Growth without a system is just spending. We build pipelines that compound — paid acquisition, content, analytics, all feeding the same machine.",
    capabilities: [
      { name: "Paid Acquisition", detail: "Performance marketing with transparent ROAS" },
      { name: "Content & Social", detail: "Brand presence that builds audience over time" },
      { name: "Analytics", detail: "Decisions from data, not from gut feelings" },
    ],
    brightClass: "text-scale-bright",
    borderClass: "border-scale-bright",
    cssColor: "var(--scale-bright)",
    glowColor: "rgba(217,64,64,0.08)",
  },
  {
    id: "style",
    name: "StyleXs",
    logoText: "SX",
    title: "StyleXs — The Signal.",
    description:
      "Design is the first thing they see and the last thing they remember. We don't make it pretty — we make it impossible to ignore.",
    capabilities: [
      { name: "Brand Identity", detail: "Logo, colors, typography, voice — the complete system" },
      { name: "UI/UX Design", detail: "Interfaces built on research, not on trends" },
      { name: "Design Systems", detail: "Scalable, documented, consistent everywhere" },
    ],
    brightClass: "text-style-bright",
    borderClass: "border-style-bright",
    cssColor: "var(--style-bright)",
    glowColor: "rgba(110,117,255,0.08)",
  },
];

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

export function TheSystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedDesc, setExpandedDesc] = useState(false);
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: glow moves at 0.4x speed, max 30px
  const glowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const activePillar = pillars[activeTab];

  // Read URL search param to set active tab
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = pillars.findIndex(p => p.id === tabParam);
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  // Handle scroll to section when tab is set from URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && pillars.findIndex(p => p.id === tabParam) !== -1) {
      // Scroll to section
      setTimeout(() => {
        const section = document.getElementById('system');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <SectionWrapper ref={sectionRef} id="system" background="primary" glow="none">
      <div className="relative z-10">
        {/* Overline */}
        <SectionOverline number="01" label="THE SYSTEM" className="mb-4" />

        {/* Headline */}
        <h2
          className="font-display text-4xl md:text-5xl text-text-hero tracking-[-0.02em] mb-4"
          style={{ textWrap: "balance" }}
        >
          One company. Four engines.
        </h2>

        {/* Subtext */}
        <p className="font-body text-lg text-text-secondary max-w-[640px] mb-12">
          Each engine operates independently. Together, they form a system no single agency can
          replicate.
        </p>

        {/* Tab row - Card Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {pillars.map((pillar, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`group flex flex-col items-center justify-center gap-3 px-4 py-5 cursor-pointer rounded-lg transition-all duration-200 ${
                  isActive
                    ? `${pillar.borderClass} border-2 bg-tertiary/50`
                    : "border border-elevated bg-secondary/50 hover:bg-tertiary/30"
                }`}
              >
                {pillar.logo ? (
                  <Image
                    src={pillar.logo}
                    alt={pillar.name}
                    width={32}
                    height={32}
                    className={`object-contain transition-all duration-200 ${
                      isActive ? 'opacity-100 scale-105' : 'opacity-60 group-hover:opacity-80'
                    } ${isActive ? pillar.brightClass : ''}`}
                  />
                ) : (
                  <span className={`font-display text-xl ${isActive ? pillar.brightClass : 'text-text-secondary'}`}>
                    {pillar.logoText}
                  </span>
                )}
                <span className={`font-body text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-text-hero' : 'text-text-secondary group-hover:text-text-body'
                }`}>
                  {pillar.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel - Card Style */}
        <div className="relative overflow-hidden rounded-xl border border-elevated bg-secondary/30 p-6 md:p-8">
          {/* Pillar glow behind content with parallax */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              y: glowY,
              background: `radial-gradient(ellipse at 20% 50%, ${activePillar.glowColor}, transparent 60%)`,
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
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-tertiary flex items-center justify-center ${activePillar.borderClass} border`}>
                  {activePillar.logo ? (
                    <Image
                      src={activePillar.logo}
                      alt={activePillar.name}
                      width={28}
                      height={28}
                      className={`object-contain ${activePillar.brightClass}`}
                    />
                  ) : (
                    <span className={`font-display text-lg ${activePillar.brightClass}`}>
                      {activePillar.logoText}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`font-display text-2xl md:text-3xl ${activePillar.brightClass}`}>
                  {activePillar.title.split(' — ')[0]}
                </h3>

                {/* Description - Expandable */}
                <div className="space-y-3">
                  <motion.p
                    className="font-body text-base text-text-body leading-relaxed cursor-pointer"
                    onClick={() => setExpandedDesc(!expandedDesc)}
                    animate={{ height: expandedDesc ? 'auto' : '4.5rem' }}
                    style={{ overflow: 'hidden' }}
                  >
                    {activePillar.description}
                  </motion.p>
                  <button
                    onClick={() => setExpandedDesc(!expandedDesc)}
                    className={`font-body text-sm ${activePillar.brightClass} hover:opacity-80 transition-opacity flex items-center gap-1`}
                  >
                    {expandedDesc ? 'Show less' : 'Read more'}
                    <motion.span
                      animate={{ rotate: expandedDesc ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↓
                    </motion.span>
                  </button>
                </div>

                {/* CTA Link */}
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-body text-sm ${activePillar.brightClass} hover:opacity-80 transition-opacity`}
                >
                  Start a Project
                  <span>→</span>
                </Link>
              </div>

              {/* Right column - capability list */}
              <div className="space-y-6">
                {activePillar.capabilities.map((cap, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className={`font-mono text-xs uppercase tracking-[0.08em] ${activePillar.brightClass}`}>
                      {cap.name}
                    </h4>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {cap.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
