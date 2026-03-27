"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Zap, Code, Rocket, Check } from "lucide-react";
import { prefersReducedMotion } from "@/lib/animations";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const steps: Step[] = [
  {
    icon: <span className="font-mono text-sm font-bold">01</span>,
    title: "Talk to us.",
    description:
      "A 30-minute call. No pitch deck. Just your challenges and our honest assessment.",
    visual: (
      <div className="flex items-center justify-center h-32">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">📞</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">30 min discovery call</p>
        </div>
      </div>
    ),
  },
  {
    icon: <span className="font-mono text-sm font-bold">02</span>,
    title: "We audit your system.",
    description:
      "CoreXs maps your business. Where you're leaking time, money, and opportunity.",
    visual: (
      <div className="flex items-center justify-center h-32">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">Full system audit</p>
        </div>
      </div>
    ),
  },
  {
    icon: <span className="font-mono text-sm font-bold">03</span>,
    title: "We build the machine.",
    description:
      "All four engines activate. You watch the system work while you focus on what matters.",
    visual: (
      <div className="flex items-center justify-center h-32">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">⚙️</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">4 engines activated</p>
        </div>
      </div>
    ),
  },
];

function AccordionItem({
  isOpen,
  onToggle,
  step,
  index,
}: {
  isOpen: boolean;
  onToggle: () => void;
  step: Step;
  index: number;
}) {
  return (
    <div
      className={`border-subtle rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-[var(--bg-surface)]" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
            isOpen
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--bg-surface)] text-[var(--text-secondary)]"
          }`}
        >
          {step.icon}
        </div>
        <div className="flex-1">
          <div className="text-label mb-1">Step {index + 1}</div>
          <div className="text-lg font-semibold text-white">{step.title}</div>
        </div>
        <ChevronDown
          className={`size-5 text-[var(--text-secondary)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-6 md:px-6 md:pb-8">
            <div className="grid md:grid-cols-2 gap-6 pl-14">
              <p className="text-body text-base">{step.description}</p>
              <div className="p-4 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                {step.visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccordionPath() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    if (!autoAdvance || prefersReducedMotion()) return;

    const interval = setInterval(() => {
      setExpanded((prev) =>
        prev === null ? 0 : (prev + 1) % steps.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoAdvance]);

  const handleToggle = (index: number) => {
    setAutoAdvance(false);
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="section content-width">
      <div className="text-center mb-12">
        <span className="text-label mb-4 block">Your Path</span>
        <h2 className="text-h2 mb-4">
          Three steps. <span className="text-[var(--accent)]">One conversation.</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {steps.map((step, i) => (
          <AccordionItem
            key={i}
            isOpen={expanded === i}
            onToggle={() => handleToggle(i)}
            step={step}
            index={i}
          />
        ))}
      </div>

      {/* Auto-advance indicator */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setAutoAdvance(!autoAdvance)}
          className={`text-sm flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            autoAdvance
              ? "bg-[var(--accent)]/10 text-[var(--accent)]"
              : "bg-[var(--bg-surface)] text-[var(--text-secondary)]"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              autoAdvance ? "bg-[var(--accent)] animate-pulse" : "bg-[var(--text-secondary)]"
            }`}
          />
          {autoAdvance ? "Auto-advancing" : "Paused"}
        </button>
      </div>
    </section>
  );
}
