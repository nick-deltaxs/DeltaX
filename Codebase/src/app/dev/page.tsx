export default function DevPage() {
  return (
    <div className="min-h-screen bg-primary text-text-body p-8">
      <h1 className="font-display text-2xl text-text-hero mb-4">Dev Testing Page</h1>
      <p className="text-text-secondary mb-8">Import your component below to test it visually.</p>
      {/*
        Dev: uncomment and add your component here to test:
        import { Hero } from "@/components/home/Hero";
        Then add <Hero /> below
      */}
      <div className="border border-elevated rounded-lg p-4 text-text-muted">
        Add your component import above and render it here
      </div>
    </div>
  );
}
