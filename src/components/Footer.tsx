import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t border-border">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
