import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { CloudHero } from "./components/cloud/CloudHero";
import { CloudCapabilities } from "./components/cloud/CloudCapabilities";
import CloudScalingFlow from "./components/cloud/CloudScalingFlow";
import { CloudUseCases } from "./components/cloud/CloudUseCases";
import { CloudBenefits } from "./components/cloud/CloudBenefits";
import { CloudCTASection } from "./components/cloud/CloudCTASection";
import { BlockchainHero } from "./components/blockchain/BlockchainHero";
import { BlockchainFeatures } from "./components/blockchain/BlockchainFeatures";
import BlockCreationFlow from "./components/blockchain/BlockCreationFlow";
import { BlockchainApplications } from "./components/blockchain/BlockchainApplications";
import { BlockchainBenefits } from "./components/blockchain/BlockchainBenefits";
import { BlockchainCTASection } from "./components/blockchain/BlockchainCTASection";
import { IoTHero } from "./components/iot/IoTHero";
import { IoTCapabilities } from "./components/iot/IoTCapabilities";
import IoTConnectionFlow from "./components/iot/IoTConnectionFlow";
import { IoTApplications } from "./components/iot/IoTApplications";
import { IoTBenefits } from "./components/iot/IoTBenefits";
import { IoTCTASection } from "./components/iot/IoTCTASection";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder/AnimationPlaceholder";
import styles from "./page.module.css";

export default function InfrastructurePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Cloud Computing Section */}
        <section id="cloud-computing" className={styles.section}>
          <CloudHero />
          <CloudCapabilities />
          <AnimationPlaceholder 
            id="cloud-infrastructure-demo"
            title="Cloud Infrastructure Animation"
            description="Visualize cloud scalability - server provisioning, load balancing, or multi-region deployment"
            height="450px"
          />
          <CloudScalingFlow />
          <CloudUseCases />
          <CloudBenefits />
          <CloudCTASection />
        </section>

        {/* Blockchain Development Section */}
        <section id="blockchain-development" className={styles.section}>
          <BlockchainHero />
          <BlockchainFeatures />
          <AnimationPlaceholder 
            id="blockchain-network-demo"
            title="Blockchain Network Animation"
            description="Show decentralized network - nodes connecting, consensus mechanism, or smart contract execution"
            height="450px"
          />
          <BlockCreationFlow />
          <BlockchainApplications />
          <BlockchainBenefits />
          <BlockchainCTASection />
        </section>

        {/* Internet of Things Section */}
        <section id="internet-of-things" className={styles.section}>
          <IoTHero />
          <IoTCapabilities />
          <AnimationPlaceholder 
            id="iot-ecosystem-demo"
            title="IoT Ecosystem Animation"
            description="Show connected devices - smart home network, sensor data flow, or device-to-cloud communication"
            height="450px"
          />
          <IoTConnectionFlow />
          <IoTApplications />
          <IoTBenefits />
          <IoTCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
