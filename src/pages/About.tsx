import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export const About: React.FC = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-5xl font-extrabold text-center text-primary mb-8">About Us</h1>

      <section className="grid md:grid-cols-2 gap-10 items-center bg-card p-8 rounded-lg shadow-lg">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-secondary-foreground">Our Story & Philosophy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Golden Spoon was founded in 2005 by Chef Antoine Dubois with a passion for bringing
            authentic, high-quality culinary experiences to our community. Our philosophy is simple:
            use the freshest local ingredients, craft each dish with precision and love, and provide
            an unforgettable dining atmosphere.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We believe that food is not just sustenance, but an art form that brings people together.
            Every plate served at The Golden Spoon is a reflection of our dedication to culinary excellence
            and our commitment to our guests.
          </p>
        </div>
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1579007422960-934c7b809876?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chef preparing food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <span className="text-white text-3xl font-bold drop-shadow">Passion for Food</span>
          </div>
        </div>
      </section>

      <Separator />

      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-secondary-foreground">Meet Our Team</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
          Our dedicated team is the heart and soul of The Golden Spoon. We are a family of chefs,
          servers, and hospitality professionals committed to making your dining experience exceptional.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef Antoine Dubois"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
              />
              <CardTitle className="text-primary">Chef Antoine Dubois</CardTitle>
              <p className="text-muted-foreground">Founder & Head Chef</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">"Crafting culinary masterpieces for two decades."</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Manager Sarah Lee"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
              />
              <CardTitle className="text-primary">Sarah Lee</CardTitle>
              <p className="text-muted-foreground">Restaurant Manager</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">"Ensuring every guest leaves with a smile."</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e1ad95f1ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sous Chef Maria Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
              />
              <CardTitle className="text-primary">Maria Rodriguez</CardTitle>
              <p className="text-muted-foreground">Executive Sous Chef</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">"Bringing innovation to classic recipes."</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
