import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to My Laravel + Inertia App</h1>
      <Link href="/products" className="btn btn-primary">
        Go to Products
      </Link>
    </div>
  );
}
