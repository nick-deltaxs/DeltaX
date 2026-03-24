"use client";

import { useId } from "react";
import type { TextareaProps } from "@/types";

export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage,
  className = "",
  name,
  required = false,
  maxLength,
  rows = 4,
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = generatedId;

  return (
    <div className={className}>
      <label
        htmlFor={textareaId}
        className="block font-body text-sm font-medium text-text-secondary mb-2"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        rows={rows}
        aria-invalid={error}
        aria-describedby={error && errorMessage ? `${textareaId}-error` : undefined}
        className={`w-full px-4 py-3 bg-tertiary border ${
          error ? "border-error" : "border-elevated focus:border-accent-gold"
        } rounded-lg text-text-body placeholder:text-text-muted font-body text-base outline-none transition-colors duration-150 resize-y`}
      />
      {error && errorMessage && (
        <p id={`${textareaId}-error`} className="mt-1 text-sm text-error font-body" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
