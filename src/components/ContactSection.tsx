import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('All fields are required.');
      }
      console.log('Form submitted:', formData);
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted text-muted-foreground px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
        <p className="text-center text-lg mb-8">Have a question or want to make a reservation? Reach out to us!</p>
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              disabled={loading}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {error && <p className="text-destructive mt-4 text-center">{error}</p>}
          {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
        </form>
      </div>
    </section>
  );
};