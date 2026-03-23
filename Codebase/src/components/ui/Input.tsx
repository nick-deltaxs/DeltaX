"use client";

import { useId } from "react";
import type { InputProps } from "@/types";

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage,
  className = "",
  type = "text",
  id,
  name,
  required = false,
  maxLength,
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="block font-body text-sm font-medium text-text-secondary mb-2"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        aria-invalid={error}
        aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
        className={`w-full h-[44px] px-4 bg-tertiary border ${
          error ? "border-error" : "border-elevated focus:border-accent-gold"
        } rounded-lg text-text-body placeholder:text-text-muted font-body text-base outline-none transition-colors duration-150`}
      />
      {error && errorMessage && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-error font-body" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
