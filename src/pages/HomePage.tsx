import * as React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../types';
import { fetchRestaurants } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const HomePage: React.FC = () => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError('Failed to fetch restaurants.');
      } finally {
        setLoading(false);
      }
    };
    getRestaurants();
  }, []);

  if (loading) return <div className="text-center py-8">Loading restaurants...</div>;
  if (error) return <div className="text-center py-8 text-destructive">Error: {error}</div>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Welcome to FoodieDelight!</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map(restaurant => (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <CardTitle className="text-2xl text-primary">{restaurant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{restaurant.cuisine}</p>
                <p className="text-sm text-muted-foreground">Min. Order: ${restaurant.minOrder.toFixed(2)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};
