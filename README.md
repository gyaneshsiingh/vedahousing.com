# VedaHousing

VedaHousing is a modern, premium web application built with [Next.js](https://nextjs.org/) and React. It serves as the digital storefront for VedaHousing's comprehensive services, encompassing Real Estate, Interior Design, Consulting, and Architecture in Varanasi.

## 🚀 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: Vanilla CSS & CSS Modules (Custom Design System without Tailwind)
- **Backend/Services**: [Firebase](https://firebase.google.com/)
- **Analytics & Performance**: [@vercel/speed-insights](https://vercel.com/docs/speed-insights)
- **SEO**: Dynamic metadata & `next-sitemap` for automated sitemap generation

## ✨ Key Features

- **Dynamic Hero Sections**: Visually stunning, responsive hero layouts with beautiful radial gradients, micro-animations, and glowing accents.
- **Service Portfolios**: Dedicated pages for Interior Design, Architecture, and Real Estate.
- **Optimized SEO**: Server-side rendering (SSR) and semantic HTML with fully automated `sitemap.xml` and `robots.txt` generation.
- **Custom CSS Architecture**: A scalable, class-based custom CSS system (`globals.css`) ensuring high-performance styling without heavy CSS frameworks.
- **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices with interactive hamburger navigation.

## 🛠️ Getting Started

First, ensure you have Node.js installed on your machine.

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `/src/app` - Contains the main Next.js App Router pages (`page.tsx`, `layout.tsx`, `sitemap.ts`).
- `/src/app/components` - Reusable UI components (Header, Footer, Hero, Services, Interior, etc.). Each component typically has its own `.tsx` file, `.constants.ts` for data, and `.type.ts` for TypeScript interfaces.
- `/src/app/globals.css` - Global CSS tokens, utilities, and standard layout classes.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This will automatically trigger the `postbuild` script which generates the `sitemap.xml` for SEO indexing.

To start the production server:

```bash
npm run start
```
