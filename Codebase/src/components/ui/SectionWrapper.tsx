import type { SectionWrapperProps } from "@/types";

const backgroundMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  break: "bg-bg-break",
};

export function SectionWrapper({
  children,
  id,
  className = "",
  background = "primary",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${backgroundMap[background]} atmosphere-grid atmosphere-vignette relative`}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}
