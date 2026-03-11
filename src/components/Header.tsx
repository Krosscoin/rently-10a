import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-[--background-color] text-[--foreground-color] shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[--primary-color]">FoodieExpress</Link>
        <div className="space-x-4">
          <Link to="/restaurants" className="hover:text-[--primary-hover-color]">Restaurants</Link>
          <Link to="/cart" className="hover:text-[--primary-hover-color]">Cart (0)</Link>
        </div>
      </nav>
    </header>
  );
};
