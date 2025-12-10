import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[--bg-secondary] text-[--text-primary]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-[--heading-primary]">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-[--heading-secondary]">Visit Us</h3>
            <p className="text-lg mb-4">123 Safari Drive, Culinary City, CA 90210</p>
            <p className="text-lg mb-4">Monday - Friday: 11 AM - 10 PM</p>
            <p className="text-lg mb-4">Saturday - Sunday: 12 PM - 11 PM</p>
            <h3 className="text-3xl font-semibold mb-6 text-[--heading-secondary]">Reservations</h3>
            <p className="text-lg mb-2">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: reservations@safarisprice.com</p>
          </div>
          <div className="bg-[--card-bg] p-8 rounded-lg shadow-lg border-[--border-color]">
            <h3 className="text-3xl font-semibold mb-6 text-[--heading-secondary]">Send Us a Message</h3>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full bg-[--input-bg] text-[--input-text] border-[--input-border] focus:ring-[--accent-primary] focus:border-[--accent-primary]" />
              <Input type="email" placeholder="Your Email" className="w-full bg-[--input-bg] text-[--input-text] border-[--input-border] focus:ring-[--accent-primary] focus:border-[--accent-primary]" />
              <Textarea placeholder="Your Message" rows={5} className="w-full bg-[--input-bg] text-[--input-text] border-[--input-border] focus:ring-[--accent-primary] focus:border-[--accent-primary]" />
              <Button type="submit" className="w-full bg-[--accent-primary] text-[--text-on-dark] hover:bg-[--accent-secondary] transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
