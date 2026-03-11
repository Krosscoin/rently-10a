import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-foreground p-4">
      <header className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Taste of Africa</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">Authentic African Cuisine, a Culinary Journey</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary-foreground mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed text-card-foreground mb-4">
            At Taste of Africa, we bring the vibrant flavors and rich culinary traditions of Africa to your table. 
            Our dishes are prepared with love, using authentic recipes passed down through generations.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary-foreground mb-4">Explore Our Menu</h2>
          <p className="text-lg leading-relaxed text-card-foreground mb-4">
            From spicy Jollof Rice to hearty Egusi Soup, our menu is a celebration of diverse African tastes. 
            Discover your new favorite dish today.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/menu">View Menu</Link>
          </Button>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Ready to Experience Africa?</h2>
        <p className="text-xl mb-6">Book a table or order online for an unforgettable dining experience.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="secondary" className="text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">Make a Reservation</Link>
          </Button>
          <Button asChild variant="secondary" className="text-secondary-foreground hover:bg-secondary/90">
            <Link to="/menu">Order Online</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
