import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-card text-card-foreground shadow-md flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-primary">Jollof</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};