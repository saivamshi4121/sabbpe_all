'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import CollectionsHeroLayer from '@/components/products/collections-recurring/layers/CollectionsHeroLayer';
import UPICollectionsLayer from '@/components/products/collections-recurring/layers/UPICollectionsLayer';
import UPIAutoPayLayer from '@/components/products/collections-recurring/layers/UPIAutoPayLayer';
import BBPSServicesLayer from '@/components/products/collections-recurring/layers/BBPSServicesLayer';
import CollectionsCTALayer from '@/components/products/collections-recurring/layers/CollectionsCTALayer';

export default function CollectionsRecurringPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            {/* Hero Section */}
            <CollectionsHeroLayer />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <UPICollectionsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <UPIAutoPayLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <BBPSServicesLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3} isLast={true}>
                    <CollectionsCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
