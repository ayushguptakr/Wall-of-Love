import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Success = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex items-center justify-center py-20">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center max-w-md">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
          <div className="space-y-3">
            <Link 
              to="/products" 
              className="block bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800"
            >
              Continue Shopping
            </Link>
            <Link 
              to="/" 
              className="block text-slate-900 hover:text-slate-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;