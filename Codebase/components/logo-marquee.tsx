"use client";

const logos = [
  { name: "CoreXs", icon: "CX", color: "#14B8A6" },
  { name: "CodeXs", icon: "CDX", color: "#3B82F6" },
  { name: "ScaleXs", icon: "SX", color: "#22C55E" },
  { name: "StyleXs", icon: "STX", color: "#A855F7" },
];

const results = [
  "E-commerce",
  "Crm systems",
  "Chat bots",
  "Automations",
  "Space AI agents",
  "Task-Management",
  "Morpheus",
  "Cortex",
  "Oracle",
];

function LogoRow() {
  return (
    <>
      {logos.map((logo, idx) => (
        <div
          key={`${logo.name}-${idx}`}
          className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
        >
          <span 
            className="px-2 py-1 rounded text-xs font-bold font-mono"
            style={{ 
              backgroundColor: `${logo.color}20`,
              color: logo.color,
              border: `1px solid ${logo.color}40`
            }}
          >
            {logo.icon}
          </span>
          <span className="text-lg font-medium text-white">{logo.name}</span>
        </div>
      ))}
    </>
  );
}

function ResultRow() {
  return (
    <>
      {results.map((result, idx) => (
        <span
          key={`${result}-${idx}`}
          className="text-[var(--text-secondary)] text-sm whitespace-nowrap px-4"
        >
          {result}
        </span>
      ))}
    </>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />

      {/* Logos row */}
      <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]">
        <div className="flex gap-12 shrink-0">
          <LogoRow />
        </div>
        <div className="flex gap-12 shrink-0" aria-hidden="true">
          <LogoRow />
        </div>
      </div>

      {/* Results row - opposite direction */}
      <div className="flex gap-12 mt-6 animate-marquee-reverse hover:[animation-play-state:paused]">
        <div className="flex gap-12 shrink-0">
          <ResultRow />
        </div>
        <div className="flex gap-12 shrink-0" aria-hidden="true">
          <ResultRow />
        </div>
      </div>
    </section>
  );
}
