Ebra
Next.js + TypeScript + Tailwind CSS

A simple e-commerce demo built with Next.js App Router, TypeScript, and Tailwind CSS.
It includes:
product listing
product details page
shopping cart with localStorage persistence
toast notification when items are added to the cart

-----

Requirements (Environment Setup)
Make sure you have installed:
Node.js (LTS recommended)
Git (optional – only for pushing to GitHub)
Verify installation:
node -v
npm -v
git --version

------

Installation & Running Locally
Install dependencies
npm install
Start development server
npm run dev
Open in browser
http://localhost:3000

-------

Tech Stack
Next.js (App Router)
TypeScript
Tailwind CSS
React Context + localStorage (Cart)

-----

Key Features
Product grid (listing)
Product details page: /product/[id]
Cart page: /cart
Add / remove / increase / decrease cart items
Cart persistence using localStorage
Toast notification when adding items to cart
📂 Project Structure (Key Files)
src/
└── app/
    ├── page.tsx                 # Home / Shop page
    ├── product/[id]/page.tsx    # Product details page
    ├── cart/page.tsx            # Cart page
    └── layout.tsx               # Wraps app with CartProvider + Navbar + CartToast
└── context/
    └── cart-context.tsx         # Cart state, actions, toast message
└── components/
    └── ProductCard.tsx          # Product card + “Add to cart” button

How the Cart Works
CartProvider wraps the app in layout.tsx
ProductCard calls addItem(product) from useCart()
CartToast listens to toastMessage in context and displays a notification 
------

Common Windows PowerShell Issue
Problem
Running npm run dev may fail with:
running scripts is disabled on this system (PSSecurityException)
Solution (temporary bypass for current session)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev

-------

References & Resources
Next.js App Router docs
https://nextjs.org/docs/app
Tailwind CSS docs
https://tailwindcss.com/docs
Fake Store API
https://fakestoreapi.com/
Figma (UI inspiration)
https://www.figma.com/
