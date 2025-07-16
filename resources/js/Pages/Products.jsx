import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Products() {
  const { products } = usePage().props;

  return (
    <div>
      <h1>Products List</h1>
      
      <Link href="/">← Back to Homepage</Link>

      <ul style={{ marginTop: '1rem' }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            <strong>{product.name}</strong> — ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
