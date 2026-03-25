"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const activePillar = pillars[activeTab];

  return (
<<<<<<< HEAD
    <SectionWrapper id="system" background="secondary" glow="none">
=======
    <SectionWrapper id="system" background="primary" glow="none">
      {/* Active pillar glow background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${activePillar.glowColor}, transparent 60%)`,
        }}
      />

>>>>>>> Widi-azm
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

        {/* Tab row */}
        <div
          className="flex gap-1 border-b border-elevated overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {pillars.map((pillar, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-2 px-4 py-3 cursor-pointer whitespace-nowrap shrink-0 transition-all duration-150 ${
                  isActive
                    ? `${pillar.borderClass} border-b-2`
                    : "text-white/[0.45] hover:text-white/[0.75]"
                }`}
                style={isActive ? { color: pillar.cssColor } : undefined}
              >
                {pillar.logo ? (
                  <Image
                    src={pillar.logo}
                    alt={pillar.name}
                    width={28}
                    height={28}
                    className={`object-contain transition-opacity duration-150 ${
                      isActive ? 'opacity-100' : 'opacity-[0.45] group-hover:opacity-75'
                    }`}
                  />
                ) : (
                  <span className="font-display text-base">{pillar.logoText}</span>
                )}
                <span className="font-body text-sm font-medium">{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="relative mt-8 min-h-[400px] overflow-hidden pb-20">
          {/* Pillar glow behind content */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${activePillar.glowColor}, transparent 70%)`,
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
              className="relative z-[1] grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12"
            >
              {/* Left column - text content */}
              <div>
                <h3
                  className={`font-display text-2xl md:text-[28px] ${activePillar.brightClass} mb-4`}
                >
                  {activePillar.title}
                </h3>
                <p className="font-body text-base text-text-body leading-[1.6] mb-8">
                  {activePillar.description}
                </p>

                {/* Capability table */}
                <div>
                  <div className="grid grid-cols-[1fr_2fr] gap-4 pb-3 border-b border-elevated">
                    <span className="font-mono text-xs uppercase text-text-muted tracking-[0.08em]">
                      Capability
                    </span>
                    <span className="font-mono text-xs uppercase text-text-muted tracking-[0.08em]">
                      Detail
                    </span>
                  </div>
                  {activePillar.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-[1fr_2fr] gap-4 py-3 border-b border-elevated"
                    >
                      <span className="font-body text-sm font-medium text-text-hero">{cap.name}</span>
                      <span className="font-body text-sm text-text-secondary">{cap.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - decorative illustration */}
              <div className="hidden md:block pointer-events-none">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-lg overflow-hidden opacity-30">
                  <Image
                    src={`/images/system-${activePillar.id}.png`}
                    alt={`${activePillar.name} visual`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
