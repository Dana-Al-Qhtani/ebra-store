ايه أقدر أسويها لك — وفعليًا جاهزة 👍
كل اللي عليك تسوينه هو نسخ النسخة المنسقة التالية ولصقها مكان الملف القديم في **README.md** داخل GitHub أو VS Code.

هذه النسخة **منسقة وجاهزة بشكل احترافي** (لا تحتاج تعديل منك):

````
# EBRA STORE

EBRA Store is a lightweight e-commerce web application built using Next.js (App Router), TypeScript, and Tailwind CSS. The project demonstrates modern front-end development practices and core e-commerce functionality, including product browsing, product detail views, and a persistent shopping cart.

---

## Overview

This project was developed to illustrate:

- use of the Next.js App Router
- type-safe development using TypeScript
- state management with the React Context API
- client-side cart persistence with localStorage
- modular and reusable UI components styled with Tailwind CSS

The application may be used as a learning resource, portfolio project, or as a foundation for further development into a full-featured e-commerce platform.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Context API
- localStorage

---

## Requirements

Before running the project, ensure the following are installed:

- Node.js (LTS recommended)
- npm
- Git (optional, for version control)

Verify installation:

```bash
node -v
npm -v
git --version
````

---

## Installation and Running Locally

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Access the application in the browser:

```
http://localhost:3000
```

---

## Features

* Product listing grid
* Product details page at /product/[id]
* Cart page at /cart
* Add, remove, increase, and decrease quantity of items
* Persistent cart using localStorage
* Toast notifications when items are added to the cart

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── product/[id]/page.tsx
│   ├── cart/page.tsx
│   └── layout.tsx
├── context/
│   └── cart-context.tsx
└── components/
    └── ProductCard.tsx
```

---

## Windows PowerShell Issue

If the command `npm run dev` fails with:

“running scripts is disabled on this system (PSSecurityException)”

Run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then:

```powershell
npm run dev
```

---

## References

* Next.js App Router documentation: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
* Tailwind CSS documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Fake Store API: [https://fakestoreapi.com/](https://fakestoreapi.com/)
* Figma design resources: [https://www.figma.com/](https://www.figma.com/)
