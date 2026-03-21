export const metadata = {
  title: "Terms of Service — DeltaX",
  description: "Terms governing use of DeltaX services.",
  openGraph: {
    title: "Terms of Service — DeltaX",
    description: "Terms governing use of DeltaX services.",
    url: "https://thesx.co/terms",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Terms%20of%20Service", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-primary text-text-body">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display text-text-hero mb-8">Terms of Service</h1>
        <p className="text-lg text-text-dim max-w-3xl">
          Terms governing use of DeltaX services.
        </p>
      </div>
    </div>
  );
}
