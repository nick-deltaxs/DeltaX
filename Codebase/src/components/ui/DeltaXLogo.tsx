import type { DeltaXLogoProps } from "@/types";

export function DeltaXLogo({ size = 80, className = "" }: DeltaXLogoProps) {
  return (
    <svg
      viewBox="0 0 375 313"
      width={size}
      height={Math.round(size * (313 / 375))}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="DeltaX logo"
    >
      {/* Outer delta — full mark */}
      <path
        d="M187.5 0L375 313H0L187.5 0Z"
        fill="currentColor"
      />
      {/* First inner cutout */}
      <path
        d="M187.5 62L325 278H50L187.5 62Z"
        fill="var(--bg-primary)"
      />
      {/* Second delta — nested mark */}
      <path
        d="M187.5 104L280 252H95L187.5 104Z"
        fill="currentColor"
      />
      {/* Innermost cutout */}
      <path
        d="M187.5 150L245 228H130L187.5 150Z"
        fill="var(--bg-primary)"
      />
    </svg>
  );
}
