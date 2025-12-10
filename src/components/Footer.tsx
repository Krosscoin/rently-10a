import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-accent-foreground p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold mb-2">Jollof African Restaurant</p>
        <p className="text-base">123 Flavor Street, Culinary City, Africa</p>
        <p className="text-base">Phone: (123) 456-7890 | Email: info@jollof.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary-foreground transition-colors duration-200">Facebook</a>
          <a href="#" className="hover:text-primary-foreground transition-colors duration-200">Instagram</a>
          <a href="#" className="hover:text-primary-foreground transition-colors duration-200">Twitter</a>
        </div>
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} Jollof. All rights reserved.</p>
      </div>
    </footer>
  );
};
