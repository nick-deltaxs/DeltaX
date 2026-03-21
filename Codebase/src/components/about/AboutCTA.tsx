"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function AboutCTA() {
  return (
    <section className="bg-secondary py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.07) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal delay={0}>
          <h2 className="font-display text-xl text-text-hero text-center">
            Ready to work with us?
          </h2>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
