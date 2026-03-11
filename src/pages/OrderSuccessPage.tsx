import * as React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const OrderSuccessPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.16))] py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <Card className="max-w-md w-full text-center p-6">
        <CardContent className="flex flex-col items-center justify-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-primary mb-2">Order Placed Successfully!</h1>
          <p className="text-lg text-muted-foreground mb-6">Thank you for your order. Your food is on its way!</p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
