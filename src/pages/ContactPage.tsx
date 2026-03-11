import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RocketIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    // Simulate API call
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData.name && formData.email && formData.message) {
            resolve({ success: true });
          } else {
            reject(new Error('Please fill in all required fields.'));
          }
        }, 1500);
      });

      if ((response as { success: boolean }).success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 py-8 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="bg-card shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-secondary-foreground">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">We'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="bg-input text-input-foreground border-border focus:ring-ring focus:border-ring"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="your@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="bg-input text-input-foreground border-border focus:ring-ring focus:border-ring"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Regarding your inquiry..." 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="bg-input text-input-foreground border-border focus:ring-ring focus:border-ring"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message or question..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={5} 
                  className="bg-input text-input-foreground border-border focus:ring-ring focus:border-ring resize-y"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <Alert className="bg-success text-success-foreground border-success">
                  <RocketIcon className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your message has been sent successfully. We will get back to you soon.</AlertDescription>
                </Alert>
              )}
              {status === 'error' && errorMessage && (
                <Alert variant="destructive" className="bg-destructive text-destructive-foreground border-destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-card shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-secondary-foreground">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-card-foreground">
              <p>123 African Spice Lane,</p>
              <p>Flavorville, AF 98765</p>
              <a 
                href="https://maps.app.goo.gl/your-restaurant-location" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline block mt-2"
              >
                Get Directions
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-secondary-foreground">Reach Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-card-foreground">
              <p>Phone: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:info@tasteofafrica.com" className="text-primary hover:underline">info@tasteofafrica.com</a></p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-secondary-foreground">Opening Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-card-foreground">
              <p>Tuesday - Sunday: 11:00 AM - 10:00 PM</p>
              <p>Monday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
