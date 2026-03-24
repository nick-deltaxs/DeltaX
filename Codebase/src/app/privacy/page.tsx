"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="bg-primary min-h-screen pt-32 pb-16">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[48px] text-hero tracking-[-0.02em] mb-2"
        >
          Privacy Policy.
        </motion.h1>
        <p className="font-body text-sm text-muted mb-12">
          Last updated: March 2026
        </p>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-hero mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="font-body text-base text-body leading-[1.8] mb-4">
            When you use our contact form, we collect your name, email address, and company name. 
            This information is necessary for us to respond to your inquiries and provide our services.
          </p>
          <p className="font-body text-base text-body leading-[1.8]">
            We also collect basic analytics data through our website to help us understand how visitors 
            use our site and improve the user experience. This includes information such as pages visited, 
            time spent on site, and referral sources.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-hero mt-12 mb-4">
            How We Use Your Information
          </h2>
          <p className="font-body text-base text-body leading-[1.8] mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="font-body text-base text-body leading-[1.8] pl-4 border-l-[3px] border-core-bright/30">
              To respond to your inquiries submitted through our contact form
            </li>
            <li className="font-body text-base text-body leading-[1.8] pl-4 border-l-[3px] border-core-bright/30">
              To improve our website and services based on usage patterns
            </li>
            <li className="font-body text-base text-body leading-[1.8] pl-4 border-l-[3px] border-core-bright/30">
              To send relevant communications about our services (with your consent)
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-hero mt-12 mb-4">
            Data Storage
          </h2>
          <p className="font-body text-base text-body leading-[1.8] mb-4">
            Your data is securely stored on Supabase, which runs on Amazon Web Services (AWS) infrastructure. 
            We implement industry-standard security measures to protect your information.
          </p>
          <p className="font-body text-base text-body leading-[1.8]">
            We do not sell, trade, or otherwise transfer your personal information to third parties. 
            Your data is used solely for the purposes outlined in this privacy policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-hero mt-12 mb-4">
            Contact
          </h2>
          <p className="font-body text-base text-body leading-[1.8]">
            Questions? Email{" "}
            <a
              href="mailto:hello@thesx.co"
              className="text-accent-gold hover:text-accent-gold-hover transition-colors duration-150"
            >
              hello@thesx.co
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
