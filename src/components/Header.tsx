import React from 'react';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block font-bold text-primary">YourBrand</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-primary">Features</a>
            <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
            <a href="#about" className="transition-colors hover:text-primary">About Us</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary">Sign In</Button>
          <Button className="text-sm font-medium">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};
