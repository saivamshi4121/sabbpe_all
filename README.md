# SabbPe Website

The core design philosophy here is "Scroll-telling" — instead of static sections, we use layered, sticky scrolling to stack value propositions on top of each other, similar to how modern fintech leaders like Razorpay or Cred handle their story flows.

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

## What's Under the Hood?

Beyond standard Next.js boilerplate, there are a few specific engineering patterns used here that are worth noting:

### 1. The Layered Scroll Engine
We built a custom scroll experience in `src/components/layout/LayeredStickySection.tsx`.
*   **Logic**: It uses `position: sticky` combined with dynamic negative bottom margins.
*   **Effect**: As you scroll, the current section "freezes" (sticks) while the next section pulls itself *up and over* the previous one. This creates a physical stacking card effect that feels much heavier and more premium than a standard parallax.

### 2. Glassmorphism System
To avoid the "cheap blur" look, our glass cards use a specific stack:
*   `backdrop-filter: blur(xl)` for the fuzziness.
*   A subtle white noise texture overlay (optional).
*   High-contrast 1px borders with gradients (`from-white/20` to `transparent`) to simulate light catching the edge.

## Tech Stack

*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, CSS Modules, Sass
*   **UI Components**: Radix UI
*   **Animation**: Framer Motion, Lottie React, Three.js
*   **Icons**: Tabler Icons & Lucide React
*   **Smooth Scroll**: Lenis

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Start the dev server**
    ```bash
    npm run dev
    ```
    The site will be live at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

## Project Layout

Everything important is in `src/`.

*   `src/app` - Page routes and layouts.
*   `src/components` - React components including:
    *   `layout` - The heavy lifters (Nav, Footer, Layered Scroll wrappers).
    *   `Navbar` - Navigation components.
    *   `Hero` / `HeroSection` - Hero section components.
*   `src/styles` - styles.

---
*Built for SabbPe.*
