import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => {
  return (
    <Card className="bg-[--card-bg] text-[--text-secondary] shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border-[--border-color]">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[--heading-secondary]">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base mb-4">{description}</p>
        <p className="text-xl font-bold text-[--accent-primary]">{price}</p>
      </CardContent>
    </Card>
  );
};

export const MenuSection: React.FC = () => {
  const menuItems = [
    {
      name: 'Jollof Rice with Grilled Fish',
      description: 'A classic West African dish with flavorful rice cooked in a rich tomato sauce, served with perfectly grilled tilapia.',
      price: '$22.00',
      image: '/jollof-rice.webp'
    },
    {
      name: 'Beef Suya Skewers',
      description: 'Spicy marinated beef skewers, grilled to perfection, a popular street food from Nigeria.',
      price: '$18.00',
      image: '/suya.webp'
    },
    {
      name: 'Chicken Tagine',
      description: 'A fragrant Moroccan slow-cooked stew with tender chicken, olives, and preserved lemons, served with couscous.',
      price: '$25.00',
      image: '/tagine.webp'
    },
    {
      name: 'Ethiopian Doro Wat',
      description: 'A rich and spicy chicken stew, slow-cooked with berbere spice and clarified butter, traditionally served with injera.',
      price: '$24.00',
      image: '/doro-wat.webp'
    },
    {
      name: 'Mambalou (Congolese Peanut Stew)',
      description: 'A hearty and flavorful stew made with tender beef, creamy peanut butter, and a medley of vegetables.',
      price: '$23.00',
      image: '/mambalou.webp'
    },
    {
      name: 'Chapati with Coconut Bean Stew',
      description: 'Flaky East African flatbreads served with a creamy and aromatic coconut kidney bean stew.',
      price: '$19.00',
      image: '/chapati.webp'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[--bg-primary] text-[--text-primary]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-[--heading-primary]">
          Our Exquisite Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
