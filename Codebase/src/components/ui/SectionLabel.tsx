import type { SectionLabelProps } from "@/types";

const colorMap = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
  gold: "text-gold",
};

export function SectionLabel({ children, color = "core", className = "" }: SectionLabelProps) {
  return (
    <span className={`font-mono text-[0.85rem] uppercase tracking-[4px] font-semibold ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}
