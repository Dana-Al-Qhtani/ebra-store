"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";

export default function CartItemRow({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const { addItem, decreaseItem, removeItem } = useCart();

  return (
    <div className="flex gap-4 rounded-lg border bg-white p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-50">
        <Image src={product.image} alt={product.title} fill className="object-contain p-2" />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${product.id}`} className="text-sm font-medium text-gray-900">
              {product.title}
            </Link>
            <p className="text-xs text-gray-500">{product.category}</p>
          </div>

          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="text-xs underline text-gray-600 hover:text-gray-900"
          >
            Remove
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => decreaseItem(product.id)}
              className="h-8 w-8 rounded-md border bg-white hover:bg-gray-50"
            >
              −
            </button>

            <span className="min-w-8 text-center text-sm">{quantity}</span>

            <button
              type="button"
              onClick={() => addItem(product, 1)}
              className="h-8 w-8 rounded-md border bg-white hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}