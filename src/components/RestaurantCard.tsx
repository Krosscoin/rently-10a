import * as React from 'react';
import { Restaurant } from '../types/Restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="rounded-lg border bg-[--card] text-[--card-foreground] shadow-sm overflow-hidden">
      <img
        alt={restaurant.name}
        className="aspect-[3/2] w-full object-cover"
        height="200"
        src={restaurant.imageUrl}
        width="300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-sm text-[--muted-foreground]">{restaurant.cuisine}</p>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < restaurant.rating ? 'text-[--primary]' : 'text-[--muted]'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-[--muted-foreground]">({restaurant.reviews})</span>
        </div>
        <p className="text-sm mt-2">Delivery fee: ${restaurant.deliveryFee.toFixed(2)}</p>
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[--background] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[--input] bg-[--background] hover:bg-[--accent] hover:text-[--accent-foreground] h-10 px-4 py-2 w-full mt-4"
          href={`/restaurants/${restaurant.id}`}
        >
          View Restaurant
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;