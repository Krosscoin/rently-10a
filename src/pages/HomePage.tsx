import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">Experience the Rich Flavors of Africa</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Savor authentic Jollof rice, flavorful stews, and traditional delights prepared with passion and fresh ingredients.</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" onClick={() => navigate('/menu')}>View Our Menu</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-colors">Make a Reservation</Button>
          </div>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1579619379201-3bc6335ad4c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beautifully plated African dish" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h3>
            <p className="text-lg leading-relaxed mb-6">Jollof restaurant is a culinary journey to the heart of Africa. Founded by a team passionate about sharing the vibrant tastes and rich heritage of African cuisine, we meticulously craft each dish to bring you an unforgettable dining experience.</p>
            <Button size="lg" variant="ghost" className="text-primary hover:underline" onClick={() => navigate('/about')}>Learn More About Us &rarr;</Button>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Signature Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1620713745281-700683a4512e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jollof Rice" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-secondary">Classic Jollof Rice</h4>
              <p className="text-muted-foreground text-sm">Our signature dish, rich and smoky, served with your choice of chicken, beef, or fish.</p>
              <span className="block text-primary font-bold mt-3">$18.99</span>
            </div>
            {/* Menu Item 2 */}
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1606787366810-ac372579b2a7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Egusi Soup" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-secondary">Egusi Soup & Pounded Yam</h4>
              <p className="text-muted-foreground text-sm">A hearty and nutritious soup made with melon seeds, served with soft pounded yam.</p>
              <span className="block text-primary font-bold mt-3">$22.50</span>
            </div>
            {/* Menu Item 3 */}
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1628173499446-5c6a1d2f7f9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Suya Skewers" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-secondary">Spicy Suya Skewers</h4>
              <p className="text-muted-foreground text-sm">Grilled, marinated beef skewers, a popular street food delicacy.</p>
              <span className="block text-primary font-bold mt-3">$15.00</span>
            </div>
          </div>
          <Button size="lg" className="mt-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" onClick={() => navigate('/menu')}>Explore Full Menu</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;