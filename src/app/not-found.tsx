import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-lg font-semibold">Page not found</h2>
      <p className="mt-2 text-sm text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 inline-block underline">
        Go back home
      </Link>
    </div>
  );
}