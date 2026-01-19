"use client";

import { motion } from "framer-motion";
import styles from "./MLApplications.module.css";

const applications = [
  {
    title: "Transaction Success Prediction",
    description: "ML models predict transaction approval likelihood based on historical data, payment method, merchant category, and real-time network conditions."
  },
  {
    title: "Dynamic Risk Scoring",
    description: "Continuously updated risk scores for each transaction using ensemble models that learn from millions of payment events daily."
  },
  {
    title: "Churn Prevention",
    description: "Identify customers at risk of leaving through behavioral analysis and engagement patterns, enabling proactive retention strategies."
  }
];

export function MLApplications() {
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
          <h2 className={styles.title}>Real-World Applications</h2>
          <p className={styles.subtitle}>
            Machine learning driving business outcomes in payments
          </p>
        </motion.div>

        <div className={styles.grid}>
          {applications.map((application, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className={styles.cardTitle}>{application.title}</h3>
              <p className={styles.cardDescription}>{application.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
