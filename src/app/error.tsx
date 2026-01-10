"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // You can log the error to an error reporting service here
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-lg border bg-white p-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="text-sm text-gray-700">
          Please try again. If the issue persists, refresh the page.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}