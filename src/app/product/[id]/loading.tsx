/**
 * Loading UI shown while the product details are being fetched.
 */
export default function Loading() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="aspect-square animate-pulse rounded-lg bg-gray-200" />
      <div className="space-y-3">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
        <div className="h-24 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}