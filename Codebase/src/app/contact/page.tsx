import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

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

export const metadata = {
  title: "Contact — DeltaX",
  description: "Get in touch with the DeltaX team."
};
