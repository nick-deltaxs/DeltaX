"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

const STEPS = [
  {
    id: "step-01",
    label: "// STEP 01",
    headline: "Talk to us.",
    body: "A 30-minute call. No pitch deck. Just your challenges and our honest assessment.",
    status: "ONLINE",
    statusColor: "#00ff88",
    accentColor: "#00B4D8",
    glowColor: "rgba(0, 180, 216, 0.3)",
    type: "input",
  },
  {
    id: "step-02",
    label: "// STEP 02",
    headline: "We audit your system.",
    body: "CoreXs maps your business. Where you're leaking time, money, and opportunity.",
    status: "ANALYZING",
    statusColor: "#f0b429",
    accentColor: "#8A8A8A",
    glowColor: "rgba(138, 138, 138, 0.3)",
    type: "diagnostic",
  },
  {
    id: "step-03",
    label: "// STEP 03",
    headline: "We build the machine.",
    body: "All four engines activate. You watch the system work while you focus on what matters.",
    status: "CONSTRUCTING",
    statusColor: "#D94040",
    accentColor: "#D4AF37",
    glowColor: "rgba(212, 175, 55, 0.3)",
    type: "execution",
  },
];

// Futuristic radar/communication input icon
function InputNodeIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Outer radar rings */}
      <motion.circle
        cx="24"
        cy="24"
        r="18"
        stroke={color}
        strokeWidth="1"
        opacity="0.3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="14"
        stroke={color}
        strokeWidth="1"
        opacity="0.5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
      />
      
      {/* Central node */}
      <circle cx="24" cy="24" r="8" fill={color} opacity="0.2" />
      <circle cx="24" cy="24" r="5" fill={color} opacity="0.4" />
      <circle cx="24" cy="24" r="3" fill={color} />
      
      {/* Incoming data pulses from corners */}
      <motion.path
        d="M6 6 L12 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      />
      <motion.path
        d="M42 6 L36 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.path
        d="M6 42 L12 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
      <motion.path
        d="M42 42 L36 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
      />
      
      {/* Pulse dots at ends */}
      <motion.circle
        cx="6"
        cy="6"
        r="2"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx="42"
        cy="6"
        r="2"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle
        cx="6"
        cy="42"
        r="2"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
      <motion.circle
        cx="42"
        cy="42"
        r="2"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
      />
    </svg>
  );
}

// Holographic blueprint scan icon
function DiagnosticIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="32" height="32" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="8" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <line x1="8" y1="32" x2="40" y2="32" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="8" x2="20" y2="40" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <line x1="32" y1="8" x2="32" y2="40" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <motion.line
        x1="8"
        y1="12"
        x2="40"
        y2="12"
        stroke={color}
        strokeWidth="2"
        initial={{ y1: 8, y2: 8 }}
        animate={{ y1: 40, y2: 40 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="16" cy="16" r="2" fill={color} opacity="0.6" />
      <circle cx="28" cy="24" r="2" fill={color} opacity="0.6" />
      <circle cx="36" cy="36" r="2" fill={color} opacity="0.6" />
    </svg>
  );
}

// Engine/server blades icon
function ExecutionIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="10" width="12" height="28" rx="2" stroke={color} strokeWidth="1.5" />
      <line x1="9" y1="16" x2="15" y2="16" stroke={color} strokeWidth="1" />
      <line x1="9" y1="22" x2="15" y2="22" stroke={color} strokeWidth="1" />
      <line x1="9" y1="28" x2="15" y2="28" stroke={color} strokeWidth="1" />
      <rect x="18" y="10" width="12" height="28" rx="2" stroke={color} strokeWidth="1.5" />
      <line x1="21" y1="16" x2="27" y2="16" stroke={color} strokeWidth="1" />
      <line x1="21" y1="22" x2="27" y2="22" stroke={color} strokeWidth="1" />
      <line x1="21" y1="28" x2="27" y2="28" stroke={color} strokeWidth="1" />
      <rect x="30" y="10" width="12" height="28" rx="2" stroke={color} strokeWidth="1.5" />
      <line x1="33" y1="16" x2="39" y2="16" stroke={color} strokeWidth="1" />
      <line x1="33" y1="22" x2="39" y2="22" stroke={color} strokeWidth="1" />
      <line x1="33" y1="28" x2="39" y2="28" stroke={color} strokeWidth="1" />
      <motion.path
        d="M10 34 L14 34"
        stroke={color}
        strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M22 34 L26 34"
        stroke={color}
        strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M34 34 L38 34"
        stroke={color}
        strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}

