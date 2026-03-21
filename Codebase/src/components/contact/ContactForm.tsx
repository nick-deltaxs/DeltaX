"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error" | "ratelimited";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [challenge, setChallenge] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot field
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          challenge,
          website, // Honeypot
        }),
      });

      if (response.status === 201) {
        setStatus("success");
      } else if (response.status === 429) {
        setStatus("ratelimited");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="max-w-xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form
              key="form"
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name Field */}
              <Input
                label="Name"
                name="name"
                required
                value={name}
                onChange={setName}
              />

              {/* Email Field */}
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={email}
                onChange={setEmail}
              />

              {/* Company Field */}
              <Input
                label="Company"
                name="company"
                value={company}
                onChange={setCompany}
              />

              {/* Challenge Field */}
              <div className="mb-4">
                <label htmlFor="challenge" className="block text-sm font-body text-text-body mb-2">
                  What's your biggest challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  maxLength={500}
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  placeholder="e.g., We're doing $2M but our ops can't scale past 5 team members."
                  className="w-full bg-bg-tertiary border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-3 font-body text-base text-text-body placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-core-bright focus:ring-offset-2 focus:ring-offset-bg-primary resize-y"
                />
                <span className="text-xs text-text-muted mt-1 block text-right">
                  {challenge.length}/500
                </span>
              </div>

              {/* Hidden Honeypot Field */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute opacity-0 h-0 w-0 overflow-hidden"
              />

              {/* Error Messages */}
              {status === "error" && (
                <p className="text-sm text-error mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
              {status === "ratelimited" && (
                <p className="text-sm text-error mt-2">
                  Too many requests. Please try again later.
                </p>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <Button
                  variant="primary"
                  type="submit"
                  loading={status === "loading"}
                  className="w-full"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center py-12"
            >
              <p className="font-body text-base text-text-body text-center">
                We've received your message. Expect a response within 24 hours.
              </p>
              
              <div className="flex gap-6 justify-center mt-6">
                <a 
                  href="/" 
                  className="font-body text-sm text-core-bright hover:underline"
                >
                  Back to Home
                </a>
                <a 
                  href="/about" 
                  className="font-body text-sm text-core-bright hover:underline"
                >
                  Learn About Our Process
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
