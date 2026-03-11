import { Restaurant } from '../types';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Great Indian Kitchen',
    cuisine: ['Indian', 'North Indian', 'South Indian'],
    rating: 4.5,
    deliveryTime: 30,
    imageUrl: 'https://via.placeholder.com/400x250/FF6347/FFFFFF?text=Indian+Kitchen',
    description: 'Authentic Indian dishes, from spicy curries to delicious dosas.',
    menu: [
      { id: 'm1', name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry.', price: 15.99 },
      { id: 'm2', name: 'Paneer Tikka Masala', description: 'Grilled paneer in a rich gravy.', price: 14.50 },
      { id: 'm3', name: 'Garlic Naan', description: 'Soft bread with garlic.', price: 3.00 },
      { id: 'm4', name: 'Hyderabadi Biryani', description: 'Fragrant rice with tender chicken.', price: 16.99 },
    ],
  },
  {
    id: '2',
    name: 'Pizza Palace',
    cuisine: ['Italian', 'Pizza'],
    rating: 4.2,
    deliveryTime: 40,
    imageUrl: 'https://via.placeholder.com/400x250/4CAF50/FFFFFF?text=Pizza+Palace',
    description: 'Freshly baked pizzas with a variety of toppings.',
    menu: [
      { id: 'm5', name: 'Margherita Pizza', description: 'Classic pizza with tomato and mozzarella.', price: 12.00 },
      { id: 'm6', name: 'Pepperoni Pizza', description: 'Loaded with pepperoni slices.', price: 14.00 },
      { id: 'm7', name: 'Veggie Delight', description: 'Assortment of fresh vegetables.', price: 13.50 },
    ],
  },
  {
    id: '3',
    name: 'Sushi Sensation',
    cuisine: ['Japanese', 'Sushi'],
    rating: 4.8,
    deliveryTime: 25,
    imageUrl: 'https://via.placeholder.com/400x250/2196F3/FFFFFF?text=Sushi+Sensation',
    description: 'Finest sushi and sashimi in town.',
    menu: [
      { id: 'm8', name: 'Salmon Nigiri', description: 'Fresh salmon on sushi rice.', price: 6.50 },
      { id: 'm9', name: 'California Roll', description: 'Crab, avocado, and cucumber.', price: 8.00 },
      { id: 'm10', name: 'Tuna Sashimi', description: 'Premium tuna slices.', price: 10.00 },
    ],
  },
  {
    id: '4',
    name: 'Burgers & Shakes',
    cuisine: ['American', 'Burgers'],
    rating: 4.0,
    deliveryTime: 35,
    imageUrl: 'https://via.placeholder.com/400x250/FFC107/FFFFFF?text=Burgers+%26+Shakes',
    description: 'Juicy burgers and thick milkshakes.',
    menu: [
      { id: 'm11', name: 'Classic Cheeseburger', description: 'Beef patty with cheese, lettuce, tomato.', price: 11.00 },
      { id: 'm12', name: 'Fries', description: 'Crispy golden fries.', price: 4.00 },
      { id: 'm13', name: 'Vanilla Shake', description: 'Creamy vanilla milkshake.', price: 6.00 },
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

export const fetchRestaurantById = async (id: string): Promise<Restaurant | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRestaurants.find(restaurant => restaurant.id === id));
    }, 500);
  });
};
