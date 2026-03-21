"use client";

import { useRef, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TheProblem() {
  const containerRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // BEFORE column
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const beforeRotation = useTransform(scrollYProgress, [0, 0.7], [2, 0]);

  // AFTER column
  const afterOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const afterTranslateX = useTransform(scrollYProgress, [0.3, 0.7], [20, 0]);

  // Diagonal divider
  const dividerOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );

  // Static content section (preserved from 02a)
  const sectionContent = (
    <section
      id="problem"
      className="relative overflow-hidden bg-secondary py-24 lg:py-32 atmosphere-grid atmosphere-vignette"
    >
      {/* Red atmosphere glow (left) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(217, 64, 64, 0.10) 0%, transparent 60%)",
        }}
      />

      {/* Teal atmosphere glow (right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(26, 155, 191, 0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12 lg:mb-16">
          <ScrollReveal color="core">
            <SectionLabel>THE PROBLEM</SectionLabel>
          </ScrollReveal>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
          {/* Diagonal SVG divider (desktop only) */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 hidden lg:block z-10">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <polygon
                points="0,0 15,0 0,100"
                fill="rgba(217, 64, 64, 0.08)"
              />
              <line
                x1="15"
                y1="0"
                x2="0"
                y2="100"
                stroke="rgba(26, 155, 191, 0.3)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Left column (BEFORE) */}
          <div
            className="p-8 lg:p-12 border-l-[3px]"
            style={{ borderLeftColor: "rgba(217, 64, 64, 0.40)" }}
          >
            {/* Title */}
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: "rgba(217, 64, 64, 0.60)" }}
            >
              BEFORE
            </h3>

            {/* Items with rotation */}
            <div className="space-y-1">
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(0.8deg)" }}
              >
                Your CRM data never reaches your ad platform
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Your brand guide exists but nobody follows it
              </p>
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(1.2deg)" }}
              >
                Your dev team ships features marketing didn&apos;t ask for
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Four invoices. Four Slack channels. Zero alignment.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-muted">
              Burn rate: untracked | Results: inconsistent | Timeline:
              undefined
            </div>
          </div>

          {/* Mobile separator */}
          <div className="border-t border-white/[0.06] lg:hidden my-2" />

          {/* Right column (AFTER) */}
          <div className="p-8 lg:p-12 border-l-[3px] border-core-bright">
            {/* Title */}
            <h3 className="font-mono text-xs uppercase tracking-widest text-core-bright mb-6">
              AFTER
            </h3>

            {/* Items with gold bullets */}
            <div className="space-y-1">
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Strategy drives tech decisions
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Tech drives growth metrics
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Growth drives brand positioning
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Brand drives strategy refinement
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-body">
              ROI: 10x scoping standard | Results: compounding | Timeline:
              90-day sprints
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Animated content section with motion wrappers
  const animatedContent = (
    <section
      id="problem"
      className="sticky top-0 h-screen overflow-hidden bg-secondary py-24 lg:py-32 atmosphere-grid atmosphere-vignette"
    >
      {/* Red atmosphere glow (left) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(217, 64, 64, 0.10) 0%, transparent 60%)",
        }}
      />

      {/* Teal atmosphere glow (right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(26, 155, 191, 0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12 lg:mb-16">
          <ScrollReveal color="core">
            <SectionLabel>THE PROBLEM</SectionLabel>
          </ScrollReveal>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
          {/* Diagonal SVG divider (desktop only) */}
          <motion.div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 hidden lg:block z-10"
            style={{ opacity: dividerOpacity }}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <polygon
                points="0,0 15,0 0,100"
                fill="rgba(217, 64, 64, 0.08)"
              />
              <line
                x1="15"
                y1="0"
                x2="0"
                y2="100"
                stroke="rgba(26, 155, 191, 0.3)"
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>

          {/* Left column (BEFORE) - Desktop animated */}
          <motion.div
            className="hidden lg:block p-8 lg:p-12 border-l-[3px]"
            style={{
              borderLeftColor: "rgba(217, 64, 64, 0.40)",
              opacity: beforeOpacity,
              rotate: beforeRotation,
            }}
          >
            {/* Title */}
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: "rgba(217, 64, 64, 0.60)" }}
            >
              BEFORE
            </h3>

            {/* Items with rotation */}
            <div className="space-y-1">
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(0.8deg)" }}
              >
                Your CRM data never reaches your ad platform
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Your brand guide exists but nobody follows it
              </p>
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(1.2deg)" }}
              >
                Your dev team ships features marketing didn&apos;t ask for
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Four invoices. Four Slack channels. Zero alignment.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-muted">
              Burn rate: untracked | Results: inconsistent | Timeline:
              undefined
            </div>
          </motion.div>

          {/* Mobile separator */}
          <div className="border-t border-white/[0.06] lg:hidden my-2" />

          {/* Right column (AFTER) - Desktop animated */}
          <motion.div
            className="hidden lg:block p-8 lg:p-12 border-l-[3px] border-core-bright"
            style={{ opacity: afterOpacity, x: afterTranslateX }}
          >
            {/* Title */}
            <h3 className="font-mono text-xs uppercase tracking-widest text-core-bright mb-6">
              AFTER
            </h3>

            {/* Items with gold bullets */}
            <div className="space-y-1">
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Strategy drives tech decisions
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Tech drives growth metrics
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Growth drives brand positioning
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Brand drives strategy refinement
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-body">
              ROI: 10x scoping standard | Results: compounding | Timeline:
              90-day sprints
            </div>
          </motion.div>

          {/* Mobile: Static stacked columns (always visible) */}
          <div className="lg:hidden p-8 lg:p-12 border-l-[3px]" style={{ borderLeftColor: "rgba(217, 64, 64, 0.40)" }}>
            {/* Title */}
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: "rgba(217, 64, 64, 0.60)" }}
            >
              BEFORE
            </h3>

            {/* Items with rotation */}
            <div className="space-y-1">
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(0.8deg)" }}
              >
                Your CRM data never reaches your ad platform
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Your brand guide exists but nobody follows it
              </p>
              <p
                className="font-body text-base text-text-muted mb-3"
                style={{ transform: "rotate(1.2deg)" }}
              >
                Your dev team ships features marketing didn&apos;t ask for
              </p>
              <p
                className="font-body text-base text-text-muted mb-3 line-through"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Four invoices. Four Slack channels. Zero alignment.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-muted">
              Burn rate: untracked | Results: inconsistent | Timeline:
              undefined
            </div>
          </div>

          <div className="lg:hidden border-t border-white/[0.06] my-2" />

          <div className="lg:hidden p-8 lg:p-12 border-l-[3px] border-core-bright">
            {/* Title */}
            <h3 className="font-mono text-xs uppercase tracking-widest text-core-bright mb-6">
              AFTER
            </h3>

            {/* Items with gold bullets */}
            <div className="space-y-1">
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Strategy drives tech decisions
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Tech drives growth metrics
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Growth drives brand positioning
              </p>
              <p className="font-body text-base text-text-body mb-3 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(240, 180, 41, 0.45)",
                    backgroundColor: "rgba(240, 180, 41, 0.15)",
                  }}
                />
                Brand drives strategy refinement
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 font-mono text-sm text-text-body">
              ROI: 10x scoping standard | Results: compounding | Timeline:
              90-day sprints
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Render static version for reduced motion
  if (prefersReducedMotion) {
    return sectionContent;
  }

  // Render animated version with scroll container
  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "180vh" }}
    >
      {animatedContent}
    </div>
  );
}
