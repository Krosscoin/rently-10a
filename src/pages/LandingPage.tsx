import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-24 sm:py-32 md:py-48 lg:py-56 xl:py-64 flex items-center justify-center bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Unlock Your Potential with Our Innovative Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10">
              Empowering businesses and individuals to achieve their goals through cutting-edge technology and exceptional support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-12 px-8 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-200">
                Get Started
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Designed for Growth, Built for Success
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Discover the features that make our platform an indispensable tool for your journey.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-2">Intuitive Interface</CardTitle>
                <CardDescription className="text-muted-foreground">Effortless navigation and a user-friendly design to streamline your workflow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our platform is meticulously crafted to provide a seamless and enjoyable user experience. Focus on what matters, we handle the complexity.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-2">Powerful Analytics</CardTitle>
                <CardDescription className="text-muted-foreground">Gain actionable insights with comprehensive and easy-to-understand data visualizations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Make data-driven decisions with our robust analytics engine. Understand your performance at a glance and identify areas for improvement.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-2">Scalable Architecture</CardTitle>
                <CardDescription className="text-muted-foreground">Grow without limits. Our infrastructure scales with your needs, ensuring peak performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>From startups to enterprises, our scalable architecture is designed to support your growth every step of the way without compromising speed or reliability.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-2">24/7 Support</CardTitle>
                <CardDescription className="text-muted-foreground">Access expert help whenever you need it, ensuring your operations run smoothly.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our dedicated support team is available around the clock to assist you with any questions or issues, providing peace of mind and continuous operation.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold mb-2">Secure & Reliable</CardTitle>
                    <CardDescription className="text-muted-foreground">Your data is safe with us. We prioritize security and reliability with advanced measures.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We employ industry-leading security protocols to protect your information and ensure maximum uptime, so you can focus on your business with confidence.</p>
                </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold mb-2">Customizable Workflows</CardTitle>
                    <CardDescription className="text-muted-foreground">Tailor the platform to fit your unique processes and maximize productivity.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Adapt our platform to your specific requirements with flexible customization options, enhancing efficiency and aligning with your operational needs.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from the people who have experienced the transformative power of our solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground shadow-lg">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">"This platform has revolutionized how we operate. The intuitive interface and powerful features have boosted our productivity significantly."</p>
                <p className="text-sm font-semibold text-primary">— Jane Doe, CEO of Tech Innovations</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">"Exceptional support and a truly scalable solution. We've seen remarkable growth since integrating their services."</p>
                <p className="text-sm font-semibold text-primary">— John Smith, Founder of Green Energy Solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg">
                <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed mb-4">"The analytics provided are incredibly insightful. It allows us to make quick, informed decisions that drive our business forward."</p>
                    <p className="text-sm font-semibold text-primary">— Emily White, Marketing Director at Creative Agency</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Join countless satisfied customers and start experiencing the difference today. It's time to elevate your potential.
          </p>
          <Button className="h-14 px-10 text-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-200">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
