'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import OnlineHeroLayer from '@/components/products/online-payments/layers/OnlineHeroLayer';
import CardsLayer from '@/components/products/online-payments/layers/CardsLayer';
import WalletsLayer from '@/components/products/online-payments/layers/WalletsLayer';
import NetBankingLayer from '@/components/products/online-payments/layers/NetBankingLayer';
import OnlineCTALayer from '@/components/products/online-payments/layers/OnlineCTALayer';
import OnlineNavigation from '@/components/products/online-payments/OnlineNavigation';

export default function OnlinePaymentsPage() {
    return (
        <main className="relative w-full min-h-screen bg-background">
            {/* Hero Section */}
            <OnlineHeroLayer />

            <OnlineNavigation />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <CardsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <WalletsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <NetBankingLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3} isLast={true}>
                    <OnlineCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
