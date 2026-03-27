"use client";

interface DeltaXLogoProps {
  size?: number;
  className?: string;
}

export function DeltaXLogo({ size = 32, className = "" }: DeltaXLogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="DeltaX Logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
    />
  );
}
