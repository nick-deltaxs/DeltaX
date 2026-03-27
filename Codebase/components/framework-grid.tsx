"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface Tool {
  name: string;
  icon: string;
  description: string;
  snippet: string;
}

const tools: Tool[] = [
  {
    name: "Next.js",
    icon: "▲",
    description: "React framework for production",
    snippet: "npx create-deltax-app --template next",
  },
  {
    name: "React",
    icon: "⚛",
    description: "Build user interfaces",
    snippet: "npm install @deltax/react",
  },
  {
    name: "Vue",
    icon: "◆",
    description: "Progressive JavaScript framework",
    snippet: "npm install @deltax/vue",
  },
  {
    name: "Svelte",
    icon: "🔶",
    description: "Cybernetically enhanced apps",
    snippet: "npm install @deltax/svelte",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description: "Typed JavaScript at scale",
    snippet: "Full type definitions included",
  },
  {
    name: "Tailwind",
    icon: "🌊",
    description: "Utility-first CSS framework",
    snippet: "@deltax/tailwind-preset",
  },
  {
    name: "Prisma",
    icon: "◇",
    description: "Next-gen Node.js ORM",
    snippet: "deltax db push --prisma",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Advanced open source database",
    snippet: "Built-in Postgres provisioning",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-4 md:p-6 text-left border-subtle rounded-xl transition-all duration-200 ${
          isExpanded
            ? "bg-[var(--bg-surface)] border-[var(--accent)]"
            : "hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:bg-[var(--bg-surface)]/50"
        }`}
        aria-expanded={isExpanded}
      >
        <div className="text-2xl md:text-3xl mb-3">{tool.icon}</div>
        <div className="font-semibold text-white mb-1">{tool.name}</div>
        <div className="text-sm text-[var(--text-secondary)]">
          {tool.description}
        </div>
      </button>

      {/* Expanded details overlay */}
      {isExpanded && (
        <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 bg-[var(--bg-surface)] border border-[var(--accent)] rounded-xl shadow-2xl">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 p-1 text-[var(--text-secondary)] hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          <div className="text-2xl md:text-3xl mb-3">{tool.icon}</div>
          <div className="font-semibold text-white mb-1">{tool.name}</div>
          <div className="text-sm text-[var(--text-secondary)] mb-4">
            {tool.description}
          </div>

          <div className="p-3 rounded-lg bg-[var(--bg-base)] font-mono text-sm text-[var(--accent)] border border-[var(--border-subtle)]">
            {tool.snippet}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FrameworkGrid() {
  return (
    <section className="section content-width">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="text-label mb-4 block">Tech Stack</span>
          <h2 className="text-h2 mb-4">
            Built for <span className="text-[var(--accent)]">your stack</span>
          </h2>
          <p className="text-body max-w-xl mx-auto">
            First-class integrations with the tools you already love.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <AnimatedSection key={tool.name} delay={index * 50}>
            <ToolCard tool={tool} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
