export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryEstimate: string;
  imageUrl: string;
  address: string;
  description?: string; // Optional description for detail page
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
