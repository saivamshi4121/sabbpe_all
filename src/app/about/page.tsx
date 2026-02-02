'use client';

import AboutHeroLayer from '@/components/about/layers/AboutHeroLayer';
import AboutMissionLayer from '@/components/about/layers/AboutMissionLayer';
import AboutTeamLayer from '@/components/about/layers/AboutTeamLayer';
import AboutImpactLayer from '@/components/about/layers/AboutImpactLayer';
import AboutJourneyLayer from '@/components/about/layers/AboutJourneyLayer';
import AboutCTALayer from '@/components/about/layers/AboutCTALayer';
import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';

export default function AboutPage() {
    return (
        <main className="relative w-full min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <AboutHeroLayer />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <AboutMissionLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <AboutTeamLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2}>
                    <AboutImpactLayer />
                </LayeredStickySection>

                <LayeredStickySection index={3}>
                    <AboutJourneyLayer />
                </LayeredStickySection>

                <LayeredStickySection index={4} isLast={true}>
                    <AboutCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
