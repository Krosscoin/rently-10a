import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 xl:py-56 bg-[--primary] text-[--primary-foreground] flex items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
            Delicious Food, Delivered Fast.
          </h1>
          <p className="max-w-[700px] text-lg sm:text-xl md:text-2xl">
            Order from your favorite restaurants and get food delivered to your doorstep in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex h-10 w-full rounded-md border border-[--border] bg-[--background] px-3 py-2 text-sm ring-offset-[--background] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[--muted-foreground] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
              placeholder="Enter your delivery address"
              type="text"
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[--background] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[--secondary] text-[--secondary-foreground] hover:bg-[--secondary]/90 h-10 px-4 py-2">
              Find Restaurants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;