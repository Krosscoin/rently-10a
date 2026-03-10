import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
          Unlock Your Potential with Our Revolutionary Platform
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-0 animate-fade-in-up animation-delay-500">
          Experience seamless productivity and innovation like never before. Transform your workflow today.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up animation-delay-1000">
          Get Started For Free
        </Button>
      </div>
    </section>
  );
};
