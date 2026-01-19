"use client";

import { motion } from "framer-motion";
import styles from "./AIUseCases.module.css";

const useCases = [
  {
    title: "Fraud Prevention",
    description: "Detect and prevent fraudulent transactions before they occur with multi-layered AI models analyzing behavioral patterns, device fingerprints, and transaction velocity."
  },
  {
    title: "Credit Scoring",
    description: "Alternative credit risk assessment using non-traditional data sources and deep learning to expand financial inclusion while maintaining low default rates."
  },
  {
    title: "Customer Personalization",
    description: "Deliver personalized payment experiences, offers, and recommendations based on individual preferences and transaction history analysis."
  }
];

export function AIUseCases() {
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
          <h2 className={styles.title}>Use Cases</h2>
          <p className={styles.subtitle}>
            Real-world applications of AI in payment processing
          </p>
        </motion.div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.cardDescription}>{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
