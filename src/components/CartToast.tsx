"use client";

import { useEffect } from "react";
import { useCart } from "@/context/cart-context";

/**
 * CartToast
 * Shows a small notification when an item is added to cart.
 * Uses toastMessage from cart-context (no template strings).
 */
export default function CartToast() {
  const { toastMessage, clearToast } = useCart();

  // Just in case: if user navigates quickly, auto-clear after a short time
  useEffect(() => {
    if (!toastMessage) return;
    const t = window.setTimeout(() => clearToast(), 2000);
    return () => window.clearTimeout(t);
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-md bg-black px-4 py-3 text-sm text-white shadow-lg">
        <span>{toastMessage}</span>

        <button
          type="button"
          onClick={clearToast}
          className="rounded bg-white/10 px-2 py-1 text-xs hover:bg-white/20"
          aria-label="Close"
        >
          Close
        </button>
      </div>
    </div>
  );
}