'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import SettlementHeroLayer from '@/components/products/settlement-reporting/layers/SettlementHeroLayer';
import InstantSettlementLayer from '@/components/products/settlement-reporting/layers/InstantSettlementLayer';
import RealTimeReportsLayer from '@/components/products/settlement-reporting/layers/RealTimeReportsLayer';
import ReconciliationLayer from '@/components/products/settlement-reporting/layers/ReconciliationLayer';
import WhySabbPeSettlementLayer from '@/components/products/settlement-reporting/layers/WhySabbPeSettlementLayer';
import SettlementCTALayer from '@/components/products/settlement-reporting/layers/SettlementCTALayer';
import SettlementNavigation from '@/components/products/settlement-reporting/SettlementNavigation';

export default function SettlementReportingPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            {/* Hero Section */}
            <SettlementHeroLayer />

            <SettlementNavigation />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <InstantSettlementLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <RealTimeReportsLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <ReconciliationLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3}>
                    <WhySabbPeSettlementLayer />
                </LayeredStickySection>

                <LayeredStickySection index={4} isLast={true}>
                    <SettlementCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
