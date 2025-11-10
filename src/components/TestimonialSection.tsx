import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'; // Placeholder for shadcn/ui Avatar
import { Card, CardContent } from './ui/card'; // Placeholder for shadcn/ui Card

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatar: string; // URL for avatar image
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, avatar }) => (
  <Card className="bg-card text-card-foreground p-6 shadow-md border-border animate-fade-in">
    <CardContent className="flex flex-col items-center text-center p-0">
      <p className="text-lg italic mb-4 text-muted-foreground">"{quote}"</p>
      <Avatar className="w-16 h-16 mb-3">
        <AvatarImage src={avatar} alt={`Avatar of ${name}`} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-sm text-secondary-foreground">{title}</p>
    </CardContent>
  </Card>
);

export const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "MyApp has transformed the way my team collaborates. Productivity has soared!",
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      avatar: 'https://api.uifaces.co/our-gallery/johndoe.jpg',
    },
    {
      quote: "The intuitive interface and powerful features make MyApp an indispensable tool for our daily operations.",
      name: 'John Smith',
      title: 'Lead Developer, Innovate Corp',
      avatar: 'https://api.uifaces.co/our-gallery/janesmith.jpg',
    },
    {
        quote: "I've tried many tools, but MyApp stands out with its seamless experience and robust analytics.",
        name: 'Emily White',
        title: 'Marketing Director, Global Brands',
        avatar: 'https://api.uifaces.co/our-gallery/emilywhite.jpg',
      },
  ];

  return (
    <section id="testimonials" className="bg-secondary text-secondary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
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
