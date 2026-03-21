"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

export function EngineCore() {
  return (
    <div id="core" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-8 lg:mb-12">
        <SectionLabel color="core">THE AUDIT</SectionLabel>
        <p className="font-display text-sm lg:text-base text-text-dim uppercase tracking-wider mt-2">
          Audit. Diagnose. Map.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">
        <ScrollReveal delay={0} direction="up">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <DeltaXLogo size={80} className="text-core-bright relative z-10" />
              <div 
                className="absolute -inset-4 rounded-full glow-breathe blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(26, 155, 191, 0.10) 0%, transparent 70%)" }}
              />
            </div>
          </div>
          
          <h3 className="font-display text-xl lg:text-2xl text-text-hero mt-6">
            X CORE — Strategy & Diagnostics
          </h3>
          
          <p className="font-body text-base text-text-body mt-4 leading-relaxed max-w-lg">
            Every engagement starts here. We diagnose your business — systems, operations, revenue, brand — and build a custom roadmap of exactly what needs to change. Every roadmap is built from your numbers. Nothing templated.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up">
          <div className="font-body text-sm text-text-muted leading-relaxed">
            Business Diagnostics · Custom Roadmap · Systems Architecture · Gap Analysis
          </div>
          
          <div 
            className="border-t pt-4 mt-4"
            style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <p className="font-body text-sm text-text-muted italic">
              This is where every engagement begins. After the audit, we recommend the right mix of Code, Scale, and Style.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
