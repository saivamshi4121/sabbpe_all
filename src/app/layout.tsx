import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  title: "SabbPe - Payments Simplified. Business Amplified.",
  description: "India's digital payments partner for UPI, QR, Gateway, Payouts & Business Growth. Trusted by 1000+ merchants across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        {/* Viewport meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Global Background - Light Mode */}
        {/* No fixed dark gradients - letting the page components define their own light backgrounds */}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
