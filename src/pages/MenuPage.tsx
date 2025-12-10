import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Jollof Rice',
    description: 'Our signature dish, rich and smoky, served with your choice of chicken, beef, or fish.',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1620713745281-700683a4512e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Main Courses',
  },
  {
    id: '2',
    name: 'Egusi Soup & Pounded Yam',
    description: 'A hearty and nutritious soup made with melon seeds, served with soft pounded yam.',
    price: '$22.50',
    image: 'https://images.unsplash.com/photo-1606787366810-ac372579b2a7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Main Courses',
  },
  {
    id: '3',
    name: 'Spicy Suya Skewers',
    description: 'Grilled, marinated beef skewers, a popular street food delicacy.',
    price: '$15.00',
    image: 'https://images.unsplash.com/photo-1628173499446-5c6a1d2f7f9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Appetizers',
  },
  {
    id: '4',
    name: 'Piri Piri Chicken',
    description: 'Spicy grilled chicken marinated in our special Piri Piri sauce, served with choice of side.',
    price: '$19.50',
    image: 'https://images.unsplash.com/photo-1616738096336-d24597b41e3a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Main Courses',
  },
  {
    id: '5',
    name: 'Fried Plantains',
    description: 'Sweet and savory fried plantain, a perfect side dish.',
    price: '$7.00',
    image: 'https://plus.unsplash.com/q/80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Sides',
  },
  {
    id: '6',
    name: 'African Doughnuts (Puff-Puff)',
    description: 'Light and airy fried dough balls, dusted with sugar.',
    price: '$6.00',
    image: 'https://images.unsplash.com/photo-1628173499591-dd4f00d832d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Desserts',
  },
];

const MenuPage: React.FC = () => {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-primary mb-12">Our Exquisite African Menu</h2>

        {categories.map(category => (
          <section key={category} className="mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-8 border-b-2 border-secondary pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.filter(item => item.category === category).map(item => (
                <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-primary text-2xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <p className="text-lg font-bold text-secondary">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;