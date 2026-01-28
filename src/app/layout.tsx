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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased" suppressHydrationWarning>

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Global Background - Mobile Optimized */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Deep Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,8%)] via-[hsl(222,60%,10%)] to-[hsl(230,50%,8%)]" />

          {/* Gradient Blobs - Mobile Responsive Sizes */}
          <div className="absolute top-0 -left-20 md:-left-40 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-sabbpe-blue/20 rounded-full blur-[80px] md:blur-[120px] animate-blob" />
          <div className="absolute bottom-0 -right-10 md:right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-sabbpe-cyan/15 rounded-full blur-[60px] md:blur-[100px] animate-blob [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-sabbpe-teal/10 rounded-full blur-[60px] md:blur-[100px] animate-blob [animation-delay:4s]" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 grid-overlay opacity-20 md:opacity-30" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 noise-overlay" />
        </div>

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
