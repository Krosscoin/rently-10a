import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[--bg-footer] text-[--text-on-dark] py-8">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Safari Spice. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-[--accent-primary] transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-[--accent-primary] transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
