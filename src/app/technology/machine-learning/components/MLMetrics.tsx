"use client";

import { motion } from "framer-motion";
import styles from "./MLMetrics.module.css";

const metrics = [
  {
    title: "Model Accuracy",
    metric: "96%",
    description: "Precision in fraud detection"
  },
  {
    title: "Training Speed",
    metric: "2 hrs",
    description: "Full model retraining cycle"
  },
  {
    title: "Prediction Latency",
    metric: "<10ms",
    description: "Real-time inference speed"
  },
  {
    title: "Feature Engineering",
    metric: "500+",
    description: "Automated feature extraction"
  }
];

export function MLMetrics() {
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
          <h2 className={styles.title}>Performance Metrics</h2>
          <p className={styles.subtitle}>
            Industry-leading ML model performance
          </p>
        </motion.div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.metric}>{metric.metric}</div>
              <h3 className={styles.cardTitle}>{metric.title}</h3>
              <p className={styles.cardDescription}>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
