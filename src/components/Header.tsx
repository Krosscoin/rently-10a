import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-card text-card-foreground shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary hover:text-primary-foreground transition-colors duration-200" aria-label="Company Logo Home">
          MyApp
        </a>
        <ul className="flex space-x-6">
          <li><a href="#features" className="text-sm font-medium hover:text-primary-foreground transition-colors duration-200">Features</a></li>
          <li><a href="#testimonials" className="text-sm font-medium hover:text-primary-foreground transition-colors duration-200">Testimonials</a></li>
          <li><a href="#contact" className="text-sm font-medium hover:text-primary-foreground transition-colors duration-200">Contact</a></li>
          <li><button className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:bg-primary/90 transition-colors duration-200">Get Started</button></li>
        </ul>
      </nav>
    </header>
  );
};
