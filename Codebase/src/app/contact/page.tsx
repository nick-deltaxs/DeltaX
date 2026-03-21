import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
