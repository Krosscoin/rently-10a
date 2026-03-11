export interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: IMenuCategory;
  imageUrl: string;
}

export type IMenuCategory = 'Main Courses' | 'Appetizers' | 'Desserts' | 'Drinks' | 'Sides';
