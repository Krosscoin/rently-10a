import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Lightbulb, Rocket, Shield, TrendingUp } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: 'Innovative Solutions',
      description: 'Leverage cutting-edge technology to solve complex problems and drive innovation.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Boost Productivity',
      description: 'Automate repetitive tasks and streamline workflows to supercharge your team\'s output.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Secure & Reliable',
      description: 'Rest assured with enterprise-grade security and a platform you can depend on 24/7.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Scalable Growth',
      description: 'Our platform grows with you, ensuring seamless performance no matter the scale.'
    }
  ];

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Acme SaaS?</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Discover the powerful features that make Acme SaaS the ideal choice for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  {feature.icon}
                </div>
                <CardTitle className="mb-2 text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
