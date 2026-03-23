import type { SectionOverlineProps } from "@/types";

export function SectionOverline({ number, label, className = "" }: SectionOverlineProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.12em] text-text-muted font-medium ${className}`}
    >
      [{number}] {label}
    </span>
  );
}
