import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[--background] text-[--foreground] shadow-sm">
      <a href="/" className="flex items-center justify-center">
        <span className="text-xl font-bold">FoodDrop</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/restaurants">
          Restaurants
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Login
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Header;