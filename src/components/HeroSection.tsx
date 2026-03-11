import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-[var(--accent)] text-[var(--accent-foreground)] py-20 px-4 text-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504754524776-abf285946ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDh8fGZvb2QlMjBkZWxpdmVyeXxlbnwwfHx8fDE3MDc5NTY3Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080")' }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 container mx-auto">
        <h1 id="hero-heading" className="text-5xl font-extrabold mb-4 leading-tight">
          Delicious Food, Delivered Fast
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Order from your favorite local restaurants and get meals delivered straight to your door.
        </p>
        <button className="bg-[var(--primary)] text-[var(--primary-foreground)] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors duration-300 shadow-lg">
          Find Restaurants
        </button>
      </div>
    </section>
  );
};
