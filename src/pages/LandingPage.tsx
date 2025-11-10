import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
;

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center p-4 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-primary-foreground drop-shadow-lg">
            Unlock Your Creative Potential
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering designers and developers with innovative tools and a vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300 border-primary text-primary dark:border-primary-foreground dark:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card-background text-card-foreground">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-foreground">
            Designed for Modern Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Intuitive Interface</CardTitle>
                <CardDescription className="text-muted-foreground">Streamlined design for maximum productivity.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground">Our platform is crafted with user experience in mind, ensuring a smooth and enjoyable workflow from start to finish. Focus on what matters most: your creativity.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Real-time Collaboration</CardTitle>
                <CardDescription className="text-muted-foreground">Work together seamlessly, no matter where you are.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground">Collaborate with your team in real-time on projects, share ideas, and get instant feedback. Break down communication barriers and build together.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Scalable Solutions</CardTitle>
                <CardDescription className="text-muted-foreground">Grow your projects without limits.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground">From small personal projects to large enterprise solutions, our platform scales with your needs. Enjoy robust performance and reliability at every stage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-foreground">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-6 shadow-sm">
              <CardContent className="p-0">
                <p className="text-lg italic text-secondary-foreground">"This platform has revolutionized our design process. The collaboration features are unmatched, and the interface is a joy to use. Highly recommended!"</p>
                <p className="mt-4 font-semibold text-primary-foreground">— Alex P., Lead Designer at Creative Studio</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border p-6 shadow-sm">
              <CardContent className="p-0">
                <p className="text-lg italic text-secondary-foreground">"We saw an immediate boost in productivity after switching. The real-time capabilities have cut down our project timelines significantly."</p>
                <p className="mt-4 font-semibold text-primary-foreground">— Samantha L., CEO of Tech Innovations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark/80 to-accent-dark/80 text-primary-foreground dark:from-primary/80 dark:to-accent/80">
        <div className="container mx-auto px-4 max-w-screen-xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-secondary-foreground">
            Join thousands of innovators who are building the future with our powerful tools.
          </p>
          <Button size="lg" className="px-10 py-4 text-xl font-bold hover:scale-105 transition-transform duration-300 bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-4 focus:ring-accent/50">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 text-center">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <p className="text-sm">&copy; {new Date().getFullYear()} OurCompany. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:underline text-muted-foreground">Privacy Policy</a>
            <a href="#" className="hover:underline text-muted-foreground">Terms of Service</a>
            <a href="#" className="hover:underline text-muted-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
