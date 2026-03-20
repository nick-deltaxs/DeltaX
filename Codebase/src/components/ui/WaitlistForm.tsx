"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { WaitlistFormState } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [state, setState] = useState<WaitlistFormState>({
    status: "idle",
    email: "",
  });
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(false);

    const trimmedEmail = state.email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setValidationError(true);
      return;
    }

    setState((prev) => ({ ...prev, status: "loading" }));

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (res.status === 201) {
        setState((prev) => ({ ...prev, status: "success" }));
      } else if (res.status === 409) {
        setState((prev) => ({ ...prev, status: "duplicate" }));
      } else if (res.status === 400) {
        setState((prev) => ({ ...prev, status: "error" }));
      } else {
        setState((prev) => ({ ...prev, status: "error" }));
      }
    } catch {
      setState((prev) => ({ ...prev, status: "error" }));
    }
  };

  const isComplete = state.status === "success";

  return (
    <div>
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              placeholder="Enter your email"
              value={state.email}
              onChange={(value) => {
                setState((prev) => ({ ...prev, email: value }));
                setValidationError(false);
              }}
              type="email"
              required
              maxLength={254}
              error={validationError ? "invalid" : undefined}
            />
            <Button
              type="submit"
              variant="primary"
              loading={state.status === "loading"}
            >
              JOIN WAITLIST
            </Button>
          </motion.form>
        ) : (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-success text-lg font-body"
          >
            You&apos;re on the list. Check your email.
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {validationError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-error text-sm mt-2"
          >
            Please enter a valid email.
          </motion.p>
        )}

        {state.status === "duplicate" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-text-muted text-sm mt-2"
          >
            You&apos;re already on the list.
          </motion.p>
        )}

        {state.status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-error text-sm mt-2"
          >
            Something went wrong. Try again.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
