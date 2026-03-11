import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Restaurant } from '../types/Restaurant';
import { MenuItem } from '../types/MenuItem';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    reviews: 234,
    deliveryFee: 2.99,
    imageUrl: 'https://placehold.co/600x400'
  },
  {
    id: '2',
    name: 'Burger Joint',
    cuisine: 'American, Burgers',
    rating: 4.2,
    reviews: 180,
    deliveryFee: 1.50,
    imageUrl: 'https://placehold.co/600x400'
  },
  {
    id: '3',
    name: 'Sushi Zen',
    cuisine: 'Japanese, Sushi',
    rating: 4.8,
    reviews: 300,
    deliveryFee: 3.50,
    imageUrl: 'https://placehold.co/600x400'
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    cuisine: 'Mexican, Tacos',
    rating: 4.1,
    reviews: 120,
    deliveryFee: 0.99,
    imageUrl: 'https://placehold.co/600x400'
  },
];

const mockMenuItems: MenuItem[] = [
    {
        id: 'm1',
        restaurantId: '1',
        name: 'Pepperoni Pizza',
        description: 'Classic pepperoni pizza with mozzarella cheese.',
        price: 12.99,
        imageUrl: 'https://placehold.co/150x100'
    },
    {
        id: 'm2',
        restaurantId: '1',
        name: 'Margarita Pizza',
        description: 'Fresh basil, mozzarella, and tomato sauce.',
        price: 11.50,
        imageUrl: 'https://placehold.co/150x100'
    },
    {
        id: 'm3',
        restaurantId: '2',
        name: 'Cheeseburger Deluxe',
        description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce.',
        price: 9.99,
        imageUrl: 'https://placehold.co/150x100'
    },
    {
        id: 'm4',
        restaurantId: '2',
        name: 'Fries (Large)',
        description: 'Crispy golden fries, generously salted.',
        price: 3.50,
        imageUrl: 'https://placehold.co/150x100'
    },
];

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [restaurant, setRestaurant] = React.useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([]);

  React.useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const foundRestaurant = mockRestaurants.find(r => r.id === id);
        if (!foundRestaurant) {
          throw new Error('Restaurant not found');
        }
        setRestaurant(foundRestaurant);

        const foundMenuItems = mockMenuItems.filter(item => item.restaurantId === id);
        setMenuItems(foundMenuItems);

      } catch (err: any) {
        setError(err.message || 'Failed to fetch restaurant details.');
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurantDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg">Loading restaurant details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-[--destructive]">Error: {error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg">Restaurant not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[--background] text-[--foreground]">
      <Header />
      <main className="flex-1 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <img
                alt={restaurant.name}
                className="aspect-video w-full object-cover rounded-lg"
                height="400"
                src={restaurant.imageUrl}
                width="600"
              />
              <h1 className="text-4xl font-bold tracking-tighter">{restaurant.name}</h1>
              <p className="text-lg text-[--muted-foreground]">{restaurant.cuisine}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < restaurant.rating ? 'text-[--primary]' : 'text-[--muted]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-lg text-[--muted-foreground]">({restaurant.reviews} reviews)</span>
              </div>
              <p className="text-xl font-semibold">Delivery fee: ${restaurant.deliveryFee.toFixed(2)}</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Menu</h2>
              <div className="grid gap-4">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg bg-[--card]">
                            <img
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-md"
                                src={item.imageUrl}
                            />
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-[--muted-foreground]">{item.description}</p>
                                <p className="font-medium">${item.price.toFixed(2)}</p>
                            </div>
                            <button className="ml-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[--background] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[--primary] text-[--primary-foreground] hover:bg-[--primary]/90 h-9 px-4 py-2">
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-[--muted-foreground]">No menu items available at this time.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetailPage;