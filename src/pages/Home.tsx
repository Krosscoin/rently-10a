import React from 'react';
import heroImage from '../assets/hero-jollof.jpg'; // Assuming you have an image here
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[600px] bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Jollof restaurant exterior with warm lighting"
      >
        <div className="absolute inset-0 bg-primary/60 dark:bg-primary/70"></div>
        <div className="relative z-10 text-primary-foreground p-8 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Experience the Taste of Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Authentic Nigerian and West African cuisine in a vibrant setting.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg animate-scale-in"
          >
            View Our Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto my-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400/94A3B8/FFFFFF?text=Jollof_Dish"
              alt="Platter of Jollof Rice and grilled chicken"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jollof is more than just a restaurant; it's a culinary journey to the heart of West Africa. Founded by Chef Adebayo,
              who brought his grandmother's cherished recipes from Lagos, we are dedicated to sharing the rich flavors and vibrant
              culture of African cuisine with our community.
            </p>
            <p>
              Every dish at Jollof is prepared with passion, using fresh, locally sourced ingredients and traditional cooking
              techniques. From our signature smoky Jollof Rice to our succulent Suya skewers, we invite you to savor an authentic
              dining experience that tantalizes your taste buds and warms your soul.
            </p>
            <Link
              to="/about"
              className="inline-block text-accent hover:text-accent/90 transition-colors duration-300 font-semibold mt-4"
            >
              Learn More About Jollof &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dish Card 1 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/400x300/FACC15/FFFFFF?text=Jollof_Rice"
                alt="A delicious plate of Jollof Rice"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-accent mb-2">Smoky Jollof Rice</h3>
                <p className="text-muted-foreground">Our signature dish, cooked to perfection with ripe tomatoes, peppers, and secret spices.</p>
              </div>
            </div>

            {/* Dish Card 2 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/400x300/F87171/FFFFFF?text=Suya_Skewers"
                alt="Grilled Suya skewers with onions and tomatoes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-accent mb-2">Spicy Suya Skewers</h3>
                <p className="text-muted-foreground">Tender, marinated beef skewers grilled to smoky perfection, served with fresh vegetables.</p>
              </div>
            </div>

            {/* Dish Card 3 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/400x300/94A3B8/FFFFFF?text=Egusi_Soup"
                alt="A bowl of Egusi Soup with pounded yam"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-accent mb-2">Rich Egusi Soup</h3>
                <p className="text-muted-foreground">A hearty and flavorful Nigerian soup made with melon seeds, spinach, and your choice of meat.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
