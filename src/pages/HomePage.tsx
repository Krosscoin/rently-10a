import React, { useState, useEffect } from 'react';
import { RestaurantCard } from '../components/RestaurantCard';
import { SearchBar } from '../components/SearchBar';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Restaurant } from '../types';

export const HomePage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data: Restaurant[] = [
          {
            id: '1',
            name: 'The Great Indian Kitchen',
            cuisine: 'Indian',
            rating: 4.5,
            deliveryEstimate: '30-45 min',
            imageUrl: 'https://images.unsplash.com/photo-1563612116625-cd22de39d3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3fHxGaW5lJTIwRGluaW5nfGVufDB8fHx8MTcwMTg4MzkyMXww&ixlib=rb-4.0.3&q=80&w=1080',
            address: '123 Main St, Anytown'
          },
          {
            id: '2',
            name: 'Italian Bistro',
            cuisine: 'Italian',
            rating: 4.2,
            deliveryEstimate: '20-30 min',
            imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDN8fEl0YWxpYW4lMjBGaW5lJTIwRGluaW5nfGVufDB8fHx8MTcwMTg4MzkyMXww&ixlib=rb-4.0.3&q=80&w=1080',
            address: '456 Oak Ave, Anytown'
          },
          {
            id: '3',
            name: 'Sushi Palace',
            cuisine: 'Japanese',
            rating: 4.8,
            deliveryEstimate: '40-50 min',
            imageUrl: 'https://images.unsplash.com/photo-1579871101890-a393976378e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDV8fFN1c2hpJTIwRmluGUlEaW5pbmd9ZW58MHx8fHwxNzAxODgzOTIxfDA&ixlib=rb-4.0.3&q=80&w=1080',
            address: '789 Pine Ln, Anytown'
          }
        ];
        setRestaurants(data);
      } catch (err) {
        setError('Failed to fetch restaurants.');
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <main className="container mx-auto p-4 flex-grow">
        <section className="my-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 text-center">Order from your favorite restaurants</h2>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </section>

        <section className="my-8">
          {loading && <p className="text-center text-[var(--muted-foreground)]">Loading restaurants...</p>}
          {error && <p className="text-center text-[var(--destructive)]">Error: {error}</p>}
          {!loading && !error && filteredRestaurants.length === 0 && (
            <p className="text-center text-[var(--muted-foreground)]">No restaurants found matching your search.</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && !error && filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
