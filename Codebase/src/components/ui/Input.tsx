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
      className={`w-full bg-tertiary border ${error ? "border-error" : "border-white/[0.10]"} text-text-body font-body text-base placeholder:text-text-muted py-3 px-4 rounded-lg outline-none focus:border-core-bright focus:ring-2 focus:ring-core-bright/20 transition-colors duration-200 ${className}`}
    />
  );
}
