import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-foreground">Our Journey</h1>

      <section className="about-story bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-xl mb-12 leading-relaxed text-lg">
        <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-primary pb-3 inline-block mx-auto block w-fit">The Heart of Jollof</h2>
        <p className="mb-6">
          Welcome to Jollof, a culinary haven where the rich traditions and vibrant flavors of African cuisine come alive. Our journey began with a simple yet profound passion: to share the authentic taste of Africa with the world. Founded by a team of African food enthusiasts and master chefs, Jollof is more than just a restaurant; it's a celebration of heritage, community, and the soulful art of cooking.
        </p>
        <p className="mb-6">
          Every dish at Jollof is a labor of love, crafted with the freshest, locally-sourced ingredients whenever possible, and spices directly imported from various regions of Africa. We meticulously follow time-honored recipes, passed down through generations, ensuring that each bite transports you to the bustling markets and warm homes of the continent.
        </p>
        <p>
          From the smoky depths of our Jollof Rice to the fiery kick of our Suya, we invite you to embark on an unforgettable gastronomic adventure. We believe food is a universal language, and through our dishes, we aim to share stories, foster connections, and create cherished memories.
        </p>
      </section>

      <section className="our-values bg-background text-foreground p-8 md:p-12 rounded-lg shadow-xl mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-primary pb-3 inline-block mx-auto block w-fit">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="value-card p-6 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Authenticity</h3>
            <p className="text-muted-foreground">We commit to serving genuine African flavors, respecting traditional recipes and cooking methods.</p>
          </div>
          <div className="value-card p-6 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Quality</h3>
            <p className="text-muted-foreground">Only the freshest, highest-quality ingredients make it into our kitchen, ensuring every dish is exceptional.</p>
          </div>
          <div className="value-card p-6 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Community</h3>
            <p className="text-muted-foreground">We believe in the power of food to bring people together, creating a warm and welcoming atmosphere for all.</p>
          </div>
        </div>
      </section>

      <section className="team bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-primary pb-3 inline-block mx-auto block w-fit">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="team-member p-6">
            <img src="https://avatars.githubusercontent.com/u/84109400?v=4" alt="Chef Amina" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2">Chef Amina Diallo</h3>
            <p className="text-muted-foreground">Head Chef & Co-Founder</p>
            <p className="mt-2 text-sm">With a lifetime of culinary experience from Senegal, Chef Amina brings authentic West African flavors to Jollof.</p>
          </div>
          <div className="team-member p-6">
            <img src="https://avatars.githubusercontent.com/u/84109400?v=4" alt="Manager Obi" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2">Obi Okoro</h3>
            <p className="text-muted-foreground">Restaurant Manager</p>
            <p className="mt-2 text-sm">Obi ensures a seamless dining experience, combining Nigerian hospitality with excellent service.</p>
          </div>
          <div className="team-member p-6">
            <img src="https://avatars.githubusercontent.com/u/84109400?v=4" alt="Marketing Nana" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2">Nana Mensah</h3>
            <p className="text-muted-foreground">Marketing Lead</p>
            <p className="mt-2 text-sm">Nana spreads the word about Jollof, sharing our story and flavors with a wider audience.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
