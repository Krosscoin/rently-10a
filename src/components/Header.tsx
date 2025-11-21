import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle'; // Assuming a ModeToggle component exists

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary-foreground">
            Acme SaaS
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary">Sign In</Button>
          <Button>Get Started</Button>
          <ModeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          {/* Mobile menu button/icon can be added here */}
          <ModeToggle />
          <Button className="ml-2">Menu</Button>
          
        </div>
      </div>
    </header>
  );
};
