
import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';

export default function EditProduct() {
  const { product } = usePage().props;
  const [form, setForm] = useState({
    name: product.name || '',
    price: product.price || '',
    description: product.description || '',
    quantity: product.quantity || '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    router.post(`/products/${product.id}`, {
      ...form,
      _method: 'put',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-lg text-center">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Price</label>
            <input name="price" value={form.price} onChange={handleChange} required type="number" step="0.01" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
            <input name="quantity" value={form.quantity} onChange={handleChange} required type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">Update</button>
        </form>
      </div>
    </div>
  );
}
