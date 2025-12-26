import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-red-600">Product Not Found</h2>
        <p className="mt-4 text-gray-600">The bike you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    navigate('/cart');
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-8 gap-8 mt-8">
      <div className="md:w-1/2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-700 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <span className="text-gray-600 font-semibold mr-2">Category:</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{product.category}</span>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-gray-600 font-semibold mr-2">Availability:</span>
            {product.stock > 0 ? (
              <span className="text-green-600 font-semibold">In Stock ({product.stock})</span>
            ) : (
              <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button
            onClick={() => navigate('/products')}
            className="flex-1 px-6 py-3 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-md transition duration-300 text-lg shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
