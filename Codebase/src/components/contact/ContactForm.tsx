"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { ContactFormState } from "@/types";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

// HUD Input Component with space styling
function HUDInput({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Label with icon */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-core-bright">{icon}</span>
        <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          {label}
        </label>
      </div>
      {children}
    </div>
  );
}

// Launch Status Indicator
function LaunchStatus({ status }: { status: ContactFormState["status"] }) {
  const statusConfig = {
    idle: { color: "#666", text: "READY FOR INPUT", pulse: false },
    loading: { color: "#f0b429", text: "TRANSMITTING...", pulse: true },
    success: { color: "#1A9BBF", text: "TRANSMISSION COMPLETE", pulse: false },
    error: { color: "#D94040", text: "TRANSMISSION FAILED", pulse: false },
  };
  
  const config = statusConfig[status];
  
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ background: config.color }}
        animate={config.pulse ? { opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: config.color }}>
        {config.text}
      </span>
    </div>
  );
}

// Mission Phase Card - Clean polished design
function MissionPhase({ 
  number, 
  title, 
  description, 
  color,
  delay = 0,
  isLast = false
}: { 
  number: string; 
  title: string; 
  description: string;
  color: string;
  delay?: number;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
      className="relative flex gap-4 group"
    >
      {/* Left - Badge Column */}
      <div className="relative flex flex-col items-center">
        {/* Connection line */}
        {!isLast && (
          <div 
            className="absolute top-12 w-[2px] h-[calc(100%+16px)]"
            style={{
              background: `linear-gradient(180deg, ${color}60 0%, ${color}20 80%, transparent 100%)`,
            }}
          />
        )}

        {/* Hexagon Badge */}
        <div className="relative w-11 h-11 shrink-0">
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `conic-gradient(from 0deg, transparent 30%, ${color}50, transparent 70%)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main body */}
          <div
            className="absolute inset-0.5 flex items-center justify-center"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: `linear-gradient(135deg, ${color}25 0%, ${color}08 100%)`,
              border: `1.5px solid ${color}`,
            }}
          >
            {/* Tech lines */}
            <svg className="absolute inset-1 w-full h-full opacity-40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="8" fill="none" stroke={color} strokeWidth="0.5"/>
              <line x1="20" y1="4" x2="20" y2="12" stroke={color} strokeWidth="0.5"/>
              <line x1="20" y1="28" x2="20" y2="36" stroke={color} strokeWidth="0.5"/>
              <line x1="4" y1="20" x2="12" y2="20" stroke={color} strokeWidth="0.5"/>
              <line x1="28" y1="20" x2="36" y2="20" stroke={color} strokeWidth="0.5"/>
            </svg>

            {/* Number */}
            <span 
              className="font-mono text-[10px] font-bold relative z-10"
              style={{ color, textShadow: `0 0 8px ${color}` }}
            >
              {number}
            </span>
          </div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              border: `1px solid ${color}`,
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Right - Content Card */}
      <div className="flex-1 pb-2">
        <div 
          className="p-4 rounded-xl border"
          style={{
            background: "linear-gradient(135deg, rgba(17,17,22,0.6) 0%, rgba(10,10,11,0.4) 100%)",
            borderColor: `${color}20`,
            borderWidth: "1px",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Title */}
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: color }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <h4 
              className="font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color }}
            >
              {title}
            </h4>
          </div>
          
          <p className="font-body text-sm text-text-secondary leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}// Connection strength bars
function ConnectionBars() {
  return (
    <div className="flex items-end gap-1 h-4">
      {[40, 60, 80, 100, 80].map((height, i) => (
        <motion.div
          key={i}
          className="w-1 bg-core-bright/60 rounded-sm"
          initial={{ height: 4 }}
          animate={{ height: `${height}%` }}
          transition={{ 
            duration: 0.5, 
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        />
      ))}
    </div>
  );
}

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    status: "idle",
    name: "",
    email: "",
    company: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website") as string;
    if (honeypot) return;

    setFormState((prev) => ({ ...prev, status: "loading" }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          challenge: formState.challenge,
        }),
      });

      if (response.ok) {
        setFormState({
          status: "success",
          name: "",
          email: "",
          company: "",
          challenge: "",
        });
      } else {
        setFormState((prev) => ({ ...prev, status: "error" }));
      }
    } catch {
      setFormState((prev) => ({ ...prev, status: "error" }));
    }
  };

  return (
    <SectionWrapper background="secondary" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_0%_0%,_rgba(26,155,191,0.15)_0%,_transparent_60%)]" />
        </div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_100%_100%,_rgba(110,117,255,0.15)_0%,_transparent_60%)]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 relative z-10">
        {/* Left - Mission Control Panel (Form) */}
        <div>
          {/* Panel Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                [01] Mission Parameters
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-text-muted">SIGNAL</span>
                <ConnectionBars />
              </div>
            </div>
            <h2 className="font-display text-2xl text-text-hero tracking-[-0.02em]">
              Configure Your Launch.
            </h2>
          </motion.div>

          {/* Cockpit Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(17,17,22,0.95) 0%, rgba(10,10,11,0.98) 100%)",
              borderColor: "rgba(255, 255, 255, 0.08)",
              boxShadow: "0 0 60px rgba(26,155,191,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Panel Header Bar */}
            <div 
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-core-bright/60" />
                <span className="font-mono text-[10px] text-text-muted">PANEL_01</span>
              </div>
              <LaunchStatus status={formState.status} />
            </div>

            {/* Form Content */}
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 space-y-5"
            >
              {/* Honeypot */}
              <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <HUDInput 
                  label="Commander ID" 
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                >
                  <Input
                    label=""
                    name="name"
                    placeholder="Enter designation"
                    value={formState.name}
                    onChange={(value) => setFormState((prev) => ({ ...prev, name: value }))}
                    required
                    className="bg-white/[0.03] border-white/[0.08] focus:border-core-bright/50"
                  />
                </HUDInput>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <HUDInput 
                  label="Communication Channel" 
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                >
                  <Input
                    label=""
                    name="email"
                    type="email"
                    placeholder="signal@domain.com"
                    value={formState.email}
                    onChange={(value) => setFormState((prev) => ({ ...prev, email: value }))}
                    required
                    className="bg-white/[0.03] border-white/[0.08] focus:border-core-bright/50"
                  />
                </HUDInput>
              </motion.div>

              {/* Company Field */}
              <motion.div variants={itemVariants}>
                <HUDInput 
                  label="Organization" 
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  }
                >
                  <Input
                    label=""
                    name="company"
                    placeholder="Entity name"
                    value={formState.company}
                    onChange={(value) => setFormState((prev) => ({ ...prev, company: value }))}
                    className="bg-white/[0.03] border-white/[0.08] focus:border-core-bright/50"
                  />
                </HUDInput>
              </motion.div>

              {/* Challenge Field */}
              <motion.div variants={itemVariants}>
                <HUDInput 
                  label="Mission Objective" 
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  }
                >
                  <Textarea
                    label=""
                    name="challenge"
                    placeholder="Describe your payload and destination..."
                    rows={4}
                    value={formState.challenge}
                    onChange={(value) => setFormState((prev) => ({ ...prev, challenge: value }))}
                    required
                    className="bg-white/[0.03] border-white/[0.08] focus:border-core-bright/50"
                  />
                </HUDInput>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <div className="relative">
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(240,180,41,0.3) 0%, transparent 70%)",
                      filter: "blur(15px)",
                      transform: "scale(1.1)",
                    }}
                  />
                  <Button
                    variant="primary"
                    size="large"
                    type="submit"
                    loading={formState.status === "loading"}
                    className="w-full"
                  >
                    {formState.status === "loading" ? "Transmitting..." : "Initiate Launch Sequence"}
                  </Button>
                </div>
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {formState.status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 rounded-lg border"
                    style={{
                      background: "rgba(26,155,191,0.1)",
                      borderColor: "rgba(26,155,191,0.3)",
                    }}
                  >
                    <p className="font-mono text-xs text-core-bright text-center">
                      ✓ TRANSMISSION RECEIVED. PREPARE FOR CONTACT.
                    </p>
                  </motion.div>
                )}

                {formState.status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 rounded-lg border"
                    style={{
                      background: "rgba(217,64,64,0.1)",
                      borderColor: "rgba(217,64,64,0.3)",
                    }}
                  >
                    <p className="font-mono text-xs text-scale-bright text-center">
                      ✗ TRANSMISSION FAILED. RETRY OR USE BACKUP CHANNEL.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>

        {/* Right - Mission Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted block mb-4">
              [02] Flight Plan
            </span>
            <h2 className="font-display text-2xl text-text-hero tracking-[-0.02em]">
              Mission Timeline.
            </h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical trajectory line with gradient */}
            <div 
              className="absolute left-[11px] top-4 bottom-4 w-[2px]"
              style={{
                background: "linear-gradient(180deg, #1A9BBF 0%, #6E75FF 50%, #f0b429 100%)",
              }}
            />

            {/* Phase 1: Launch */}
            <MissionPhase
              number="T+0"
              title="Launch Phase"
              description="Your transmission enters our system. We analyze trajectory and calculate optimal route within 24 hours."
              color="#1A9BBF"
              delay={0.1}
            />

            {/* Phase 2: Orbit */}
            <MissionPhase
              number="T+1"
              title="Orbital Assessment"
              description="If vectors align, we schedule approach maneuvers. A 30-minute alignment call to sync systems."
              color="#6E75FF"
              delay={0.2}
            />

            {/* Phase 3: Docking */}
            <MissionPhase
              number="T+2"
              title="System Integration"
              description="CoreXs initiates deep scan. We map your business architecture and identify optimization vectors."
              color="#f0b429"
              delay={0.3}
            />

            {/* Phase 4: Deploy */}
            <MissionPhase
              number="T+3"
              title="Full Deployment"
              description="All engines online. CodeXs, ScaleXs, StyleXs activate. Your business now runs on DeltaX systems."
              color="#8A8A8A"
              delay={0.4}
              isLast
            />
          </div>

          {/* Bottom status panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-4 rounded-xl border"
            style={{
              background: "rgba(17, 17, 22, 0.6)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent-gold"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-[11px] text-text-muted">BASE STATION ONLINE</span>
              </div>
              <span className="font-mono text-[10px] text-text-muted">ΔX_V.2.0.1</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
