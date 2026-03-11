import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--secondary)] text-[var(--secondary-foreground)] p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2" role="contentinfo">
          <a href="#" className="hover:underline text-[var(--secondary-foreground)]">Privacy Policy</a>
          <a href="#" className="hover:underline text-[var(--secondary-foreground)]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
