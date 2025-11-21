import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-card text-card-foreground animate-fade-in-up hover:scale-105 transition-transform duration-300">
    <CardHeader className="pb-4">
      <div className="flex justify-center mb-4">{icon}</div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default FeatureCard;
