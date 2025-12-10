import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    // Simulate API call
    try {
      const response = await new Promise((resolve) => setTimeout(() => {
        if (formData.name && formData.email && formData.subject && formData.message) {
          resolve({ success: true, message: 'Your message has been sent successfully!' });
        } else {
          resolve({ success: false, message: 'Please fill in all fields.' });
        }
      }, 1500));

      if ((response as any).success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setErrorMessage((response as any).message);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12 mb-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-foreground">Get in Touch</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="contact-info bg-card text-card-foreground p-8 md:p-10 rounded-lg shadow-xl animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3">Visit or Call Us</h2>
          <p className="text-lg mb-4 leading-relaxed">
            We'd love to hear from you! Whether you have a reservation request, a catering inquiry, or just want to say hello, feel free to reach out.
          </p>
          <div className="space-y-4 text-left">
            <p className="flex items-center text-lg"><strong className="w-24 font-semibold text-accent-foreground">Address:</strong> 123 Flavor Street, Culinary City, Africa</p>
            <p className="flex items-center text-lg"><strong className="w-24 font-semibold text-accent-foreground">Phone:</strong> (123) 456-7890</p>
            <p className="flex items-center text-lg"><strong className="w-24 font-semibold text-accent-foreground">Email:</strong> <a href="mailto:info@jollof.com" className="text-primary hover:underline">info@jollof.com</a></p>
            <p className="flex items-center text-lg"><strong className="w-24 font-semibold text-accent-foreground">Hours:</strong> Tues - Sun: 11 AM - 10 PM (Closed Mondays)</p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Find Us on the Map</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              {/* Example Google Map embed - replace with actual embed code for production */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2982823678074!2d144.9630575!3d-37.8172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b36e3b08fd%3A0x5045675fb46e100!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1706790928784!5m2!1sen!2sau"
                width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Restaurant Location">
              </iframe>
            </div>
          </div>
        </section>

        <section className="contact-form bg-card text-card-foreground p-8 md:p-10 rounded-lg shadow-xl animate-fade-in-up delay-200">
          <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-input text-input-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-input text-input-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-input text-input-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-input text-input-foreground"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-lg px-6 py-3 rounded-md font-semibold"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-center text-green-600 dark:text-green-400 font-semibold">Your message has been sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-center text-red-600 dark:text-red-400 font-semibold">{errorMessage || 'Something went wrong. Please try again.'}</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};
