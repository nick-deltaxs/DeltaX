import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DeltaX",
  description: "Terms governing use of DeltaX services.",
};

export default function TermsPage() {
  return (
    <main className="bg-primary">
      <Navbar />

      <section className="relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="atmosphere-grid" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <h1 className="font-display text-3xl lg:text-4xl text-text-hero mb-8">
            Terms of Service
          </h1>

          <p className="text-sm text-text-muted mb-12">
            Last updated: March 2026
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Acceptance of Terms
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            By accessing or using the DeltaX website (thesx.co), you agree to
            be bound by these Terms of Service. If you do not agree to these
            terms, please do not use our website. We reserve the right to modify
            these terms at any time, and your continued use of the website
            constitutes acceptance of any changes.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Description of Services
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            DeltaX provides an integrated business growth system combining
            strategy, technology, growth, and brand services. Our website serves
            as an informational platform and waitlist registration system. The
            specific services, deliverables, and terms of any engagement will
            be defined in a separate service agreement between DeltaX and the
            client.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Waitlist
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            By joining our waitlist, you agree to receive email communications
            from DeltaX regarding service availability and updates. You may
            unsubscribe from these communications at any time by contacting us at
            contact@thesx.co. Joining the waitlist does not constitute a binding
            agreement for services and does not guarantee availability or
            pricing.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Intellectual Property
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            All content on this website — including but not limited to text,
            graphics, logos, icons, images, audio, video, software, and design
            elements — is the property of DeltaX and is protected by
            international copyright, trademark, and other intellectual property
            laws. You may not reproduce, distribute, modify, or create
            derivative works from any content without our explicit written
            permission.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Limitation of Liability
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            DeltaX provides this website and its content on an &quot;as is&quot; basis
            without warranties of any kind, either express or implied. To the
            fullest extent permitted by law, DeltaX shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            arising from your use of or inability to use the website or
            services. Our total liability for any claim arising from these terms
            shall not exceed the amount paid by you to DeltaX in the twelve
            months preceding the claim.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Governing Law
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the Republic of Indonesia, without regard
            to conflict of law principles. Any disputes arising from these terms
            shall be resolved through good-faith negotiation, and if necessary,
            through arbitration in Bali, Indonesia, in accordance with
            applicable arbitration rules.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
