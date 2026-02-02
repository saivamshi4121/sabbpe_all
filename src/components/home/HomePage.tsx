'use client';

import HeroLayer from './layers/HeroLayer';
import LayeredStackScroll from '../layout/LayeredStackScroll';
import LayeredStickySection from '../layout/LayeredStickySection';

// Layers
import ProductsLayer from './layers/ProductsLayer';
import HowItWorksLayer from './layers/HowItWorksLayer';
import TestimonialsLayer from './layers/TestimonialsLayer';
import WhySabbPeLayer from './layers/WhySabbPeLayer';
import FinalCTALayer from './layers/FinalCTALayer';

export default function HomePage() {
    return (
        <main className="relative w-full min-h-screen bg-background">
            {/* Hero Section - Scrolls normally */}
            <HeroLayer />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <ProductsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <HowItWorksLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <WhySabbPeLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3}>
                    <TestimonialsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={4} isLast={true}>
                    <FinalCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
