"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

// Animated star background component
function NightSkyBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at bottom, #1A1A22 0%, #0A0A0B 50%, #050508 100%)",
        }}
      />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Nebula glows */}
      <motion.div
        className="absolute w-[600px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(26,155,191,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
          left: "5%",
          top: "10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[350px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(ellipse, rgba(110,117,255,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          right: "10%",
          bottom: "20%",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circuit pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 H30 V30 H50" stroke="white" strokeWidth="0.5" fill="none"/>
            <circle cx="10" cy="10" r="2" fill="white"/>
            <circle cx="30" cy="30" r="2" fill="white"/>
            <circle cx="50" cy="30" r="2" fill="white"/>
            <path d="M70 10 V30 H90" stroke="white" strokeWidth="0.5" fill="none"/>
            <circle cx="70" cy="10" r="2" fill="white"/>
            <circle cx="90" cy="30" r="2" fill="white"/>
            <path d="M10 70 H30 V50 H50" stroke="white" strokeWidth="0.5" fill="none"/>
            <circle cx="10" cy="70" r="2" fill="white"/>
            <circle cx="50" cy="50" r="2" fill="white"/>
            <path d="M70 70 V50 H90" stroke="white" strokeWidth="0.5" fill="none"/>
            <circle cx="70" cy="70" r="2" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
      </svg>

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,11,0.6) 100%)",
        }}
      />
    </div>
  );
}

// System status indicator
function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full"
      style={{
        background: "rgba(17, 17, 22, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-core-bright"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
        System Online
      </span>
      <span className="font-mono text-[11px] text-text-secondary">
        16 Nodes Active
      </span>
    </motion.div>
  );
}

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-primary pt-32 pb-20">
      {/* Night sky background */}
      <NightSkyBackground />

      {/* Corner glows - pillar colors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, rgba(26,155,191,0.08), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(138,138,138,0.08), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(217,64,64,0.08), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(110,117,255,0.08), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px]">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <DeltaXLogo size={80} className="text-text-hero mx-auto" />
        </motion.div>

        {/* Overline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-4 block"
        >
          [00] About
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-text-hero text-center tracking-[-0.03em]"
          style={{
            fontSize: "clamp(40px, 6vw, 56px)",
            textWrap: "balance",
          }}
        >
          The System Behind the System.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-text-body max-w-[640px] mx-auto leading-[1.6] mt-6"
        >
          DeltaX was built on one belief: businesses should run on systems, not on founders.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-8 md:gap-12 mt-8"
        >
          <div className="text-center">
            <span className="font-mono text-2xl text-text-hero">16</span>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted block mt-1">Specialists</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <span className="font-mono text-2xl text-text-hero">8</span>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted block mt-1">Countries</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <span className="font-mono text-2xl text-text-hero">4</span>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted block mt-1">Engines</span>
          </div>
        </motion.div>

        {/* System status bar - below stats, compact centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full mt-8"
          style={{
            background: "rgba(17, 17, 22, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-core-bright"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
            System Online
          </span>
          <span className="font-mono text-[11px] text-text-secondary">
            16 Nodes Active
          </span>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
    </section>
  );
}
