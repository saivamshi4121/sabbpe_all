"use client";

import { motion } from "framer-motion";
import styles from "./MLModels.module.css";

const models = [
  {
    icon: "🌲",
    title: "Random Forest",
    description: "Ensemble learning for transaction classification and risk scoring with high accuracy."
  },
  {
    icon: "🔷",
    title: "Neural Networks",
    description: "Deep learning models for complex pattern recognition in payment behaviors."
  },
  {
    icon: "📉",
    title: "Gradient Boosting",
    description: "XGBoost and LightGBM for fraud detection with minimal false positives."
  },
  {
    icon: "🔄",
    title: "Time Series Forecasting",
    description: "LSTM networks predicting transaction volumes and seasonal payment trends."
  },
  {
    icon: "👥",
    title: "Clustering Algorithms",
    description: "K-means and DBSCAN for customer segmentation and behavior grouping."
  },
  {
    icon: "⚖️",
    title: "Anomaly Detection",
    description: "Isolation Forest and Autoencoders identifying unusual transaction patterns."
  }
];

export function MLModels() {
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
          <h2 className={styles.title}>ML Models in Production</h2>
          <p className={styles.subtitle}>
            Proven machine learning algorithms powering payment intelligence
          </p>
        </motion.div>

        <div className={styles.grid}>
          {models.map((model, index) => (
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
                <div className={styles.icon}>{model.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <p className={styles.cardDescription}>{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
