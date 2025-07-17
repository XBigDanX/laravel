import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';

export default function Products() {
  const { products } = usePage().props;

  const handleDelete = id => {
    if (confirm('Are you sure you want to delete this product?')) {
      router.delete(`/products/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-lg">Products</h1>
            <p className="text-lg text-gray-500">Browse and manage your product catalog</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back Home
            </Link>
            <Link
              href="/products/create"
              className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              + New Product
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-400 text-xl py-20">
              No products found.
            </div>
          )}
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-200 flex flex-col overflow-hidden border border-gray-100"
            >
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 truncate">{product.name}</h2>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-500 mb-4 line-clamp-3">{product.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-400">Qty: {product.quantity}</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/products/${product.id}/edit`}
                    className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-150 text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-150"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
