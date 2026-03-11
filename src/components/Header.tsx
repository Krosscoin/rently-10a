import * as React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">FoodieDelight</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="hover:underline">Restaurants</Link></li>
            <li><Link to="/cart" className="relative hover:underline">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
              {/* <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">3</span> */}
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};