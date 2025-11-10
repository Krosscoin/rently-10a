import React from 'react';

export const CallToActionSection: React.FC = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Join thousands of satisfied users and experience the difference MyApp can make.
        </p>
        <button className="bg-inverted-accent text-inverted-accent-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-inverted-accent/90 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Get Started Now
        </button>
      </div>
    </section>
  );
};
