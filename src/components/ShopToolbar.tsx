/**
 * ShopToolbar
 * Header above products grid:
 * - shows current section name
 * - sort dropdown (UI only)
 */
export default function ShopToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="text-sm text-gray-700">
        <span className="font-semibold text-black">Living Room</span>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <label className="text-gray-600">Sort by</label>
        <select className="rounded-md border bg-white px-3 py-2">
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}