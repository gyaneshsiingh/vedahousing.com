# VedaHousing 🏡✨

> Premium Real Estate, Interior Design, Architecture & Consulting Services in Varanasi.

A modern, high-performance portfolio and business website for **VedaHousing**, built to showcase premium properties, interior design projects, architectural solutions, and facilitate client consultations.

![VedaHousing](/arc.webp)

## 🌐 Live Website
**[https://www.vedahousing.com](https://www.vedahousing.com)**

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Global & Modular CSS for component-level scoping)
- **Backend**: [Firebase](https://firebase.google.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Icons/Fonts**: Google Fonts, custom SVGs

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/vedahousing.git
cd vedahousing
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the local environment. The page will automatically hot-reload as you make edits to the code.

---

## 📁 Project Structure

The project follows a component-driven architecture using the Next.js App Router:

```text
├── src/
│   ├── app/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Header/            # Sticky top navigation
│   │   │   ├── Footer/            # Global footer navigation
│   │   │   ├── Hero/              # Main landing hero section
│   │   │   ├── Services/          # Service cards & routing
│   │   │   ├── Interior/          # Interior design features & styles
│   │   │   ├── PropertiesSection/ # Property listings & showcases
│   │   │   ├── Portfolio/         # Architectural and design portfolios
│   │   │   └── ContactCTA/        # Call-to-action & outreach blocks
│   │   │
│   │   ├── globals.css            # Global styles, variables, and typography
│   │   ├── layout.tsx             # Root HTML layout and global SEO metadata
│   │   ├── page.tsx               # Main homepage composition
│   │   └── sitemap.ts             # Automated sitemap for SEO indexing
│   │
│   ├── public/                    # Static assets (images, webp, SVGs)
│   └── next.config.mjs            # Next.js configuration
```

---

## 📈 SEO & Performance
- **Optimized Core Web Vitals**: Modern image formats (`.webp`) and lazy loading.
- **Dynamic Meta Tags**: Full OpenGraph and metadata optimization for rich sharing.
- **Mobile First**: Fully responsive layouts optimized for all viewport sizes with interactive hamburger navigation.
- **Analytics**: `@vercel/speed-insights` integrated for real-time performance monitoring.

---

## 📞 Contact Integration
The website features seamless integration for client outreach:
- **WhatsApp**: Direct chat links for fast communication.
- **Direct Call/SMS**: `tel:` and `sms:` URI handlers for instant mobile dialing.
- **Email**: Pre-filled web client drafting via `mailto:` links.

---

## 📝 License
This project is proprietary and meant for the sole use of **VedaHousing**. All rights reserved.
