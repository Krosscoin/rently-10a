import React from 'react';

export const CartPage: React.FC = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-[--foreground-color] mb-4">Your Cart</h1>
      <p className="text-xl text-[--muted-foreground-color]">Your cart is currently empty. Start adding some delicious food!</p>
      {/* Placeholder for actual cart items */}
    </div>
  );
};
