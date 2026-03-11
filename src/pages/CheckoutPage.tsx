import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [processing, setProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    // Simulate API call
    try {
      if (!address || !paymentMethod) {
        throw new Error('Please fill in all details.');
      }
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
      console.log('Order placed!', { address, paymentMethod });
      navigate('/order-success'); // Redirect to a success page
    } catch (err: any) {
      setError(err.message || 'Failed to place order. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const subtotal = 34.99; // Placeholder
  const tax = subtotal * 0.08;
  const deliveryFee = 5.00;
  const total = subtotal + tax + deliveryFee;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Delivery Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="123 Main St, Anytown, USA"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="payment">Payment Method</Label>
                <Input
                  id="payment"
                  type="text"
                  placeholder="Credit Card, PayPal, etc."
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={processing}>
                {processing ? 'Processing...' : 'Place Order'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="p-4">
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