// Circuit trace connector between steps
function CircuitTrace({ 
  index, 
  isActive 
}: { 
  index: number; 
  isActive: boolean;
}) {
  return (
    <div className="absolute left-6 top-full w-px h-16 -translate-x-1/2 overflow-hidden">
      <motion.div
        className="w-full h-full"
        style={{
          background: "linear-gradient(180deg, rgba(138,138,138,0.3), rgba(138,138,138,0.1))",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        // @ts-expect-error
        transformOrigin="top"
      />
    </div>
  );
}

// Individual pipeline step card
function PipelineStep({ 
  step, 
  index,
  isHovered,
  onHover 
}: { 
  step: typeof STEPS[0]; 
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) {
  const IconComponent = step.type === "input" 
    ? InputNodeIcon 
    : step.type === "diagnostic" 
    ? DiagnosticIcon 
    : ExecutionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: EASE_OUT }}
      className="relative"
      onMouseEnter={() => onHover(step.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Circuit trace to next step */}
      {index < STEPS.length - 1 && (
        <CircuitTrace index={index} isActive={isHovered} />
      )}

      {/* Step number node */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-bold"
          style={{
            background: isHovered 
              ? `linear-gradient(135deg, ${step.accentColor}22, ${step.accentColor}44)`
              : "rgba(17, 17, 22, 0.8)",
            border: `2px solid ${isHovered ? step.accentColor : "rgba(255,255,255,0.1)"}`,
            boxShadow: isHovered ? `0 0 20px ${step.glowColor}` : "none",
            color: step.accentColor,
            transition: "all 0.3s ease",
          }}
        >
          0{index + 1}
        </div>
      </div>

      {/* Glassmorphism card */}
      <div
        className="ml-8 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden"
        style={{
          background: isHovered
            ? `linear-gradient(135deg, rgba(26,26,34,0.8) 0%, ${step.glowColor.replace("0.3", "0.15")} 100%)`
            : "linear-gradient(135deg, rgba(26,26,34,0.5) 0%, rgba(17,17,22,0.7) 100%)",
          border: `1px solid ${isHovered ? step.accentColor : "rgba(255,255,255,0.08)"}`,
          boxShadow: isHovered 
            ? `0 0 40px ${step.glowColor}, inset 0 0 40px rgba(0,0,0,0.2)`
            : "0 20px 50px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
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
              transition={{ duration: 1 }}
            >
              <div
                className="w-px h-full"
                style={{
                  background: `linear-gradient(180deg, transparent, ${step.accentColor}, transparent)`,
                  boxShadow: `0 0 10px ${step.accentColor}`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-start gap-5">
          {/* Icon */}
          <div 
            className="flex-shrink-0 p-3 rounded-xl"
            style={{ 
              background: "rgba(0,0,0,0.3)",
              border: `1px solid ${step.accentColor}40`,
            }}
          >
            <IconComponent color={step.accentColor} />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Step label - Monospace */}
            <span 
              className="font-mono text-xs tracking-widest block mb-2"
              style={{ color: step.accentColor }}
            >
              {step.label}
            </span>

            {/* Headline - Bold sans-serif */}
            <h3 
              className="font-display text-xl md:text-2xl text-white mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              {step.headline}
            </h3>

            {/* Body text */}
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "rgba(232, 232, 232, 0.7)" }}>
              {step.body}
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: step.statusColor }}
              />
              <span 
                className="font-mono text-[10px] uppercase tracking-wider"
                style={{ color: step.statusColor }}
              >
                {step.status}
              </span>
            </div>
          </div>
        </div>

        {/* Circuit decoration */}
        <div className="absolute bottom-3 right-3 opacity-20">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="3" fill={step.accentColor} />
            <path 
              d="M16 0 L16 12 M16 20 L16 32 M0 16 L12 16 M20 16 L32 16" 
              stroke={step.accentColor} 
              strokeWidth="0.8" 
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function YourPath() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <SectionWrapper id="path" background="primary" glow="none" className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="path-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#path-grid)" />
        </svg>
      </div>

      {/* Ambient glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
          left: "20%",
          top: "30%",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="text-center mb-16"
        >
          <span 
            className="font-mono text-xs uppercase tracking-widest mb-4 block"
            style={{ color: "rgba(102, 102, 102, 0.9)" }}
          >
            [05] SYSTEM PIPELINE
          </span>
          <h2 
            className="font-display text-3xl md:text-4xl"
            style={{ 
              textWrap: "balance",
              color: "#E8E8E8",
              letterSpacing: "-0.03em",
            }}
          >
            Three steps. One conversation.
          </h2>
          <p className="font-body text-lg mt-4" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
            Data flow from input to execution.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative space-y-12">
          {/* Central circuit line */}
          <div className="absolute left-6 top-0 bottom-0 w-px -translate-x-1/2">
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,180,216,0.2), rgba(138,138,138,0.2), rgba(212,175,55,0.2))",
              }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, index) => (
            <PipelineStep
              key={step.id}
              step={step}
              index={index}
              isHovered={hoveredStep === step.id}
              onHover={setHoveredStep}
            />
          ))}
        </div>

        {/* Pipeline footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(26, 26, 34, 0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#00ff88" }}
            />
            <span className="font-mono text-xs tracking-wider" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
              PIPELINE READY
            </span>
            <div className="h-3 w-px bg-white/20" />
            <span className="font-mono text-xs tracking-wider" style={{ color: "rgba(102, 102, 102, 0.8)" }}>
              AWAITING INPUT
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
