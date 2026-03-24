"use client";

import Link from "next/link";
import type { ButtonProps } from "@/types";

const sizeMap = {
  large: "h-[52px] px-8 text-[16px]",
  medium: "h-[44px] px-6 text-[15px]",
  small: "h-[36px] px-5 text-[14px]",
};

const variantMap = {
  primary:
    "bg-accent-gold text-primary hover:bg-accent-gold-hover font-body font-medium rounded-full transition-all duration-150",
  secondary:
    "bg-transparent border border-text-muted text-text-body hover:border-text-body font-body font-medium rounded-full transition-all duration-150",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-body font-body font-medium transition-all duration-150",
};

export function Button({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  href,
}: ButtonProps) {
  const classes = `${variantMap[variant]} ${sizeMap[size]} inline-flex items-center justify-center gap-2 ${
    disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={classes}
    >
      {loading ? (
        <span className="spinner w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
}
