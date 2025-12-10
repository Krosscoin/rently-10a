export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'starters' | 'main' | 'sides' | 'drinks';
}
