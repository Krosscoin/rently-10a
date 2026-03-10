import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, quote, avatar }) => (
  <Card className="bg-card text-card-foreground shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
    <Avatar className="w-20 h-20 mb-4">
      <AvatarImage src={avatar} alt={`${name}'s avatar`} />
      <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    </Avatar>
    <CardContent className="flex flex-col items-center">
      <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
      <p className="font-bold text-primary-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">{title}</p>
    </CardContent>
  </Card>
);

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      quote: 'This platform has revolutionized our workflow. The intuitive interface and powerful features are unmatched!',
      avatar: 'https://api.uigenerator.ai/placeholder/avatar/jane-doe'
    },
    {
      name: 'John Smith',
      title: 'CTO, Innovate Inc.',
      quote: 'Security and performance are top-notch. Our team has seen a significant boost in productivity since switching.',
      avatar: 'https://api.uigenerator.ai/placeholder/avatar/john-smith'
    },
    {
      name: 'Sarah Lee',
      title: 'Marketing Director, Global Corp.',
      quote: 'The customization options allowed us to perfectly tailor the platform to our unique needs. Highly recommended!',
      avatar: 'https://api.uigenerator.ai/placeholder/avatar/sarah-lee'
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary-foreground">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
