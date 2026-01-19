import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { AIHero } from "./components/AIHero";
import { AICapabilities } from "./components/AICapabilities";
import { AIUseCases } from "./components/AIUseCases";
import { AIBenefits } from "./components/AIBenefits";
import { AICTASection } from "./components/AICTASection";
import styles from "./page.module.css";

export default function ArtificialIntelligencePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <AIHero />
        <AICapabilities />
        <AIUseCases />
        <AIBenefits />
        <AICTASection />
      </main>
      <Footer />
    </div>
  );
}
