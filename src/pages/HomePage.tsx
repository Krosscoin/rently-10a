import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MenuSection } from '../components/MenuSection';
import { ContactSection } from '../components/ContactSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[--bg-primary] text-[--text-primary]">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
