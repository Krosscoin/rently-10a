import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (error) setError(null); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required.');
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you shortly.',
      });
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to send message. Please try again.');
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-primary mb-12">Get in Touch With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" disabled={loading} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" disabled={loading} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Reservation Inquiry" disabled={loading} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Let us know how we can help you..." rows={5} disabled={loading} />
              </div>
              {error && <p className="text-destructive text-sm mt-2" role="alert">{error}</p>}
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-secondary mb-6">Our Location & Hours</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center"><span className="font-semibold text-primary mr-2">Address:</span> 123 Flavor Street, Culinary City, CC 12345</p>
              <p className="flex items-center"><span className="font-semibold text-primary mr-2">Phone:</span> (123) 456-7890</p>
              <p className="flex items-center"><span className="font-semibold text-primary mr-2">Email:</span> info@jollofrestaurant.com</p>
              <p><span className="font-semibold text-primary mr-2">Hours:</span></p>
              <ul className="list-disc list-inside ml-4">
                <li>Tuesday - Thursday: 11 AM - 9 PM</li>
                <li>Friday - Saturday: 11 AM - 10 PM</li>
                <li>Sunday: 12 PM - 8 PM</li>
                <li>Monday: Closed</li>
              </ul>
            </div>
            <div className="mt-8">
              {/* Example: Embed a map (e.g., Google Maps iframe) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2215241470716!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e01b3a3a7%3A0x8e8e8e8e8e8e8e8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;