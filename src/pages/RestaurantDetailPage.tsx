import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DishCard } from '../components/DishCard';
import { Restaurant, Dish } from '../types';

export const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const fetchedRestaurant: Restaurant = {
          id: id || '',
          name: 'The Great Indian Kitchen',
          cuisine: 'Indian',
          rating: 4.5,
          deliveryEstimate: '30-45 min',
          imageUrl: 'https://images.unsplash.com/photo-1563612116625-cd22de39d3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3fHxGaW5lJTIwRGluaW5nfGVufDB8fHx8MTcwMTg4MzkyMXww&ixlib=rb-4.0.3&q=80&w=1080',
          address: '123 Main St, Anytown',
          description: 'Authentic Indian cuisine with a modern twist.'
        };
        const fetchedDishes: Dish[] = [
          { id: 'd1', name: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken pieces.', price: 15.99, imageUrl: 'https://images.unsplash.com/photo-1605342411139-44af1bb797db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDZ8fEJ1dHRlciUyMENoaWNrZW58ZW58MHx8fHwxNzA3OTU2NzY1fDA&ixlib=rb-4.0.3&q=80&w=1080' },
          { id: 'd2', name: 'Garlic Naan', description: 'Soft leavened bread brushed with garlic butter.', price: 3.50, imageUrl: 'https://images.unsplash.com/photo-1603894438317-5e92621c97a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDN8fEdhcmxpYyUyME5hYW58ZW58MHx8fHwxNzA3OTU2ODEzfDA&ixlib=rb-4.0.3&q=80&w=1080' },
          { id: 'd3', name: 'Paneer Tikka Masala', description: 'Grilled paneer cheese in a spiced tomato-onion gravy.', price: 14.50, imageUrl: 'https://images.unsplash.com/photo-1626244186591-177ee14dcc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDR8fVBhbmVlciUyMFRpa2thfGVufDB8fHx8MTcwNzk1Njg1OXww&ixlib=rb-4.0.3&q=80&w=1080' }
        ];
        setRestaurant(fetchedRestaurant);
        setDishes(fetchedDishes);
      } catch (err) {
        setError('Failed to fetch restaurant details.');
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurantDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <p>Loading restaurant details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--destructive)]">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--muted-foreground)]">
        <p>Restaurant not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-lg shadow-md p-6 mb-8">
          <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-[var(--primary-foreground)]">{restaurant.name}</h1>
          <p className="text-lg text-[var(--muted-foreground)] mb-2">{restaurant.cuisine} Cuisine</p>
          <div className="flex items-center text-md text-[var(--primary)] mb-2">
            <span className="mr-1 text-[var(--secondary-foreground)]">⭐</span> {restaurant.rating} Rating
          </div>
          <p className="text-[var(--foreground)] mb-4">{restaurant.address}</p>
          <p className="text-[var(--foreground)] leading-relaxed">{restaurant.description}</p>
        </div>

        <section className="my-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
