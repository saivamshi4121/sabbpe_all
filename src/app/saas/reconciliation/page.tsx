'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import ReconHeroLayer from '@/components/saas/reconciliation/layers/ReconHeroLayer';
import ReconFeaturesLayer from '@/components/saas/reconciliation/layers/ReconFeaturesLayer';
import ReconCTALayer from '@/components/saas/reconciliation/layers/ReconCTALayer';

export default function ReconciliationPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            <ReconHeroLayer />

            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <ReconFeaturesLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1} isLast={true}>
                    <ReconCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
