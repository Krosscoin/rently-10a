import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-extrabold text-[--primary-color] mb-4">Craving something delicious?</h1>
      <p className="text-xl text-[--foreground-color] mb-8">Order food from your favorite local restaurants, delivered right to your door.</p>
      <Link to="/restaurants" className="bg-[--primary-color] hover:bg-[--primary-hover-color] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
        Explore Restaurants
      </Link>
    </div>
  );
};
