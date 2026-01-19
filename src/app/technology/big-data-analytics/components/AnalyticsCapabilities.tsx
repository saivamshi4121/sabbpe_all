"use client";

import { motion } from "framer-motion";
import styles from "./AnalyticsCapabilities.module.css";

const capabilities = [
  {
    title: "Merchant Analytics",
    description: "Comprehensive dashboards for transaction volumes, success rates, payment method preferences, and revenue trends with customizable reporting."
  },
  {
    title: "Customer Behavior Analysis",
    description: "Deep insights into payment patterns, lifetime value calculation, cohort analysis, and personalized recommendation engines."
  },
  {
    title: "Operational Intelligence",
    description: "Monitor system performance, identify bottlenecks, track SLA compliance, and optimize infrastructure costs in real-time."
  }
];

export function AnalyticsCapabilities() {
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
          <h2 className={styles.title}>Analytics Capabilities</h2>
          <p className={styles.subtitle}>
            Transform raw payment data into strategic business insights
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
