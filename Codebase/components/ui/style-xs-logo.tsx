"use client";

interface StyleXsLogoProps {
  size?: number;
  className?: string;
}

export function StyleXsLogo({ size = 32, className = "" }: StyleXsLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-label="StyleXs Logo"
    >
      <defs>
        <linearGradient id="styleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#styleGradient)"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        SX
      </text>
    </svg>
  );
}
