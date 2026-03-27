"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function FloatingInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  required = false,
}: {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isActive = focused || hasValue;

  const inputClasses = `
    w-full px-4 py-4 bg-[var(--bg-surface)] border rounded-lg text-white
    transition-all duration-200 outline-none
    ${error ? "border-red-500" : "border-[var(--border-subtle)]"}
    ${focused ? "border-[var(--accent)]" : ""}
    focus:border-[var(--accent)]
  `;

  return (
    <div className="relative">
      <label
        className={`
          absolute left-4 transition-all duration-200 pointer-events-none
          ${isActive 
            ? "top-1 text-xs text-[var(--accent)]" 
            : "top-4 text-[var(--text-secondary)]"
          }
        `}
      >
        {label}{required && " *"}
      </label>
      
      {name === "message" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClasses} min-h-[150px] pt-6 resize-none`}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClasses} pt-6`}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section content-width">
          <div className="text-center mb-16">
            <span className="text-label mb-6 block">Contact</span>
            <h1 className="text-h1 mb-8 max-w-3xl mx-auto text-balance">
              Get in <span className="text-[var(--accent)]">touch</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Have questions about DeltaX? Want to discuss enterprise solutions? 
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="p-8 border-subtle rounded-xl bg-[var(--bg-surface)] text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="size-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FloatingInput
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <FloatingInput
                    label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  <FloatingInput
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required
                  />
                  <FloatingInput
                    label="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send message <Send className="size-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Other ways to reach us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border-subtle rounded-lg">
                    <Mail className="size-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <a
                        href="mailto:hello@deltax.dev"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        hello@deltax.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border-subtle rounded-lg">
                    <MapPin className="size-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="font-medium text-white">Office</div>
                      <div className="text-[var(--text-secondary)]">
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border-subtle rounded-lg">
                    <Clock className="size-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="font-medium text-white">Response time</div>
                      <div className="text-[var(--text-secondary)]">
                        Within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-subtle rounded-xl bg-[var(--accent)]/5">
                <h3 className="font-semibold text-white mb-2">
                  Enterprise inquiries
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Looking for custom solutions, dedicated support, or volume pricing?
                </p>
                <a
                  href="mailto:enterprise@deltax.dev"
                  className="text-[var(--accent)] hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  Contact our sales team →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
