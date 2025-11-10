import React from 'react';
import { Button } from '@/components/ui/button';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-accent-500 to-secondary-500 text-accent-foreground text-center animate-fade-in-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join thousands of successful users who are already elevating their productivity and achieving their goals.
        </p>
        <Button className="bg-primary-500 text-primary-foreground hover:bg-primary-600 transition-colors duration-300 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform scale-105">
          Start Your Free Trial Today
        </Button>
      </div>
    </section>
  );
};
