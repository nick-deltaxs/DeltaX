"use client";

import type { DeltaXLogoProps } from "@/types";

export function DeltaXLogo({ className = "", size = 80 }: DeltaXLogoProps) {
  const height = Math.round(size * 0.835);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 375 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DeltaX logo"
      role="img"
    >
      <path d="M187.5 0L375 313H0L187.5 0Z" fill="currentColor" />
      <path d="M187.5 60L330 280H45L187.5 60Z" fill="var(--bg-primary, #0A0C0B)" />
      <path d="M187.5 100L290 255H85L187.5 100Z" fill="currentColor" />
      <path d="M187.5 145L250 230H125L187.5 145Z" fill="var(--bg-primary, #0A0C0B)" />
    </svg>
  );
}
