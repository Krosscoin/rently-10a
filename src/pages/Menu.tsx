import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'starters' | 'main' | 'sides' | 'drinks';
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Jollof Rice with Chicken',
    description: 'Our signature tomato-based rice, slow-cooked with aromatic spices and served with perfectly grilled chicken.',
    price: '$18.99',
    imageUrl: 'https://images.unsplash.com/photo-1621868340150-a9792671e220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHphbGxvZiUyMHJpY2UlMjBhbmQlMjBjaGlja2VufGVufDB8fHx8MTcwNjgwNzA0MXww&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'main',
  },
  {
    id: 2,
    name: 'Ewa Agoyin',
    description: 'Mashed beans served with a spicy palm oil sauce, a popular street food delicacy.',
    price: '$14.00',
    imageUrl: 'https://images.unsplash.com/photo-1605330340337-33a59573887c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMGV3YSUyMGFnb3lpbnxlbnwwfHx8fDE3MDY5MjUyNTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'main',
  },
  {
    id: 3,
    name: 'Suya Skewers (Beef/Chicken)',
    description: 'Grilled skewers marinated in a rich peanut spice blend (Suya spice), served with onions and tomatoes.',
    price: '$15.50',
    imageUrl: 'https://images.unsplash.com/photo-1599587441548-7351654a9c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHN1eWElMjBza2V3ZXJzfGVufDB8fHx8MTcwNjg1MTI5OHww&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'main',
  },
  {
    id: 4,
    name: 'Akara (Bean Fritters)',
    description: 'Deep-fried bean cakes, crispy on the outside and soft on the inside. Perfect starter!',
    price: '$8.50',
    imageUrl: 'https://images.unsplash.com/photo-1681997259169-dc347fb72834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMGFrYXJhJTIwYmFndWV0dGVzfGVufDB8fHx8MTcwNjkyNTI1MXww&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'starters',
  },
  {
    id: 5,
    name: 'Fried Plantains',
    description: 'Sweet ripe plantains, deep-fried to golden perfection. A delicious side dish.',
    price: '$6.00',
    imageUrl: 'https://images.unsplash.com/photo-1605330340337-33a59573887c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMGZyaWVkJTIwcGxhbnRhaW5zfGVufDB8fHx8MTcwNjkyNTMwN3ww&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'sides',
  },
  {
    id: 6,
    name: 'Chapman Drink',
    description: 'A refreshing Nigerian mocktail made with Fanta, Sprite, Angostura bitters, and cucumber.',
    price: '$7.00',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964722525541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMGNoYXBteWFuJTIwZHVpbmtzfGVufDB8fHx8MTcwNjg1MTI5OHww&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'drinks',
  },
    {
    id: 7,
    name: 'Pounded Yam & Egusi Soup',
    description: 'Smooth pounded yam served with a rich and savory soup made from ground melon seeds, leafy greens, and assorted meats.',
    price: '$22.50',
    imageUrl: 'https://images.unsplash.com/photo-1579227599723-f3660db35c75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHBvdW5kZWQlMjB5YW0lMjBhbmQlMjBlZ3VzaSUyMHNvdXB8ZW58MHx8fHwxNzA2OTI1NDI3fDA&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'main',
  },
  {
    id: 8,
    name: 'Gizdodo',
    description: 'A delightful mix of gizzards and plantains, sautéed in a spicy tomato sauce.',
    price: '$16.00',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964722525541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzMHx8YmdhbCUyMGdpenpvZXRzfGVufDB8fHx8MTcwNjg1MTc3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'starters',
  },
  {
    id: 9,
    name: 'Kunu',
    description: 'A traditional non-alcoholic West African beverage made from millet, sorghum, or rice, often spiced with ginger.',
    price: '$5.50',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964722525541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwzfHdvbiUyMHBvcnJpZGVnZSUyMGRyaW5raW5nfGVufDB8fHx8MTcwNjg1MTc3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    category: 'drinks',
  },
];

export const Menu: React.FC = () => {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-foreground">Our Exquisite Menu</h1>

      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 capitalize text-primary border-b-2 border-primary pb-3 inline-block mx-auto block w-fit">
            {category} Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.filter(item => item.category === category).map(item => (
              <div key={item.id} className="menu-card bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img src={item.imageUrl} alt={item.name} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-base mb-4">{item.description}</p>
                  <p className="text-primary font-bold text-xl">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
