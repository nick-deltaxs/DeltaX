"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TheSystem() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const PATH_LENGTHS = {
    path1: 320,  // CORE → CODE
    path2: 180,  // CORE → SCALE
    path3: 320,  // CORE → STYLE
    path4: 320,  // CODE → ΔX
    path5: 170,  // SCALE → ΔX
    path6: 320,  // STYLE → ΔX
  };

  const path1Offset = useTransform(scrollYProgress, [0.1, 0.4], [PATH_LENGTHS.path1, 0]);
  const path2Offset = useTransform(scrollYProgress, [0.15, 0.45], [PATH_LENGTHS.path2, 0]);
  const path3Offset = useTransform(scrollYProgress, [0.2, 0.5], [PATH_LENGTHS.path3, 0]);
  const path4Offset = useTransform(scrollYProgress, [0.4, 0.7], [PATH_LENGTHS.path4, 0]);
  const path5Offset = useTransform(scrollYProgress, [0.45, 0.75], [PATH_LENGTHS.path5, 0]);
  const path6Offset = useTransform(scrollYProgress, [0.5, 0.8], [PATH_LENGTHS.path6, 0]);

  const coreOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);   // CORE appears first
  const codeOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);   // After path1 completes
  const scaleOpacity = useTransform(scrollYProgress, [0.40, 0.50], [0, 1]);  // After path2 completes
  const styleOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);  // After path3 completes
  const dxOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);     // After paths 4-6 complete

  return (
    <section
      ref={sectionRef}
      id="system"
      className="relative overflow-hidden bg-primary py-24 lg:py-32 atmosphere-grid atmosphere-vignette"
    >
      {/* Multi-color atmosphere effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 15%, rgba(26,155,191,0.10) 0%, transparent 50%), radial-gradient(ellipse at 15% 70%, rgba(138,138,138,0.08) 0%, transparent 40%), radial-gradient(ellipse at 50% 70%, rgba(217,64,64,0.08) 0%, transparent 40%), radial-gradient(ellipse at 85% 70%, rgba(110,117,255,0.08) 0%, transparent 40%)"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal delay={0} direction="up">
          {/* Section label */}
          <div className="text-center mb-12 lg:mb-16">
            <SectionLabel color="core">THE SYSTEM</SectionLabel>
          </div>

          {/* SVG diagram - desktop only */}
          <div className="w-full max-w-[800px] mx-auto hidden lg:block">
            <svg
              viewBox="0 0 800 600"
              width="100%"
              height="auto"
              role="img"
              aria-label="DeltaX system diagram: CORE diagnoses then feeds into CODE, SCALE, and STYLE, which converge into unified results"
            >
              {/* Paths (curved bezier connections) */}
              {prefersReducedMotion ? (
                <>
                  <path
                    d="M400,100 C380,180 250,220 160,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M400,100 C400,180 400,220 400,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M400,100 C420,180 550,220 640,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M160,330 C180,400 300,460 400,500"
                    stroke="#8A8A8A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M400,330 C400,400 400,460 400,500"
                    stroke="#D94040"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M640,330 C620,400 500,460 400,500"
                    stroke="#6E75FF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <motion.path
                    d="M400,100 C380,180 250,220 160,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path1}
                    style={{ strokeDashoffset: path1Offset }}
                  />
                  <motion.path
                    d="M400,100 C400,180 400,220 400,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path2}
                    style={{ strokeDashoffset: path2Offset }}
                  />
                  <motion.path
                    d="M400,100 C420,180 550,220 640,280"
                    stroke="#1A9BBF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path3}
                    style={{ strokeDashoffset: path3Offset }}
                  />
                  <motion.path
                    d="M160,330 C180,400 300,460 400,500"
                    stroke="#8A8A8A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path4}
                    style={{ strokeDashoffset: path4Offset }}
                  />
                  <motion.path
                    d="M400,330 C400,400 400,460 400,500"
                    stroke="#D94040"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path5}
                    style={{ strokeDashoffset: path5Offset }}
                  />
                  <motion.path
                    d="M640,330 C620,400 500,460 400,500"
                    stroke="#6E75FF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={PATH_LENGTHS.path6}
                    style={{ strokeDashoffset: path6Offset }}
                  />
                </>
              )}

              {/* Nodes (pill-shaped rectangles) */}
              {/* CORE */}
              {prefersReducedMotion ? (
                <g>
                  <rect
                    x="280"
                    y="40"
                    width="240"
                    height="60"
                    stroke="#1A9BBF"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="76"
                    fill="#1A9BBF"
                    fontSize="16"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X CORE — diagnose
                  </text>
                </g>
              ) : (
                <motion.g style={{ opacity: coreOpacity }}>
                  <rect
                    x="280"
                    y="40"
                    width="240"
                    height="60"
                    stroke="#1A9BBF"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="76"
                    fill="#1A9BBF"
                    fontSize="16"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X CORE — diagnose
                  </text>
                </motion.g>
              )}

              {/* CODE */}
              {prefersReducedMotion ? (
                <g>
                  <rect
                    x="60"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#8A8A8A"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="160"
                    y="310"
                    fill="#8A8A8A"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X CODE — build
                  </text>
                </g>
              ) : (
                <motion.g style={{ opacity: codeOpacity }}>
                  <rect
                    x="60"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#8A8A8A"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="160"
                    y="310"
                    fill="#8A8A8A"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X CODE — build
                  </text>
                </motion.g>
              )}

              {/* SCALE */}
              {prefersReducedMotion ? (
                <g>
                  <rect
                    x="300"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#D94040"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="310"
                    fill="#D94040"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X SCALE — grow
                  </text>
                </g>
              ) : (
                <motion.g style={{ opacity: scaleOpacity }}>
                  <rect
                    x="300"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#D94040"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="310"
                    fill="#D94040"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X SCALE — grow
                  </text>
                </motion.g>
              )}

              {/* STYLE */}
              {prefersReducedMotion ? (
                <g>
                  <rect
                    x="540"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#6E75FF"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="640"
                    y="310"
                    fill="#6E75FF"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X STYLE — brand
                  </text>
                </g>
              ) : (
                <motion.g style={{ opacity: styleOpacity }}>
                  <rect
                    x="540"
                    y="280"
                    width="200"
                    height="50"
                    stroke="#6E75FF"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="640"
                    y="310"
                    fill="#6E75FF"
                    fontSize="14"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    X STYLE — brand
                  </text>
                </motion.g>
              )}

              {/* ΔX */}
              {prefersReducedMotion ? (
                <g>
                  <rect
                    x="350"
                    y="500"
                    width="100"
                    height="50"
                    stroke="#f0b429"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="531"
                    fill="#f0b429"
                    fontSize="18"
                    textAnchor="middle"
                    fontWeight="bold"
                    className="font-mono"
                  >
                    ΔX
                  </text>
                </g>
              ) : (
                <motion.g style={{ opacity: dxOpacity }}>
                  <rect
                    x="350"
                    y="500"
                    width="100"
                    height="50"
                    stroke="#f0b429"
                    strokeWidth="1"
                    fill="none"
                    rx="24"
                  />
                  <text
                    x="400"
                    y="531"
                    fill="#f0b429"
                    fontSize="18"
                    textAnchor="middle"
                    fontWeight="bold"
                    className="font-mono"
                  >
                    ΔX
                  </text>
                </motion.g>
              )}
            </svg>
          </div>

          {/* Mobile fallback - vertical text list */}
          <div className="lg:hidden space-y-4 max-w-sm mx-auto">
            {/* CORE */}
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ borderLeft: "3px solid #1A9BBF" }}
            >
              <span className="font-mono text-sm uppercase tracking-wider" style={{ color: "#1A9BBF" }}>
                CORE diagnoses
              </span>
            </div>

            {/* Connecting dot */}
            <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

            {/* CODE */}
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ borderLeft: "3px solid #8A8A8A" }}
            >
              <span className="font-mono text-sm uppercase tracking-wider" style={{ color: "#8A8A8A" }}>
                CODE builds
              </span>
            </div>

            {/* Connecting dot */}
            <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

            {/* SCALE */}
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ borderLeft: "3px solid #D94040" }}
            >
              <span className="font-mono text-sm uppercase tracking-wider" style={{ color: "#D94040" }}>
                SCALE grows
              </span>
            </div>

            {/* Connecting dot */}
            <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

            {/* STYLE */}
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ borderLeft: "3px solid #6E75FF" }}
            >
              <span className="font-mono text-sm uppercase tracking-wider" style={{ color: "#6E75FF" }}>
                STYLE brands
              </span>
            </div>

            {/* Connecting dot */}
            <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

            {/* ΔX */}
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ borderLeft: "3px solid #f0b429" }}
            >
              <span className="font-mono text-sm uppercase tracking-wider" style={{ color: "#f0b429" }}>
                ΔX delivers
              </span>
            </div>
          </div>

          {/* Text below diagram */}
          <p className="font-body text-base lg:text-lg text-text-body text-center mt-8 max-w-xl mx-auto">
            Every business gets a different combination — but it always runs as one system.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
