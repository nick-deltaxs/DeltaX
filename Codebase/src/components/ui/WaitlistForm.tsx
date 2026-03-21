"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    // API call
    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (response.status === 201) {
        setStatus("success");
      } else if (response.status === 409) {
        setStatus("duplicate");
      } else if (response.status === 400) {
        setStatus("error");
        setErrorMessage("Please enter a valid email.");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "idle" || status === "loading" || status === "error" || status === "duplicate" ? (
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
              type="email"
              required={true}
              maxLength={254}
              value={email}
              onChange={setEmail}
              error={status === "error"}
            />
            <Button
              type="submit"
              variant="primary"
              size="default"
              loading={status === "loading"}
              disabled={status === "loading"}
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
            className="text-lg font-body text-success"
          >
            You're in. Watch your inbox.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-error mt-2"
          >
            {errorMessage}
          </motion.p>
        )}

        {status === "duplicate" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-text-muted mt-2"
          >
            You're already on the list.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
