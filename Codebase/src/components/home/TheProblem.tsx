"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

// Content - exactly as specified, do not modify
const leftItems = [
  "Endless meetings with no outcomes.",
  "Developers who disappear mid-project.",
  "Designs that look like templates.",
  "Marketing that burns budget, not pipeline.",
  "A founder doing everything.",
];

const rightItems = [
  "A system that audits before it builds.",
  "Engineers who compete to write better code.",
  "Design that makes competitors nervous.",
  "Growth that compounds, not spikes.",
  "A partner who builds the machine.",
];

// Warning/Broken Link Icon for "Bad" column
const WarningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 9v4M12 17h.01M8.5 3.5l-6 10A2 2 0 0 0 4.5 17h15a2 2 0 0 0 1.5-3.5l-6-10a2 2 0 0 0-3 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Connected Node Icon for "Good" column
const ConnectedNodeIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill={isActive ? "currentColor" : "none"}
      initial={{ scale: 1 }}
      animate={isActive ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.4"
      initial={{ opacity: 0.4 }}
      animate={isActive ? { opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeOpacity="0.2"
      initial={{ opacity: 0.2 }}
      animate={isActive ? { opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
    />
  </svg>
 );

// Glitch effect component for left column
function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    let frame = 0;
    
    const animate = () => {
      frame++;
      if (frame % 3 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Static noise
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const w = Math.random() * 2 + 0.5;
        const h = Math.random() * 40 + 5;
        const alpha = Math.random() * 0.15 + 0.05;
        
        ctx.fillStyle = `rgba(217, 64, 64, ${alpha})`;
        ctx.fillRect(x, y, w, h);
      }
      
      // Occasional glitch lines
      if (Math.random() > 0.7) {
        const y = Math.random() * canvas.height;
        const h = Math.random() * 3 + 1;
        ctx.fillStyle = "rgba(217, 64, 64, 0.3)";
        ctx.fillRect(0, y, canvas.width, h);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}

// Animated mesh gradient background
function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(217,64,64,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
          left: "-20%",
          top: "20%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(26,155,191,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          right: "-10%",
          top: "10%",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(157,125,232,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          left: "30%",
          bottom: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Left column item - Legacy/Failure style
function LeftItem({ text, index }: { text: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
      className="group relative flex items-start gap-4 mb-5 p-4 rounded-lg transition-all duration-300"
      style={{
        background: isHovered 
          ? "rgba(217, 64, 64, 0.08)" 
          : "rgba(30, 30, 30, 0.4)",
        border: "1px solid rgba(217, 64, 64, 0.15)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(217,64,64,0.1) 2px, rgba(217,64,64,0.1) 4px)",
            }}
          />
        </motion.div>
      )}
      <div 
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300"
        style={{
          background: isHovered ? "rgba(217, 64, 64, 0.2)" : "rgba(217, 64, 64, 0.1)",
          border: "1px solid rgba(217, 64, 64, 0.3)",
        }}
      >
        <WarningIcon className="w-5 h-5 text-scale-bright" />
      </div>
      <p 
        className="font-body text-base leading-relaxed transition-colors duration-300"
        style={{ color: isHovered ? "rgba(232, 232, 232, 0.9)" : "rgba(153, 153, 153, 0.85)" }}
      >
        {text}
      </p>
    </motion.div>
  );
}

// Right column item - AI/Optimized style
function RightItem({ text, index }: { text: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: EASE_OUT }}
      className="group relative flex items-start gap-4 mb-5 p-4 rounded-lg transition-all duration-300"
      style={{
        background: isHovered 
          ? "rgba(26, 155, 191, 0.12)" 
          : "rgba(20, 30, 40, 0.5)",
        border: "1px solid rgba(26, 155, 191, 0.25)",
        boxShadow: isHovered 
          ? "0 0 30px rgba(26, 155, 191, 0.2), inset 0 0 20px rgba(26, 155, 191, 0.05)" 
          : "0 0 20px rgba(26, 155, 191, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300"
        style={{
          background: isHovered ? "rgba(26, 155, 191, 0.25)" : "rgba(26, 155, 191, 0.15)",
          border: "1px solid rgba(26, 155, 191, 0.4)",
        }}
      >
        <ConnectedNodeIcon 
          className="w-5 h-5 text-core-bright" 
          isActive={isActive}
        />
      </div>
      <p 
        className="font-body text-base leading-relaxed transition-colors duration-300"
        style={{ color: isHovered ? "#E8E8E8" : "rgba(232, 232, 232, 0.9)" }}
      >
        {text}
      </p>
    </motion.div>
  );
}

export function TheProblem() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <SectionWrapper id="problem" background="primary" glow="none" className="relative overflow-hidden">
      <MeshGradientBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className="relative z-10"
      >
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(17, 17, 22, 0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.02) inset",
          }}
        >
          <div 
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "rgba(26, 155, 191, 0.8)" }}
              />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "rgba(102, 102, 102, 0.9)" }}>
                [00] System Analysis
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-scale-bright/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-core-bright/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-pillar-bright/60" />
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-12"
              style={{ textWrap: "balance" }}
            >
              <span style={{ color: "#E8E8E8" }}>Most agencies are a </span>
              <span 
                style={{
                  background: "linear-gradient(180deg, #1A1A22 0%, #0A0A0B 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
                  color: "#666",
                  display: "inline-block",
                  position: "relative",
                  top: "-2px",
                }}
              >
                black box
              </span>
            </motion.h2>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)",
                  }}
                />
                <motion.div
                  className="absolute w-full h-20"
                  style={{
                    background: "linear-gradient(180deg, transparent, rgba(26,155,191,0.4), transparent)",
                  }}
                  animate={{
                    top: ["-20%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              <div className="relative md:pr-12">
                <GlitchBackground />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-xs uppercase tracking-widest mb-6"
                  style={{ color: "rgba(217, 64, 64, 0.7)" }}
                >
                  // Legacy System Detected
                </motion.p>
                
                <p 
                  className="font-body text-sm uppercase tracking-wide mb-6"
                  style={{ color: "rgba(217, 64, 64, 0.9)" }}
                >
                  What you get today
                </p>
                
                {leftItems.map((item, index) => (
                  <LeftItem key={index} text={item} index={index} />
                ))}
              </div>

              <div className="relative md:pl-12">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="font-mono text-xs uppercase tracking-widest mb-6"
                  style={{ color: "rgba(26, 155, 191, 0.7)" }}
                >
                  // Neural Network Active
                </motion.p>
                
                <p 
                  className="font-body text-sm uppercase tracking-wide mb-6"
                  style={{ color: "rgba(26, 155, 191, 0.9)" }}
                >
                  What you actually need
                </p>
                
                {rightItems.map((item, index) => (
                  <RightItem key={index} text={item} index={index} />
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="px-6 py-3 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs" style={{ color: "rgba(102, 102, 102, 0.7)" }}>
                STATUS:
              </span>
              <span className="font-mono text-xs" style={{ color: "rgba(217, 64, 64, 0.8)" }}>
                CRITICAL
              </span>
              <span className="font-mono text-xs" style={{ color: "rgba(102, 102, 102, 0.4)" }}>
                →
              </span>
              <span className="font-mono text-xs" style={{ color: "rgba(26, 155, 191, 0.8)" }}>
                OPTIMIZED
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-16 h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255, 255, 255, 0.06)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #D94040, #1A9BBF)" }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
