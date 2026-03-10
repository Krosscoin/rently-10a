import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Lightbulb, Rocket, Monitor, TrendingUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <Card className="bg-[--card-background] text-[--card-foreground] border-[--card-border] shadow-lg rounded-lg transform transition-transform hover:scale-105">
    <CardHeader>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[--feature-icon-background] text-[--feature-icon-foreground] mb-4">
        <Icon size={24} />
      </div>
      <CardTitle className="text-xl font-semibold text-[--card-title-foreground]">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-[--card-description-foreground]">{description}</CardDescription>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Ideas',
      description: 'Spark your imagination with our cutting-edge tools and resources, designed to foster creativity and innovation.',
    },
    {
      icon: Rocket,
      title: 'Rapid Development',
      description: 'Accelerate your workflow with intuitive interfaces and powerful features, bringing your projects to life faster.',
    },
    {
      icon: Monitor,
      title: 'Seamless Integration',
      description: 'Integrate effortlessly with your existing ecosystem, ensuring a smooth and cohesive experience across all platforms.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with confidence. Our flexible architecture supports your needs from small projects to enterprise-level deployments.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[--section-background] text-[--section-foreground]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[--section-title-foreground]">Powerful Features at Your Fingertips</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[--section-description-foreground]">
          Experience a suite of tools designed to enhance your productivity and creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
