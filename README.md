
# Ebra Store (Next.js + TypeScript + Tailwind)

A simple e-commerce demo built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
It includes a product listing, product details page, cart management with localStorage persistence, 
and a toast notification when items are added to the cart.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


---

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Client-side Cart (Context API + localStorage)

---

## Features
- Product grid (listing)
- Product details page: `/product/[id]`
- Cart page: `/cart`
- Add / remove / increase / decrease cart items
- Cart persistence using `localStorage`
- Toast notification (e.g., “Added to cart”)
- Next/Image remote patterns for external images

---

## Project Structure (Important Files)

### 1) App Router pages
- `src/app/page.tsx`  
  Home / Shop page. Displays product listing and uses `ProductCard`.

- `src/app/product/[id]/page.tsx`  
  Product details page. Fetches the product by ID and shows full info + rating + comments (if enabled).

- `src/app/cart/page.tsx`  
  Cart page. Uses `useCart()` to render cart items + totals.

- `src/app/layout.tsx`  
  Root layout. Wraps the app with `CartProvider`, renders `Navbar`, and renders `CartToast` globally.

---

### 2) Cart State (Context)
- `src/context/cart-context.tsx`  
  This is the “single source of truth” for cart state.  
  It provides:
  - `items`, `totalItems`, `totalPrice`
  - `addItem`, `decreaseItem`, `removeItem`, `clearCart`
  - `toastMessage` + `clearToast`

**How it connects:**
- `CartProvider` wraps the whole app in `layout.tsx`
- Any component can call `useCart()` to read or update cart
- `CartToast` reads `toastMessage` from context and shows the UI

---

### 3) Components (UI Layer)
- `src/components/ProductCard.tsx`  
  Displays product image/title/price/rating.  
  Calls `addItem(product)` from `useCart()` when clicking “Add to cart”.

- `src/components/Navbar.tsx`  
  Navigation bar + cart count badge (uses `totalItems` from `useCart()`).

- `src/components/CartToast.tsx`  
  Toast UI component. Visible on all pages (placed in `layout.tsx`).

- `src/components/PaymentMethods.tsx`  
  Payment methods section (Apple Pay / Credit Card / Cash) with icons/logos.

- `src/components/ProductComments.tsx` (optional feature)  
  Handles product comments stored per-product in localStorage.
  > Note: avoid using unquoted template strings incorrectly; use backticks.

---

### 4) Data / API layer
- `src/lib/fakeStore.ts` (or `src/lib/api.ts`)  
  Fetch functions, for example:
  - `getProducts()`
  - `getProductById(id)`

---

## Sources / References
This project uses public documentation + public UI inspiration.

- Next.js App Router docs (Routing, layout, pages, client components)
  https://nextjs.org/docs/app

- Next/Image configuration (remotePatterns)
  https://nextjs.org/docs/app/api-reference/components/image

- Tailwind CSS documentation (utility classes, layout, spacing, colors)
  https://tailwindcss.com/docs

- Fake Store API (sample products JSON)
  https://fakestoreapi.com/

- UI inspiration reference (Figma community template link used for layout inspiration)
  https://www.figma.com/

---
errors faced during the implementation with solutions:



    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

npm run dev



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

