'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import AssistedHeroLayer from '@/components/products/assisted-solutions/layers/AssistedHeroLayer';
import PaymentGatewayLayer from '@/components/products/assisted-solutions/layers/PaymentGatewayLayer';
import LinksAndFormsLayer from '@/components/products/assisted-solutions/layers/LinksAndFormsLayer';
import SubscriptionsLayer from '@/components/products/assisted-solutions/layers/SubscriptionsLayer';
import PayoutsLayer from '@/components/products/assisted-solutions/layers/PayoutsLayer';
import IntegrationLayer from '@/components/products/assisted-solutions/layers/IntegrationLayer';
import AssistedCTALayer from '@/components/products/assisted-solutions/layers/AssistedCTALayer';

import AssistedNavigation from '@/components/products/assisted-solutions/AssistedNavigation';

export default function AssistedSolutionsPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            {/* Hero Section */}
            <AssistedHeroLayer />

            <AssistedNavigation />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <PaymentGatewayLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <LinksAndFormsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <SubscriptionsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3}>
                    <PayoutsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={4}>
                    <IntegrationLayer />
                </LayeredStickySection>

                <LayeredStickySection index={5} isLast={true}>
                    <AssistedCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
