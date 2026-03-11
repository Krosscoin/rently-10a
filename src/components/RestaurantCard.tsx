import React from 'react';
import { Restaurant } from '../types';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className="block bg-[--card-background-color] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
      <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[--foreground-color] mb-2">{restaurant.name}</h3>
        <p className="text-[--muted-foreground-color] text-sm">{restaurant.cuisine.join(', ')}</p>
        <div className="flex items-center mt-2">
          <span className="text-[--accent-color] font-bold text-lg">{restaurant.rating} ⭐</span>
          <span className="ml-auto text-[--muted-foreground-color]">{restaurant.deliveryTime} min</span>
        </div>
      </div>
    </Link>
  );
};
