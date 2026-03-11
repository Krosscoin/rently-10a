export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: number;
  imageUrl: string;
  description: string;
  menu: MenuItem[];
}
