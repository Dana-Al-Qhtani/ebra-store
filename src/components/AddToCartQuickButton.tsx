"use client";

import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/product";

/**
 * AddToCartQuickButton
 * Client-only button used inside ProductCard (which is a Server Component).
 * It prevents the Link navigation and adds the item to the cart.
 */

export default function AddToCartQuickButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product, 1)}
      className="rounded-md bg-black px-3 py-2 text-xs font-medium text-white hover:opacity-90"
    >
      Add to cart
    </button>
  );
}