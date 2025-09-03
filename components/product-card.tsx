import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group hover:shadow-2xl shadow-pink-700 transition duration-300 py-0 h-full flex flex-col border-gray-300 border rounded-lg">
        {product.images && product.images[0] && (
          <div className="relative w-full h-80">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold  bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-transparent">
            {product.name}
          </CardTitle>
          <CardContent className="p-2 flex-grow flex flex-col justify-between">
            <p className="text-slate-900 text-md mb-1">{product.description}</p>
            {price && price.unit_amount && (
              <p className="text-lg text-gray-900 font-semibold">
                D{(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
            <Button className="mt-2 bg-pink-500 text-white hover:bg-pink-300">
              View product details
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
