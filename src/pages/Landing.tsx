import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 text-primary-foreground py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="container mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Unlock Your Potential with Our Platform</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience seamless productivity and innovative solutions tailored to your needs. Join a community that values efficiency and growth.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary-800 hover:bg-primary-100 hover:text-primary-900 transition-colors duration-200">
            Get Started Today
          </Button>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Key Features Designed For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Intuitive Dashboard</CardTitle>
                <CardDescription>Manage your projects and tasks with an easy-to-use interface.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our dashboard provides a clear overview of your progress, deadlines, and team activities. Customize it to fit your workflow.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Real-time Collaboration</CardTitle>
                <CardDescription>Work together with your team, no matter where you are.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Share files, comment on tasks, and communicate instantly with built-in tools. Boost your team's productivity.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Advanced Analytics</CardTitle>
                <CardDescription>Gain insights into your performance and make data-driven decisions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive reports and customizable charts help you understand trends and optimize your strategies for success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied users who are already experiencing the benefits of our platform. Sign up today and take the first step towards a more efficient future.
          </p>
          <Button size="lg" className="bg-accent-foreground text-accent-800 hover:bg-accent-100 hover:text-accent-900 transition-colors duration-200">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-auto px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-primary-300 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-300 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-300 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
