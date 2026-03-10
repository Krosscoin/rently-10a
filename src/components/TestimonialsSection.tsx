import React from 'react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, avatar }) => (
  <Card className="bg-[--card-background] text-[--card-foreground] border-[--card-border] shadow-lg rounded-lg flex flex-col justify-between h-full">
    <CardContent className="pt-6">
      <p className="text-lg italic leading-relaxed text-[--card-description-foreground]">\"{quote}\"</p>
    </CardContent>
    <CardHeader className="flex flex-row items-center gap-4 pt-4">
      <Avatar className="w-12 h-12 border-2 border-[--avatar-border]">
        <AvatarImage src={avatar} alt={`@${name}`} />
        <AvatarFallback className="bg-[--avatar-fallback-background] text-[--avatar-fallback-foreground]">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="grid gap-0.5 text-left">
        <CardTitle className="text-lg font-semibold text-[--card-title-foreground]">{name}</CardTitle>
        <CardDescription className="text-sm text-[--card-description-foreground]">{title}</CardDescription>
      </div>
    </CardHeader>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'This platform transformed our workflow. The intuitive design and powerful features made a huge difference to our team\'s productivity. Highly recommended!',
      name: 'Sarah Chen',
      title: 'CTO, Tech Solutions Inc.',
      avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah'
    },
    {
      quote: 'An absolute game-changer for our creative projects. The collaboration tools are top-notch, and the support team is incredibly responsive.',
      name: 'Mark Johnson',
      title: 'Lead Designer, Creative Studios',
      avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Mark'
    },
    {
      quote: 'We saw an immediate increase in efficiency after adopting this system. It\'s robust, reliable, and incredibly easy to use. A must-have for any growing business.',
      name: 'Emily White',
      title: 'Operations Manager, Global Innovations',
      avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Emily'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[--section-alt-background] text-[--section-alt-foreground]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[--section-title-foreground]">What Our Customers Say</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[--section-description-foreground]">
          Hear from the businesses and individuals who have transformed their work with our platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
