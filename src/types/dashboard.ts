export interface SalesData {
  date: string;
  sales: number;
  revenue: number;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: string;
}

export interface CategorySales {
  name: string;
  value: number;
}
