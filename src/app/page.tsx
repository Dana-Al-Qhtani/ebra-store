import ShopClient from "@/components/ShopClient";
import { getProducts } from "@/lib/fakeStore";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="text-sm text-gray-600">Browse products and add to cart.</p>
      </div>

      <ShopClient products={products} />
    </div>
  );
}