"use client";

import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

const ProductDetails = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;

  const cartItem = items.find((i) => i.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="relative w-full h-96 md:w-1/2 rounded-lg overflow-hidden">
          <Image
            alt={product.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
            className="hover:opacity-90 transition duration-300 rounded-t-lg"
          />
        </div>
      )}
      <div className="md:w-1/2 ">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          {product.name}
        </h1>
        {product.description && (
          <p className="text-md font-semibold text-gray-600 mb-4">
            {product.description}
          </p>
        )}
        {price && price.unit_amount && (
          <p className="text-2xl text-slate-900 font-semibold mb-4  px-4 rounded-md">
            D{(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className=" hover:bg-black hover:text-white"
            onClick={() => removeItem(product.id)}
          >
            -
          </Button>
          <span className="text-lg font-semibold text-slate-900">
            {quantity}
          </span>
          <Button
            variant="outline"
            className="hover:bg-black hover:text-white"
            onClick={handleAddToCart}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
