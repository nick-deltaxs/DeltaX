"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations";

interface Engine {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
}

const engines: Engine[] = [
  { id: "core", name: "CoreXs", x: 200, y: 150, description: "Strategy & Audit" },
  { id: "code", name: "CodeXs", x: 600, y: 150, description: "Engineering & Build" },
  { id: "scale", name: "ScaleXs", x: 200, y: 450, description: "Growth & Marketing" },
  { id: "style", name: "StyleXs", x: 600, y: 450, description: "Design & Brand" },
];

function Node({
  x,
  y,
  label,
  isCenter = false,
  delay = 0,
  isHovered = false,
  onHover,
}: {
  x: number;
  y: number;
  label: string;
  isCenter?: boolean;
  delay?: number;
  isHovered?: boolean;
  onHover?: (hovered: boolean) => void;
}) {
  const [scale, setScale] = useState(0);
  const nodeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setScale(1);
      return;
    }

    const timeout = setTimeout(() => {
      // Spring animation
      let start: number | null = null;
      const animate = (time: number) => {
        if (!start) start = time;
        const elapsed = time - start;
        const progress = Math.min(elapsed / 600, 1);
        
        // Spring with overshoot
        const spring = 1 - Math.pow(1 - progress, 3);
        const overshoot = progress < 0.6 ? spring * 1.1 : 1 - (progress - 0.6) * 0.25;
        setScale(Math.min(overshoot, 1.1));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setScale(1);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const size = isCenter ? 80 : 60;
  const halfSize = size / 2;

  // Icon config for non-center nodes
  const iconConfig: Record<string, { text: string; gradient: string[]; fontSize: string }> = {
    CoreXs: { text: "CX", gradient: ["#14B8A6", "#0D9488"], fontSize: "14" },
    CodeXs: { text: "</>", gradient: ["#3B82F6", "#2563EB"], fontSize: "10" },
    ScaleXs: { text: "SX", gradient: ["#22C55E", "#16A34A"], fontSize: "12" },
    StyleXs: { text: "SX", gradient: ["#A855F7", "#6366F1"], fontSize: "12" },
  };

  const config = iconConfig[label];

  return (
    <g
      ref={nodeRef}
      transform={`translate(${x}, ${y}) scale(${scale})`}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={label}
    >
      <rect
        x={-halfSize}
        y={-halfSize}
        width={size}
        height={size}
        rx={12}
        fill={isCenter ? "var(--accent)" : "var(--bg-surface)"}
        stroke={isHovered ? "var(--accent)" : "var(--border-subtle)"}
        strokeWidth={isHovered ? 2 : 1}
        className="transition-all duration-200"
      />
      {isCenter ? (
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={12}
          fontWeight={600}
          className="pointer-events-none select-none"
        >
          {label}
        </text>
      ) : config ? (
        <>
          <defs>
            <linearGradient id={`${label}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={config.gradient[0]} />
              <stop offset="100%" stopColor={config.gradient[1]} />
            </linearGradient>
          </defs>
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            fill={`url(#${label}Gradient)`}
            fontSize={config.fontSize}
            fontWeight={700}
            fontFamily="system-ui, -apple-system, sans-serif"
            className="pointer-events-none select-none"
          >
            {config.text}
          </text>
        </>
      ) : (
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--text-primary)"
          fontSize={10}
          fontWeight={600}
          className="pointer-events-none select-none"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function AnimatedLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  isHighlighted = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  isHighlighted?: boolean;
}) {
  const pathRef = useRef<SVGLineElement>(null);
  const [dashOffset, setDashOffset] = useState(1000);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDashOffset(0);
      return;
    }

    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      
      const animate = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - progress, 4);
        setDashOffset(1000 * (1 - eased));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <line
      ref={pathRef}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={isHighlighted ? "var(--accent)" : "var(--border-subtle)"}
      strokeWidth={isHighlighted ? 2 : 1}
      strokeDasharray={1000}
      strokeDashoffset={dashOffset}
      className="transition-colors duration-200"
    />
  );
}

function PulsingDot({ x, y }: { x: number; y: number }) {
  return (
    <circle cx={x} cy={y} r={4} fill="var(--accent)">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="4;6;4"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  );
}

export default function NodeDiagram() {
  const [hoveredEngine, setHoveredEngine] = useState<string | null>(null);
  const centerX = 400;
  const centerY = 300;

  return (
    <section className="section content-width">
      <div className="text-center mb-12">
        <span className="text-label mb-4 block">Built by Founders</span>
        <h2 className="text-h2 mb-4">
          Four engines. <span className="text-[var(--accent)]">One platform.</span>
        </h2>
        <p className="text-body max-w-xl mx-auto">
          DeltaX connects everything you need to ship production-ready apps.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto"
          role="img"
          aria-label="DeltaX platform architecture diagram"
        >
          {/* Lines connecting center to engines */}
          {engines.map((engine, i) => (
            <AnimatedLine
              key={engine.id}
              x1={centerX}
              y1={centerY}
              x2={engine.x}
              y2={engine.y}
              delay={i * 150}
              isHighlighted={hoveredEngine === engine.id}
            />
          ))}

          {/* Pulsing dots at midpoints */}
          {engines.map((engine) => (
            <PulsingDot
              key={`dot-${engine.id}`}
              x={(centerX + engine.x) / 2}
              y={(centerY + engine.y) / 2}
            />
          ))}

          {/* Engine nodes */}
          {engines.map((engine, i) => (
            <Node
              key={engine.id}
              x={engine.x}
              y={engine.y}
              label={engine.name}
              delay={300 + i * 150}
              isHovered={hoveredEngine === engine.id}
              onHover={(hovered) =>
                setHoveredEngine(hovered ? engine.id : null)
              }
            />
          ))}

          {/* Center node */}
          <Node
            x={centerX}
            y={centerY}
            label="DeltaX"
            isCenter
            delay={0}
          />
        </svg>

        {/* Engine descriptions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className={`p-4 rounded-lg border-subtle text-center transition-all duration-200 ${
                hoveredEngine === engine.id
                  ? "border-[var(--accent)] bg-[var(--bg-surface)]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredEngine(engine.id)}
              onMouseLeave={() => setHoveredEngine(null)}
            >
              <div className="font-semibold text-white mb-1">{engine.name}</div>
              <div className="text-sm text-[var(--text-secondary)]">
                {engine.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
