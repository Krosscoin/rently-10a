import React from 'react';
import { IconType } from 'react-icons';
import { FiZap, FiTarget, FiShield } from 'react-icons/fi'; // Example icons

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 text-center bg-card rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-border">
    <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
      <Icon className="w-8 h-8" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Blazing Fast Performance',
      description: 'Our platform is optimized for speed, ensuring a smooth and responsive experience for all users.',
    },
    {
      icon: FiTarget,
      title: 'Precision Targeting',
      description: 'Reach your ideal audience with advanced targeting capabilities and data-driven insights.',
    },
    {
      icon: FiShield,
      title: 'Robust Security',
      description: 'Your data is safe with us. We employ industry-leading security measures to protect your information.',
    },
    {
      icon: FiZap,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and services effortlessly to streamline your workflow.',
    },
    {
      icon: FiTarget,
      title: 'Scalable Solutions',
      description: 'Grow without limits. Our flexible architecture scales with your needs, from startups to enterprises.',
    },
    {
      icon: FiShield,
      title: '24/7 Premium Support',
      description: 'Our dedicated support team is always here to help you with any questions or issues you may have.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
          Discover the Powerful Features That Set Us Apart
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
