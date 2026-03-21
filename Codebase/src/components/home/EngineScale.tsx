"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function EngineScale() {
  const bars = [
    { width: "25%", opacity: "bg-scale-bright/20", delay: 0 },
    { width: "45%", opacity: "bg-scale-bright/30", delay: 0.15 },
    { width: "70%", opacity: "bg-scale-bright/50", delay: 0.30 },
    { width: "95%", opacity: "bg-scale-bright/80", delay: 0.45 },
  ];

  return (
    <div id="scale" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-8 lg:mb-12">
        <ScrollReveal delay={0} direction="up">
          <SectionLabel color="scale">THE FUEL</SectionLabel>
          <p className="font-display text-sm text-text-dim uppercase tracking-wider mt-2">
            Target. Acquire. Grow.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Left column - Growth bars visualization */}
          <div className="relative p-8 lg:p-12">
            {bars.map((bar, index) => (
              <motion.div
                key={index}
                className={`h-3 rounded-full ${bar.opacity} mt-3`}
                initial={{ width: 0 }}
                whileInView={{ width: bar.width }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: bar.delay, 
                  ease: "easeOut" 
                }}
                style={{ marginTop: index === 0 ? 0 : undefined }}
              />
            ))}
            <div className="absolute bottom-0 right-0 lg:bottom-4 lg:right-4 font-display text-6xl lg:text-7xl text-scale-bright/[0.15] select-none pointer-events-none leading-none">
              GROWTH
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            <h3 className="font-display text-xl lg:text-2xl text-text-hero">
              X SCALE — Growth & Revenue
            </h3>
            <p className="font-body text-base text-text-body mt-4 leading-relaxed">
              Predictable revenue. Lead systems, sales architecture, and performance frameworks — built to multiply.
            </p>
            <p className="font-body text-sm text-text-muted mt-4">
              Lead Generation · Sales Systems · Performance Scaling
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
