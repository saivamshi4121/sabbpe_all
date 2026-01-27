'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import UPIAssistedHeroLayer from '@/components/products/upi-assisted/layers/UPIAssistedHeroLayer';
import UPIPaymentsLayer from '@/components/products/upi-assisted/layers/UPIPaymentsLayer';
import SabbPeMinisLayer from '@/components/products/upi-assisted/layers/SabbPeMinisLayer';
import VASLayer from '@/components/products/upi-assisted/layers/VASLayer';
import UPIAssistedCTALayer from '@/components/products/upi-assisted/layers/UPIAssistedCTALayer';

export default function UPIAssistedPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            {/* Hero Section */}
            <UPIAssistedHeroLayer />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <UPIPaymentsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <SabbPeMinisLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <VASLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3} isLast={true}>
                    <UPIAssistedCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
