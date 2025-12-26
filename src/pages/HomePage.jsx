import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Discover Your Perfect Ride at BikeShop
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        From rugged mountain bikes to sleek city cruisers, find the bike that
        fits your journey and style. Quality, performance, and adventure await.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Explore Bikes
        </Link>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Join Us
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-7l-6 2m0-2v10m0 0l3 5m-3-5a7 7 0 01-7 7h10a7 7 0 01-7-7z"></path></svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Selection</h3>
          <p className="text-gray-600 text-center">
            Find the perfect bike for any terrain or purpose, from leading brands.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.928 12c0 3.059 1.488 5.679 3.65 7.153a12.007 12.007 0 008.572 0c2.162-1.474 3.65-4.094 3.65-7.153a12.007 12.007 0 00-.317-2.316"></path></svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
          <p className="text-gray-600 text-center">
            Every bike is inspected for quality and performance, ensuring a great ride.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Shopping</h3>
          <p className="text-gray-600 text-center">
            Shop with confidence thanks to our secure payment and data protection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
