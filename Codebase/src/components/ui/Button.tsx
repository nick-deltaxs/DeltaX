"use client";

import type { ButtonProps } from "@/types";

export function Button({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold font-body transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none";

  const sizeStyles =
    size === "small" ? "py-2 px-6 text-sm" : "py-3 px-8 text-base";

  const variantStyles =
    variant === "ghost"
      ? "bg-transparent text-text-body border border-white/[0.10] hover:border-core-bright"
      : "bg-core-bright text-primary font-semibold hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(26,155,191,0.35)]";

  const stateStyles =
    disabled || loading
      ? "opacity-50 cursor-not-allowed"
      : "active:scale-[0.98] cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${stateStyles} ${className} rounded-full relative`}
    >
      {loading && <span className="absolute spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full" />}
      <span className={loading ? "opacity-0" : ""}>{children}</span>
    </button>
  );
}
