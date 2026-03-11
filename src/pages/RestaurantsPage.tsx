import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { Restaurant } from '../types/Restaurant';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    reviews: 234,
    deliveryFee: 2.99,
    imageUrl: 'https://placehold.co/300x200'
  },
  {
    id: '2',
    name: 'Burger Joint',
    cuisine: 'American, Burgers',
    rating: 4.2,
    reviews: 180,
    deliveryFee: 1.50,
    imageUrl: 'https://placehold.co/300x200'
  },
  {
    id: '3',
    name: 'Sushi Zen',
    cuisine: 'Japanese, Sushi',
    rating: 4.8,
    reviews: 300,
    deliveryFee: 3.50,
    imageUrl: 'https://placehold.co/300x200'
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    cuisine: 'Mexican, Tacos',
    rating: 4.1,
    reviews: 120,
    deliveryFee: 0.99,
    imageUrl: 'https://placehold.co/300x200'
  },
];

const RestaurantsPage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

  React.useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setRestaurants(mockRestaurants);
      } catch (err) {
        setError('Failed to fetch restaurants.');
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg">Loading restaurants...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-[--destructive]">Error: {error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
      <Header />
      <main className="flex-1 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">All Restaurants</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantsPage;