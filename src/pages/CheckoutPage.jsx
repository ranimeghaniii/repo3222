import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate order processing and clear cart after a short delay
    const timer = setTimeout(() => {
      clearCart();
    }, 3000); // Clear cart after 3 seconds

    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-lg w-full">
        <svg
          className="w-24 h-24 mx-auto text-green-500 mb-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase from BikeShop.
        </p>
        <p className="text-2xl font-bold text-blue-600 mb-8">
          Total Paid: ${cartTotal.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-8">
          Your order is being processed and will be shipped soon.
          You can return to the homepage or continue exploring more bikes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-lg transition duration-300 text-lg"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-4 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-md shadow-md transition duration-300 text-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
