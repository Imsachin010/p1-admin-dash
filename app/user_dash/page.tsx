"use client";

import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 99.99,
    description: "This is a sample product description for Product 1.",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 149.99,
    description: "This is a sample product description for Product 2.",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 199.99,
    description: "This is a sample product description for Product 3.",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 299.99,
    description: "This is a sample product description for Product 4.",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to your dashboard!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
