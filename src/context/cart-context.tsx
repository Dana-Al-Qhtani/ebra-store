"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Product } from "@/types/product";

type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartLine[];
  totalItems: number;
  totalPrice: number;

  addItem: (product: Product, qty?: number) => void;
  decreaseItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;

  // ✅ Toast
  toastMessage: string | null;
  clearToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "ebra_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  // Load cart from localStorage (client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CartLine[];
      if (Array.isArray(parsed)) setItems(parsed);
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const clearToast = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setToastMessage(null);
  };

  const showToast = (msg: string) => {
    clearToast();
    setToastMessage(msg);

    timerRef.current = window.setTimeout(() => {
      setToastMessage(null);
      timerRef.current = null;
    }, 1800);
  };

  const addItem = (product: Product, qty: number = 1) => {
    setItems((prev) => {
      const found = prev.find((x) => x.product.id === product.id);
      if (found) {
        return prev.map((x) =>
          x.product.id === product.id ? { ...x, quantity: x.quantity + qty } : x
        );
      }
      return [...prev, { product, quantity: qty }];
    });

    // ✅ Toast notification (no template strings)
    showToast("Added to cart");
  };

  const decreaseItem = (productId: number) => {
    setItems((prev) =>
      prev
        .map((x) =>
          x.product.id === productId ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter((x) => x.quantity > 0)
    );
  };

  const removeItem = (productId: number) => {
    setItems((prev) => prev.filter((x) => x.product.id !== productId));
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, x) => sum + x.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, x) => sum + x.product.price * x.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    totalItems,
    totalPrice,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    toastMessage,
    clearToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");
  return ctx;
}