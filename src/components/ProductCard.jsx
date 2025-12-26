import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-lg font-bold mb-3">${product.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <Link
            to={`/products/${product.id}`}
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
