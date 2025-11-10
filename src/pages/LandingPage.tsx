import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 text-primary-foreground py-20 md:py-32 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Elevate Your Digital Experience
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up">
            Discover innovative solutions designed to transform your ideas into reality.
          </p>
          <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-accent-foreground rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up-delay">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background-100 dark:bg-background-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <Card key={i} className="bg-card-50 dark:bg-card-900 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary-700 dark:text-primary-300">Feature Title {i + 1}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background-200 dark:bg-background-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, i) => (
              <Card key={i} className="bg-card-50 dark:bg-card-900 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in-up">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
                    "This product has completely revolutionized our workflow. The intuitive interface and powerful features have exceeded all our expectations."
                  </blockquote>
                  <p className="font-semibold text-primary-700 dark:text-primary-300">John Doe, CEO at Company {i + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
