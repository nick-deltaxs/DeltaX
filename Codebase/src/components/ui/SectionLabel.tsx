import type { SectionLabelProps } from "@/types";

const colorMap: Record<string, string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
  gold: "text-gold",
};

export function SectionLabel({
  children,
  color = "core",
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-mono text-[0.85rem] font-semibold uppercase tracking-[4px] ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
