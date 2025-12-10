import React from 'react';
import { Helmet } from 'react-helmet';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Jollof Rice with Chicken',
    description: 'Our signature smoky Jollof Rice served with perfectly grilled chicken, plantains, and coleslaw.',
    price: '$18.99',
    image: 'https://via.placeholder.com/300x200/FACC15/FFFFFF?text=Jollof_Chicken',
  },
  {
    id: '2',
    name: 'Ewa Agoyin',
    description: 'Mashed beans stewed in a rich palm oil sauce, served with bread.',
    price: '$14.50',
    image: 'https://via.placeholder.com/300x200/84CC16/FFFFFF?text=Ewa_Agoyin',
  },
  {
    id: '3',
    name: 'Pounded Yam & Egusi Soup',
    description: 'Smooth pounded yam served with a hearty and flavorful Egusi soup, choice of meat.',
    price: '$22.00',
    image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Pounded_Yam',
  },
  {
    id: '4',
    name: 'Suya Skewers (Beef/Chicken)',
    description: 'Spicy grilled skewers marinated in a special blend of spices, served with sliced onions.',
    price: '$15.99',
    image: 'https://via.placeholder.com/300x200/F87171/FFFFFF?text=Suya',
  },
  {
    id: '5',
    name: 'Akara (Bean Cakes)',
    description: 'Deep-fried bean cakes made from peeled beans, seasoned with onions and peppers.',
    price: '$8.00',
    image: 'https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Akara',
  },
  {
    id: '6',
    name: 'Moi Moi',
    description: 'Steamed bean pudding made from a mixture of peeled beans, peppers, and spices.',
    price: '$9.50',
    image: 'https://via.placeholder.com/300x200/6D28D9/FFFFFF?text=Moi_Moi',
  },
];

export const Menu: React.FC = () => {
  return (
    <div className="container mx-auto my-16 px-4 md:px-8">
      <Helmet>
        <title>Our Menu - Jollof</title>
        <meta name="description" content="Explore the authentic African dishes at Jollof restaurant." />
      </Helmet>
      <h1 className="text-5xl font-extrabold text-center text-primary mb-16 animate-fade-in-down">Our Delicious Menu</h1>

      <section aria-labelledby="main-dishes-heading" className="mb-16">
        <h2 id="main-dishes-heading" className="text-3xl font-bold text-accent mb-8 border-b-2 border-accent pb-2">Main Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                </div>
                <span className="text-accent text-xl font-bold self-end">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="starters-sides-heading">
        <h2 id="starters-sides-heading" className="text-3xl font-bold text-accent mb-8 border-b-2 border-accent pb-2">Starters & Sides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.slice(3).map((item) => (
            <div key={item.id} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                </div>
                <span className="text-accent text-xl font-bold self-end">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
