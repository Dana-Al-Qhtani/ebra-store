/** Loading UI for the home page while data is being fetched */
export default function Loading() {
  return (
    <div className="space-y-3">
      <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-56 animate-pulse rounded-lg bg-gray-200" />
        ))}
      </div>
    </div>
  );
}