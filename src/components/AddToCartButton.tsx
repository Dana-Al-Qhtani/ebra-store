"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";

/**
 * AddToCartButton
 * Adds 1 item to cart and shows a small success toast.
 */
export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [showToast, setShowToast] = useState(false);

  function handleAdd() {
    // Add 1 quantity
    addItem(product, 1);

    // Show toast
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 1200);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-md border bg-gray-100 px-4 py-2 text-sm text-gray-900 hover:bg-gray-200"
      >
        Add to cart
      </button>

      {/* Toast */}
      {showToast && (
        <div className="pointer-events-none absolute -top-11 left-0 rounded-md border bg-white px-3 py-2 text-xs text-gray-900 shadow-sm">
          Added to cart ✅
        </div>
      )}
    </div>
  );
}