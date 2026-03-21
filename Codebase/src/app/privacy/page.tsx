import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DeltaX",
  description: "How DeltaX handles your data.",
  openGraph: {
    title: "Privacy Policy — DeltaX",
    description: "How DeltaX handles your data.",
    url: "https://thesx.co/privacy",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Privacy%20Policy", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-sm text-text-muted mb-12">
            Last updated: March 2026
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We collect information you provide directly to us when you use our
            website. This includes:
          </p>
          <ul className="font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2">
            <li>Email address when you join our waitlist</li>
            <li>
              Name, email, company name, and message content when you submit our
              contact form
            </li>
            <li>
              Usage data such as pages visited, time spent, and interaction
              patterns through standard analytics
            </li>
          </ul>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We do not collect sensitive personal information such as financial
            data, health records, or government identifiers.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            How We Use Your Information
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2">
            <li>
              Process your waitlist registration and send relevant updates about
              DeltaX
            </li>
            <li>Respond to your contact form submissions and inquiries</li>
            <li>Improve our website, services, and user experience</li>
            <li>Communicate important updates about our services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We will never sell, rent, or share your personal information with
            third parties for their marketing purposes.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Data Storage & Security
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            Your data is stored securely using Supabase, a SOC 2 Type II
            compliant database platform hosted on AWS infrastructure. We
            implement industry-standard security measures including encryption
            in transit (TLS 1.2+) and at rest to protect your personal
            information.
          </p>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We retain your data only for as long as necessary to fulfill the
            purposes outlined in this policy. Waitlist data is retained until
            you request removal or until the waitlist program concludes.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Third-Party Services
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            We use the following third-party services to operate our website:
          </p>
          <ul className="font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2">
            <li>Supabase — database and authentication (supabase.com)</li>
            <li>Resend — transactional email delivery (resend.com)</li>
            <li>Vercel — website hosting and deployment (vercel.com)</li>
          </ul>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            Each of these services has their own privacy policy governing their
            handling of data. We encourage you to review their policies.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Your Rights
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for data processing at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            To exercise any of these rights, contact us at contact@thesx.co. We
            will respond to your request within 30 days.
          </p>

          <h2 className="font-display text-xl text-text-hero mt-12 mb-4">
            Contact
          </h2>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="font-body text-base text-text-body leading-relaxed mb-4">
            DeltaX
            <br />
            Email: contact@thesx.co
            <br />
            Location: Bali, Indonesia
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
