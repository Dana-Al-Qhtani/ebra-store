import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/cart-context";
import Navbar from "@/components/Navbar";
import CartToast from "@/components/CartToast";

export const metadata: Metadata = {
  title: "Ebra Store",
  description: "Simple store demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-black">
        <CartProvider>
          <Navbar />

          {/* Page container */}
          <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>

          {/* Toast visible on all pages */}
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}