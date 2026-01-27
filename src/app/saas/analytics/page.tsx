'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import AnalyticsHeroLayer from '@/components/saas/analytics/layers/AnalyticsHeroLayer';
import AnalyticsFeaturesLayer from '@/components/saas/analytics/layers/AnalyticsFeaturesLayer';
import AnalyticsCTALayer from '@/components/saas/analytics/layers/AnalyticsCTALayer';

export default function AnalyticsEnginePage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            <AnalyticsHeroLayer />

            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <AnalyticsFeaturesLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1} isLast={true}>
                    <AnalyticsCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
