import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeatureSection } from '../components/FeatureSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { CallToActionSection } from '../components/CallToActionSection';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
