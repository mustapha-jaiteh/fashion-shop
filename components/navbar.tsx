"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const { items, addItem, removeItem, clear } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-pink-400 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-pink-900 bg-clip-text text-transparent"
        >
          Mustik's Online Fashion Shop
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-md font-bold hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/products"
            className="text-md font-bold hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="text-md font-bold hover:text-blue-600"
          >
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-xl text-gray-900">
                {/* {cartCount} */}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="text-md block font-bold hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-md block font-bold hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="text-md block font-bold  hover:text-blue-600"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
