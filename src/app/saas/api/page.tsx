'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import ApiHeroLayer from '@/components/saas/api/layers/ApiHeroLayer';
import ApiFeaturesLayer from '@/components/saas/api/layers/ApiFeaturesLayer';
import ApiCTALayer from '@/components/saas/api/layers/ApiCTALayer';

export default function ApiSuitePage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            <ApiHeroLayer />

            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <ApiFeaturesLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1} isLast={true}>
                    <ApiCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
