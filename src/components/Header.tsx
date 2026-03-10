import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="p-4 bg-card text-card-foreground shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">MyBrand</a>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-primary-foreground">Features</a></li>
          <li><a href="#testimonials" className="hover:text-primary-foreground">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-primary-foreground">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
