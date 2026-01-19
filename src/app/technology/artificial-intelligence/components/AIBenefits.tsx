"use client";

import { motion } from "framer-motion";
import styles from "./AIBenefits.module.css";

const benefits = [
  {
    title: "Fraud Reduction",
    metric: "98%",
    description: "Accuracy in fraud detection"
  },
  {
    title: "Processing Speed",
    metric: "<50ms",
    description: "Real-time transaction decisions"
  },
  {
    title: "Cost Savings",
    metric: "60%",
    description: "Reduction in manual reviews"
  },
  {
    title: "False Positives",
    metric: "85%",
    description: "Lower decline rate"
  }
];

export function AIBenefits() {
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
          <h2 className={styles.title}>Measurable Impact</h2>
          <p className={styles.subtitle}>
            Proven results from AI-powered payment solutions
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.metric}>{benefit.metric}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
