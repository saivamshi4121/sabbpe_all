<<<<<<< HEAD
# SabbPe - Fintech Website

A modern, desktop-first fintech website for **SabbPe**, featuring a Stripe-style mega menu navigation system built with Next.js, TypeScript, and Framer Motion.

## Features

- 🎨 **Modern UI/UX**: Clean, minimalist design inspired by top fintech platforms
- 📱 **Sticky Navigation**: Professional navbar with logo, centered menu items, and CTA button
- 🎯 **Mega Menus**: Full-width, hover-based mega menus for Products and Technology
  - Products: Offline Payments, Online Payments, Banking Suite, Payroll & HR
  - Technology: Technology Capabilities and Advanced Technologies
- ✨ **Smooth Animations**: Framer Motion animations for menu transitions and interactions
- 🎭 **Lottie Animations**: Interactive QR scan animation in Products mega menu
- ♿ **Accessible**: Built with Radix UI for accessibility and keyboard navigation
- 🎨 **Dark Mode Ready**: Neutral dark theme with customizable color variables

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: CSS Modules + Sass
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Animations**: Lottie React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sabbpe/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Navbar/          # Navigation components
│   │   ├── Hero/            # Hero section
│   │   └── BackgroundShapes/# Background decorative elements
│   └── assests/             # Static assets (Lottie animations)
├── public/                  # Public static files
└── package.json
```

## Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly on the [Vercel platform](https://vercel.com/new).

## Development

- Edit `src/app/page.tsx` to modify the homepage
- Navbar components are in `src/components/Navbar/`
- Global styles and theme variables in `src/app/globals.css`

## License

Private project - All rights reserved.
=======
# SabbPe Website
The core design philosophy here is "Scroll-telling" — instead of static sections, we use layered, sticky scrolling to stack value propositions on top of each other, similar to how modern fintech leaders like Razorpay or Cred handle their story flows.

## What's Under the Hood?

Beyond standard Next.js boilerplate, there are a few specific engineering patterns used here that are worth noting:

### 1. The Layered Scroll Engine
We built a custom scroll experience in `src/components/layout/LayeredStickySection.tsx`.
*   **Logic**: It uses `position: sticky` combined with dynamic negative bottom margins.
*   **Effect**: As you scroll, the current section "freezes" (sticks) while the next section pulls itself *up and over* the previous one. This creates a physical stacking card effect that feels much heavier and more premium than a standard parallax.


### 3. Glassmorphism System
To avoid the "cheap blur" look, our glass cards use a specific stack:
*   `backdrop-filter: blur(xl)` for the fuzziness.
*   A subtle white noise texture overlay (optional).
*   High-contrast 1px borders with gradients (`from-white/20` to `transparent`) to simulate light catching the edge.

## Tech Stack

*   **Framework**: Next.js 16 (App Router)
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Icons**: Tabler Icons & Lucide React
*   **Smooth Scroll**: Lenis

## Running Locally

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Start the dev server**
    ```bash
    npm run dev
    ```
    The site will be live at [http://localhost:3000](http://localhost:3000).

## Project Layout

Everything important is in `src/`.

*   `src/app` - Page routes and layouts.
*   `src/components/layout` - The heavy lifters (Nav, Footer, Layered Scroll wrappers).
*   `src/components/sections` - Individual marketing sections (Hero, Features, Trust Strip).
*   `src/styles` - minimal, mostly handled by Tailwind in `globals.css`.

---
*Built for SabbPe.*
>>>>>>> 895c155e44dc0c4d4d8d3e2eab17a48e433acf8f
