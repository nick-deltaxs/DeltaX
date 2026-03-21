"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { EngineCore } from "@/components/home/EngineCore";
import { EngineCode } from "@/components/home/EngineCode";
import { EngineScale } from "@/components/home/EngineScale";
import { EngineStyle } from "@/components/home/EngineStyle";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TheEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Atmosphere layer opacities
  const tealAtmosphere = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [1, 1, 1, 0]);
  const greyAtmosphere = useTransform(scrollYProgress, [0.25, 0.30, 0.47, 0.53], [0, 1, 1, 0]);
  const redAtmosphere = useTransform(scrollYProgress, [0.50, 0.55, 0.72, 0.78], [0, 1, 1, 0]);
  const blueAtmosphere = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.0], [0, 1, 1, 1]);

  // Pillar content opacities
  const coreOpacity = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const codeOpacity = useTransform(scrollYProgress, [0.25, 0.30, 0.47, 0.53], [0, 1, 1, 0]);
  const scaleOpacity = useTransform(scrollYProgress, [0.50, 0.55, 0.72, 0.78], [0, 1, 1, 0]);
  const styleOpacity = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.0], [0, 1, 1, 1]);

  return (
    <section id="engine" className="bg-primary">
      {/* Section headline */}
      <div className="text-center py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel color="core">THE ΔX ENGINE</SectionLabel>
          <h2 className="font-display text-3xl lg:text-4xl text-text-hero text-center mt-6">
            THE ΔX ENGINE
          </h2>
          <p className="font-body text-lg text-text-body text-center mt-4">
            Four systems. One outcome. 10x growth.
          </p>
        </motion.div>
      </div>

      {/* Desktop: Sticky scroll with atmosphere crossfade */}
      <div ref={containerRef} className="min-h-[300vh] relative hidden lg:block">
        <div className="sticky top-0 h-screen overflow-hidden atmosphere-grid atmosphere-vignette">
          {/* Atmosphere layers */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.12) 0%, transparent 70%)",
              opacity: tealAtmosphere
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: "radial-gradient(ellipse at center, rgba(138, 138, 138, 0.12) 0%, transparent 70%)",
              opacity: greyAtmosphere
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: "radial-gradient(ellipse at center, rgba(217, 64, 64, 0.12) 0%, transparent 70%)",
              opacity: redAtmosphere
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: "radial-gradient(ellipse at center, rgba(110, 117, 255, 0.12) 0%, transparent 70%)",
              opacity: blueAtmosphere
            }}
          />

          {/* Content layer with crossfading pillars */}
          <div className="relative z-10 h-full">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: coreOpacity }}
            >
              <EngineCore />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: codeOpacity }}
            >
              <EngineCode />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: scaleOpacity }}
            >
              <EngineScale />
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: styleOpacity }}
            >
              <EngineStyle />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Static stacked sections */}
      <div className="lg:hidden">
        <div className="py-16 border-t-[3px]" style={{ borderTopColor: "#1A9BBF" }}>
          <EngineCore />
        </div>
        <div className="py-16 border-t-[3px]" style={{ borderTopColor: "#8A8A8A" }}>
          <EngineCode />
        </div>
        <div className="py-16 border-t-[3px]" style={{ borderTopColor: "#D94040" }}>
          <EngineScale />
        </div>
        <div className="py-16 border-t-[3px]" style={{ borderTopColor: "#6E75FF" }}>
          <EngineStyle />
        </div>
      </div>

      {/* Post-engine CTA */}
      <div className="py-16 lg:py-24 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-lg text-text-body text-center">
            Not sure which engines you need? Join the waitlist — we'll tell you.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
