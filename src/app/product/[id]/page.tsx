import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/fakeStore";
import type { Product } from "@/types/product";
import ProductComments from "@/components/ProductComments";
import AddToCartButton from "@/components/AddToCartButton";

function Stars({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-gray-900">
        {"★".repeat(rounded)}
        {"☆".repeat(5 - rounded)}
      </span>
    </div>
  );
}

export default async function ProductDetailsPage({
  params,
}: {
  // ✅ In newer Next.js versions, params can be a Promise
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params safely
  const { id } = await params;

  const product: Product | null = await getProductById(id);

  // ✅ show Next.js 404 page if product is missing
  if (!product) notFound();

  const ratingValue =
    typeof product?.rating?.rate === "number" ? product.rating.rate : 0;

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="rounded-lg border bg-white p-6">
          <div className="relative aspect-square overflow-hidden rounded-md bg-gray-50">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Details */}
        <div className="rounded-lg border bg-white p-6 space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center gap-2">
              <Stars value={ratingValue} />
              {ratingValue > 0 && (
                <span className="text-sm text-gray-600">
                  {ratingValue.toFixed(1)}
                </span>
              )}
              {typeof product?.rating?.count === "number" && (
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              )}
            </div>

            <p className="text-xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-sm text-gray-600">{product.category}</p>
          </div>

          <p className="text-sm leading-7 text-gray-700">{product.description}</p>

          {/* Add to cart */}
          <div className="pt-2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Comments */}
      <ProductComments productId={product.id} />
    </div>
  );
}