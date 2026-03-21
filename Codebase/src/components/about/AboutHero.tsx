"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutHero() {
  return (
    <section className="bg-primary min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.07) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 atmosphere-grid" />
      <div className="absolute inset-0 atmosphere-vignette" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-24 lg:py-32 relative z-10">
        <ScrollReveal delay={0}>
          <h1 className="font-display text-3xl lg:text-4xl text-text-hero text-center">
            THE SYSTEM BEHIND THE SYSTEM
          </h1>
          <p className="font-body text-lg text-text-body text-center mt-4">
            What DeltaX is and why it exists.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
