import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navigation = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">❤️ Wall of Love</Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-slate-900 border-b-2 border-slate-900' : 'text-gray-600 hover:text-slate-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/products') ? 'text-slate-900 border-b-2 border-slate-900' : 'text-gray-600 hover:text-slate-900'}`}
            >
              Products
            </Link>
            <Link 
              to="/wall-of-love" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/wall-of-love') ? 'text-slate-900 border-b-2 border-slate-900' : 'text-gray-600 hover:text-slate-900'}`}
            >
              Reviews
            </Link>
            <Link 
              to="/checkout" 
              className="relative bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;