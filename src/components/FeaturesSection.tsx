import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, Shield } from 'lucide-react';
;

const features: Feature[] = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary-500" />,
    title: 'Intuitive Design',
    description: 'Our platform is designed with user-friendliness in mind, making complex tasks simple and efficient.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary-500" />,
    title: 'Blazing Fast Performance',
    description: 'Experience unparalleled speed and responsiveness, ensuring a smooth workflow for all your needs.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary-500" />,
    title: 'Top-tier Security',
    description: 'Your data is protected with industry-leading security measures, giving you peace of mind.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card-bg text-card-foreground" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <h2 id="features-heading" className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          Powerful Features Designed for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-100-per-item">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-center text-xl font-semibold mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
