import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
