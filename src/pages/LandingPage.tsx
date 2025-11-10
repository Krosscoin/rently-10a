import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Discover the Future of Digital Experiences
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Seamlessly integrate cutting-edge technology to elevate your projects and captivate your audience.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[var(--secondary)] text-[var(--secondary-foreground)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Unleash Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Intuitive Design</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">Craft beautiful interfaces with ease.</CardDescription>
              </CardHeader>
              <CardContent>
                Our platform provides a rich set of tools and components that empower designers and developers to create stunning and user-friendly applications without compromise.
              </CardContent>
            </Card>

            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Blazing Fast Performance</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">Optimize for speed and efficiency.</CardDescription>
              </CardHeader>
              <CardContent>
                Experience unparalleled performance with our optimized architecture, ensuring your applications run smoothly and respond instantly to user interactions.
              </CardContent>
            </Card>

            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Scalable Infrastructure</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">Grow without limits.</CardDescription>
              </CardHeader>
              <CardContent>
                Our robust and scalable infrastructure is designed to handle any load, allowing your applications to grow from a small startup to an enterprise-level solution effortlessly.
              </CardContent>
            </Card>

            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Secure & Reliable</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">Your data is always safe.</CardDescription>
              </CardHeader>
              <CardContent>
                Security is our top priority. We employ industry-leading encryption and security protocols to ensure your data and applications are always protected against threats.
              </CardContent>
            </Card>

            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">24/7 Support</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">We're always here to help.</CardDescription>
              </CardHeader>
              <CardContent>
                Our dedicated support team is available around the clock to assist you with any questions or issues, ensuring a smooth and productive experience at all times.
              </CardContent>
            </Card>

            <Card className="bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Seamless Integration</CardTitle>
                <CardDescription className="text-[var(--muted-foreground)]">Connect with your favorite tools.</CardDescription>
              </CardHeader>
              <CardContent>
                Integrate effortlessly with a wide range of third-party services and tools, extending the functionality of your applications and streamlining your workflows.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-[var(--primary)] text-[var(--primary-foreground)] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of innovators who are building the next generation of digital products with our platform.
          </p>
          <Button size="lg" className="text-lg px-10 py-4 bg-[var(--primary-foreground)] text-[var(--primary)] hover:bg-[var(--primary-foreground-hover)] hover:text-[var(--primary-hover)]">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--background)] text-[var(--muted-foreground)] py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
