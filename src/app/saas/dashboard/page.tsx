'use client';

import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';
import DashboardHeroLayer from '@/components/saas/dashboard/layers/DashboardHeroLayer';
import DashboardFeaturesLayer from '@/components/saas/dashboard/layers/DashboardFeaturesLayer';
import DashboardCTALayer from '@/components/saas/dashboard/layers/DashboardCTALayer';
import { Navbar } from '@/components/Navbar/Navbar';

export default function DashboardPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            <DashboardHeroLayer />

            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <DashboardFeaturesLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1} isLast={true}>
                    <DashboardCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
