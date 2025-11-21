import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 flex items-center justify-center text-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tighter mb-6">
          Unlock Your Team's Potential with Acme SaaS
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Streamline your workflow, boost productivity, and achieve your goals faster with our all-in-one solution.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-3 text-lg">Start Your Free Trial</Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
