import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground scroll-smooth">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary-foreground to-secondary-foreground text-center relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-primary animate-fade-in-up">
              Unlock Your Creative Potential
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200">
              The ultimate platform for artists, designers, and innovators to showcase their work and connect with a global audience.
            </p>
            <div className="space-x-4 animate-fade-in-up animation-delay-400">
              <Button className="hover:bg-primary-dark" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl">
          <div className="absolute w-64 h-64 bg-accent rounded-full -top-16 -left-16"></div>
          <div className="absolute w-80 h-80 bg-secondary rounded-full -bottom-20 -right-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary-foreground text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Powerful Features for Every Creator</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From intuitive design tools to seamless collaboration, we provide everything you need to bring your ideas to life.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <FeatureCard
                icon={<ArrowRightIcon className="h-6 w-6 text-primary" />}
                title="Intuitive Design Tools"
                description="Craft stunning visuals with our easy-to-use drag-and-drop interface and extensive template library."
              />
              <FeatureCard
                icon={<ArrowRightIcon className="h-6 w-6 text-primary" />}
                title="Collaborate Seamlessly"
                description="Work with your team in real-time, share feedback, and streamline your creative workflow."
              />
              <FeatureCard
                icon={<ArrowRightIcon className="h-6 w-6 text-primary" />}
                title="Global Showcase"
                description="Publish your portfolio to a global audience and get discovered by clients and collaborators."
              />
              <FeatureCard
                icon={<ArrowRightIcon className="h-6 w-6 text-primary" />}
                title="Monetize Your Art"
                description="Sell your digital creations directly from your portfolio with secure payment integrations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Creating?</h2>
          <p className="mx-auto max-w-[600px] text-lg mt-4 mb-8">
            Join thousands of creators who are transforming their ideas into reality.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Sign Up for Free
          </Button>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center p-6 text-center shadow-lg bg-card text-card-foreground animate-fade-in-up hover:scale-105 transition-transform duration-300">
    <CardHeader className="pb-4">
      <div className="flex justify-center mb-4">{icon}</div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default LandingPage;
