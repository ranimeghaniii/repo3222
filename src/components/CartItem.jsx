import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-200">
      <Link to={`/products/${item.id}`} className="w-24 h-24 flex-shrink-0 mr-4">
        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-md" />
      </Link>
      <div className="flex-grow">
        <Link to={`/products/${item.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {item.name}
        </Link>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label>
        <input
          type="number"
          id={`quantity-${item.id}`}
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 p-2 border border-gray-300 rounded-md text-center"
        />
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-600 hover:text-red-800 font-semibold px-2 py-1 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
