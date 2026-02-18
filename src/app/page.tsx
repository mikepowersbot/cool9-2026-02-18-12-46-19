import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-20">
      <main className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">cool9</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build amazing things with our modern, fast, and developer-friendly platform.
            Start your journey today and transform your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Preview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">Fast & Efficient</h3>
            <p className="text-muted-foreground">
              Optimized performance for the best user experience.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              Intuitive interface that anyone can pick up quickly.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold text-lg mb-2">Secure by Default</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security built into every layer.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}