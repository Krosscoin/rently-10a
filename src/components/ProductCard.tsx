import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link to={`/products/${product.id}`}>
        <AspectRatio ratio={4 / 3}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </AspectRatio>
      </Link>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold text-foreground-primary truncate">
          <Link to={`/products/${product.id}`} className="hover:underline">{product.name}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <p className="text-sm text-foreground-secondary mt-1">{product.category}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
