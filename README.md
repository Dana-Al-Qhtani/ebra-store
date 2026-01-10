EBRA STORE
EBRA Store is a lightweight e-commerce web application built using Next.js (App Router), TypeScript, and Tailwind CSS.
The project demonstrates modern front-end development practices and core e-commerce functionality, including product browsing, product detail views, and a persistent shopping cart.
Overview
This project was developed to illustrate:
use of the Next.js App Router
type-safe development using TypeScript
state management with the React Context API
client-side cart persistence with localStorage
modular and reusable UI components styled with Tailwind CSS
The application may be used as a learning resource, portfolio project, or as a foundation for further development into a full-featured e-commerce platform.
Tech Stack
Next.js (App Router)
TypeScript
Tailwind CSS
React Context API
localStorage
Requirements
Before running the project, ensure the following are installed:
Node.js (LTS recommended)
npm
Git (optional, for version control)
Verify installation:
node -v
npm -v
git --version
Installation and Running Locally
Install project dependencies:
npm install
Start the development server:
npm run dev
Access the application in the browser:
http://localhost:3000
Features
Product listing grid
Product details page at /product/[id]
Cart page at /cart
Add, remove, increase, and decrease quantity of items
Persistent cart using localStorage
Toast notifications when items are added to the cart
Project Structure
src/
├── app/
│   ├── page.tsx                 # Home / Shop page
│   ├── product/[id]/page.tsx    # Product details page
│   ├── cart/page.tsx            # Cart page
│   └── layout.tsx               # Application layout wrapper
├── context/
│   └── cart-context.tsx         # Cart state, actions, and toast handling
└── components/
    └── ProductCard.tsx          # Product card with add-to-cart functionality
Cart Functionality Summary
The application is wrapped with CartProvider in layout.tsx
Components interact with the cart via useCart()
CartToast displays messages based on context values
Common Issue on Windows PowerShell
If the command npm run dev fails with:
“running scripts is disabled on this system (PSSecurityException)”
Run the following command to bypass restriction for the current session:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Then run:
npm run dev
References
Next.js App Router documentation
https://nextjs.org/docs/app
Tailwind CSS documentation
https://tailwindcss.com/docs
Fake Store API
https://fakestoreapi.com/
Figma design resources
https://www.figma.com/
