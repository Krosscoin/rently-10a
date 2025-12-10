import React from 'react';
import { Helmet } from 'react-helmet';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto my-16 px-4 md:px-8">
      <Helmet>
        <title>About Us - Jollof</title>
        <meta name="description" content="Learn more about Jollof, an African restaurant dedicated to authentic cuisine." />
      </Helmet>
      <h1 className="text-5xl font-extrabold text-center text-primary mb-16 animate-fade-in-down">Our Passion for African Cuisine</h1>

      <section className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div className="order-2 md:order-1 space-y-6 text-lg text-muted-foreground loading-relaxed">
          <h2 className="text-3xl font-bold text-accent mb-4">The Jollof Story</h2>
          <p>
            Jollof was born from a deep love for the rich culinary heritage of West Africa. Chef Adebayo, our founder, envisioned a place where the vibrant flavors,
            aromatic spices, and warm hospitality of his Nigerian upbringing could be shared with the world. He moved to this city with a dream and a collection
            of his grandmother's treasured recipes, each telling a story of family, tradition, and joy.
          </p>
          <p>
            From the bustling markets of Lagos to our cozy restaurant kitchen, every ingredient is carefully selected to ensure authenticity and freshness.
            We believe that food is not just sustenance, but a powerful medium for cultural exchange and connection. At Jollof, we don't just serve meals;
            we offer an experience that transports you to the heart of Africa.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://via.placeholder.com/600x400/967BB6/FFFFFF?text=Chef_Adebayo"
            alt="Chef Adebayo in his kitchen, smiling"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <img
            src="https://via.placeholder.com/600x400/FEB2B2/FFFFFF?text=Restaurant_Interior"
            alt="Warm and inviting interior of the Jollof restaurant"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-6 text-lg text-muted-foreground loading-relaxed">
          <h2 className="text-3xl font-bold text-accent mb-4">Our Philosophy</h2>
          <p>
            Our philosophy is simple: celebrate authentic flavors, embrace sustainable practices, and create a welcoming atmosphere for everyone.
            We are committed to using locally sourced produce whenever possible, supporting our community, and minimizing our environmental footprint.
          </p>
          <p>
            The Jollof culinary team is a family of passionate chefs and food enthusiasts who meticulously prepare each dish with dedication and respect for tradition.
            We constantly strive for excellence, ensuring that every bite is a delightful revelation of taste and culture.
          </p>
        </div>
      </section>

      <section className="text-center bg-muted py-16 rounded-lg px-4 md:px-8">
        <h2 className="text-4xl font-bold text-primary mb-6">Taste the Tradition, Feel the Culture</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join us at Jollof for an unforgettable dining experience where every meal is a celebration.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Make a Reservation
        </a>
      </section>
    </div>
  );
};
