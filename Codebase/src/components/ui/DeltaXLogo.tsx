import type { DeltaXLogoProps } from "@/types";

export function DeltaXLogo({ className = "", size = 80 }: DeltaXLogoProps) {
  const height = Math.round(size * 0.893);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 112 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DeltaX logo"
      role="img"
    >
      <polygon points="0,0 34,0 50,24 33,50" fill="currentColor" />
      <polygon points="66,0 100,0 67,50 50,24" fill="currentColor" />
      <polygon points="33,50 0,100 34,100 50,76" fill="currentColor" />
      <polygon points="50,76 66,100 100,100 67,50" fill="currentColor" />
      <rect x="103" y="88" width="8" height="9" fill="currentColor" />
    </svg>
  );
}
