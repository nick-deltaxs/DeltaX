"use client";

import { motion } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Status indicator component
function StatusIndicator({ label, value, delay = 0 }: { label: string; value: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: EASE_OUT }}
      className="flex items-center justify-between py-2 border-b border-white/[0.06]"
    >
      <span className="font-mono text-xs text-text-muted">{label}</span>
      <span className="font-mono text-xs text-text-body">{value}</span>
    </motion.div>
  );
}

export function AboutCTA() {
  return (
    <SectionWrapper id="cta" background="secondary" glow="none" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(26,155,191,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Card wrapper — scale entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Terminal-style card */}
        <div 
          className="w-full max-w-[560px] rounded-2xl border overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(17,17,22,0.95) 0%, rgba(10,10,11,0.98) 100%)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 80px rgba(26,155,191,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Terminal header */}
          <div 
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-scale-bright/60" />
              <div className="w-3 h-3 rounded-full bg-accent-gold/60" />
              <div className="w-3 h-3 rounded-full bg-core-bright/60" />
            </div>
            <span className="font-mono text-[11px] text-text-muted ml-2">system_connection.exe</span>
          </div>

          {/* Card content */}
          <div className="p-8 md:p-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mb-6"
            >
              <DeltaXLogo size={64} className="text-text-hero mx-auto" />
            </motion.div>

            {/* Status indicators */}
            <div className="max-w-[280px] mx-auto mb-6">
              <StatusIndicator label="System Status" value="ONLINE" delay={0.1} />
              <StatusIndicator label="Response Time" value="< 24hrs" delay={0.2} />
              <StatusIndicator label="Consultation" value="FREE" delay={0.3} />
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 }}
              className="font-display text-3xl md:text-4xl text-text-hero tracking-[-0.02em] mb-3"
              style={{ textWrap: "balance" }}
            >
              Ready to build?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.28 }}
              className="font-body text-base text-text-secondary mb-8"
              style={{ textWrap: "balance" }}
            >
              One conversation. No commitments. Just clarity.
            </motion.p>

            {/* CTA Button with pulse */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.42 }}
              className="relative"
            >
              {/* Button glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(240,180,41,0.3) 0%, transparent 70%)",
                  filter: "blur(15px)",
                  transform: "scale(1.2)",
                }}
              />
              <Button variant="primary" size="large" href="/contact">
                Start a Project
              </Button>
            </motion.div>

            {/* Email fallback */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.55 }}
              className="mt-6"
            >
              <span className="font-mono text-xs text-text-muted">or email </span>
              <a
                href="mailto:hello@thesx.co"
                className="font-mono text-xs text-text-body hover:text-accent-gold transition-colors"
              >
                hello@thesx.co
              </a>
            </motion.div>
          </div>

          {/* Terminal footer */}
          <div 
            className="px-4 py-3 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-core-bright"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] text-text-muted">
                Connection ready
              </span>
            </div>
            <span className="font-mono text-[10px] text-text-muted">
              ΔX_v2.0
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-2 mt-8"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-text-muted"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
