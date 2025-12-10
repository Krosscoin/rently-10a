import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 bg-card text-card-foreground text-center text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Jollof. All rights reserved.</p>
        <p className="mt-2">123 Jollof Street, African City, AF 12345 | (123) 456-7890</p>
      </div>
    </footer>
  );
};
