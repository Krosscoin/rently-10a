import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MountainIcon, RocketIcon, LightbulbIcon, UsersIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-primary-foreground flex flex-col items-center justify-center text-center px-4">
        <div className="container max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-primary-foreground-text">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground-text-secondary max-w-2xl mx-auto">
            We provide cutting-edge technology and exceptional services to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-full text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-primary-foreground-text text-primary-foreground-text hover:bg-primary-foreground-text/10 px-8 py-3 rounded-full text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary-foreground-text">
              Key Features
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-secondary-foreground-text-secondary">
              Discover how our platform can revolutionize your workflow and boost your productivity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card text-card-foreground p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MountainIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2 text-card-foreground-text">Scalable Architecture</CardTitle>
              <CardDescription className="text-sm text-muted-foreground text-card-foreground-text-secondary">Our infrastructure grows with your business, ensuring seamless performance.</CardDescription>
            </Card>
            <Card className="bg-card text-card-foreground p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <RocketIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2 text-card-foreground-text">Blazing Fast Performance</CardTitle>
              <CardDescription className="text-sm text-muted-foreground text-card-foreground-text-secondary">Experience unparalleled speed and responsiveness across all operations.</CardDescription>
            </Card>
            <Card className="bg-card text-card-foreground p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <LightbulbIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2 text-card-foreground-text">Innovative Solutions</CardTitle>
              <CardDescription className="text-sm text-muted-foreground text-card-foreground-text-secondary">Stay ahead with our constantly evolving suite of tools and features.</CardDescription>
            </Card>
            <Card className="bg-card text-card-foreground p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <UsersIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2 text-card-foreground-text">Exceptional Support</CardTitle>
              <CardDescription className="text-sm text-muted-foreground text-card-foreground-text-secondary">Our dedicated team is ready to assist you 24/7 with any query.</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground-text">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-foreground-text-secondary">
              Hear from real users about their experiences with our products and services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-card-foreground-text">Outstanding Results!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-card-foreground-text-secondary">
                  "Our company has seen a significant increase in efficiency and customer satisfaction since implementing their solution. Highly recommended!"
                </p>
                <p className="text-xs font-semibold text-card-foreground-text">— Jane Doe, CEO of TechCorp</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-card-foreground-text">Game Changer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-card-foreground-text-secondary">
                  "The intuitive interface and powerful features have truly transformed our daily operations. We couldn't be happier."
                </p>
                <p className="text-xs font-semibold text-card-foreground-text">— John Smith, Marketing Director</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-card-foreground-text">Excellent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-card-foreground-text-secondary">
                  "Whenever we had a question, their support team was quick, knowledgeable, and incredibly helpful. A fantastic experience overall."
                </p>
                <p className="text-xs font-semibold text-card-foreground-text">— Emily White, Project Manager</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-r from-accent to-accent-foreground flex flex-col items-center justify-center text-center px-4">
        <div className="container max-w-4xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent-foreground-text">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground-text-secondary max-w-2xl mx-auto">
            Join thousands of satisfied customers and elevate your business today.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 rounded-full text-xl mt-8">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
