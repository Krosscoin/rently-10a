import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Skeleton } from "../components/ui/skeleton";
import { MenuItem } from "../types";

export const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const data: MenuItem[] = [
          {
            id: "1",
            name: "Classic Beef Bourguignon",
            description: "Slow-cooked beef in red wine sauce with mushrooms and pearl onions.",
            price: 24.99,
            category: "Mains",
            image: "https://images.unsplash.com/photo-1550304943-4e475635905c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "2",
            name: "Pan-Seared Salmon",
            description: "Fresh Atlantic salmon with asparagus and lemon-dill sauce.",
            price: 22.50,
            category: "Mains",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "3",
            name: "Wild Mushroom Risotto",
            description: "Creamy Arborio rice with assorted wild mushrooms and parmesan cheese.",
            price: 18.75,
            category: "Mains",
            image: "https://images.unsplash.com/photo-1512621776951-a579fd5467b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "4",
            name: "Classic Tomato Bruschetta",
            description: "Toasted baguette with fresh tomatoes, basil, garlic, and balsamic glaze.",
            price: 9.00,
            category: "Appetizers",
            image: "https://images.unsplash.com/photo-1563729781615-ce19b0dca3cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "5",
            name: "French Onion Soup Gratinee",
            description: "Rich beef broth with caramelized onions, topped with a Gruyère cheese crouton.",
            price: 11.50,
            category: "Appetizers",
            image: "https://images.unsplash.com/photo-1596701889816-d621b1812903?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "6",
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
            price: 8.50,
            category: "Desserts",
            image: "https://images.unsplash.com/photo-1587840153839-44d7151121d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "7",
            name: "Crème Brûlée",
            description: "Classic vanilla custard with a caramelized sugar topping.",
            price: 7.99,
            category: "Desserts",
            image: "https://images.unsplash.com/photo-1579306028680-6060c57c452e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "8",
            name: "Espresso",
            description: "Rich and strong shot of coffee.",
            price: 3.00,
            category: "Beverages",
            image: "https://images.unsplash.com/photo-1510253687830-bf2148439df5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: "9",
            name: "Sparkling Water",
            description: "Refreshing sparkling mineral water.",
            price: 4.00,
            category: "Beverages",
            image: "https://images.unsplash.com/photo-1628186177543-c0d12e622b72?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
        ];
        setMenuItems(data);
      } catch (err) {
        setError("Failed to load menu. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const groupByCategory = (items: MenuItem[]) => {
    return items.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {} as Record<string, MenuItem[]>);
  };

  const categorizedMenu = groupByCategory(menuItems);
  const categories = Object.keys(categorizedMenu);

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-extrabold text-center text-primary mb-8">Our Exquisite Menu</h1>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="opacity-70">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-5 w-1/4 mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-destructive text-xl py-10 rounded-lg border border-destructive bg-destructive/10">
          <p>{error}</p>
        </div>
      ) : (categories.length > 0 ? (
        categories.map((category) => (
          <div key={category} className="space-y-6">
            <h2 className="text-4xl font-bold text-secondary-foreground mt-10 mb-6 text-center">{category}</h2>
            <Separator className="mb-6" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorizedMenu[category].map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {item.image && (
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                  )}
                  <CardHeader>
                    <CardTitle className="text-primary">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-accent-foreground">${item.price.toFixed(2)}</span>
                    {/* <Button>Add to Cart</Button> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-muted-foreground text-xl py-10">
            <p>No menu items available at the moment. Please check back later!</p>
        </div>
      ))}
    </div>
  );
};
