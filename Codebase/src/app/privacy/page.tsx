export const metadata = {
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

export default function Privacy() {
  return (
    <div className="min-h-screen bg-primary text-text-body">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display text-text-hero mb-8">Privacy Policy</h1>
        <p className="text-lg text-text-dim max-w-3xl">
          How DeltaX handles your data.
        </p>
      </div>
    </div>
  );
}
