import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-card text-card-foreground shadow-md mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};
