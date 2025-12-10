import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/hero-jollof.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white p-6 rounded-lg max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">Taste the Heart of Africa at Jollof</h1>
        <p className="text-lg md:text-xl mb-8">Authentic Nigerian cuisine, prepared with passion and served with a smile.</p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
          View Our Menu
        </button>
      </div>
    </section>
  );
};