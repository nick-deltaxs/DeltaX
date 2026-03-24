"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { ContactFormState } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    status: "idle",
    name: "",
    email: "",
    company: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website") as string;
    if (honeypot) return;

    setFormState((prev) => ({ ...prev, status: "loading" }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          challenge: formState.challenge,
        }),
      });

      if (response.ok) {
        setFormState({
          status: "success",
          name: "",
          email: "",
          company: "",
          challenge: "",
        });
      } else {
        setFormState((prev) => ({ ...prev, status: "error" }));
      }
    } catch {
      setFormState((prev) => ({ ...prev, status: "error" }));
    }
  };

  return (
    <SectionWrapper background="secondary" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-16">
        {/* Left - Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {/* Honeypot */}
          <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <motion.div variants={itemVariants}>
            <Input
              label="Name"
              name="name"
              value={formState.name}
              onChange={(value) => setFormState((prev) => ({ ...prev, name: value }))}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              label="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={(value) => setFormState((prev) => ({ ...prev, email: value }))}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              label="Company"
              name="company"
              value={formState.company}
              onChange={(value) => setFormState((prev) => ({ ...prev, company: value }))}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea
              label="What's your challenge?"
              name="challenge"
              rows={4}
              value={formState.challenge}
              onChange={(value) => setFormState((prev) => ({ ...prev, challenge: value }))}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              size="medium"
              type="submit"
              loading={formState.status === "loading"}
              className="w-full mt-4"
            >
              Send Message
            </Button>
          </motion.div>

          {/* Success message */}
          {formState.status === "success" && (
            <p aria-live="polite" className="mt-3 text-sm text-success font-body">
              Message sent. We&apos;ll be in touch within 24 hours.
            </p>
          )}

          {/* Error message */}
          {formState.status === "error" && (
            <p aria-live="polite" className="mt-3 text-sm text-error font-body">
              Something went wrong. Please try again or email hello@thesx.co.
            </p>
          )}
        </motion.form>

        {/* Right - Timeline */}
        <motion.div
          variants={timelineContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            className="font-display text-text-hero text-[24px] tracking-[-0.02em] mb-8"
            style={{ textWrap: "balance" }}
          >
            What happens next.
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.5px] top-[8px] bottom-[8px] w-px bg-elevated" />

            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div variants={timelineItemVariants} className="flex items-start gap-4">
                <div className="relative z-10 w-2 h-2 rounded-full bg-core-bright mt-1.5 flex-shrink-0" />
                <p className="font-body text-[14px] text-text-secondary ml-2">
                  We read every message within 24 hours.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={timelineItemVariants} className="flex items-start gap-4">
                <div className="relative z-10 w-2 h-2 rounded-full bg-code-bright mt-1.5 flex-shrink-0" />
                <p className="font-body text-[14px] text-text-secondary ml-2">
                  If there&apos;s a fit, we schedule a call.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={timelineItemVariants} className="flex items-start gap-4">
                <div className="relative z-10 w-2 h-2 rounded-full bg-accent-gold mt-1.5 flex-shrink-0" />
                <p className="font-body text-[14px] text-text-secondary ml-2">
                  CoreXs begins your audit.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
