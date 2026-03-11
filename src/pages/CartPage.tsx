import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const CartPage: React.FC = () => {
  const cartItems = [
    { id: '1', name: 'Margherita Pizza', price: 15.99, quantity: 1,  restaurant: 'Pizza Palace' },
    { id: '2', name: 'Caesar Salad', price: 9.50, quantity: 2, restaurant: 'Salad Stop' },
  ]; // Placeholder for cart items

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Example tax
  const deliveryFee = 5.00; // Example delivery fee
  const total = subtotal + tax + deliveryFee;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Link to="/">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <Card key={item.id} className="mb-4">
                <CardContent className="flex items-center p-4">
                  <img src="https://via.placeholder.com/80" alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-secondary-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.restaurant}</p>
                    <p className="text-lg text-accent">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">-</Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="sm">+</Button>
                    <Button variant="destructive" size="sm">Remove</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="md:col-span-1 p-4">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-bold text-xl text-primary">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <Button className="w-full mt-4">Proceed to Checkout</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
};
