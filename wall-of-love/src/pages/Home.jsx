import { Link } from "react-router-dom";
import { products } from "../data/products";
import { reviews } from "../data/reviews";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ReviewCard from "../components/WallOfLove/ReviewCard";

const Home = () => {
  const featuredReviews = reviews.slice(0, 3);
  const [currentPage, setCurrentPage] = useState(1);
  const [stats, setStats] = useState({ customers: 0, reviews: 0, rating: 0 });
  const productsPerPage = 6;
  
  // Animated stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        customers: 2847,
        reviews: reviews.length,
        rating: 4.8
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* ================= HERO / TRUST SECTION ================= */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6 text-center relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <span className="text-4xl opacity-20">⭐</span>
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <span className="text-3xl opacity-20">❤️</span>
        </div>
        <div className="absolute bottom-10 left-1/4 animate-bounce delay-1000">
          <span className="text-2xl opacity-20">🚀</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          ❤️ Loved by Real Customers
        </h1>

        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-xl">
          Authentic reviews collected from Amazon, Google, Flipkart, LinkedIn and more. 
           No fake testimonials. No paid actors.
        </p>

        {/* Live Stats */}
        <div className="flex justify-center gap-8 mb-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.customers.toLocaleString()}+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.reviews}+</div>
            <div className="text-sm text-gray-300">Real Reviews</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.rating}/5</div>
            <div className="text-sm text-gray-300">Average Rating</div>
          </div>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mb-8">
          <span className="px-4 py-1 rounded-full bg-orange-500 text-white text-sm animate-pulse">
            🟠 Amazon
          </span>
          <span className="px-4 py-1 rounded-full bg-blue-500 text-white text-sm animate-pulse delay-100">
            🟢 Flipkart
          </span>
          <span className="px-4 py-1 rounded-full bg-green-500 text-white text-sm animate-pulse delay-200">
            🟢 Google
          </span>
          <span className="px-4 py-1 rounded-full bg-purple-500 text-white text-sm animate-pulse delay-300">
            🟣 G2
          </span>
          <span className="px-4 py-1 rounded-full bg-gray-600 text-white text-sm animate-pulse delay-500">
            🟦 LinkedIn
          </span>
        </div>

        <Link
          to="/wall-of-love"
          className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
        >
          See What Customers Are Saying →
        </Link>
      </section>



      {/* ================= FEATURED REVIEWS PREVIEW ================= */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            ⭐ Customer Love (Preview)
          </h2>
          <p className="text-gray-600">See what our customers are saying about us</p>
          
          {/* Live review ticker */}
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 inline-block">
            <div className="flex items-center gap-2 text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live: New review from Flipkart 2 mins ago</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => (
            <div 
              key={review.id} 
              className="transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/wall-of-love"
            className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-semibold bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-300"
          >
            <span>View full Wall of Love</span>
            <span className="animate-bounce">→</span>
          </Link>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="bg-white px-6 py-14">
        <h2 className="text-2xl font-semibold text-center mb-10">
          🛍️ Our Products
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  {product.name}
                </h3>

                <p className="text-slate-900 font-bold text-xl mb-4">
                  {product.price}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors inline-block w-full text-center"
                >
                  View Product →
                </Link>
              </div>
            </div>
          ))}
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
      </section>
    </div>
  );
};

export default Home;
