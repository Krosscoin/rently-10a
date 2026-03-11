import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react'; // Assuming lucide-react is installed for icons

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-primary-foreground/90 transition-colors">
          Taste of Africa
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary-foreground/90 ${isActive ? 'text-white underline underline-offset-4' : 'text-primary-foreground/80'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary-foreground/90 ${isActive ? 'text-white underline underline-offset-4' : 'text-primary-foreground/80'}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary-foreground/90 ${isActive ? 'text-white underline underline-offset-4' : 'text-primary-foreground/80'}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary-foreground/90 ${isActive ? 'text-white underline underline-offset-4' : 'text-primary-foreground/80'}`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="focus-visible:ring-offset-primary">
                <MenuIcon className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-card-foreground border-border">
              <nav className="flex flex-col space-y-4 pt-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-card-foreground/80'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-card-foreground/80'}`
                  }
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-card-foreground/80'}`
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-card-foreground/80'}`
                  }
                >
                  Contact Us
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
