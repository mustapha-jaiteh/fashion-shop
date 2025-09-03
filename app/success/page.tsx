"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const SuccessPage = () => {
  const { clear } = useCartStore();

  useEffect(() => {
    clear();
  }, [clear]);
  return (
    <div>
      <Card className="max-w-md mx-auto mb-8 shadow-2xl shadow-pink-700 ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-pink-600 bg-clip-text text-transparent text-center">
            Thank you for your purchase!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <h2 className="font-bold text-xl">Your process is completed!!!</h2>
            <p className="font-semibold text-lg text-center">
              Enjoy our free delivery service to your door step in two hours
            </p>
          </div>

          <Button className="mt-4 bg-pink-500 hover:bg-pink-300 text-white ">
            <Link href={"/products"}>Continue shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessPage;
