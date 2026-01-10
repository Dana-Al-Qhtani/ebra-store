// src/types/product.ts

export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;

  // Optional: FakeStore provides rating, but your app can still work without it.
  rating?: ProductRating;
};