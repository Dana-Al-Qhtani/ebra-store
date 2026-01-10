"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";

/** Small helper to render stars */
function Stars({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-xs">
      <span className="text-gray-900">
        {"★".repeat(rounded)}
        {"☆".repeat(5 - rounded)}
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const ratingValue =
    typeof product?.rating?.rate === "number" ? product.rating.rate : 0;

  return (
    <div className="group rounded-lg border bg-white p-4">
      {/* ✅ IMPORTANT: correct route is /product/[id] => /product/5 */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-md bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        <div className="mt-3 space-y-1">
          <div className="flex items-center gap-2">
            <Stars value={ratingValue} />
            {ratingValue > 0 && (
              <span className="text-xs text-gray-600">
                {ratingValue.toFixed(1)}
              </span>
            )}
          </div>

          <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
            {product.title}
          </h3>

          <p className="text-sm font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-xs text-gray-500">{product.category}</p>
        </div>
      </Link>

      {/* Quick add (outside the Link so click won't navigate) */}
      <button
        type="button"
        onClick={() => addItem(product, 1)}
        className="mt-3 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm text-gray-900 hover:bg-gray-200"
      >
        Add to cart
      </button>
    </div>
  );
}