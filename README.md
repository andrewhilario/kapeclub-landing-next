# ☕ KapeClub Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**KapeClub** is the ultimate cafe discovery and live crowd telemetry companion built for digital nomads, remote builders, and students in the Philippines. This repository hosts the high-performance Next.js landing page that showcases the KapeClub Android application, provides installation guides, and offers direct beta APK downloads.

🔗 **Live App Landing Page:** [KapeClub Web](http://localhost:3000) (Local development)

---

## 🌟 Key Application Features

The KapeClub mobile app is designed to eliminate the guesswork of "study outs" or remote work sessions:

*   **☕ Curated Work-Friendly Filters:** Instantly screen cafes by internet speed (verified >50Mbps), power outlet abundance, late-night operating hours, and air-conditioning strength.
*   **📊 Crowdsourced Telemetry:** Low-friction check-ins allow real-time reporting of cafe occupancy. Know if a cafe is quiet or completely packed before making the commute.
*   **🗺️ Offline-First Vector Maps:** Download offline map packs of cities (starting with Pampanga) to search locations, read reviews, and navigate without cellular data.
*   **🎯 Cafe Hop Planner:** Build multi-spot itineraries, map routes across city centers, preview amenities, and get offline turn-by-turn navigation.
*   **🏆 Passport Rewards & Challenges:** Gamify your work routine. Complete cafe-hopping challenges, log visits, and unlock badges for exploring local coffee spots.

---

## 💻 Tech Stack (Landing Page)

The landing page is engineered for exceptional user experience, accessibility, and high performance:

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **UI Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** Native Vanilla CSS with CSS custom properties (variables) for fine-grained control and sleek performance.
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Typography:** Google Font `Plus Jakarta Sans` optimized via `next/font`.
*   **Theme Support:** Fully custom light and dark mode toggles with high contrast, persistent styling, and custom background blurs.

---

## 🚀 Getting Started (Local Development)

To run the landing page locally on your machine, follow these steps:

### Prerequisites

Make sure you have Node.js (version 18 or above) installed on your system.

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/andrewhilario/kapeclub-landing-next.git
cd kapeclub-landing-next

# Install dependencies
npm install
```

### 2. Run the Development Server

Start the local server with hot reloading enabled:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site.

### 3. Production Build

To build the static site optimized for production hosting:

```bash
npm run build
```

---

## 📁 Repository Structure

```
├── public/                 # Static assets (images, icons)
│   ├── kapeclub.apk        # Android build artifact (untracked in remote git)
│   ├── hero-preview.png    # OG Image and preview mockups
│   └── promo-*.png         # Feature preview screenshots
├── src/
│   └── app/
│       ├── components/     # Custom React components (ThemeToggle, Observers)
│       ├── globals.css     # Core design system and layout styling
│       ├── layout.tsx      # Next.js Root Layout with SEO Metadata
│       ├── page.tsx        # Homepage content
│       └── icon.svg        # Dynamic favicon metadata
├── next.config.ts          # Next.js configurations
├── package.json            # Dependencies and script definitions
└── tsconfig.json           # TypeScript configuration
```

---

## 📱 Beta APK Distribution Notes

*   The Android application is currently in a public beta stage.
*   The compiled installer file `public/kapeclub.apk` is served directly from the landing page.
*   To avoid bloat and stay within GitHub's file boundaries, `kapeclub.apk` is ignored in Git and kept solely on production servers and local workspaces.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
