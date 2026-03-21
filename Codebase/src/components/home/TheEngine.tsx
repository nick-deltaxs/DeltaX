"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function TheEngine() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start start", "end end"] 
  });

  // Desktop-only atmosphere crossfade animation
  const tealOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 0, 0, 0]);
  const greyOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 0, 0]);
  const redOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 0]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 0, 1]);

  const pillarData = [
    {
      id: "core",
      title: "CORE",
      subtitle: "Strategy & Diagnosis",
      description: "We diagnose your business model, market position, and growth bottlenecks. No assumptions—data-driven clarity on what's actually holding you back.",
      color: "#1A9BBF",
      bgColor: "rgba(26, 155, 191, 0.08)",
      borderColor: "border-core-bright"
    },
    {
      id: "code",
      title: "CODE", 
      subtitle: "Technology & Engineering",
      description: "Custom technology that solves your specific problems. Integrations, automation, and systems that eliminate manual work and scale effortlessly.",
      color: "#8A8A8A",
      bgColor: "rgba(138, 138, 138, 0.08)",
      borderColor: "border-code-bright"
    },
    {
      id: "scale",
      title: "SCALE",
      subtitle: "Growth & Marketing", 
      description: "Acquisition systems that compound. We build growth engines that get stronger with every customer, not weaker.",
      color: "#D94040",
      bgColor: "rgba(217, 64, 64, 0.08)",
      borderColor: "border-scale-bright"
    },
    {
      id: "style",
      title: "STYLE",
      subtitle: "Brand & Design",
      description: "Brand that converts. Design that makes complex offerings simple. Visual identity that makes you the obvious choice.",
      color: "#6E75FF", 
      bgColor: "rgba(110, 117, 255, 0.08)",
      borderColor: "border-style-bright"
    }
  ];

  return (
    <div ref={sectionRef}>
      <SectionWrapper 
        id="engine" 
        background="secondary"
        className={prefersReducedMotion ? "" : "relative"}
      >
        {/* Desktop-only atmosphere crossfade */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ 
                background: "radial-gradient(ellipse at 30% 40%, rgba(26, 155, 191, 0.12) 0%, transparent 60%)",
                opacity: tealOpacity
              }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ 
                background: "radial-gradient(ellipse at 50% 40%, rgba(138, 138, 138, 0.08) 0%, transparent 60%)",
                opacity: greyOpacity
              }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ 
                background: "radial-gradient(ellipse at 70% 40%, rgba(217, 64, 64, 0.10) 0%, transparent 60%)",
                opacity: redOpacity
              }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ 
                background: "radial-gradient(ellipse at 50% 60%, rgba(110, 117, 255, 0.10) 0%, transparent 60%)",
                opacity: blueOpacity
              }}
            />
          </>
        )}

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <ScrollReveal delay={0}>
            <div className="text-center mb-16 lg:mb-20">
              <SectionLabel color="core">THE ENGINE</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-hero mt-6 leading-tight">
                Four pillars. One system.
              </h2>
              <p className="font-body text-lg text-text-body max-w-2xl mx-auto mt-6">
                Each pillar solves a specific business problem. Together, they create compounding growth that no single agency can deliver.
              </p>
            </div>
          </ScrollReveal>

          {/* Desktop: Sticky scroll layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-16">
              {/* Left side - Fixed content */}
              <div className="sticky top-24 h-fit">
                <ScrollReveal delay={0.1}>
                  <div className="space-y-6">
                    <h3 className="font-display text-2xl text-text-hero">
                      The right combination for your business.
                    </h3>
                    <p className="font-body text-text-body leading-relaxed">
                      Not every business needs all four pillars. We diagnose which combination delivers the highest ROI, then implement in 90-day sprints.
                    </p>
                    <div className="pt-8">
                      <WaitlistForm />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right side - Scrollable pillars */}
              <div className="space-y-32">
                {pillarData.map((pillar, index) => (
                  <ScrollReveal key={pillar.id} delay={0.2 + index * 0.1}>
                    <div 
                      className="p-8 rounded-2xl border-l-4 relative overflow-hidden group"
                      style={{ 
                        backgroundColor: pillar.bgColor,
                        borderColor: pillar.color 
                      }}
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <h4 
                          className="font-mono text-sm uppercase tracking-wider mb-3"
                          style={{ color: pillar.color }}
                        >
                          {pillar.title}
                        </h4>
                        <h5 className="font-display text-xl text-text-hero mb-4">
                          {pillar.subtitle}
                        </h5>
                        <p className="font-body text-text-body leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="lg:hidden space-y-12">
            <ScrollReveal delay={0.1}>
              <div className="text-center px-6">
                <h3 className="font-display text-2xl text-text-hero mb-6">
                  The right combination for your business.
                </h3>
                <p className="font-body text-text-body leading-relaxed mb-8">
                  Not every business needs all four pillars. We diagnose which combination delivers the highest ROI, then implement in 90-day sprints.
                </p>
              </div>
            </ScrollReveal>

            {pillarData.map((pillar, index) => (
              <ScrollReveal key={pillar.id} delay={0.2 + index * 0.1}>
                <div className="mx-6">
                  <div 
                    className="p-6 rounded-xl border-l-4 relative overflow-hidden group"
                    style={{ 
                      backgroundColor: pillar.bgColor,
                      borderColor: pillar.color 
                    }}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <h4 
                        className="font-mono text-sm uppercase tracking-wider mb-3"
                        style={{ color: pillar.color }}
                      >
                        {pillar.title}
                      </h4>
                      <h5 className="font-display text-xl text-text-hero mb-4">
                        {pillar.subtitle}
                      </h5>
                      <p className="font-body text-text-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.6}>
              <div className="px-6 pt-8">
                <WaitlistForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
