"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface FormData {
  name: string;
  email: string;
  company: string;
  challenge: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    challenge: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.name.trim() || !formData.challenge.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // API call
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", challenge: "" });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-text-hero mb-4">
              Message received
            </h3>
            <p className="font-body text-text-body">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            aria-live="polite"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-text-body mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                type="text"
                required={true}
                value={formData.name}
                onChange={handleInputChange("name")}
                error={status === "error" && !formData.name.trim()}
                aria-label="Your full name"
                aria-required="true"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-text-body mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                placeholder="your@email.com"
                type="email"
                required={true}
                value={formData.email}
                onChange={handleInputChange("email")}
                error={status === "error" && !formData.email.trim()}
                aria-label="Your email address"
                aria-required="true"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block font-body text-sm font-medium text-text-body mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Your company name"
                type="text"
                value={formData.company}
                onChange={handleInputChange("company")}
                aria-label="Your company name"
              />
            </div>

            {/* Challenge */}
            <div>
              <label htmlFor="challenge" className="block font-body text-sm font-medium text-text-body mb-2">
                What's your biggest growth challenge? *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                placeholder="Tell us about your current challenges, what you've tried, and what you're looking to achieve..."
                required={true}
                rows={4}
                value={formData.challenge}
                onChange={(e) => handleInputChange("challenge")(e.target.value)}
                className={`w-full bg-tertiary border ${status === "error" && !formData.challenge.trim() ? "border-error" : "border-white/[0.10]"} text-text-body font-body text-base placeholder:text-text-muted py-3 px-4 rounded-lg outline-none focus:border-core-bright focus:ring-2 focus:ring-core-bright/20 transition-colors duration-200 resize-none`}
                aria-label="Describe your biggest growth challenge"
                aria-required="true"
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm text-error"
                role="alert"
              >
                {errorMessage}
              </motion.p>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="default"
              loading={status === "loading"}
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
