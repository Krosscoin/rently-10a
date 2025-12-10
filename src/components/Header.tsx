import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Jollof
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/menu" className="hover:text-secondary-foreground transition-colors duration-200">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-secondary-foreground transition-colors duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-secondary-foreground transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
