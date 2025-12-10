import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => (
  <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden flex flex-col">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold mb-2 text-primary">{name}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <span className="text-xl font-bold text-accent">{price}</span>
    </div>
  </div>
);

export const MenuSection: React.FC = () => {
  const menuItems = [
    {
      name: 'Jollof Rice with Grilled Chicken',
      description: 'Our signature jollof rice, a flavorful tomato-based rice dish, served with perfectly grilled chicken and a side of plantains.',
      price: '$18.99',
      image: '/jollof-chicken.jpg'
    },
    {
      name: 'Egusi Soup with Pounded Yam',
      description: 'A rich and hearty soup made with ground melon seeds, spinach, and a choice of meat or fish, served with traditional pounded yam.',
      price: '$16.50',
      image: '/egusi-pounded-yam.jpg'
    },
    {
      name: 'Suya Skewers',
      description: 'Spicy grilled beef skewers marinated in traditional Nigerian spices, served with sliced onions and tomatoes.',
      price: '$12.00',
      image: '/suya.jpg'
    },
    {
      name: 'Akara (Bean Cakes)',
      description: 'Deep-fried bean cakes made from peeled, blended beans and spices, a popular street food snack.',
      price: '$8.00',
      image: '/akara.jpg'
    },
  ];

  return (
    <section id="menu" className="py-16 bg-background text-foreground px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Delicious Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
