import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { AIHero } from "./components/ai/AIHero";
import { AICapabilities } from "./components/ai/AICapabilities";
import { AIProcessFlow } from "./components/ai/AIProcessFlow";
import { AIUseCases } from "./components/ai/AIUseCases";
import { AIBenefits } from "./components/ai/AIBenefits";
import { AICTASection } from "./components/ai/AICTASection";
import { MLHero } from "./components/ml/MLHero";
import { MLModels } from "./components/ml/MLModels";
import { MLLearningFlow } from "./components/ml/MLLearningFlow";
import { MLApplications } from "./components/ml/MLApplications";
import { MLMetrics } from "./components/ml/MLMetrics";
import { MLCTASection } from "./components/ml/MLCTASection";
import { BigDataHero } from "./components/bigdata/BigDataHero";
import { DataProcessing } from "./components/bigdata/DataProcessing";
import { DataFlowVisualization } from "./components/bigdata/DataFlowVisualization";
import { AnalyticsCapabilities } from "./components/bigdata/AnalyticsCapabilities";
import { DataInsights } from "./components/bigdata/DataInsights";
import { BigDataCTASection } from "./components/bigdata/BigDataCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function AIDataPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* AI Section */}
        <section id="artificial-intelligence" className={styles.section}>
          <AIHero />
          <AICapabilities />
          <AnimationPlaceholder 
            id="ai-custom-demo"
            title="AI Feature Animation"
            description="Add custom AI visualization - fraud detection, image recognition, or chatbot interaction"
            height="450px"
          />
          <AIProcessFlow />
          <AIUseCases />
          <AIBenefits />
          <AICTASection />
        </section>

        {/* Machine Learning Section */}
        <section id="machine-learning" className={styles.section}>
          <MLHero />
          <MLModels />
          <AnimationPlaceholder 
            id="ml-training-demo"
            title="ML Training Animation"
            description="Visualize model training process - neural networks, accuracy improvement, or prediction demo"
            height="450px"
          />
          <MLLearningFlow />
          <MLApplications />
          <MLMetrics />
          <MLCTASection />
        </section>

        {/* Big Data Section */}
        <section id="big-data" className={styles.section}>
          <BigDataHero />
          <DataProcessing />
          <AnimationPlaceholder 
            id="bigdata-pipeline-demo"
            title="Data Pipeline Animation"
            description="Show real-time data processing - streaming data, batch processing, or analytics dashboard"
            height="450px"
          />
          <DataFlowVisualization />
          <AnalyticsCapabilities />
          <DataInsights />
          <BigDataCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
