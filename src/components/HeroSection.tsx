import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(\'/hero-bg.webp\')' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-[--overlay-dark] to-[--overlay-light] opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-[--text-on-dark] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          Taste the Richness of Africa
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
          Experience an exquisite culinary journey with authentic continental African dishes, crafted with passion and tradition.
        </p>
        <Button className="bg-[--accent-primary] text-[--text-on-dark] hover:bg-[--accent-secondary] transition-colors duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          View Our Menu
        </Button>
      </div>
    </section>
  );
};
