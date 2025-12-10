import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-8 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jollof. All rights reserved.</p>
        <p className="mt-2">123 Flavor Street, Culinary City, Taste Nation</p>
        <p className="mt-2">Contact: info@jollofrestaurant.com | (123) 456-7890</p>
      </div>
    </footer>
  );
};
