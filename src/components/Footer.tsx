import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Assuming lucide-react for icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-8 mt-12 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 text-primary">Taste of Africa</h3>
          <p className="text-sm leading-relaxed mb-4">Authentic African Cuisine, a Culinary Journey.</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Taste of Africa. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-primary transition-colors text-sm">Home</Link>
            <Link to="/menu" className="hover:text-primary transition-colors text-sm">Menu</Link>
            <Link to="/about" className="hover:text-primary transition-colors text-sm">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors text-sm">Contact Us</Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">Stay updated with our latest offers!</p>
            {/* Placeholder for a newsletter signup form */}
            <form className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    aria-label="Email for newsletter" 
                    className="p-2 rounded-md border border-border bg-input text-input-foreground focus:ring-ring focus:border-ring w-full max-w-[200px]"
                />
                <button 
                    type="submit" 
                    className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                    Subscribe
                </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
