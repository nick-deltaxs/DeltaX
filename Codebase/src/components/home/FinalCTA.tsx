"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Pulsing glow button wrapper
function PulsingCTAButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <div className="relative group">
      {/* Outer pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ background: "rgba(240, 180, 41, 0.4)" }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full blur-lg"
        style={{ background: "rgba(240, 180, 41, 0.3)" }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      
      {/* Button */}
      <div className="relative">
        <Button 
          variant="primary" 
          size="large" 
          href={href}
          className="relative z-10 shadow-[0_0_30px_rgba(240,180,41,0.5)]"
        >
          {children}
        </Button>
      </div>
    </div>
  );
}

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: glow moves at 0.4x speed, max 30px
  const glowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <SectionWrapper ref={sectionRef} id="cta" background="primary" glow="none" className="relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Multi-pillar ambient glows */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          y: glowY,
          background: "radial-gradient(circle, rgba(26,155,191,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          y: glowY,
          background: "radial-gradient(circle, rgba(240,180,41,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(50%, -50%)",
        }}
      />

      {/* Completion Terminal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Terminal Frame */}
        <div 
          className="relative rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0D0D12 0%, #080809 100%)",
            border: "1px solid rgba(240,180,41,0.2)",
            boxShadow: "0 0 40px rgba(240,180,41,0.1), inset 0 0 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Terminal Header */}
          <div 
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: "rgba(240,180,41,0.15)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="font-mono text-xs tracking-wider" style={{ color: "rgba(240,180,41,0.6)" }}>
              EXECUTE_FINAL_STAGE
            </span>
            <div className="w-16" />
          </div>

          {/* Progress Bar - 100% Complete */}
          <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(240,180,41,0.1)" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "rgba(102,102,102,0.8)" }}>
                SYSTEM PREPARATION
              </span>
              <span className="font-mono text-[10px] tracking-wider" style={{ color: "#00ff88" }}>
                100% COMPLETE
              </span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #1A9BBF, #f0b429)" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12">
            {/* Completion Checkmark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,255,136,0.05) 100%)",
                  border: "2px solid rgba(0,255,136,0.4)",
                  boxShadow: "0 0 30px rgba(0,255,136,0.2)",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <motion.path
                    d="M5 12 L10 17 L19 7"
                    stroke="#00ff88"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Status Log */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-xs space-y-2 mb-8 max-w-md mx-auto"
              style={{ color: "rgba(153,153,153,0.6)" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: "#00ff88" }}>✓</span>
                <span>INITIATE_CONTACT_PROTOCOL</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#00ff88" }}>✓</span>
                <span>SYSTEM_AUDIT_COMPLETE</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#00ff88" }}>✓</span>
                <span>BUILD_MACHINE_READY</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "#f0b429" }}>
                <span>►</span>
                <span>AWAITING_FINAL_EXECUTION...</span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              {/* Overline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
                style={{ color: "rgba(240,180,41,0.8)" }}
              >
                // MISSION COMPLETE — READY TO DEPLOY
              </motion.p>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.02em] mb-4"
                style={{ textWrap: "balance" }}
              >
                Ready to build.
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.3 }}
                className="font-body text-lg md:text-xl mb-10 max-w-lg"
                style={{ textWrap: "balance", color: "rgba(232,232,232,0.7)" }}
              >
                One conversation. No commitments. Just clarity.
              </motion.p>

              {/* CTA Button with pulsing glow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.4 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <PulsingCTAButton href="/contact">
                  EXECUTE PROJECT
                </PulsingCTAButton>
              </motion.div>

              {/* Email fallback */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.5 }}
                className="mt-6"
              >
                <span className="font-mono text-xs" style={{ color: "rgba(102,102,102,0.8)" }}>
                  ALT_ROUTE: {" "}
                </span>
                <a
                  href="mailto:hello@thesx.co"
                  className="font-mono text-xs hover:underline"
                  style={{ color: "rgba(240,180,41,0.8)" }}
                >
                  hello@thesx.co
                </a>
              </motion.div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div 
            className="px-4 py-3 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(240,180,41,0.1)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#00ff88" }}
              />
              <span className="font-mono text-[10px] tracking-wider" style={{ color: "#00ff88" }}>
                SYSTEM_READY
              </span>
            </div>
            <div className="font-mono text-[10px]" style={{ color: "rgba(102,102,102,0.6)" }}>
              PRESS [EXECUTE] TO START
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
