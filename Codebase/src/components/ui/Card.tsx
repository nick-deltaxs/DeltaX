import type { CardProps } from "@/types";

const accentBorderMap: Record<string, string> = {
  core: "border-l-core-bright",
  code: "border-l-code-bright",
  scale: "border-l-scale-bright",
  style: "border-l-style-bright",
  deltax: "border-l-deltax-bright",
};

export function Card({
  children,
  className = "",
  hoverEffect = false,
  accentColor = "core",
  variant = "default",
}: CardProps) {
  const hoverStyles = hoverEffect
    ? "hover:-translate-y-0.5 hover:border-opacity-100 transition-all duration-300"
    : "";

  if (variant === "left-accent") {
    return (
      <div
        className={`border-l-[3px] border-y-0 border-r-0 ${accentBorderMap[accentColor]} bg-gradient-to-br from-white/[0.10] to-white/[0.04] p-4 pl-6 rounded-xl ${hoverStyles} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`bg-bg-tertiary border border-white/[0.06] rounded-xl p-6 lg:p-8 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
