import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold tracking-wider">
          BikeShop
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/products" className="text-white hover:text-blue-200 text-lg transition duration-300">
            Products
          </Link>
          <Link to="/cart" className="relative text-white hover:text-blue-200 text-lg transition duration-300">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-white text-lg">Hello, {user?.username || user?.email}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 shadow-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 shadow-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 shadow-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
