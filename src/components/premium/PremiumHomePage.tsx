'use client';

import Hero from '@/components/premium/Hero';
import { StackingCards } from '@/components/premium/StackingCards';
import Footer from '@/components/premium/Footer';

const STACKING_CARDS_DATA = [
  {
    id: '1',
    title: 'Unified Payments',
    category: 'PLATFORM',
    description: 'One API for every payment method. Simplify your infrastructure, reduce complexity, and scale instantly.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=800&fit=crop',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Smart Routing',
    category: 'ENGINE',
    description: 'AI-powered intelligent routing that optimizes success rates, reduces failures, and maximizes revenue.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    color: 'cyan',
  },
  {
    id: '3',
    title: 'Enterprise Security',
    category: 'SECURITY',
    description: 'Military-grade encryption, compliance, and fraud prevention. Your data is your fortress.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    color: 'purple',
  },
  {
    id: '4',
    title: 'Real-time Insights',
    category: 'INSIGHTS',
    description: 'Advanced analytics, predictive intelligence, and actionable insights delivered instantly to your dashboard.',
    image: 'https://images.unsplash.com/photo-1551614156-5985a2e6ae0a?w=1200&h=800&fit=crop',
    color: 'green',
  },
];

export default function PremiumHomePage() {
  return (
    <main className="relative w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <Hero />

      {/* Stacking Cards Section */}
      <div id="stacking-cards-section">
        <StackingCards items={STACKING_CARDS_DATA} />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
