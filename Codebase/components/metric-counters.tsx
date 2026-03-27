"use client";

import { useEffect, useRef, useState } from "react";
import { animateCounter, prefersReducedMotion } from "@/lib/animations";

interface MetricCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
  decimals?: number;
}

function MetricCounter({
  target,
  label,
  suffix = "",
  prefix = "",
  delay = 0,
  decimals = 0,
}: MetricCounterProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            if (prefersReducedMotion()) {
              setValue(target);
              return;
            }

            const timeoutId = setTimeout(() => {
              animateCounter(target, 2000, (v) => setValue(v));
            }, delay);

            return () => clearTimeout(timeoutId);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, delay, hasAnimated]);

  const displayValue = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tabular-nums">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-[var(--text-secondary)] text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export default function MetricCounters() {
  return (
    <section className="section content-width">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <MetricCounter target={99.9} label="Uptime %" decimals={1} delay={0} />
        <MetricCounter target={500} label="ms avg. latency" delay={200} />
        <MetricCounter target={10} label="x faster deploys" suffix="x" delay={400} />
        <MetricCounter target={24} label="/7 support" suffix="/7" delay={600} />
      </div>
    </section>
  );
}
