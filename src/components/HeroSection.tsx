import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-inverted-foreground py-20 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Unlock Your Potential with MyApp
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Revolutionary tools designed to boost your productivity and streamline your workflow.
        </p>
        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};
