import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">InnovateCo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="#features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInDown">Unlock Your Team's Full Potential</h2>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">Revolutionary tools designed to streamline your workflow and boost productivity.</p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 animate-fadeInUp delay-200">
              Get Started Now
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <h3 className="text-4xl font-bold text-center mb-12 text-primary">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Rocket className="mx-auto h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Blazing Fast Performance</h4>
              <p className="text-muted-foreground">Experience unparalleled speed and efficiency with our optimized platform designed for modern workloads.</p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Intuitive User Interface</h4>
              <p className="text-muted-foreground">Simple yet powerful design that makes complex tasks easy and accessible for everyone.</p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <TrendingUp className="mx-auto h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Data-Driven Insights</h4>
              <p className="text-muted-foreground">Make informed decisions with powerful analytics and real-time reporting at your fingertips.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} InnovateCo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
