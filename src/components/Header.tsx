import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wider">Jollof</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-300 transition-colors duration-200">Home</Link>
          <Link to="/menu" className="hover:text-amber-300 transition-colors duration-200">Menu</Link>
          <Link to="/about" className="hover:text-amber-300 transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors duration-200">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-primary pb-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-300 transition-colors duration-200">Home</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-300 transition-colors duration-200">Menu</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-300 transition-colors duration-200">About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-300 transition-colors duration-200">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
