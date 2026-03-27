import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DeltaX",
  description: "Learn how DeltaX collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <div className="content-width py-24 max-w-3xl mx-auto">
        <h1 className="text-h1 mb-4">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-secondary)] mb-12">Last updated: March 2026</p>
        
        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-h3 mb-4">Information We Collect</h2>
            <p className="text-body mb-4">
              We collect information you provide directly to us when you use our website. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
              <li>Email address when you join our waitlist</li>
              <li>Name, email, company name, and message content when you submit our contact form</li>
              <li>Usage data such as pages visited, time spent, and interaction patterns through standard analytics</li>
            </ul>
            <p className="text-body">
              We do not collect sensitive personal information such as financial data, health records, or government identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">How We Use Your Information</h2>
            <p className="text-body mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
              <li>Process your waitlist registration and send relevant updates about DeltaX</li>
              <li>Respond to your contact form submissions and inquiries</li>
              <li>Improve our website, services, and user experience</li>
              <li>Communicate important updates about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-body">
              We will never sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">Data Storage & Security</h2>
            <p className="text-body mb-4">
              Your data is stored securely using Supabase, a SOC 2 Type II compliant database platform hosted on AWS infrastructure. We implement industry-standard security measures including encryption in transit (TLS 1.2+) and at rest to protect your personal information.
            </p>
            <p className="text-body">
              We retain your data only for as long as necessary to fulfill the purposes outlined in this policy. Waitlist data is retained until you request removal or until the waitlist program concludes.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">Third-Party Services</h2>
            <p className="text-body mb-4">
              We use the following third-party services to operate our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
              <li>Supabase — database and authentication (supabase.com)</li>
              <li>Resend — transactional email delivery (resend.com)</li>
              <li>Vercel — website hosting and deployment (vercel.com)</li>
            </ul>
            <p className="text-body">
              Each of these services has their own privacy policy governing their handling of data. We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">Your Rights</h2>
            <p className="text-body mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] mb-4">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-body">
              To exercise any of these rights, contact us at contact@thesx.co. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">Contact</h2>
            <p className="text-body">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <p className="font-semibold text-white">DeltaX</p>
              <p className="text-[var(--text-secondary)]">Email: contact@thesx.co</p>
              <p className="text-[var(--text-secondary)]">Location: Bali, Indonesia</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
