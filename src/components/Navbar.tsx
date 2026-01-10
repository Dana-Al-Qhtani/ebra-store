"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Ebra Store
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
            Shop
          </Link>

          <Link
            href="/cart"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
}