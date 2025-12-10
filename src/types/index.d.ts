export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  reviews?: Review[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date?: string; // Optional: date of review
}

// Typically, you'd also have types for User, Order, etc.
// For this specific task, Product and Review are the main focus.
