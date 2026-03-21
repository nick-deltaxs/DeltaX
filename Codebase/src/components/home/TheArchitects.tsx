"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const pillarGradients: Record<string, string> = {
  core: "linear-gradient(135deg, #006381 0%, #1A9BBF 100%)",
  code: "linear-gradient(135deg, #5A5A5A 0%, #8A8A8A 100%)",
  scale: "linear-gradient(135deg, #9A1515 0%, #D94040 100%)",
  style: "linear-gradient(135deg, #121CDB 0%, #6E75FF 100%)",
  deltax: "linear-gradient(135deg, #1A9BBF 0%, #15339A 100%)",
};

const pillarTextColors: Record<string, string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
};

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  pillar: string;
}

const cofounders: TeamMember[] = [
  { name: "Dave Benrouz", initials: "DB", role: "Co-Founder & System Architect", pillar: "deltax" },
  { name: "Ramtin Ghaffary", initials: "RG", role: "Co-Founder", pillar: "deltax" },
];

const leadership: TeamMember[] = [
  { name: "Vitaly Kulak", initials: "VK", role: "COO", pillar: "deltax" },
  { name: "Yaroslav Gordon", initials: "YG", role: "Chief of Staff", pillar: "deltax" },
  { name: "Vadim Parker", initials: "VP", role: "Creative Director", pillar: "style" },
  { name: "Masha Ghaffary", initials: "MG", role: "Growth Director", pillar: "scale" },
];

const team: TeamMember[] = [
  { name: "Nick", initials: "NK", role: "Quality & Ops", pillar: "code" },
  { name: "Den", initials: "DP", role: "Admin", pillar: "deltax" },
  { name: "Hassan", initials: "HA", role: "Finance", pillar: "deltax" },
  { name: "Goga", initials: "GZ", role: "Research", pillar: "core" },
  { name: "Arvin", initials: "AA", role: "Engineer", pillar: "code" },
  { name: "Arrom", initials: "AM", role: "Engineer", pillar: "code" },
  { name: "Nazar", initials: "NZ", role: "Builder", pillar: "code" },
  { name: "Marina", initials: "MO", role: "Builder", pillar: "code" },
  { name: "Katareina", initials: "KM", role: "Builder", pillar: "code" },
  { name: "Erfan", initials: "EM", role: "Builder", pillar: "code" },
];

const staggerContainer = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function TheArchitects() {
  return (
    <SectionWrapper id="architects" background="primary">
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.10) 0%, transparent 70%)" }}
      />
      
      <div className="relative z-10">
        <SectionLabel color="core">THE ARCHITECTS</SectionLabel>
        <p className="font-body text-lg text-text-body mt-4">16 people. Four disciplines. One system.</p>
        
        {/* Co-Founders */}
        <ScrollReveal delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto">
            {cofounders.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <div 
                  className="w-[120px] h-[120px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                  style={{ background: pillarGradients[person.pillar] }}
                >
                  <span className="font-display text-2xl text-text-hero text-center select-none">
                    {person.initials}
                  </span>
                </div>
                <h3 className="font-display text-base text-text-hero mt-4">{person.name}</h3>
                <p className="font-body text-sm text-text-dim">{person.role}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Leadership */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {leadership.map((person) => (
            <motion.div key={person.name} variants={fadeUpItem} className="flex flex-col items-center">
              <div 
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                style={{ background: pillarGradients[person.pillar] }}
              >
                <span className="font-display text-lg text-text-hero select-none">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-body text-sm text-text-body mt-3">{person.name}</h3>
              <p className="font-body text-xs text-text-dim">{person.role}</p>
              <span className={`font-mono text-[10px] uppercase tracking-wider mt-1 ${pillarTextColors[person.pillar]}`}>
                {person.pillar}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Team */}
        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-4 mt-8"
        >
          {team.map((person) => (
            <motion.div key={person.name} variants={fadeUpItem} className="flex flex-col items-center">
              <div 
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                style={{ background: pillarGradients[person.pillar] }}
              >
                <span className="font-display text-sm text-text-hero select-none">
                  {person.initials}
                </span>
              </div>
              <h3 className="text-xs text-text-dim mt-2 text-center truncate w-full">{person.name}</h3>
              <p className="text-[10px] text-text-muted text-center truncate w-full">{person.role}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Link */}
        <a 
          href="/about#team" 
          className="font-body text-sm text-core-bright hover:underline mt-8 inline-block"
        >
          → Meet the full 16-person team
        </a>
      </div>
    </SectionWrapper>
  );
}
