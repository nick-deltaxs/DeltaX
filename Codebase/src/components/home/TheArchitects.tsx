"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { founders, leaders, members } from "@/data/team";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

// Role color coding
const ROLE_COLORS: Record<string, { primary: string; glow: string; accent: string }> = {
  deltax: { primary: "#f0b429", glow: "rgba(240, 180, 41, 0.4)", accent: "orange" },
  core: { primary: "#1A9BBF", glow: "rgba(26, 155, 191, 0.4)", accent: "cyan" },
  code: { primary: "#8A8A8A", glow: "rgba(138, 138, 138, 0.4)", accent: "gray" },
  scale: { primary: "#D94040", glow: "rgba(217, 64, 64, 0.4)", accent: "red" },
  style: { primary: "#6E75FF", glow: "rgba(110, 117, 255, 0.4)", accent: "purple" },
};

// Founder meta data with bios
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

// 3D Metallic Badge component
function MetallicBadge({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="relative">
      {/* Static outer glow */}
      <div
        className="absolute inset-0 rounded-xl blur-lg"
        style={{ background: color, opacity: 0.5 }}
      />
      
      {/* Badge container */}
      <div
        className="relative w-16 h-16 rounded-xl flex items-center justify-center font-mono text-lg font-bold tracking-wider"
        style={{
          background: "linear-gradient(145deg, rgba(26,26,34,0.9) 0%, rgba(17,17,22,0.95) 100%)",
          border: `2px solid ${color}`,
          boxShadow: `0 0 20px ${color}, inset 0 0 20px rgba(0,0,0,0.5)`,
          color: color,
          textShadow: `0 0 10px ${color}`,
        }}
      >
        {initials}
      </div>
    </div>
  );
}

