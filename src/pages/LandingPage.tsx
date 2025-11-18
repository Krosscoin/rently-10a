import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center p-4 bg-gradient-to-r from-primary-accent to-secondary-accent">
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
            Elevate Your Workflow with Our Innovative Platform
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8">
            Streamline your processes, collaborate seamlessly, and achieve your goals faster than ever before.
          </p>
          <Button size="lg" className="bg-white text-primary-accent hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Get Started Free
          </Button>
        </div>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary-text">
            Unlock Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Blazing-Fast Performance"
              description="Experience unparalleled speed and efficiency with our optimized infrastructure."
            />
            <FeatureCard
              icon=" intuituve"
              title="Intuitive User Interface"
              description="Enjoy a clean, modern, and easy-to-navigate interface designed for productivity."
            />
            <FeatureCard
              icon="🔄"
              title="Seamless Integrations"
              description="Connect with your favorite tools and services effortlessly."
            />
            <FeatureCard
              icon="💡"
              title="Intelligent Automation"
              description="Automate repetitive tasks and focus on what truly matters."
            />
            <FeatureCard
              icon=" fortified"
              title="Fortified Security"
              description="Your data is protected with industry-leading security protocols and encryption."
            />
            <FeatureCard
              icon="🌍"
              title="Collaborate Anywhere"
              description="Work together with your team from any location, on any device."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary-foreground text-primary-background-text text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Join thousands of satisfied customers who are already taking their productivity to the next level.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-white transition-colors duration-200 shadow-lg">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card-background py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <Separator className="my-6" />
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <nav className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 border border-border-color rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-card">
      <div className="text-5xl mb-4">
        {icon}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary-text mb-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
