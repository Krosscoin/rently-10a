import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
;
import { ProductImageGallery } from '../components/ProductImageGallery';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../hooks/useCart';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { QuantitySelector } from '../components/QuantitySelector';

export const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, error } = useProduct(productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-destructive p-4">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center p-4">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        {selectedImage && (
          <ProductImageGallery images={product.images} selectedImage={selectedImage} onImageSelect={setSelectedImage} />
        )}
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-foreground-primary tracking-tight">{product.name}</h1>
        <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <Separator className="my-2" />
        <div className="text-md leading-relaxed text-foreground-secondary">{product.description}</div>
        <div className="flex items-center gap-4 mt-4">
          <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
          <Button onClick={handleAddToCart} className="w-full max-w-[200px]">
            Add to Cart
          </Button>
        </div>
        {/* You can add more product details here, like specifications, reviews, etc. */}
        <Separator className="my-4" />
        <h2 className="text-2xl font-bold text-foreground-primary">Product Details</h2>
        <ul className="list-disc list-inside text-foreground-secondary">
          <li>Category: {product.category}</li>
          <li>Brand: {product.brand}</li>
          <li>Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
        </ul>
      </div>
    </div>
  );
};
