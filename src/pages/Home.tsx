import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-4">
      <section className="hero-section bg-cover bg-center text-primary-foreground w-full py-24 md:py-48 rounded-lg shadow-xl mb-12 flex items-center justify-center relative"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621868340150-a9792671e220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdhcm0lMjBhZnJpY2FuJTIwZm9vZCUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzA2NzkwMjc2fDA&ixlib=rb-4.0.3&q=80&w=1080")' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-lg"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">Taste the Soul of Africa</h1>
          <p className="text-xl md:text-2xl mb-8 p-4 bg-background/50 backdrop-blur-sm rounded-md shadow-lg">Authentic African Cuisine, Crafted with Passion.</p>
          <a href="/menu" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-lg px-8 py-4 rounded-full shadow-lg font-semibold uppercase tracking-wider">Explore Our Menu</a>
        </div>
      </section>

      <section className="about-excerpt bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-xl mb-12 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-2 border-primary pb-3 inline-block">Our Story</h2>
        <p className="text-lg leading-relaxed mb-6">
          Jollof is more than just a restaurant; it's a culinary journey to the heart of Africa. We bring you the rich, vibrant flavors of traditional African dishes, prepared with authentic recipes and the freshest ingredients. Every meal tells a story, a celebration of culture and community.
        </p>
        <a href="/about" className="inline-block text-primary hover:text-primary/80 transition-colors duration-200 font-semibold text-lg">Read More About Us &rarr;</a>
      </section>

      <section className="featured-dishes bg-background text-foreground p-8 md:p-12 rounded-lg shadow-xl mb-12 max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-2 border-primary pb-3 inline-block">Signature Delights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="dish-card bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1589302168068-964722525541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHlvbSUyMGphbGxvZiUyMHJpY2V8ZW58MHx8fHwxNzA2NzkwNTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jollof Rice" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Spicy Jollof Rice</h3>
              <p className="text-muted-foreground mb-4">Our signature dish, cooked to perfection with a rich tomato base, aromatic spices, and your choice of protein.</p>
              <span className="text-primary font-bold text-xl">$18.99</span>
            </div>
          </div>
          <div className="dish-card bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1599587441548-7351654a9c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHZhc3NpJTIwY2hpY2tlbnxlbnwwfHx8fDE3MDY3OTA1NDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vassie Chicken" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Suya Skewers</h3>
              <p className="text-muted-foreground mb-4">Tender grilled beef skewers marinated in a spicy peanut blend, a West African street food classic.</p>
              <span className="text-primary font-bold text-xl">$15.50</span>
            </div>
          </div>
          <div className="dish-card bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1605330340337-33a59573887c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMGZyaWVkJTIwcGxhbnRhaW5zfGVufDB8fHx8MTcwNjkyNTMwN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Fried Plantains" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Asun (Spicy Goat Meat)</h3>
              <p className="text-muted-foreground mb-4">Smoked, chopped goat meat sautéed in hot peppers and onions. A fiery delight!</p>
              <span className="text-primary font-bold text-xl">$17.00</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/menu" className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 text-lg px-8 py-4 rounded-full shadow-lg font-semibold uppercase tracking-wider">View Full Menu</a>
        </div>
      </section>
    </div>
  );
};
