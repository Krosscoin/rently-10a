import { useState, useEffect } from 'react';
import { Product } from '../types';

interface UseProductResult {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

// Mock API call to simulate fetching product data
const fetchProductById = async (id: string): Promise<Product | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === '123') {
        resolve({
          id: '123',
          name: 'Premium Wireless Headphones',
          price: 199.99,
          description: 'Experience immersive sound with these noise-cancelling wireless headphones. Featuring long-lasting battery life and crystal-clear audio.',
          images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06f2e2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1546435770-a3e390c29f63?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1572529949774-c3614856b3e8?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
             'https://images.unsplash.com/photo-1520638023307-5ea0cb54e339?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          category: 'Electronics',
          brand: 'SoundBliss',
          inStock: true,
          reviews: [
            { id: 'r1', rating: 5, comment: 'Amazing sound quality!', author: 'Alice' },
            { id: 'r2', rating: 4, comment: 'Comfortable fit.', author: 'Bob' },
          ],
        });
      } else if (id === '456') {
        resolve({
          id: '456',
          name: 'Smart Fitness Tracker',
          price: 79.99,
          description: 'Monitor your health and fitness with this advanced smart tracker. Features heart rate, step count, and sleep tracking.',
          images: [
           'https://images.unsplash.com/photo-1579586395563-0d35467f6ee6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1558611848-73f7eb4001ce?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          category: 'Wearables',
          brand: 'FitLife',
          inStock: true,
          reviews: [
            { id: 'r3', rating: 4, comment: 'Battery lasts a week!', author: 'Charlie' },
          ],
        });
       } else if (id === '789') {
        resolve({
          id: '789',
          name: 'Organic Green Tea Blend',
          price: 15.50,
          description: 'A soothing and refreshing blend of organic green tea leaves, perfect for your morning ritual or an afternoon pick-me-up.',
          images: [
            'https://images.unsplash.com/photo-1627443153578-831671569424?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1627443153569-2a931454e954?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          category: 'Food & Beverage',
          brand: 'NaturePure',
          inStock: false,
          reviews: [],
        });
      } else {
        resolve(null); // Product not found
      }
    }, 1000); // Simulate network delay
  });
};

export const useProduct = (productId?: string): UseProductResult => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (!productId) {
        setError('No product ID provided.');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductById(productId);
        if (data) {
          setProduct(data);
        } else {
          setError('Product not found.');
        }
      } catch (err) {
        setError('Failed to fetch product data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  return { product, loading, error };
};
