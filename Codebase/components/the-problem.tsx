"use client";

import { useRef, useEffect, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>, options?: { threshold?: number }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options?.threshold]);

  return isInView;
}

const beforeItems = [
  "Your CRM data never reaches your ad platform",
  "Your brand guide exists but nobody follows it",
  "Your dev team ships features marketing didn't ask for",
  "Four invoices. Four Slack channels. Zero alignment.",
];

const afterItems = [
  "Strategy drives tech decisions",
  "Tech drives growth metrics",
  "Growth drives brand positioning",
  "Brand drives strategy refinement",
];

export default function TheProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} id="problem" className="section relative overflow-hidden">
      <div className="content-width mb-12">
        <span className="text-label">The Problem</span>
      </div>

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="48,0 52,0 52,100 48,100"
              fill="var(--bg-base)"
              style={{ transform: "skewX(-3deg)", transformOrigin: "center" }}
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="relative bg-gradient-to-br from-red-950/30 via-red-900/20 to-transparent p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.15),transparent_70%)]" />
            
            <div className="relative z-10">
              <h3
                className={`text-xs font-bold tracking-widest text-red-400/80 mb-8 transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                BEFORE
              </h3>

              <ul className="space-y-5 mb-10">
                {beforeItems.map((item, index) => (
                  <li
                    key={index}
                    className={`relative text-base md:text-lg text-[var(--text-secondary)] transition-all duration-700 ${
                      isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ 
                      transitionDelay: `${200 + index * 100}ms`,
                      transform: isInView ? `rotate(${index % 2 === 0 ? -0.5 : 0.3}deg)` : undefined
                    }}
                  >
                    <span className="relative">
                      {item}
                      <span 
                        className={`absolute left-0 top-1/2 h-[2px] bg-red-500/60 transition-all duration-1000 ease-out ${
                          isInView ? "w-full" : "w-0"
                        }`}
                        style={{ transitionDelay: `${600 + index * 150}ms` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-red-400/70 font-mono transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <span>Burn rate: untracked</span>
                <span className="text-red-500/40">|</span>
                <span>Results: inconsistent</span>
                <span className="text-red-500/40">|</span>
                <span>Timeline: undefined</span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-bl from-teal-950/30 via-teal-900/20 to-transparent p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent_70%)]" />
            
            <div className="relative z-10">
              <h3
                className={`text-xs font-bold tracking-widest text-teal-400/80 mb-8 transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                AFTER
              </h3>

              <ul className="space-y-5 mb-10">
                {afterItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-base md:text-lg text-[var(--text-primary)] transition-all duration-700 ${
                      isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <span 
                      className={`mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 transition-all duration-500 ${
                        isInView ? "scale-100" : "scale-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-teal-400/70 font-mono transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <span>ROI: 10x scoping standard</span>
                <span className="text-teal-500/40">|</span>
                <span>Results: compounding</span>
                <span className="text-teal-500/40">|</span>
                <span>Timeline: 90-day sprints</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--bg-base)" stopOpacity="1" />
                <stop offset="50%" stopColor="var(--bg-base)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--bg-base)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <polygon
              points="590,0 610,0 620,500 580,500"
              fill="url(#dividerGradient)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
