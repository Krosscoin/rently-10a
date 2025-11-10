import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'; // Placeholder for shadcn/ui Card

interface FeatureProps {
  title: string;
  description: string;
  icon: string; // Using string for simplicity, could be a React component
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
    <div className="text-primary text-5xl mb-4">{icon}</div>
    <CardHeader>
      <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export const FeatureSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: 'Intuitive Dashboard',
      description: 'Manage all your projects and tasks from a single, easy-to-use interface.',
      icon: '📊',
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work seamlessly with your team, share updates, and track progress instantly.',
      icon: '🤝',
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain valuable insights into your performance with powerful reporting tools.',
      icon: '📈',
    },
    {
        title: 'Secure & Reliable',
        description: 'Your data is safe with us. We use industry-leading security practices.',
        icon: '🛡️',
      },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          Powerful Features to Elevate Your Productivity
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
