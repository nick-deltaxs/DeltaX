"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";

export function EngineStyle() {
  const wordPairs = [
    { old: "generic", new: "unmistakable" },
    { old: "forgettable", new: "undeniable" },
    { old: "commodity", new: "category-of-one" },
  ];

  return (
    <div id="style" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-8 lg:mb-12">
        <ScrollReveal delay={0} direction="up">
          <SectionLabel color="style">THE SIGNAL</SectionLabel>
          <p className="font-display text-sm text-text-dim uppercase tracking-wider mt-2">
            Design. Brand. Position.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - Mood contrast block */}
          <Card variant="left-accent" accentColor="style" style={{ backgroundColor: "rgba(110, 117, 255, 0.05)" }}>
            <div className="p-6 lg:p-8 space-y-6">
              {wordPairs.map((pair, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 lg:gap-6"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <span className="font-body text-base text-text-muted line-through flex-1">
                    {pair.old}
                  </span>
                  <span className="text-style-bright/50 flex-shrink-0 font-mono text-sm">
                    →
                  </span>
                  <span className="font-display text-base text-style-bright flex-1">
                    {pair.new}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Right column - Text content */}
          <div>
            <h3 className="font-display text-xl lg:text-2xl text-text-hero">
              X STYLE — Brand & Perception
            </h3>
            <p className="font-body text-base text-text-body mt-4 leading-relaxed">
              We shape how the market perceives you. Brand identity, visual systems, and positioning that make you unmistakable.
            </p>
            <p className="font-body text-sm text-text-muted mt-4">
              Brand Identity · Visual Design · Market Positioning
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
