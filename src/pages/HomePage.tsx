import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MenuSection } from '../components/MenuSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;