// Core Processor Card (Founder)
function CoreProcessorCard({ 
  founder, 
  index,
  isHovered,
  onHover 
}: { 
  founder: typeof founders[0]; 
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  const meta = FOUNDER_META[founder.name];
  const colors = ROLE_COLORS[founder.pillar];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: EASE_OUT }}
      className="relative group"
      onMouseEnter={() => onHover(founder.name)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Static outer glow on hover */}
      <div
        className="absolute -inset-4 rounded-2xl blur-xl -z-10 transition-opacity duration-300"
        style={{ 
          background: colors.glow,
          opacity: isHovered ? 0.4 : 0,
        }}
      />

      {/* Glassmorphism card */}
      <div
        className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-md"
        style={{
          background: "linear-gradient(135deg, rgba(26,26,34,0.6) 0%, rgba(17,17,22,0.8) 100%)",
          border: `1px solid ${isHovered ? colors.primary : "rgba(255,255,255,0.08)"}`,
          boxShadow: isHovered 
            ? `0 0 40px ${colors.glow}, inset 0 0 40px rgba(0,0,0,0.3)`
            : "0 25px 60px rgba(0,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* Scan line effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "linear" }}
            >
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                  boxShadow: `0 0 10px ${colors.primary}`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="flex items-start gap-6">
          {/* 3D Metallic Badge */}
          <MetallicBadge initials={meta?.initials || "??"} color={colors.primary} />

          <div className="flex-1">
            {/* Status indicator - static */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#00ff88" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#00ff88" }}>
                ACTIVE
              </span>
            </div>

            {/* Name */}
            <h3 className="font-display text-2xl text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
              {founder.name}
            </h3>

            {/* Role - Monospace */}
            <p 
              className="font-mono text-sm mb-4 tracking-wide"
              style={{ color: colors.primary }}
            >
              {founder.role}
            </p>

            {/* Bio */}
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(232, 232, 232, 0.7)" }}>
              {meta?.bio}
            </p>
          </div>
        </div>

        {/* Circuit pattern decoration */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M20 0 L20 15 M20 25 L20 40 M0 20 L15 20 M25 20 L40 20"
              stroke={colors.primary}
              strokeWidth="1"
              fill="none"
            />
            <circle cx="20" cy="20" r="4" fill={colors.primary} />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Sub-System Card (Leader)
function SubSystemCard({ 
  leader, 
  index,
  isHovered,
  onHover 
}: { 
  leader: typeof leaders[0]; 
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  const colors = ROLE_COLORS[leader.pillar];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: EASE_OUT }}
      className="relative group"
      onMouseEnter={() => onHover(leader.name)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Connection line from above */}
      <div className="absolute -top-8 left-1/2 w-px h-8 -translate-x-1/2 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            background: `linear-gradient(180deg, ${colors.primary}, transparent)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
        />
      </div>

      {/* Card */}
      <div
        className="relative p-5 rounded-xl backdrop-blur-sm overflow-hidden"
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, rgba(26,26,34,0.8) 0%, ${colors.glow.replace("0.4", "0.1")} 100%)`
            : "rgba(17, 17, 22, 0.5)",
          border: `1px solid ${isHovered ? colors.primary : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 30px ${colors.glow}` : "none",
        }}
      >
        {/* Scan line on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="w-px h-full"
                style={{
                  background: `linear-gradient(180deg, transparent, ${colors.primary}, transparent)`,
                  boxShadow: `0 0 10px ${colors.primary}`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status dot */}
        <div className="absolute top-3 right-3">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00ff88" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          />
        </div>

        {/* Pillar indicator */}
        <div 
          className="w-8 h-1 rounded-full mb-3"
          style={{ background: colors.primary }}
        />

        {/* Name */}
        <p className="font-body text-sm font-semibold text-white mb-1">
          {leader.name}
        </p>

        {/* Role - Monospace */}
        <p 
          className="font-mono text-[11px] tracking-wide"
          style={{ color: colors.primary }}
        >
          {leader.role}
        </p>
      </div>
    </motion.div>
  );
}

// Distributed Node Card (Team Member)
function DistributedNodeCard({ 
  member, 
  index,
  isHovered,
  onHover 
}: { 
  member: typeof members[0]; 
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  const colors = ROLE_COLORS[member.pillar];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 + index * 0.05, ease: EASE_OUT }}
      className="relative group cursor-pointer"
      onMouseEnter={() => onHover(member.name)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Server blade style card */}
      <div
        className="relative p-3 rounded-lg flex items-center gap-3 overflow-hidden"
        style={{
          background: isHovered 
            ? `linear-gradient(90deg, rgba(26,26,34,0.9) 0%, ${colors.glow.replace("0.4", "0.15")} 100%)`
            : "rgba(17, 17, 22, 0.4)",
          border: `1px solid ${isHovered ? colors.primary : "rgba(255,255,255,0.04)"}`,
          boxShadow: isHovered ? `0 0 15px ${colors.glow}` : "none",
        }}
      >
        {/* Status indicator */}
        <div className="flex-shrink-0">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: isHovered ? colors.primary : "rgba(102,102,102,0.5)" }}
            animate={isHovered ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="font-body text-[13px] font-medium text-white truncate">
            {member.name}
          </p>
          <p 
            className="font-mono text-[10px] tracking-wide truncate"
            style={{ color: isHovered ? colors.primary : "rgba(153,153,153,0.6)" }}
          >
            {member.role}
          </p>
        </div>

        {/* Mini circuit decoration */}
        <div className="flex-shrink-0 opacity-30">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="2" fill={colors.primary} />
            <path d="M8 2 L8 6 M8 10 L8 14 M2 8 L6 8 M10 8 L14 8" stroke={colors.primary} strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function TheArchitects() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <SectionWrapper id="architects" background="primary" glow="none" className="relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="architects-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#architects-grid)" />
        </svg>
      </div>

      {/* Ambient glow effects */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(26,155,191,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          left: "10%",
          top: "10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(110,117,255,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          right: "15%",
          bottom: "20%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest mb-4 block" style={{ color: "rgba(102, 102, 102, 0.9)" }}>
            [04] SYSTEM ARCHITECTS
          </span>
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              textWrap: "balance",
              color: "#E8E8E8",
            }}
          >
            Built by founders who build.
          </h2>
          <p className="font-body text-lg mt-4 max-w-2xl mx-auto" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
            The neural network behind every system we deploy.
          </p>
        </motion.div>

        {/* Core Processors (Founders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <CoreProcessorCard
              key={founder.name}
              founder={founder}
              index={index}
              isHovered={hoveredMember === founder.name}
              onHover={setHoveredMember}
            />
          ))}
        </div>

        {/* Circuit connection lines */}
        <div className="relative h-px mb-12">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(26,155,191,0.2), transparent)",
            }}
          />
          <motion.div
            className="absolute h-full w-20"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(26,155,191,0.5), transparent)",
            }}
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Sub-Systems (Section Leaders) */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest mb-6 text-center" style={{ color: "rgba(102, 102, 102, 0.7)" }}>
            // Sub-Systems
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {leaders.map((leader, index) => (
              <SubSystemCard
                key={leader.name}
                leader={leader}
                index={index}
                isHovered={hoveredMember === leader.name}
                onHover={setHoveredMember}
              />
            ))}
          </div>
        </div>

        {/* Circuit connection lines */}
        <div className="relative h-px mb-12">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(138,138,138,0.15), transparent)",
            }}
          />
        </div>

        {/* Distributed Nodes (Team Members) */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest mb-6 text-center" style={{ color: "rgba(102, 102, 102, 0.7)" }}>
            // Distributed Nodes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {members.map((member, index) => (
              <DistributedNodeCard
                key={member.name}
                member={member}
                index={index}
                isHovered={hoveredMember === member.name}
                onHover={setHoveredMember}
              />
            ))}
          </div>
        </div>

        {/* System status footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-xs" style={{ color: "rgba(153, 153, 153, 0.8)" }}>
              SYSTEM OPERATIONAL
            </span>
          </div>
          <div 
            className="h-4 w-px"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          <span className="font-mono text-xs" style={{ color: "rgba(102, 102, 102, 0.8)" }}>
            {founders.length + leaders.length + members.length} NODES ACTIVE
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
