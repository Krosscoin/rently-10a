import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 flex items-center justify-center bg-[--hero-background] text-[--hero-foreground] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Unlock Your Creative Potential
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          Discover powerful tools and resources to bring your ideas to life with ease and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="px-8 py-3 text-lg bg-[--button-background] text-[--button-foreground] hover:bg-[--button-hover] transition-colors rounded-lg shadow-lg">
            Get Started Now
          </Button>
          <Button variant="outline" className="px-8 py-3 text-lg border-[--button-outline-border] text-[--button-outline-foreground] hover:bg-[--button-outline-hover-background] hover:text-[--button-outline-hover-foreground] transition-colors rounded-lg shadow-lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[--gradient-start] via-[--gradient-middle] to-[--gradient-end] opacity-70"></div>
    </section>
  );
};
