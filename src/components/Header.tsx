import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-[var(--primary)] text-[var(--primary-foreground)] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" aria-label="Home">
          FoodDelivery
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/cart" className="hover:underline" aria-label="View Cart">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline" aria-label="Login or Sign up">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
