import React from 'react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Tech Innovators',
      quote: 'Acme SaaS has transformed our operations. The intuitive interface and powerful features have significantly boosted our team\'s efficiency and collaboration. Highly recommended!',
      avatar: 'https://api.uigenerator.org/api/placeholder/avatar/female'
    },
    {
      name: 'John Smith',
      title: 'Lead Developer, CodeCraft',
      quote: 'The flexibility and scalability of Acme SaaS are unparalleled. It integrated seamlessly with our existing stack and has become an indispensable tool for our development team.',
      avatar: 'https://api.uigenerator.org/api/placeholder/avatar/male'
    },
    {
      name: 'Emily White',
      title: 'Marketing Director, Growth Solutions',
      quote: 'Our marketing campaigns are stronger than ever thanks to Acme SaaS. The analytics and reporting features give us actionable insights that directly impact our ROI.',
      avatar: 'https://api.uigenerator.org/api/placeholder/avatar/female'
    }
  ];

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Hear from the businesses and individuals who have experienced the Acme SaaS difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <p className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
