import React from 'react';
import { Button } from './ui/button';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[--cta-background] text-[--cta-foreground] text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[--cta-title-foreground]">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[--cta-description-foreground]">
          Join thousands of creators and innovators who are already building amazing things.
        </p>
        <Button className="px-10 py-4 text-xl bg-[--button-background] text-[--button-foreground] hover:bg-[--button-hover] transition-colors rounded-lg shadow-lg">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};
