import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-bold">{item.price}</p>
              </div>
            ))}
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total: ₹{getCartTotal().toLocaleString()}</span>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full mt-6 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 disabled:bg-gray-400"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;