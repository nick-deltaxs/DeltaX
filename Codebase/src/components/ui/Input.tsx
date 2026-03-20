import type { InputProps } from "@/types";

export function Input({
  placeholder,
  value,
  onChange,
  error,
  className = "",
  type = "text",
  name,
  required,
  maxLength,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      maxLength={maxLength}
      className={`bg-bg-tertiary border text-text-body font-body text-base py-3 px-4 rounded-lg w-full placeholder:text-text-muted focus:border-core-bright focus:ring-2 focus:ring-core-bright/20 focus:outline-none transition-colors duration-200 ${
        error ? "border-error" : "border-white/10"
      } ${className}`}
    />
  );
}
