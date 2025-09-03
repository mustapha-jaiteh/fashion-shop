import React from "react";
import { stripe } from "@/lib/stripe";
import ProductDetails from "@/components/product-details";
import { json } from "stream/consumers";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetails product={plainProduct} />;
};

export default page;
