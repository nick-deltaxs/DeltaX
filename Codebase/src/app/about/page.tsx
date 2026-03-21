export const metadata = {
  title: "About — DeltaX",
  description: "Meet the team behind the system.",
  openGraph: {
    title: "About — DeltaX",
    description: "Meet the team behind the system.",
    url: "https://thesx.co/about",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=About%20DeltaX", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-primary text-text-body">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display text-text-hero mb-8">About DeltaX</h1>
        <p className="text-lg text-text-dim max-w-3xl">
          Meet the team behind the system.
        </p>
      </div>
    </div>
  );
}
