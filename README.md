# Payal Arora — Premium Digital Marketing Portfolio

A bespoke, high-performance personal portfolio website built with Next.js (App Router), Mantine UI, Framer Motion, and Tailwind CSS for **Payal Arora**, Digital Marketer & Social Media Executive.

---

## 🚀 Running the Project

Navigate into the portfolio directory and start the development server:

```bash
cd payal-portfolio
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🎨 Design System & Palette

- **Warm Ivory / Off-White**: `#FAF8F5`
- **Deep Charcoal**: `#24212A`
- **Muted Lavender**: `#B8A4D8`
- **Soft Lilac**: `#EAE2F5`
- **Blush Accent**: `#E8C7CB`
- **Pure White**: `#FFFFFF`
- **Typography**: `Outfit` (Headings) and `Plus Jakarta Sans` (Body text)

---

## ⚙️ How to Customize

All portfolio configuration, contact details, image URLs, and social media handles are centralized in a single file:
**`payal-portfolio/data/portfolio.ts`**

### 1. Updating Payal's Instagram Profile
In `data/portfolio.ts`, look for line 44:
```ts
export const INSTAGRAM_PROFILE_URL = "https://instagram.com/your_handle"; // <-- ENTER ACTUAL INSTAGRAM URL HERE
```

### 2. Replacing the Hero Portrait
In `data/portfolio.ts`, update `HERO_DATA.portraitImage`:
```ts
portraitImage: {
  url: "/images/payal-portrait.jpg", // Place your photo in the public/ folder or use a cloud URL
  alt: "Payal Arora — Digital Marketer",
}
```

### 3. Replacing Project Images
In `data/portfolio.ts`, update `PROJECTS_DATA`:
- **BR Interiors**: Replace the two kitchen interior images under `br-interiors.images`.
- **Graphics Design**: Replace the two cafe branding images under `graphics-design.images`.
- **The Outfit Store**: Replace the apparel visuals under `the-outfit-store.images`.

---

## 📁 Project Architecture

```
payal-portfolio/
├── app/
│   ├── globals.css           # Design tokens, glassmorphism, and responsive utilities
│   ├── layout.tsx            # MantineProvider, ColorSchemeScript, fonts, and SEO metadata
│   └── page.tsx              # Assembles all 5 main sections, navbar, and footer
├── components/
│   ├── Navbar.tsx            # Sticky glassmorphism navbar with active state & mobile drawer
│   ├── HeroSection.tsx       # Striking editorial hero with Framer Motion & WhatsApp CTA
│   ├── AboutSection.tsx      # About bio, approach highlight, and education cards
│   ├── ServicesSection.tsx   # 6 responsive service cards with hover lift & icon animation
│   ├── ProjectsSection.tsx   # 3 distinct showcases (BR Interiors, Cafe, The Outfit Store)
│   ├── ContactSection.tsx    # Dark charcoal editorial contact card with Call, WA, Email
│   ├── Footer.tsx            # Monogram, links, dynamic copyright, social icons
│   ├── BackToTop.tsx         # Floating scroll-to-top button
│   └── ImageWithFallback.tsx # Next.js Image wrapper with skeleton loader and error fallback
├── data/
│   └── portfolio.ts          # Central source of truth for text, links, and imagery
├── theme.ts                  # Mantine UI custom color & typography theme configuration
└── next.config.ts            # Image host domains & Next.js config
```
