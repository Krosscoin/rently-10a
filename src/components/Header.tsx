import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>Jollof</h1>
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-foreground hover:text-primary transition-colors">Home</Button>
          <Button variant="ghost" onClick={() => navigate('/menu')} className="text-foreground hover:text-primary transition-colors">Menu</Button>
          <Button variant="ghost" onClick={() => navigate('/about')} className="text-foreground hover:text-primary transition-colors">About Us</Button>
          <Button variant="ghost" onClick={() => navigate('/contact')} className="text-foreground hover:text-primary transition-colors">Contact</Button>
        </nav>
        <Button variant="outline" className="hidden md:block">Reservations</Button>
        <div className="md:hidden">
          {/* Mobile menu icon goes here */}
          <Button variant="ghost">☰</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;