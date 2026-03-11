import React, { useState, useEffect } from 'react';
import { IMenuItem } from '@/types/restaurant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

const menuData: IMenuItem[] = [
  { id: '1', name: 'Jollof Rice with Chicken', description: 'Fragrant rice cooked in a rich tomato sauce, served with grilled chicken.', price: 15.99, category: 'Main Courses', imageUrl: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Jollof+Chicken' },
  { id: '2', name: 'Egusi Soup with Pounded Yam', description: 'A hearty soup made with melon seeds, spinach, and various meats, served with pounded yam.', price: 18.50, category: 'Main Courses', imageUrl: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Egusi+Soup'},
  { id: '3', name: 'Suya Skewers', description: 'Spicy grilled beef skewers, marinated in a special peanut spice blend.', price: 12.00, category: 'Appetizers', imageUrl: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Suya+Skewers'},
  { id: '4', name: 'Puff-Puff', description: 'Sweet, deep-fried dough balls, a popular street snack.', price: 6.50, category: 'Desserts', imageUrl: 'https://via.placeholder.com/300x200/FFFF33/000000?text=Puff-Puff'},
  { id: '5', name: 'Fufu and Light Soup', description: 'Soft, dough-like fufu served with a light, flavorful soup with fish or chicken.', price: 17.00, category: 'Main Courses', imageUrl: 'https://via.placeholder.com/300x200/A020F0/FFFFFF?text=Fufu+Soup'},
  { id: '6', name: 'Chapati (Ugandan Style)', description: 'Soft, flaky flatbread, perfect as a side dish or snack.', price: 4.00, category: 'Sides', imageUrl: 'https://via.placeholder.com/300x200/FF8C00/FFFFFF?text=Chapati'},
  { id: '7', name: 'Mackerel Stew', description: 'Flavorful stew with mackerel, tomatoes, and bell peppers, served with rice or plantains.', price: 14.50, category: 'Main Courses', imageUrl: 'https://via.placeholder.com/300x200/00CED1/FFFFFF?text=Mackerel+Stew'},
  { id: '8', name: 'Kelewele', description: 'Spicy fried plantains seasoned with ginger, garlic, and cayenne pepper.', price: 7.50, category: 'Appetizers', imageUrl: 'https://via.placeholder.com/300x200/DAA520/FFFFFF?text=Kelewele'},
];

const MenuPage: React.FC = () => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchMenu = setTimeout(() => {
      try {
        setMenu(menuData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu items.');
        setLoading(false);
      }
    }, 1500);
    return () => clearTimeout(fetchMenu);
  }, []);

  const categories: IMenuCategory[] = Array.from(new Set(menu.map(item => item.category)));

  if (loading) {
    return (
      <div className="container mx-auto p-4 py-8 bg-background text-foreground">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Our Menu</h1>
        <div className="flex justify-center mb-8">
          <Skeleton className="w-full max-w-md h-10" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-card shadow-lg">
              <Skeleton className="w-full h-48 rounded-t-lg" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 py-8 text-center text-destructive bg-background">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p className="text-xl">{error}</p>
        <p className="text-muted-foreground mt-2">Please try refreshing the page or contact support.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-8 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Our Menu</h1>
      <Tabs defaultValue={categories[0] || "All"} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-auto gap-2 mb-8 bg-muted p-2 rounded-lg justify-center">
          {categories.map(category => ( 
            <TabsTrigger key={category} value={category} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menu.filter(item => item.category === category).map((item) => (
                <Card key={item.id} className="bg-card shadow-lg overflow-hidden border border-border transition-transform transform hover:scale-105">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-secondary-foreground">{item.name}</CardTitle>
                    <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuPage;
