import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { BigDataHero } from "./components/BigDataHero";
import { DataProcessing } from "./components/DataProcessing";
import { AnalyticsCapabilities } from "./components/AnalyticsCapabilities";
import { DataInsights } from "./components/DataInsights";
import { BigDataCTASection } from "./components/BigDataCTASection";
import styles from "./page.module.css";

export default function BigDataAnalyticsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BigDataHero />
        <DataProcessing />
        <AnalyticsCapabilities />
        <DataInsights />
        <BigDataCTASection />
      </main>
      <Footer />
    </div>
  );
}
