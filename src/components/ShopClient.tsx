"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductCard from "@/components/ProductCard";

type PriceRangeId = "all" | "0-99" | "100-199" | "200+";
type SortBy = "newest" | "price-asc" | "price-desc";

type PriceRange = {
  id: PriceRangeId;
  label: string;
  min: number | null;
  max: number | null;
};

const PRICE_RANGES: PriceRange[] = [
  { id: "all", label: "All Price", min: null, max: null },
  { id: "0-99", label: "$0.00 - 99.99", min: 0, max: 99.99 },
  { id: "100-199", label: "$100.00 - 199.99", min: 100, max: 199.99 },
  { id: "200+", label: "$200.00+", min: 200, max: null },
];

export default function ShopClient({
  products,
}: {
  products: Product[] | undefined | null;
}) {
  // ✅ IMPORTANT: make sure we always work with an array
  const safeProducts = Array.isArray(products) ? products : [];

  const [selectedCategory, setSelectedCategory] = useState<string>("All Rooms");
  const [priceRange, setPriceRange] = useState<PriceRangeId>("all");
  const [sortBy, setSortBy] = useState<SortBy>("newest");

  const categoryOptions = useMemo(() => {
    // ✅ Always return an array
    const unique = Array.from(
      new Set(safeProducts.map((p) => p.category).filter(Boolean))
    );

    // If API categories are weird, we still show them.
    return ["All Rooms", ...unique];
  }, [safeProducts]);

  const filtered = useMemo(() => {
    // ✅ Always start with an array copy
    let list = [...safeProducts];

    // Category filter
    if (selectedCategory !== "All Rooms") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const range = PRICE_RANGES.find((r) => r.id === priceRange) ?? PRICE_RANGES[0];
    if (range.min !== null) list = list.filter((p) => p.price >= range.min!);
    if (range.max !== null) list = list.filter((p) => p.price <= range.max!);

    // Sort (FakeStore doesn't provide created date, so "newest" is UI only)
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [safeProducts, selectedCategory, priceRange, sortBy]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <FiltersSidebar
        categoryOptions={categoryOptions}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />

      <div className="space-y-4">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{filtered.length}</span> products
          </p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select
              className="rounded-md border bg-white px-3 py-2 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="rounded-lg border bg-white p-6 text-sm text-gray-700">
            No products found for these filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {filtered.map((p) => (
    <ProductCard key={p.id} product={p} />
  ))}
</div>
        )}
      </div>
    </div>
  );
}