"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { caseStudies } from "@/data/caseStudies";

interface StatItemProps {
  number: number;
  label: string;
  description: string;
  size: "large" | "medium" | "small";
  delay?: number;
  isInView: boolean;
}

const sizeClasses = {
  large: "text-[64px] md:text-[72px]",
  medium: "text-[56px]",
  small: "text-[48px]",
};

function StatItem({ number, label, description, size, isInView }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(number * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, number]);

  return (
    <div className="flex flex-col items-start">
      <span className={`font-mono tabular-nums ${sizeClasses[size]} text-text-hero tracking-[-0.02em] leading-none`}>
        {displayValue}
      </span>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.4, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="font-mono text-[11px] font-medium uppercase text-white/50 tracking-[0.12em] mt-2 block">
          {label}
        </span>
        <span className="font-body text-sm text-white/40 mt-1 block">
          {description}
        </span>
      </motion.div>
    </div>
  );
}

export function TheProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div ref={sectionRef}>
      <SectionWrapper id="proof" background="primary" glow="gold">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/proof-gold-dust.png')",
            backgroundSize: "cover",
            opacity: 0.4,
          }}
        />

        <SectionOverline number="02" label="THE PROOF" className="mb-4" />

        <h2
          className="font-display text-5xl text-text-hero tracking-[-0.02em] mb-16"
          style={{ textWrap: "balance" as const }}
        >
          Numbers don&apos;t need decoration.
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between items-start gap-12 md:gap-8 lg:gap-0 mb-16">
          <StatItem
            number={4}
            label="ENGINES"
            description="working as one system"
            size="large"
            isInView={isInView}
          />
          <StatItem
            number={2}
            label="DEV TEAMS"
            description="competing on every build"
            size="medium"
            isInView={isInView}
          />
          <StatItem
            number={16}
            label="SPECIALISTS"
            description="across design, code, growth, strategy"
            size="small"
            isInView={isInView}
          />
        </div>

        <div className="mt-16">
          <div className="hidden md:grid grid-cols-[1fr_1fr_2fr] gap-4 font-mono text-[11px] uppercase text-white/35 tracking-[0.1em] pb-3 border-b border-white/[0.08]">
            <span>CLIENT</span>
            <span>SECTOR</span>
            <span>DELIVERED</span>
          </div>

          <div className="md:hidden font-mono text-[11px] uppercase text-white/35 tracking-[0.1em] pb-3 border-b border-white/[0.08]">
            CASE STUDIES
          </div>

          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:grid grid-cols-[1fr_1fr_2fr] gap-4 py-4 border-b border-white/[0.08] last:border-b-0"
            >
              <span className="font-body text-base font-medium text-text-hero">
                {study.client}
              </span>
              <span className="font-body text-sm text-white/60">
                {study.sector}
              </span>
              <span className="font-body text-sm text-white/60">
                {study.delivered}
              </span>
            </motion.div>
          ))}

          {/* Mobile case study cards */}
          <div className="md:hidden flex flex-col gap-3 mt-4">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="border border-white/10 rounded p-4"
              >
                <p className="font-mono text-[11px] text-white/35 uppercase tracking-[0.1em] mb-1">Client</p>
                <p className="font-body text-base font-medium text-text-hero">{study.client}</p>
                <p className="font-mono text-[11px] text-white/35 uppercase tracking-[0.1em] mt-3 mb-1">Sector</p>
                <p className="font-body text-sm text-white/60">{study.sector}</p>
                <p className="font-mono text-[11px] text-white/35 uppercase tracking-[0.1em] mt-3 mb-1">Delivered</p>
                <p className="font-body text-sm text-white/60">{study.delivered}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pb-20" />
      </SectionWrapper>
    </div>
  );
}

