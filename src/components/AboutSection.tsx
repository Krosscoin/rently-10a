import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[--bg-secondary] text-[--text-primary]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[--heading-primary]">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At 'Safari Spice', we bring the vibrant flavors and rich culinary heritage of Africa to your table. Founded by Chef Amina, our restaurant is a celebration of traditional recipes passed down through generations, reimagined with a contemporary touch.
          </p>
          <p className="text-lg leading-relaxed">
            We meticulously source the finest ingredients, ensuring every dish tells a story of its origin, from the bustling markets of Accra to the serene landscapes of the Serengeti. Join us for an unforgettable dining experience where every bite is a journey.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/about-us.webp" 
            alt="Chef preparing a dish" 
            className="w-full h-80 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
