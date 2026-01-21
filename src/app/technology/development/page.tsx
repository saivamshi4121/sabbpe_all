"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import LayeredServiceUI from "@/components/DevelopmentServices/LayeredServiceUI";
import {
  CustomAppDevelopmentContent,
  DigitalTransformationContent,
  EnterpriseMobilityContent,
} from "@/components/DevelopmentServices/ServiceContent";
import styles from "./DevelopmentPage.module.scss";

export default function DevelopmentPage() {
  const [activeServiceId, setActiveServiceId] = useState("custom-app-development");

  const services = [
    {
      id: "custom-app-development",
      title: "Custom App Development",
      subtitle: "Innovative Mobile & Web Solutions",
      description:
        "We create high-performance, scalable mobile and web applications tailored to your business needs. From concept to deployment, we handle every aspect of app development with cutting-edge technologies and premium design patterns.",
      icon: "📱",
      color: "#0f6bff",
      accentColor: "#06b6d4",
      component: CustomAppDevelopmentContent,
      stats: [
        { label: "Projects Delivered", value: "50+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Tech Stack", value: "10+" },
      ],
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      subtitle: "Modernize Your Business",
      description:
        "Transform your operations with strategic digital solutions. We help enterprises modernize their infrastructure, streamline workflows, and unlock new growth opportunities through digital innovation.",
      icon: "🚀",
      color: "#14b8a6",
      accentColor: "#0f6bff",
      component: DigitalTransformationContent,
      stats: [
        { label: "Companies Transformed", value: "35+" },
        { label: "Efficiency Gain", value: "45%" },
        { label: "ROI Average", value: "3.5x" },
      ],
    },
    {
      id: "enterprise-mobility",
      title: "Enterprise Mobility",
      subtitle: "Secure Mobile-First Strategy",
      description:
        "Empower your workforce with enterprise mobility solutions. Secure, scalable mobile applications designed for large organizations with complex requirements and compliance needs.",
      icon: "🏢",
      color: "#7c3aed",
      accentColor: "#ec4899",
      component: EnterpriseMobilityContent,
      stats: [
        { label: "Enterprise Clients", value: "25+" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Security Tier", value: "Bank-Grade" },
      ],
    },
  ];

  const handleServiceChange = useCallback((serviceId: string) => {
    setActiveServiceId(serviceId);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heroSection}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Development Services</h1>
          <p className={styles.heroSubtitle}>
            Explore our comprehensive suite of development solutions designed for enterprise success
          </p>
        </div>
      </motion.section>

      {/* Layered Service UI */}
      <section className={styles.serviceSection}>
        <LayeredServiceUI 
          services={services} 
          onServiceChange={handleServiceChange}
        />
      </section>

      {/* Additional Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.infoSection}
      >
        <div className={styles.infoGrid}>
          <motion.div
            whileHover={{ y: -5 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>⚡</div>
            <h3 className={styles.infoTitle}>Fast Delivery</h3>
            <p className={styles.infoText}>
              Agile development methodology with rapid iterations and continuous deployment
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>🔒</div>
            <h3 className={styles.infoTitle}>Enterprise Security</h3>
            <p className={styles.infoText}>
              Industry-leading security standards with compliance to GDPR, HIPAA, and ISO certifications
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>📈</div>
            <h3 className={styles.infoTitle}>Scalable Solutions</h3>
            <p className={styles.infoText}>
              Built to grow with your business from startup to enterprise scale
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>🌍</div>
            <h3 className={styles.infoTitle}>Global Reach</h3>
            <p className={styles.infoText}>
              24/7 support team across multiple time zones ensuring continuous assistance
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.ctaSection}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Development?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our development services can accelerate your business goals
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(15, 107, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaButton}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
