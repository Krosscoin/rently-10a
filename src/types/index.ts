export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  address: string;
  minOrder: number;
  deliveryFee: number;
  imageUrl: string;
  menu: MenuItem[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurant: string;
  imageUrl: string;
}
