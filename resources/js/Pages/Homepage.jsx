import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';

export default function Homepage() {
  const { auth } = usePage().props;

  const handleLogout = e => {
    e.preventDefault();
    router.post('/logout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border border-gray-100">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Welcome!</h1>
        <p className="text-lg text-gray-500 mb-8">This is your modern Laravel + Inertia + React app. Manage your products with style.</p>
        {auth && auth.user ? (
          <>
            <div className="mb-6 text-gray-700 text-lg">Logged in as <span className="font-bold">{auth.user.name}</span></div>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Go to Products
              </Link>
              <form onSubmit={handleLogout}>
                <button type="submit" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">Logout</button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex gap-4">
            <Link
              href="/login"
              className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
