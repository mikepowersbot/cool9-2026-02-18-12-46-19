"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Rocket, Code, Smartphone, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures your applications load instantly and run smoothly under any conditions."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security features built into every layer, keeping your data and users protected."
    },
    {
      icon: Rocket,
      title: "Easy to Deploy",
      description: "Deploy with a single command. Our platform handles the infrastructure so you can focus on building."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Intuitive APIs, comprehensive documentation, and tools that developers love to work with."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Every application looks perfect on any device, from mobile phones to large desktop screens."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with edge computing. Your application is always close to your users."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-20">
      <main className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
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

        {/* Features Section */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern, scalable applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}