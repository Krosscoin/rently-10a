import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { ProductCard } from './components/ProductCard'; // Assuming ProductCard might be used on a homepage or listing page for example
import { CartProvider } from './hooks/useCart';
import { AppHeader } from './components/AppHeader';

function App() {
  return (
    <Router>
      <CartProvider>
        <AppHeader />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/products/:productId" element={<ProductPage />} />
            {/* Add other routes here, e.g., for a homepage or product listing */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

// Placeholder for a Home component - in a real app, this would be a full page
const Home: React.FC = () => (
  <div className="text-center p-8">
    <h1 className="text-3xl font-bold text-foreground-primary">Welcome to Our Store!</h1>
    <p className="mt-4 text-foreground-secondary">Explore our amazing products.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {/* Example usage of ProductCard, replace with actual product data */}
      <ProductCard
        product={{
          id: '1', name: 'Stylish Running Shoes', price: 89.99, description: 'Comfortable and durable running shoes for everyday use.',
          images: ['https://via.placeholder.com/400x300/a8dadc/ffffff?text=Running+Shoes'],
          category: 'Footwear', brand: 'Sporty', inStock: true
        }}
      />
            <ProductCard
        product={{
          id: '2', name: 'Ergonomic Office Chair', price: 299.99, description: 'Designed for ultimate comfort and support during long working hours.',
          images: ['https://via.placeholder.com/400x300/fec89a/ffffff?text=Office+Chair'],
          category: 'Furniture', brand: 'ErgoHome', inStock: true
        }}
      />
    </div>
  </div>
);

export default App;
