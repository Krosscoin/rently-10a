import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary-foreground to-background text-center">
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up">
          Unlock Your Potential with Our Innovative Solutions
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl animate-fade-in-up delay-200">
          Experience seamless productivity, advanced features, and unparalleled support tailored for your success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Button size="lg" className="text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">Start Your Free Trial</Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-border text-foreground hover:bg-accent">Learn More</Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Optional: Add a subtle background pattern or image for visual interest */}
      </div>
    </section>
  );
};
