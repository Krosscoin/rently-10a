import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
;

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    title: 'CEO, Tech Innovators',
    avatar: 'https://api.uigenerate.com/initials/SC/128/9CA3AF/212121',
    quote: 'Our productivity has skyrocketed since we started using this platform. The seamless integration and intuitive UI are game-changers!',
  },
  {
    name: 'Michael Wong',
    title: 'Lead Developer, Global Solutions',
    avatar: 'https://api.uigenerate.com/initials/MW/128/9CA3AF/212121',
    quote: 'As a developer, I appreciate the robust architecture and the extensive features. It has streamlined our development cycles significantly.',
  },
  {
    name: 'Jessica Lee',
    title: 'Marketing Director, Creative Hub',
    avatar: 'https://api.uigenerate.com/initials/JL/128/9CA3AF/212121',
    quote: 'The analytics and reporting tools are incredibly powerful. We now have insights that truly help drive our marketing strategies forward.',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted text-muted-foreground" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-lg animate-fade-in-up animation-delay-100-per-item">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed italic text-card-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
