import { Link } from "react-router-dom";
import { products } from "../../data/products";

const ReviewCard = ({ review }) => {
  const product = products.find(p => p.id === review.productId);

  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
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

      {product && (
        <div className="border-t border-gray-200 pt-3 mt-3">
          <Link 
            to={`/product/${product.id}`}
            className="flex items-center gap-2 text-slate-900 hover:text-slate-700 text-sm font-semibold"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-8 h-8 object-cover rounded"
            />
            <span>🟢 {product.name}</span>
          </Link>
          <span className="text-xs text-gray-500 ml-10">View Product →</span>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;