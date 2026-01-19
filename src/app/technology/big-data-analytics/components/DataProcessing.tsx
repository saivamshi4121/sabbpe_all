"use client";

import { motion } from "framer-motion";
import styles from "./DataProcessing.module.css";

const technologies = [
  {
    icon: "⚡",
    title: "Stream Processing",
    description: "Apache Kafka and Flink for real-time transaction data ingestion and processing at scale."
  },
  {
    icon: "🗄️",
    title: "Data Warehousing",
    description: "Distributed storage with columnar databases optimized for analytical query performance."
  },
  {
    icon: "🔄",
    title: "ETL Pipelines",
    description: "Automated data extraction, transformation, and loading with data quality validation."
  },
  {
    icon: "📈",
    title: "Time-Series Analysis",
    description: "Specialized databases for payment trends, seasonality detection, and forecasting."
  },
  {
    icon: "🎯",
    title: "Data Lake Architecture",
    description: "Centralized repository storing structured and unstructured payment data at any scale."
  },
  {
    icon: "🔍",
    title: "Advanced Querying",
    description: "SQL and NoSQL interfaces for complex analytical queries across petabytes of data."
  }
];

export function DataProcessing() {
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
          <h2 className={styles.title}>Data Processing Infrastructure</h2>
          <p className={styles.subtitle}>
            Enterprise-grade big data technologies for payment analytics
          </p>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
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
                <div className={styles.icon}>{tech.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{tech.title}</h3>
              <p className={styles.cardDescription}>{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
