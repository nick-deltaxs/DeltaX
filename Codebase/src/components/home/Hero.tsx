"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 80, y: 20 });

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCursorPosition({ x, y });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-primary atmosphere-grid atmosphere-vignette"
    >
      {/* Teal radial glow with cursor proximity effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(26, 155, 191, 0.12) 0%, transparent 70%)`,
          transition: "background 200ms ease-out",
        }}
      />

      {/* Inner container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side (60%) - Content */}
          <div className="md:col-span-3">
            <ScrollReveal delay={0}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,5rem)] text-text-hero leading-[1.0] tracking-tight whitespace-pre-line">
                {`ONE SYSTEM.
FOUR ENGINES.
TOTAL TRANSFORMATION.`}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-lg text-text-body max-w-xl mt-6">
                DeltaX replaces the 4 agencies that never talk to each other — with one system where strategy, tech, growth, and brand feed into each other.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <WaitlistForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div>
                <p className="font-body text-xs text-text-muted mt-3">
                  Be the first to get access.
                </p>
                <p className="font-body text-xs text-text-muted">
                  Built for companies doing $500K–$10M who&apos;ve outgrown the agency model.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side (40%) - Logo */}
          <div className="hidden md:flex md:col-span-2 items-center justify-center relative">
            <ScrollReveal delay={0.4}>
              <div className="relative">
                {/* Breathing glow behind logo */}
                <div
                  className="absolute w-64 h-64 rounded-full glow-breathe blur-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  style={{
                    background: "radial-gradient(circle, rgba(26, 155, 191, 0.15) 0%, transparent 70%)",
                  }}
                />
                {/* Logo with slow rotation */}
                <DeltaXLogo
                  size={120}
                  className="text-text-hero relative z-10 logo-rotate"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
