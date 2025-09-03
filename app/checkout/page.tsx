"use client";

import React from "react";
import { useCartStore } from "@/store/cart-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import checkoutAction from "./checkout-action";

const CheckoutPage = () => {
  const { items, addItem, removeItem } = useCartStore();
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (totalPrice === 0 || items.length === 0) {
    return (
      <div className="flex  items-center justify-center">
        <h1 className="text-2xl font-bold">No items in your cart</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <Card className="max-w-md mx-auto mb-8 shadow-2xl shadow-pink-700 ">
        <CardHeader>
          <CardTitle className="font- text-xl">Order summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item, key) => (
              <li
                key={key}
                className="flex flex-col border-b border-gray-300 pb-2"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={80}
                        height={60}
                      />
                    )}
                    <p className="font-bold text-slate-900">{item.name}</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-semibold">Quantity: {item.quantity}</p>
                    <p className="font-semibold">
                      Price of each: D{(item.price / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    variant="outline"
                    className=" hover:bg-black hover:text-white"
                    size={"sm"}
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold text-slate-900">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    className="hover:bg-black hover:text-white"
                    size={"sm"}
                    onClick={() => addItem(item)}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
            <p className="text-lg font-semibold text-gray-900">
              Total price: D{(totalPrice / 100).toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button
          variant="default"
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-300 text-white"
        >
          Proceed to payment
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
