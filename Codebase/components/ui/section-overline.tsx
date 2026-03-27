"use client";

interface SectionOverlineProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionOverline({ number, label, className = "" }: SectionOverlineProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]/60 font-medium ${className}`}
    >
      [{number}] {label}
    </span>
  );
}
