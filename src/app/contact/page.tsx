'use client';

import ContactHeroLayer from '@/components/contact/layers/ContactHeroLayer';
import ContactFormLayer from '@/components/contact/layers/ContactFormLayer';
import ContactInfoLayer from '@/components/contact/layers/ContactInfoLayer';
import ContactCTALayer from '@/components/contact/layers/ContactCTALayer';
import LayeredStackScroll from '@/components/layout/LayeredStackScroll';
import LayeredStickySection from '@/components/layout/LayeredStickySection';

export default function ContactPage() {
    return (
        <main className="relative w-full min-h-screen bg-sabbpe-navy-dark">
            {/* Hero Section */}
            <ContactHeroLayer />

            {/* Layered Stack Container */}
            <LayeredStackScroll>
                <LayeredStickySection index={0}>
                    <ContactInfoLayer />
                </LayeredStickySection>

                <LayeredStickySection index={1}>
                    <ContactFormLayer />
                </LayeredStickySection>

                <LayeredStickySection index={2} isLast={true}>
                    <ContactCTALayer />
                </LayeredStickySection>
            </LayeredStackScroll>
        </main>
    );
}
