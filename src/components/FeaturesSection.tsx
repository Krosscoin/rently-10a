import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <CardHeader>
      <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '⚡️',
      title: 'Blazing Fast Performance',
      description: 'Experience lightning-fast speeds and unparalleled responsiveness with our optimized platform.'
    },
    {
      icon: ' intuitivo',
      title: 'Intuitive User Interface',
      description: 'Easily navigate and utilize powerful features with our user-friendly and modern design.'
    },
    {
      icon: ' 🔒',
      title: 'Robust Security Measures',
      description: 'Your data is safe with us. We employ industry-leading security protocols to protect your information.'
    },
    {
      icon: ' ⚙️',
      title: 'Highly Customizable',
      description: 'Tailor the platform to your exact needs with extensive customization options and flexible settings.'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary-foreground">
          Discover Our Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
