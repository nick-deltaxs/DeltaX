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
    <div className="min-h-screen bg-primary text-text-body">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display text-text-hero mb-8">Contact DeltaX</h1>
        <p className="text-lg text-text-dim max-w-3xl">
          Get in touch with the DeltaX team.
        </p>
      </div>
    </div>
  );
}
