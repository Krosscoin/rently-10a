import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[--footer-background] text-[--footer-foreground] py-10 md:py-12 border-t border-[--footer-border]">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-[--footer-title-foreground]">ProductCo</h3>
          <p className="text-sm text-[--footer-text-foreground]">
            Innovative solutions for your creative journey.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-[--footer-title-foreground]">Company</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">About Us</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Careers</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Blog</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-[--footer-title-foreground]">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Documentation</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Support</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">FAQs</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">API</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-[--footer-title-foreground]">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="text-sm text-[--footer-link-foreground] hover:text-[--footer-link-hover] transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-[--footer-border] text-center text-sm text-[--footer-text-foreground]">
        &copy; {new Date().getFullYear()} ProductCo. All rights reserved.
      </div>
    </footer>
  );
};
