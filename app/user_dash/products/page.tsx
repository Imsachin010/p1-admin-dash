"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 249.99,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with long battery life",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Earbuds",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with RGB lighting",
    price: 79.99,
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with customizable keys",
    price: 149.99,
    image: "https://via.placeholder.com/300x200?text=Keyboard",
  },
  {
    id: 6,
    name: "Portable Speaker",
    description: "Waterproof portable speaker with great sound",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Speaker",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="flex items-center gap-4">
            <span className="text-lg">
              Cart: {Object.values(cart).reduce((a, b) => a + b, 0)} items
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleViewDetails(product)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button
                  onClick={handleCloseDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <p className="text-xl font-bold text-blue-600 mb-4">
                ${selectedProduct.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(selectedProduct.id)}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
