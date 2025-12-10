import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-primary mb-12">Our Passion for African Cuisine</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img src="https://plus.unsplash.com/premium_photo-1663953702518-e3251ce61073?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="African cooking ingredients" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our Story: A Culinary Journey</h3>
            <p className="text-lg leading-relaxed mb-4">Jollof restaurant was born from a desire to share the rich, diverse, and vibrant culinary traditions of Africa with the world. Our founders, a team of passionate food enthusiasts with deep roots in various African cultures, envisioned a place where authentic flavors, warm hospitality, and a lively atmosphere converge.</p>
            <p className="text-lg leading-relaxed">Every dish at Jollof tells a story – a story of ancient recipes passed down through generations, of sun-drenched ingredients harvested with care, and of the joyous communal spirit that defines African dining. We invite you to join us on this flavorful journey.</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-8">Our Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">Authenticity</h4>
              <p className="text-muted-foreground">We commit to preserving the true essence of African cuisine, using traditional cooking methods and authentic spices sourced directly from the continent.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">Fresh Ingredients</h4>
              <p className="text-muted-foreground">Quality is paramount. We use only the freshest, locally sourced produce and premium meats to ensure every bite is bursting with flavor.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">Community & Culture</h4>
              <p className="text-muted-foreground">Jollof is more than just a restaurant; it's a cultural hub. We celebrate African art, music, and traditions, aiming to create a welcoming space for everyone.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">Innovation</h4>
              <p className="text-muted-foreground">While rooted in tradition, we also embrace innovation, offering modern interpretations of classic dishes to delight contemporary palates.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet Our Team</h3>
          <p className="text-lg leading-relaxed mb-8">Our dedicated team of chefs and staff are passionate about bringing you the best of African hospitality and culinary excellence.</p>
          {/* A grid of team members could go here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;