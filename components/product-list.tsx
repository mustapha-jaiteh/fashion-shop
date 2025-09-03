"use client";

import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./product-card";

interface Props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: Props) => {
  const [serachTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    const term = serachTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md rounded-xl border border-gray-500 bg-white px-4 py-2 focus:outline-none"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts ? (
          filteredProducts.map((product, key) => (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          ))
        ) : (
          <li className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-2xl font-bold">No products found</h1>
            <p className="text-slate-900 text-lg">
              Try searching for a product or browse our collection
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
