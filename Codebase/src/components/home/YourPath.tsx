"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function YourPath() {
  const steps = [
    {
      number: "01",
      title: "Diagnosis",
      description: "We audit your current systems, identify bottlenecks, and map growth opportunities. No guesswork—data-driven clarity on what moves the needle."
    },
    {
      number: "02", 
      title: "System Design",
      description: "Based on diagnosis, we design your custom DeltaX system. This includes the right combination of pillars, integration points, and success metrics."
    },
    {
      number: "03",
      title: "90-Day Sprint 1",
      description: "First implementation cycle. We build the core infrastructure and deliver quick wins. You see results within 30 days."
    },
    {
      number: "04",
      title: "90-Day Sprint 2", 
      description: "Scale and optimize. We expand the system, add advanced features, and compound the initial wins."
    },
    {
      number: "05",
      title: "Autonomous System",
      description: "Your DeltaX system runs itself. We provide ongoing optimization and strategic guidance, but the daily work is automated."
    }
  ];

  return (
    <SectionWrapper id="path" background="primary">
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.06) 0%, transparent 60%)" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <ScrollReveal delay={0}>
          <div className="text-center mb-16">
            <SectionLabel color="core">YOUR PATH</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-hero mt-6 leading-tight">
              From chaos to compound growth.
            </h2>
            <p className="font-body text-lg text-text-body max-w-2xl mx-auto mt-6">
              A clear 5-phase process that takes you from fragmented operations to an autonomous growth system.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-core-bright via-core-bright to-transparent" />
            
            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={0.1 + index * 0.1}>
                  <div className="flex gap-8 items-start">
                    {/* Number circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-core-bright/10 border-2 border-core-bright flex items-center justify-center">
                        <span className="font-display text-xl text-core-bright">
                          {step.number}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-core-bright to-transparent" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-display text-2xl text-text-hero mb-4">
                        {step.title}
                      </h3>
                      <p className="font-body text-lg text-text-body leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-12 px-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={0.1 + index * 0.1}>
              <div className="flex gap-4 items-start">
                {/* Number circle - smaller on mobile */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-core-bright/10 border-2 border-core-bright flex items-center justify-center">
                    <span className="font-display text-base text-core-bright">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl text-text-hero mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Separator between steps */}
              {index < steps.length - 1 && (
                <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-core-bright to-transparent mt-4" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-20 px-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-core-bright/20 bg-core-bright/5">
              <span className="font-mono text-sm text-core-bright uppercase tracking-wider">
                Total timeline: 8-12 months
              </span>
            </div>
            <p className="font-body text-text-dim mt-4 max-w-2xl mx-auto">
              Depending on complexity and starting point. Most clients see significant ROI within the first 90 days.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
