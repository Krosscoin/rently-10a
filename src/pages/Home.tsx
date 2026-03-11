import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="relative bg-primary-foreground py-20 rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-70 filter brightness-75"
        />
        <div className="relative container mx-auto text-center text-primary-foreground z-10 p-8 rounded-lg bg-background/50 backdrop-blur-sm">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
            Welcome to The Golden Spoon
          </h1>
          <p className="text-xl mb-8 leading-relaxed animate-fade-in-up">
            Experience exquisite dining in a cozy ambiance.
          </p>
          <Button asChild className="px-8 py-3 text-lg transition-transform hover:scale-105 animate-fade-in-up delay-200">
            <Link to="/menu">View Our Menu</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-primary">Fine Dining</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Savor expertly crafted dishes with the freshest ingredients.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-primary">Cozy Ambiance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Enjoy a warm and inviting atmosphere perfect for any occasion.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-primary">Experienced Chefs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Our culinary team brings years of experience and passion to your plate.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary">Our Story</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
          The Golden Spoon began with a dream to create a culinary haven where every meal is a celebration.
          Founded by Chef Antoine Dubois, our restaurant is a testament to timeless recipes and innovative flavors.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </section>
    </div>
  );
};
