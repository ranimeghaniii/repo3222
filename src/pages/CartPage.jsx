import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added any bikes yet.</p>
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Order Summary</h3>
          <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-6">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-lg shadow-lg mb-3"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 text-md shadow-sm"
          >
            Clear Cart
          </button>
          <Link
            to="/products"
            className="block text-center mt-4 text-blue-600 hover:underline text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
