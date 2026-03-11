import { Restaurant } from "../types";

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    address: '123 Pizza Lane',
    minOrder: 15.00,
    deliveryFee: 3.00,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-e199026fd0ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    menu: [
      { id: 'm1', name: 'Margherita Pizza', description: 'Classic pizza with tomato and mozzarella', price: 15.99, imageUrl: 'https://images.unsplash.com/photo-1627885012558-a28a3fdf2f1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 'm2', name: 'Pepperoni Pizza', description: 'Pizza with spicy pepperoni', price: 17.50, imageUrl: 'https://images.unsplash.com/photo-1604382163450-48e02d0cfce7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 'm3', name: 'Garlic Knots', description: 'Baked dough knots with garlic butter', price: 6.00, imageUrl: 'https://images.unsplash.com/photo-1590740683056-bbaea0dc36b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '2',
    name: 'Burger Joint',
    cuisine: 'American',
    address: '456 Burger Blvd',
    minOrder: 10.00,
    deliveryFee: 2.50,
    imageUrl: 'https://images.unsplash.com/photo-1561758033-ff81432e650d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    menu: [
      { id: 'm4', name: 'Classic Burger', description: 'Beef patty with lettuce, tomato, onion', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 'm5', name: 'Fries', description: 'Crispy golden fries', price: 4.00, imageUrl: 'https://images.unsplash.com/photo-1630408892417-640f1a941f10?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
  {
    id: '3',
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    address: '789 Sushi St',
    minOrder: 20.00,
    deliveryFee: 4.00,
    imageUrl: 'https://images.unsplash.com/photo-1579871131105-df2dc7a7d187?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    menu: [
      { id: 'm6', name: 'California Roll', description: 'Crab, avocado, cucumber', price: 10.00, imageUrl: 'https://images.unsplash.com/photo-1582046424915-0556e4c2f6d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 'm7', name: 'Sashimi Platter', description: 'Assorted fresh fish slices', price: 25.00, imageUrl: 'https://images.unsplash.com/photo-1621298816828-b80c102a900c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
  },
];

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRestaurants);
    }, 500);
  });
};

export const fetchRestaurantById = async (id: string): Promise<Restaurant | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const restaurant = mockRestaurants.find((r) => r.id === id);
      resolve(restaurant || null);
    }, 500);
  });
};
