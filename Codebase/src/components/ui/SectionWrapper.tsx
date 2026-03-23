import type { SectionWrapperProps } from "@/types";

const bgMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  deep: "bg-deep",
};

export function SectionWrapper({
  children,
  id,
  className = "",
  background = "primary",
  glow = "none",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 lg:py-32 ${bgMap[background]} ${className}`}
    >
      <div className="atmosphere-grid absolute inset-0 pointer-events-none" />
      <div className="atmosphere-vignette" />
      {glow !== "none" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `var(--glow-${glow})` }}
        />
      )}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
