import { reviews } from "../data/reviews";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";

const WallOfLove = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  
  const getProductForReview = (productId) => {
    return products.find(p => p.id === productId);
  };

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">❤️ Wall of Love</h1>
          <p className="text-xl text-gray-200">Real stories from real customers across platforms</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.map(review => {
              const product = getProductForReview(review.productId);
              return (
                <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{review.name}</span>
                      {review.verified && <span className="text-green-600 text-sm">✓</span>}
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {review.source}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-orange-400 text-lg">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>

                  {review.text && (
                    <p className="text-gray-700 mb-4 leading-relaxed italic">"{review.text}"</p>
                  )}
                  
                  {review.image && (
                    <img 
                      src={review.image} 
                      alt="Review screenshot"
                      className="w-full rounded-lg border border-gray-200 mb-4"
                    />
                  )}
                  
                  {review.video && (
                    <div className="mb-4">
                      <iframe 
                        src={review.video}
                        className="w-full h-48 rounded-lg border border-gray-200"
                        allowFullScreen
                        title="Review video"
                      />
                    </div>
                  )}

                  {/* Product Reference */}
                  {product && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            to={`/product/${product.id}`}
                            className="text-slate-900 hover:text-slate-700 font-semibold text-sm block"
                          >
                            🟢 {product.name}
                          </Link>
                          <span className="text-xs text-gray-500">View Product →</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-xs text-gray-400 mt-3">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-slate-900 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
