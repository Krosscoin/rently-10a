import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 py-8 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Our Story</h1>
      
      <section className="mb-12">
        <Card className="bg-card shadow-lg p-6 md:p-10">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 p-0">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Restaurant+Interior" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-secondary-foreground mb-4">Rooted in Tradition</h2>
              <p className="text-lg leading-relaxed text-card-foreground mb-4">
                Taste of Africa was founded with a passion to share the rich and diverse culinary heritage of the African continent. 
                Our journey began with a dream to create a space where authentic flavors, vibrant spices, and heartwarming hospitality converge.
                Every dish tells a story, a journey from bustling markets to family kitchens, bringing you the true essence of African gastronomy.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground">
                We pride ourselves on using fresh, locally sourced ingredients whenever possible, combined with specialty spices imported directly from Africa, 
                to ensure an unparalleled taste experience. Our chefs, trained in traditional techniques, infuse each meal with love and dedication.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Authenticity</h3>
            <p className="text-card-foreground">We commit to preserving and presenting the true taste of African cuisine.</p>
          </Card>
          <Card className="bg-card shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Community</h3>
            <p className="text-card-foreground">We aim to be a gathering place, fostering connections through food and culture.</p>
          </Card>
          <Card className="bg-card shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Quality</h3>
            <p className="text-card-foreground">From ingredients to service, we ensure the highest standards in everything we do.</p>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Chef+Ade"
              alt="Head Chef Adebayo Dlamini"
              className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-secondary-foreground">Adebayo Dlamini</h3>
            <p className="text-primary text-sm">Head Chef</p>
            <p className="text-muted-foreground mt-2 text-center max-w-xs">Bringing over 20 years of experience in African culinary arts.</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/150x150/2E8B57/FFFFFF?text=Founder+Ama"
              alt="Founder Amara Ndiaye"
              className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-secondary-foreground">Amara Ndiaye</h3>
            <p className="text-primary text-sm">Founder & CEO</p>
            <p className="text-muted-foreground mt-2 text-center max-w-xs">Visionary behind Taste of Africa, dedicated to cultural exchange through food.</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/150x150/6A5ACD/FFFFFF?text=Manager+Kwame"
              alt="Restaurant Manager Kwame"
              className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-secondary-foreground">Kwame Mensah</h3>
            <p className="text-primary text-sm">Restaurant Manager</p>
            <p className="text-muted-foreground mt-2 text-center max-w-xs">Ensuring every guest has a memorable and delightful dining experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
