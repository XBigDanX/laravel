import React from 'react';
import { Link } from '@inertiajs/react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border border-gray-100">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Welcome!</h1>
        <p className="text-lg text-gray-500 mb-8">This is your modern Laravel + Inertia + React app. Manage your products with style.</p>
        <Link
          href="/products"
          className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Go to Products
        </Link>
      </div>
    </div>
  );
}
