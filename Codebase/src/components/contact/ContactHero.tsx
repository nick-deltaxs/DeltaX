"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

// Animated star field with depth
function StarField() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep space */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1A1A22_0%,_#0A0A0B_50%,_#050508_100%)]" />
      
      {/* Star layers */}
      {[50, 40, 30].map((count, layer) => (
        <div key={layer} className="absolute inset-0">
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={`${layer}-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: (3 - layer) * 0.8,
                height: (3 - layer) * 0.8,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                opacity: [0.2 + layer * 0.2, 0.8, 0.2 + layer * 0.2],
                scale: [1, 1 + layer * 0.2, 1],
              }}
              transition={{
                duration: 2 + layer,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ))}

      {/* Orbital rings */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <motion.ellipse
          cx="600"
          cy="400"
          rx="500"
          ry="200"
          fill="none"
          stroke="rgba(26,155,191,0.1)"
          strokeWidth="1"
          strokeDasharray="10 20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.ellipse
          cx="600"
          cy="400"
          rx="350"
          ry="150"
          fill="none"
          stroke="rgba(110,117,255,0.08)"
          strokeWidth="1"
          strokeDasharray="5 15"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,10,11,0.8)_100%)]" />
    </div>
  );
}

// Mission status badge
function MissionBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
      style={{
        background: "rgba(17, 17, 22, 0.6)",
        borderColor: "rgba(240, 180, 41, 0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-accent-gold"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-gold">
        Mission Control
      </span>
      <span className="font-mono text-[10px] text-text-muted">
        READY
      </span>
    </motion.div>
  );
}

export function ContactHero() {
  return (
    <section className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Star field background */}
      <StarField />

      {/* Grid overlay - radar style */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Mission badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <MissionBadge />
        </motion.div>

        {/* Overline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-4 block"
        >
          [00] Contact
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-text-hero text-[48px] md:text-[64px] tracking-[-0.03em]"
          style={{ textWrap: "balance" }}
        >
          Prepare for Launch.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-text-body max-w-[560px] mx-auto mt-4 leading-[1.6]"
        >
          Your business is the payload. We're the launch system. Ready for liftoff?
        </motion.p>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 mt-10"
        >
          {/* Email */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(26,155,191,0.1)",
                border: "1px solid rgba(26,155,191,0.2)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A9BBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted block">Direct Link</span>
              <a href="mailto:hello@thesx.co" className="font-body text-text-body hover:text-core-bright transition-colors">
                hello@thesx.co
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(110,117,255,0.1)",
                border: "1px solid rgba(110,117,255,0.2)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted block">Base Station</span>
              <span className="font-body text-text-body">Remote. Global. Always Online.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
    </section>
  );
}
