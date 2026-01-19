"use client";

import { motion } from "framer-motion";
import styles from "./AICapabilities.module.css";

const capabilities = [
  {
    icon: "🛡️",
    title: "Fraud Detection",
    description: "Real-time anomaly detection using neural networks to identify suspicious transactions instantly."
  },
  {
    icon: "📊",
    title: "Risk Scoring",
    description: "Dynamic risk assessment models that adapt to evolving fraud patterns and user behavior."
  },
  {
    icon: "🎯",
    title: "Smart Routing",
    description: "Intelligent transaction routing optimized for success rates and cost efficiency."
  },
  {
    icon: "💬",
    title: "Natural Language Processing",
    description: "AI-powered customer support and query resolution with contextual understanding."
  },
  {
    icon: "🔍",
    title: "Pattern Recognition",
    description: "Identify complex transaction patterns and behavioral trends across millions of data points."
  },
  {
    icon: "⚡",
    title: "Auto-Decision Engine",
    description: "Automated transaction approval/rejection with configurable business rules and ML models."
  }
];

export function AICapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>AI Capabilities</h2>
          <p className={styles.subtitle}>
            Enterprise-grade artificial intelligence for financial services
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{capability.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
