import React from 'react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-lg shadow-md overflow-hidden h-full flex flex-col" aria-label={`Dish: ${dish.name}`}>
      <img src={dish.imageUrl} alt={dish.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
        <p className="text-[var(--muted-foreground)] text-sm mb-3 flex-grow">{dish.description}</p>
        <p className="text-lg font-bold text-[var(--primary)]">${dish.price.toFixed(2)}</p>
        <button className="mt-4 bg-[var(--primary)] text-[var(--primary-foreground)] py-2 px-4 rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
