import { WaitlistForm } from "@/components/ui/WaitlistForm";

export default function TestWaitlistPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-display text-hero mb-8 text-center">
          Waitlist Form Test
        </h1>
        <WaitlistForm />
      </div>
    </div>
  );
}
