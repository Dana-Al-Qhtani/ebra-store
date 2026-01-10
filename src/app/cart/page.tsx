"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import CartItemRow from "@/components/CartItemRow";
import PaymentMethods from "@/components/PaymentMethods";

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Cart</h1>
          <p className="text-sm text-gray-600">Review your selected products.</p>
        </div>

        {hasItems && (
          <button
            type="button"
            onClick={clearCart}
            className="rounded-md border bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50"
          >
            Clear cart
          </button>
        )}
      </div>

      {/* Empty state */}
      {!hasItems ? (
        <div className="rounded-lg border bg-white p-6">
          <p className="text-sm text-gray-700">Your cart is empty.</p>
          <Link
            href="/"
            className="mt-3 inline-block rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-50"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Items list */}
          <div className="space-y-4">
            {items.map((line) => (
              <CartItemRow
                key={line.product.id}
                product={line.product}
                quantity={line.quantity}
              />
            ))}
          </div>

          {/* Summary + Payment */}
          <div className="space-y-4">
            <aside className="rounded-lg border bg-white p-5">
              <h2 className="text-lg font-semibold text-gray-900">Summary</h2>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-gray-600">Free</span>
                </div>

                <div className="pt-3 border-t flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
                onClick={() => alert("Checkout is a UI demo in this assessment.")}
              >
                Checkout
              </button>
            </aside>

            {/* Payment methods with logos */}
            <PaymentMethods />
          </div>
        </div>
      )}
    </div>
  );
}