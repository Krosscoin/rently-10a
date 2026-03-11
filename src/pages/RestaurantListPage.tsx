import React, { useEffect, useState } from 'react';
import { RestaurantCard } from '../components/RestaurantCard';
import { Restaurant } from '../types';
import { fetchRestaurants } from '../lib/api';

export const RestaurantListPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getRestaurants();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-[--muted-foreground-color]">Loading restaurants...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-[--destructive-color]">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[--foreground-color] mb-8">All Restaurants</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
