import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { MLHero } from "./components/MLHero";
import { MLModels } from "./components/MLModels";
import { MLApplications } from "./components/MLApplications";
import { MLMetrics } from "./components/MLMetrics";
import { MLCTASection } from "./components/MLCTASection";
import styles from "./page.module.css";

export default function MachineLearningPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <MLHero />
        <MLModels />
        <MLApplications />
        <MLMetrics />
        <MLCTASection />
      </main>
      <Footer />
    </div>
  );
}
