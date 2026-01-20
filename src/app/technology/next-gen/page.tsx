"use client";

import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

// Chatbot Development Components
import { ChatbotHero } from "./components/chatbot/ChatbotHero";
import { ChatbotFeatures } from "./components/chatbot/ChatbotFeatures";
import ChatConversationFlow from "./components/chatbot/ChatConversationFlow";
import { ChatbotUseCases } from "./components/chatbot/ChatbotUseCases";
import { ChatbotBenefits } from "./components/chatbot/ChatbotBenefits";
import { ChatbotCTASection } from "./components/chatbot/ChatbotCTASection";

// Progressive Web Apps Components
import { PWAHero } from "./components/pwa/PWAHero";
import { PWAFeatures } from "./components/pwa/PWAFeatures";
import PWAInstallFlow from "./components/pwa/PWAInstallFlow";
import { PWABenefits } from "./components/pwa/PWABenefits";
import { PWAApplications } from "./components/pwa/PWAApplications";
import { PWACTASection } from "./components/pwa/PWACTASection";

// Metaverse & AR/VR Components
import { MetaverseHero } from "./components/metaverse/MetaverseHero";
import { MetaverseCapabilities } from "./components/metaverse/MetaverseCapabilities";
import MetaversePaymentFlow from "./components/metaverse/MetaversePaymentFlow";
import { MetaverseApplications } from "./components/metaverse/MetaverseApplications";
import { MetaverseBenefits } from "./components/metaverse/MetaverseBenefits";
import { MetaverseCTASection } from "./components/metaverse/MetaverseCTASection";

// Animation Placeholder
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";

export default function NextGenPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Chatbot Development */}
        <section className={styles.technologySection} id="chatbot-development">
          <ChatbotHero />
          <ChatbotFeatures />
          <ChatConversationFlow />
          <AnimationPlaceholder
            id="chatbot-conversation-demo"
            title="Interactive Chatbot Demo"
            description="Experience natural conversations with our AI-powered chatbot"
          />
          <ChatbotBenefits />
          <ChatbotCTASection />
        </section>

        {/* Progressive Web Apps */}
        <section className={styles.technologySection} id="progressive-web-apps">
          <PWAHero />
          <PWAFeatures />
          <PWAInstallFlow />
          <AnimationPlaceholder
            id="pwa-installation-demo"
            title="PWA Installation Demo"
            description="See how seamlessly users can install your Progressive Web App"
          />
          <PWABenefits />
          <PWACTASection />
        </section>

        {/* Metaverse & AR/VR */}
        <section className={styles.technologySection} id="metaverse-ar-vr">
          <MetaverseHero />
          <MetaverseCapabilities />
          <MetaversePaymentFlow />
          <AnimationPlaceholder
            id="metaverse-experience-demo"
            title="Immersive Experience Demo"
            description="Step into the future with our metaverse and AR/VR solutions"
          />
          <MetaverseBenefits />
          <MetaverseCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
