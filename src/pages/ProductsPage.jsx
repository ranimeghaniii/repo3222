import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';

function ProductsPage() {
  return (
    <div className="py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Our Bike Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
