"use client";

import { motion } from "framer-motion";
import styles from "./DataInsights.module.css";

const insights = [
  {
    title: "Processing Speed",
    metric: "10M+",
    description: "Transactions per second"
  },
  {
    title: "Data Storage",
    metric: "5 PB",
    description: "Transaction history archived"
  },
  {
    title: "Query Performance",
    metric: "<2s",
    description: "Complex analytical queries"
  },
  {
    title: "Data Freshness",
    metric: "Real-Time",
    description: "Live dashboard updates"
  }
];

export function DataInsights() {
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
          <h2 className={styles.title}>Platform Performance</h2>
          <p className={styles.subtitle}>
            Industrial-scale data processing metrics
          </p>
        </motion.div>

        <div className={styles.grid}>
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.metric}>{insight.metric}</div>
              <h3 className={styles.cardTitle}>{insight.title}</h3>
              <p className={styles.cardDescription}>{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
