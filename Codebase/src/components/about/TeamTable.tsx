"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { founders, leaders, members } from "@/data/team";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const PILLAR_COLORS: Record<string, string> = {
  deltax: "#f0b429",
  core: "#1A9BBF",
  code: "#8A8A8A",
  scale: "#D94040",
  style: "#6E75FF",
};

const PILLAR_GLOW: Record<string, string> = {
  deltax: "rgba(240, 180, 41, 0.3)",
  core: "rgba(26, 155, 191, 0.3)",
  code: "rgba(138, 138, 138, 0.3)",
  scale: "rgba(217, 64, 64, 0.3)",
  style: "rgba(110, 117, 255, 0.3)",
};

const FOUNDER_META: Record<string, { initials: string; bio: string }> = {
  "Dave Benrouz": {
    initials: "DB",
    bio: "Systems thinker who builds companies like machines. Former engineer turned architect — designs the system before writing a single line of code.",
  },
  "Ramtin Ghaffary": {
    initials: "RG",
    bio: "Strategy mind who finds the signal in the noise. Leads CoreXs — mapping every business before the engines activate.",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// Founder Card Component with glassmorphism
function FounderCard({ 
  founder, 
  meta, 
  index 
}: { 
  founder: typeof founders[0]; 
  meta: typeof FOUNDER_META[string]; 
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(ellipse at center, ${PILLAR_GLOW.deltax} 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      
      {/* Card */}
      <div 
        className="relative p-6 rounded-2xl border h-full"
        style={{
          background: "linear-gradient(135deg, rgba(17,17,22,0.9) 0%, rgba(10,10,11,0.95) 100%)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-6 right-6 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #f0b429, transparent)",
            opacity: 0.6,
          }}
        />

        {/* Initials avatar with glow */}
        <div className="relative mb-5">
          <div
            className="flex items-center justify-center rounded-xl font-mono text-[14px] font-semibold tracking-[0.05em]"
            style={{
              width: 48,
              height: 48,
              border: "1.5px solid rgba(240, 180, 41, 0.5)",
              color: "#f0b429",
              backgroundColor: "rgba(240, 180, 41, 0.08)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.15)",
            }}
          >
            {meta?.initials}
          </div>
          {/* Status indicator */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-primary"
            style={{ background: "#f0b429" }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <h3
          className="font-display text-2xl text-text-hero mb-1"
          style={{ letterSpacing: "-0.02em" }}
        >
          {founder.name}
        </h3>

        <p
          className="font-mono text-[12px] uppercase tracking-[0.1em] mb-4"
          style={{ color: "#f0b429" }}
        >
          {founder.role}
        </p>

        <p className="font-body text-sm text-text-secondary leading-[1.6]">
          {meta?.bio}
        </p>

        {/* Bottom circuit decoration */}
        <div className="absolute bottom-4 right-4 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(240, 180, 41, 0.3)" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Leader Card Component
function LeaderCard({ leader }: { leader: typeof leaders[0] }) {
  const color = PILLAR_COLORS[leader.pillar];
  const glow = PILLAR_GLOW[leader.pillar];
  
  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
    >
      <div 
        className="flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 group-hover:border-opacity-30"
        style={{
          background: "rgba(17, 17, 22, 0.5)",
          borderColor: `${color}15`,
          borderWidth: "1px",
        }}
      >
        {/* Pillar indicator with glow */}
        <div className="relative shrink-0 mt-1">
          <div
            className="rounded-full"
            style={{
              width: 10,
              height: 10,
              backgroundColor: color,
              boxShadow: `0 0 10px ${glow}`,
            }}
          />
        </div>
        
        <div>
          <p className="font-body text-sm font-medium text-text-hero group-hover:text-white transition-colors">
            {leader.name}
          </p>
          <p className="font-body text-xs text-text-muted mt-0.5">
            {leader.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Team Member Card
function TeamMemberCard({ member }: { member: typeof members[0] }) {
  const color = PILLAR_COLORS[member.pillar];
  
  return (
    <motion.div
      variants={cardVariants}
      className="flex items-center gap-2 py-1"
    >
      <div
        className="rounded-full shrink-0"
        style={{
          width: 6,
          height: 6,
          backgroundColor: color,
        }}
      />
      <div>
        <p className="font-body text-[13px] text-text-body">
          {member.name}
        </p>
        <p className="font-body text-[11px] text-text-muted">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function TeamTable() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <SectionWrapper id="team" background="primary" glow="none" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner glows */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse at 100% 0%, rgba(26,155,191,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse at 0% 100%, rgba(110,117,255,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <SectionOverline number="02" label="THE ARCHITECTS" className="mb-4" />
          <h2
            className="font-display text-[32px] md:text-5xl text-text-hero"
            style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            The People.
          </h2>
        </motion.div>

        {/* Co-founders - Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.name}
              founder={founder}
              meta={FOUNDER_META[founder.name]}
              index={index}
            />
          ))}
        </motion.div>

        {/* Section Leaders */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              Section Leaders
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {leaders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </motion.div>
        </div>

        {/* The Team */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              The Team
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <span className="font-mono text-[11px] text-text-muted">
              {members.length} Specialists
            </span>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2"
          >
            {members.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>

        {/* System visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div 
            className="px-6 py-3 rounded-full border flex items-center gap-3"
            style={{
              background: "rgba(17, 17, 22, 0.8)",
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="flex -space-x-1.5">
              {Object.entries(PILLAR_COLORS).slice(1, 5).map(([key, color]) => (
                <div
                  key={key}
                  className="w-4 h-4 rounded-full border-2 border-primary"
                  style={{ background: color }}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-text-secondary">
              4 Engines. 16 Nodes. 1 System.
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-core-bright"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

