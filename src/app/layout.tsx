import type { Metadata } from "next";
<<<<<<< HEAD
import { Inter } from "next/font/google";
import "@fontsource/inter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SabbPe - Enterprise Digital Payments & Fintech Solutions",
  description: "India-focused, enterprise-grade digital payments and fintech solutions. Modern payment infrastructure for businesses.",
=======
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SabbPe - Payments Simplified. Business Amplified.",
  description: "India's digital payments partner for UPI, QR, Gateway, Payouts & Business Growth. Trusted by 1000+ merchants across India.",
>>>>>>> 895c155e44dc0c4d4d8d3e2eab17a48e433acf8f
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.variable}>
        {children}
=======
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Global Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Deep Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,8%)] via-[hsl(222,60%,10%)] to-[hsl(230,50%,8%)]" />

          {/* Gradient Blobs */}
          <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-sabbpe-blue/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sabbpe-cyan/15 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sabbpe-teal/10 rounded-full blur-[100px] animate-blob [animation-delay:4s]" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 noise-overlay" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer */}
        {/* Footer - High z-index to overlay sticky sections */}
        <div className="relative z-50">
          <Footer />
        </div>

>>>>>>> 895c155e44dc0c4d4d8d3e2eab17a48e433acf8f
      </body>
    </html>
  );
}
