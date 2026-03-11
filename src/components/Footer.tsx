import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-6 mt-8 border-t border-border">
      <div className="container mx-auto text-center text-sm text-muted-foreground px-4">
        <p>&copy; {new Date().getFullYear()} The Golden Spoon. All rights reserved.</p>
        <p>123 Culinary Lane, Foodie City, FC 56789</p>
      </div>
    </footer>
  );
};
