import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (submitSuccess !== null) { // Reset success/error state on new input
      setSubmitSuccess(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitSuccess(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields.');
      }
      if (!/
^(([^<>()[Q\\.,;:\s@\"]+(\.[^<>()[Q\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
/.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto my-16 px-4 md:px-8">
      <Helmet>
        <title>Contact Us - Jollof</title>
        <meta name="description" content="Get in touch with Jollof restaurant for reservations, inquiries, or feedback." />
      </Helmet>
      <h1 className="text-5xl font-extrabold text-center text-primary mb-16 animate-fade-in-down">Get in Touch</h1>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-accent mb-4">Visit Us</h2>
          <p className="text-lg text-muted-foreground">
            We would love to welcome you to Jollof. Find us at:
            <br />
            <strong className="text-primary">123 Flavor Street, Culinary City, Taste Nation</strong>
          </p>
          <h2 className="text-3xl font-bold text-accent mb-4">Opening Hours</h2>
          <ul className="text-lg text-muted-foreground space-y-2">
            <li>Tuesday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
            <li>Monday: Closed</li>
          </ul>
          <h2 className="text-3xl font-bold text-accent mb-4">Contact Information</h2>
          <p className="text-lg text-muted-foreground">
            Phone: <a href="tel:+11234567890" className="text-accent hover:underline">(123) 456-7890</a>
            <br />
            Email: <a href="mailto:info@jollofrestaurant.com" className="text-accent hover:underline">info@jollofrestaurant.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-accent mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field w-full p-3 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                required
                aria-required="true"
                aria-label="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field w-full p-3 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                required
                aria-required="true"
                aria-label="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field w-full p-3 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                aria-label="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="input-field w-full p-3 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                required
                aria-required="true"
                aria-label="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 px-8 py-4 rounded-md text-lg font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              aria-label="Send Message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitSuccess === true && (
              <p className="text-green-600 mt-4" role="status">Your message has been sent successfully!</p>
            )}
            {submitSuccess === false && error && (
              <p className="text-red-600 mt-4" role="alert">Error: {error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
