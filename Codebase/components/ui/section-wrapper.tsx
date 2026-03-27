"use client";

import { forwardRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "deep";
  glow?: "none" | "soft" | "strong";
}

const bgMap = {
  primary: "bg-[var(--bg-base)]",
  secondary: "bg-[var(--bg-surface)]",
  deep: "bg-black",
};

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  function SectionWrapper({
    children,
    id,
    className = "",
    background = "primary",
    glow = "none",
  }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        className={`relative overflow-hidden py-24 lg:py-32 ${bgMap[background]} ${className}`}
      >
        <div className="absolute inset-0 pointer-events-none opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {glow !== "none" && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: glow === "strong" 
                ? "radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)"
                : "radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)"
            }}
          />
        )}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }
);
