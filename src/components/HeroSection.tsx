import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Unlock Your Potential with Our Innovative Platform
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
          Experience seamless productivity, powerful features, and a community-driven approach to success.
        </p>
        <Button className="bg-accent-500 text-accent-foreground hover:bg-accent-600 transition-colors duration-300 transform -translate-y-2 opacity-0 animate-fade-in-up animation-delay-600">
          Get Started Now
        </Button>
      </div>
      <div className="absolute inset-0 z-0">
        {/* Optional: Add a subtle background pattern or animation */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>
    </section>
  );
};
