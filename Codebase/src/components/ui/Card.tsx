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
  const variantStyles = variant === "left-accent"
    ? `border-l-[3px] ${accentBorderMap[accentColor]} rounded-xl p-4 pl-6`
    : "bg-tertiary border border-white/[0.06] rounded-xl p-6 lg:p-8";

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/[0.12]"
    : "";

  return (
    <div
      className={`${variantStyles} ${hoverStyles} ${className}`}
      style={variant === "left-accent" ? { background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)" } : undefined}
    >
      {children}
    </div>
  );
}
