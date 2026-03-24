"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-primary min-h-screen pt-32 pb-16">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[48px] text-text-hero tracking-[-0.02em] mb-2"
        >
          Terms of Service.
        </motion.h1>
        <p className="font-body text-sm text-text-muted mb-12">
          Last updated: March 2026
        </p>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Acceptance
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            By accessing and using the DeltaX website and services, you accept and agree to be bound by
            these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Services
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            DeltaX provides software development and consulting services. The specific scope, timeline,
            and deliverables for each project will be defined in a separate agreement between DeltaX and the client.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Payment
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            Payment terms will be specified in individual project agreements. Generally, we require an
            upfront deposit before commencing work, with the balance due upon project completion or
            according to agreed-upon milestones.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Intellectual Property
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            Upon full payment, clients receive ownership of custom code and assets developed specifically
            for their project. DeltaX retains rights to general methodologies, frameworks, and reusable
            components developed during the engagement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Limitation of Liability
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            DeltaX shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to the use of our services. Our total liability shall not
            exceed the amount paid for the specific service giving rise to the claim.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-body text-2xl font-semibold text-text-hero mt-12 mb-4">
            Contact
          </h2>
          <p className="font-body text-base text-text-body leading-[1.8]">
            Questions about these terms? Email{" "}
            <a
              href="mailto:hello@thesx.co"
              className="text-text-body hover:text-text-hero transition-colors duration-150"
            >
              hello@thesx.co
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
