import * as React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Popular Categories</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-[--card] text-[--card-foreground]">
                <img
                  alt="Pizza"
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://placehold.co/96x96"
                />
                <h3 className="font-semibold">Pizza</h3>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-[--card] text-[--card-foreground]">
                <img
                  alt="Burgers"
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://placehold.co/96x96"
                />
                <h3 className="font-semibold">Burgers</h3>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-[--card] text-[--card-foreground]">
                <img
                  alt="Sushi"
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://placehold.co/96x96"
                />
                <h3 className="font-semibold">Sushi</h3>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-[--card] text-[--card-foreground]">
                <img
                  alt="Desserts"
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://placehold.co/96x96"
                />
                <h3 className="font-semibold">Desserts</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;