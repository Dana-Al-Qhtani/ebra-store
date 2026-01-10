"use client";

type PriceRangeId = "all" | "0-99" | "100-199" | "200+";
type SortBy = "newest" | "price-asc" | "price-desc";

export default function FiltersSidebar({
  categoryOptions,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortByChange,
}: {
  categoryOptions: string[] | undefined | null;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  priceRange: PriceRangeId;
  onPriceRangeChange: (value: PriceRangeId) => void;
  sortBy: SortBy;
  onSortByChange: (value: SortBy) => void;
}) {
  const safeCategories = Array.isArray(categoryOptions) ? categoryOptions : [];

  return (
    <aside className="h-fit rounded-lg border bg-white p-5">
      <h2 className="text-lg font-semibold">Filter</h2>

      {/* Categories */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-800">Categories</p>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          {safeCategories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => onCategoryChange(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-800">Price</p>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceRange === "all"}
              onChange={() => onPriceRangeChange("all")}
            />
            <span>All Price</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceRange === "0-99"}
              onChange={() => onPriceRangeChange("0-99")}
            />
            <span>$0.00 - 99.99</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceRange === "100-199"}
              onChange={() => onPriceRangeChange("100-199")}
            />
            <span>$100.00 - 199.99</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceRange === "200+"}
              onChange={() => onPriceRangeChange("200+")}
            />
            <span>$200.00+</span>
          </label>
        </div>
      </div>

      {/* Sort (optional in sidebar) */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-800">Sort</p>

        <select
          className="mt-3 w-full rounded-md border bg-white px-3 py-2 text-sm"
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as SortBy)}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </aside>
  );
}