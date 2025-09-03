import React from "react";
import { stripe } from "@/lib/stripe";
import ProductList from "@/components/product-list";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 20,
  });
  return (
    <div className="p-8 pt-4">
      <h1 className="bg-gradient-to-r from-blue-900 to-pink-900 bg-clip-text text-transparent text-6xl font-bold  text-center mb-8">
        All products
      </h1>
      <ProductList products={products.data} />
    </div>
  );
};

export default ProductsPage;
