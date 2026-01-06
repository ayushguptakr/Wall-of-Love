import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { reviews } from "../data/reviews";
import { useCart } from "../context/CartContext";
import Navigation from "../components/Navigation";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const productReviews = reviews.filter(r => r.productId === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <p className="text-xl text-gray-600">Product not found</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Product Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-slate-900 mb-6">{product.price}</p>
                
                {/* Buy Options */}
                <div className="space-y-4 mb-6">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors text-lg font-semibold"
                  >
                    Add to Cart
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Buy from Official Store</p>
                    <p className="text-xs text-gray-500">Also available on Amazon, Flipkart & other platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              ❤️ Loved by customers
              <span className="ml-3 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {productReviews.length} reviews
              </span>
            </h2>

            {productReviews.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No reviews yet for this product.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productReviews.map(review => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        {review.verified && <span className="text-green-600 text-sm">✓</span>}
                      </div>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {review.source}
                      </span>
                    </div>
                    
                    <div className="text-orange-400 text-lg mb-3">
                      {"⭐".repeat(review.rating)}
                    </div>
                    
                    {review.text && (
                      <p className="text-gray-700 mb-3 leading-relaxed">{review.text}</p>
                    )}
                    
                    {review.image && (
                      <img 
                        src={review.image} 
                        alt="Review screenshot"
                        className="w-full rounded-lg border border-gray-200 mb-3"
                      />
                    )}
                    
                    {review.video && (
                      <div className="mb-3">
                        <iframe 
                          src={review.video}
                          className="w-full h-40 rounded-lg border border-gray-200"
                          allowFullScreen
                          title="Review video"
                        />
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-400 mt-3">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
