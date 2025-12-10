import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Toaster } from 'sonner';

export const AppHeader: React.FC = () => {
  const { cartItemCount } = useCart();

  return (
    <header className="bg-card text-card-foreground shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-foreground transition-colors">
          E-Commerce Store
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="icon" asChild className="relative">
                <Link to="/cart" aria-label="View cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full h-4 w-4 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <Toaster richColors position="top-right" />
    </header>
  );
};
