import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card text-card-foreground py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Jollof African Restaurant</h3>
          <p className="text-sm">123 Flavor Street, Culinary City, CC 12345</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@jollofrestaurant.com</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><FaFacebook size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><FaInstagram size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} Jollof. All rights reserved.</p>
          <p className="text-sm"><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-primary transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;