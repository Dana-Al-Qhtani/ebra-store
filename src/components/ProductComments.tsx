"use client";

import { useEffect, useMemo, useState } from "react";

type CommentItem = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

// Generate a safe id (no template strings)
function makeId(): string {
  return Date.now().toString() + "-" + Math.random().toString(16).slice(2);
}

// Build a unique storage key per product (no template strings)
function storageKey(productId: number | string): string {
  return "comments:product:" + String(productId);
}

export default function ProductComments({
  productId,
}: {
  productId: number | string;
}) {
  const key = useMemo(() => storageKey(productId), [productId]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<CommentItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      setItems([]);
    }
  }, [key]);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [key, items]);

  function addComment() {
    const cleanName = name.trim();
    const cleanMessage = message.trim();
    if (!cleanName || !cleanMessage) return;

    const newItem: CommentItem = {
      id: makeId(),
      name: cleanName,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    };

    setItems((prev) => [newItem, ...prev]);
    setMessage("");
  }

  function removeComment(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="mt-8 rounded-lg border bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">Customer Comments</h2>

      {/* Add comment form */}
      <div className="mt-4 grid gap-3">
        <div className="grid gap-2 sm:grid-cols-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-md border px-3 py-2 text-sm text-gray-900"
          />

          <button
            type="button"
            onClick={addComment}
            className="w-full rounded-md border bg-gray-100 px-4 py-2 text-sm text-gray-900 hover:bg-gray-200"
          >
            Add comment
          </button>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your comment..."
          className="min-h-[90px] w-full rounded-md border px-3 py-2 text-sm text-gray-900"
        />
      </div>

      {/* Comments list */}
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-gray-600">
          No comments yet. Be the first to add one!
        </p>
      ) : (
        <ul className="mt-5 space-y-3">
          {items.map((c) => (
            <li key={c.id} className="rounded-md border p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                  <p className="mt-1 text-sm text-gray-800">{c.message}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeComment(c.id)}
                  className="rounded-md border bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}