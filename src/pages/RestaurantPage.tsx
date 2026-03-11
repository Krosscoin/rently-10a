import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Restaurant } from '../types';
import { fetchRestaurantById } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

export const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = React.useState<Restaurant | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getRestaurant = async () => {
      if (!id) {
        setError('Restaurant ID is missing.');
        setLoading(false);
        return;
      }
      try {
        const data = await fetchRestaurantById(id);
        setRestaurant(data);
      } catch (err) {
        setError('Failed to fetch restaurant details.');
      } finally {
        setLoading(false);
      }
    };
    getRestaurant();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading restaurant details...</div>;
  if (error) return <div className="text-center py-8 text-destructive">Error: {error}</div>;
  if (!restaurant) return <div className="text-center py-8 text-muted-foreground">Restaurant not found.</div>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-primary">{restaurant.name}</h1>
      <p className="text-lg text-muted-foreground mb-6">{restaurant.cuisine}</p>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary">Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurant.menu.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-xl font-bold text-accent">${item.price.toFixed(2)}</span>
                <Button onClick={() => console.log(`Added ${item.name} to cart`)}>Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
