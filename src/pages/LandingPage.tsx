import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Lightbulb, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center p-4 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
            Unlock Your Team's Full Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Revolutionize your workflow with our intuitive and powerful platform.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 animate-fade-in-up delay-200">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted-background text-muted-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground"></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold text-foreground">Blazing Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Experience unparalleled speed and responsiveness, ensuring your work never slows down.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-100">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold text-foreground">Smart Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Gain actionable insights with intelligent analytics to drive better decision-making.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-right delay-200">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold text-foreground">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Connect effortlessly with your favorite tools and streamline your entire workflow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-600 text-primary-foreground text-center p-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who are already achieving more.
          </p>
          <Button size="lg" className="text-lg px-10 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
