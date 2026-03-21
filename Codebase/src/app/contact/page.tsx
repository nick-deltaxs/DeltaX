import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact — DeltaX",
  description: "Get in touch with the DeltaX team.",
  openGraph: {
    title: "Contact — DeltaX",
    description: "Get in touch with the DeltaX team.",
    url: "https://thesx.co/contact",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Contact%20Us", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background effects */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ background: "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.08) 0%, transparent 70%)" }}
        />
        <div className="atmosphere-grid" />
        
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl text-text-hero mb-6">
              Let's talk about your growth
            </h1>
            <p className="font-body text-lg text-text-body">
              Ready to replace fragmented agencies with one system? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <ContactForm />
          
          <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
            <p className="font-body text-text-dim mb-4">
              Prefer email? Reach us directly at
            </p>
            <a 
              href="mailto:contact@thesx.co" 
              className="font-body text-core-bright hover:underline text-lg"
            >
              contact@thesx.co
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
