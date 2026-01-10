
EBRA STORE (Next.js + TypeScript + Tailwind)

A simple e-commerce demo built with Next.js App Router, TypeScript, and Tailwind CSS.
It includes a product listing, product details, a cart with localStorage persistence, and a toast notification when items are added to the cart.

============================================================

REQUIREMENTS (ENVIRONMENT SETUP)
	•	Node.js (LTS recommended)
	•	Git (optional, only for pushing to GitHub)

Verify:
	•	node -v
	•	npm -v
	•	git –version

============================================================

HOW TO INSTALL AND RUN
	1.	Install dependencies:
npm install
	2.	Start the development server:
npm run dev
	3.	Open in browser:
http://localhost:3000

============================================================

TECH STACK
	•	Next.js (App Router)
	•	TypeScript
	•	Tailwind CSS
	•	React Context + localStorage (Cart)

============================================================

KEY FEATURES
	•	Product grid (listing)
	•	Product details page: /product/[id]
	•	Cart page: /cart
	•	Add / remove / increase / decrease cart items
	•	Cart persistence using localStorage
	•	Toast notification when adding items to cart

============================================================

KEY FILES (PROJECT STRUCTURE)
	•	src/app/page.tsx               Home / Shop page
	•	src/app/product/[id]/page.tsx  Product details page
	•	src/app/cart/page.tsx          Cart page
	•	src/app/layout.tsx             Wraps app with CartProvider + Navbar + CartToast
	•	src/context/cart-context.tsx   Cart state + actions + toast message
	•	src/components/ProductCard.tsx Product card + “Add to cart” button

How the cart connects:
	•	CartProvider wraps the app in layout.tsx
	•	ProductCard calls addItem(product) from useCart()
	•	CartToast reads toastMessage from the context and displays a notification

============================================================

COMMON WINDOWS ISSUE (PowerShell): npm.ps1 BLOCKED

Problem:
Running “npm run dev” in PowerShell may fail with:
“running scripts is disabled on this system” (PSSecurityException)
display: 
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess


Solution:
Set-ExecutionPolicy -Scope Process-ExecutionPolicy Bypass
npm run dev

============================================================

SOURCES / REFERENCES
	•	Next.js App Router docs: https://nextjs.org/docs/app
	•	Tailwind CSS docs: https://tailwindcss.com/docs
	•	Fake Store API: https://fakestoreapi.com/
	•	Figma (UI inspiration): https://www.figma.com/
