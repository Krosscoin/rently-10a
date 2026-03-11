import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Restaurant, MenuItem } from '../types';
import { fetchRestaurantById } from '../lib/api';

export const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRestaurant = async () => {
      if (!id) return;
      try {
        const data = await fetchRestaurantById(id);
        setRestaurant(data);
      } catch (err) {
        setError('Failed to fetch restaurant details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getRestaurant();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-[--muted-foreground-color]">Loading restaurant details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-[--destructive-color]">{error}</div>;
  }

  if (!restaurant) {
    return <div className="text-center py-10 text-[--muted-foreground-color]">Restaurant not found.</div>;
  }

  return (
    <div className="bg-[--background-color] p-8 rounded-lg shadow-lg">
      <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-80 object-cover rounded-md mb-6" />
      <h1 className="text-4xl font-bold text-[--primary-color] mb-3">{restaurant.name}</h1>
      <p className="text-[--muted-foreground-color] text-lg mb-4">{restaurant.cuisine.join(', ')}</p>
      <p className="text-[--foreground-color] mb-6">{restaurant.description}</p>
      
      <h2 className="text-3xl font-bold text-[--foreground-color] mb-5">Menu</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {restaurant.menu.map((item: MenuItem) => (
          <div key={item.id} className="bg-[--card-background-color] p-5 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-[--foreground-color]">{item.name}</h3>
              <p className="text-[--muted-foreground-color] text-sm">{item.description}</p>
            </div>
            <span className="text-lg font-bold text-[--primary-color]">${item.price.toFixed(2)}</span>
            {/* Add to cart functionality would go here */}
          </div>
        ))}
      </div>
    </div>
  );
};
