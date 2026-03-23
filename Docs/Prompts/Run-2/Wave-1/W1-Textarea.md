━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-012
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-012
  Name:      W1-Textarea
  Title:     W1 — Textarea Component
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Katareina
  File:      src/components/ui/Textarea.tsx (CREATE NEW)
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-012.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/katareina-textarea
cd Codebase && npm install

---

You're creating a Textarea component that matches the Input component's style. The ContactForm needs this for the "What's your challenge?" field. Same design language: dark background, elevated border, gold focus ring, proper label above.

**INTENT:** Consistency. Every form field on the site should look identical — same bg, same border, same focus color, same label style. The only difference is textarea has multiple rows and vertical resize.

---

## Exact code

```tsx
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
```

---

**After building:** `npm run dev`, no errors. Component ready for ContactForm.

**Only create:** src/components/ui/Textarea.tsx. Don't touch any other file. If TextareaProps doesn't exist in types/index.ts, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-Textarea: built by Katareina"
  git push origin wave1/katareina-textarea

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Katareina)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
