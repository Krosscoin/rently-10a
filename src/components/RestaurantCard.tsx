import React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className="block">
      <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col" aria-label={`View details for ${restaurant.name}`}>
        <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
          <p className="text-[var(--muted-foreground)] text-sm mb-1">{restaurant.cuisine}</p>
          <div className="flex items-center text-sm text-[var(--primary)] mb-2">
            <span className="mr-1 text-[var(--secondary-foreground)]">⭐</span> {restaurant.rating} Rating
          </div>
          <p className="text-[var(--muted-foreground)] text-sm">Est. Delivery: {restaurant.deliveryEstimate}</p>
        </div>
      </div>
    </Link>
  );
};
