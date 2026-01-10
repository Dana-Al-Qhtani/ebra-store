// src/lib/fakeStore.ts

import type { Product } from "@/types/product";
import { fetchJson } from "./api";

const API_BASE = "https://fakestoreapi.com";

/**
 * Fallback products used when the external API is blocked/unavailable.
 * Furniture-focused mock data with descriptions + ratings.
 */
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Oak Coffee Table",
    price: 219,
    category: "Living Room",
    description:
      "Solid oak coffee table with a clean silhouette and smooth finish. Perfect for modern living rooms.",
    image: "https://source.unsplash.com/800x800/?coffee-table&sig=1",
    rating: { rate: 4.4, count: 132 },
  },
  {
    id: 2,
    title: "Linen 3-Seater Sofa",
    price: 799,
    category: "Living Room",
    description:
      "Soft linen sofa with deep cushions and supportive backrest. Designed for comfort and everyday use.",
    image: "https://source.unsplash.com/800x800/?sofa&sig=2",
    rating: { rate: 4.7, count: 98 },
  },
  {
    id: 3,
    title: "Minimal Armchair",
    price: 349,
    category: "Living Room",
    description:
      "A cozy armchair with a minimalist frame and plush seat. Great as a reading corner statement piece.",
    image: "https://source.unsplash.com/800x800/?armchair&sig=3",
    rating: { rate: 4.3, count: 76 },
  },
  {
    id: 4,
    title: "Bedside Nightstand",
    price: 129,
    category: "Bedroom",
    description:
      "Compact bedside nightstand with a drawer and open shelf. Keeps essentials within reach, clutter-free.",
    image: "https://source.unsplash.com/800x800/?nightstand&sig=4",
    rating: { rate: 4.1, count: 64 },
  },
  {
    id: 5,
    title: "Modern Floor Lamp",
    price: 89,
    category: "Lighting",
    description:
      "Tall floor lamp with warm ambient glow. Adds atmosphere to living rooms and bedrooms effortlessly.",
    image: "https://source.unsplash.com/800x800/?floor-lamp&sig=5",
    rating: { rate: 4.2, count: 51 },
  },
  {
    id: 6,
    title: "Dining Chair Set (2)",
    price: 159,
    category: "Dining",
    description:
      "Set of two dining chairs with comfortable padding and sturdy legs. A simple upgrade for any dining setup.",
    image: "https://source.unsplash.com/800x800/?dining-chair&sig=6",
    rating: { rate: 4.5, count: 39 },
  },

  // ✅ Added furniture items
  {
    id: 7,
    title: "Walnut TV Console",
    price: 289,
    category: "Living Room",
    description:
      "Low-profile walnut TV console with cable management and roomy storage. Keeps your setup clean and minimal.",
    image: "https://source.unsplash.com/800x800/?tv-stand&sig=7",
    rating: { rate: 4.6, count: 57 },
  },
  {
    id: 8,
    title: "Round Dining Table",
    price: 499,
    category: "Dining",
    description:
      "Round dining table with a sturdy base and smooth top. Ideal for small spaces and easy social seating.",
    image: "https://source.unsplash.com/800x800/?dining-table&sig=8",
    rating: { rate: 4.3, count: 41 },
  },
  {
    id: 9,
    title: "Wood Bookshelf",
    price: 179,
    category: "Office",
    description:
      "Open wood bookshelf for books and decor. Balanced proportions that work in living rooms or home offices.",
    image: "https://source.unsplash.com/800x800/?bookshelf&sig=9",
    rating: { rate: 4.2, count: 88 },
  },
  {
    id: 10,
    title: "Writing Desk",
    price: 239,
    category: "Office",
    description:
      "Compact writing desk with a clean surface and solid legs. Perfect for laptop work and study setups.",
    image: "https://source.unsplash.com/800x800/?desk&sig=10",
    rating: { rate: 4.4, count: 66 },
  },
  {
    id: 11,
    title: "Queen Bed Frame",
    price: 599,
    category: "Bedroom",
    description:
      "Modern bed frame with a strong base and subtle headboard. Designed for stability and quiet sleep.",
    image: "https://source.unsplash.com/800x800/?bed-frame&sig=11",
    rating: { rate: 4.5, count: 39 },
  },
  {
    id: 12,
    title: "Wardrobe Cabinet",
    price: 449,
    category: "Bedroom",
    description:"Spacious wardrobe cabinet with hanging space and shelves. A simple storage solution for any bedroom.",
    image: "https://source.unsplash.com/800x800/?wardrobe&sig=12",
    rating: { rate: 4.1, count: 27 },
  },
  {
    id: 13,
    title: "Accent Rug",
    price: 79,
    category: "Living Room",
    description:
      "Soft accent rug with a neutral pattern. Adds warmth and texture to your space without overpowering it.",
    image: "https://source.unsplash.com/800x800/?rug&sig=13",
    rating: { rate: 4.0, count: 112 },
  },
  {
    id: 14,
    title: "Storage Ottoman",
    price: 99,
    category: "Living Room",
    description:
      "Upholstered ottoman with hidden storage. Works as a footrest, extra seat, or a tidy organizer.",
    image: "https://source.unsplash.com/800x800/?ottoman&sig=14",
    rating: { rate: 4.4, count: 53 },
  },
  {
    id: 15,
    title: "Entryway Bench",
    price: 149,
    category: "Hallway",
    description:
      "Slim entryway bench with a sturdy frame. Great for putting on shoes and keeping the entry organized.",
    image: "https://source.unsplash.com/800x800/?bench&sig=15",
    rating: { rate: 4.2, count: 35 },
  },
  {
    id: 16,
    title: "Side Table",
    price: 59,
    category: "Living Room",
    description:
      "Compact side table for coffee cups, books, and decor. Easy to move and fits beside sofas or beds.",
    image: "https://source.unsplash.com/800x800/?side-table&sig=16",
    rating: { rate: 4.3, count: 74 },
  },
];

/**
 * getProducts
 * Fetch all products from FakeStore API.
 * If API fails (blocked/unavailable), return fallback mock list.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fetchJson<Product[]>(API_BASE + "/products");
    return Array.isArray(data) ? data : MOCK_PRODUCTS;
  } catch {
    return MOCK_PRODUCTS;
  }
}

/**
 * getProductById
 * Fetch a single product by id.
 * - If API fails, try fallback list.
 * - If not found, return null (so page can call notFound()).
 */
export async function getProductById(
  id: string | number
): Promise<Product | null> {
  const pid = String(id);

  // Try API first
  try {
    const data = await fetchJson<Product>(API_BASE + "/products/" + pid);
    if (data && typeof (data as any).id !== "undefined") return data;
  } catch {
    // ignore and fallback below
  }

  // Fallback to mock data
  const found = MOCK_PRODUCTS.find((p) => String(p.id) === pid);
  return found ?? null;
}

/**
 * getCategories (optional helper)
 * Uses FakeStore categories when available, otherwise derives from mock products.
 */
export async function getCategories(): Promise<string[]> {
  try {
    const data = await fetchJson<string[]>(API_BASE + "/products/categories");
    return Array.isArray(data) ? data : [];
  } catch {
    return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)));
  }
}