"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./BlockchainBenefits.module.css";

const benefits = [
  {
    title: "Security Level",
    metric: "99.99%",
    description: "Tamper-proof transaction records"
  },
  {
    title: "Settlement Speed",
    metric: "<5min",
    description: "Cross-border payment finality"
  },
  {
    title: "Cost Savings",
    metric: "65%",
    description: "Lower intermediary fees"
  },
  {
    title: "Dispute Resolution",
    metric: "90%",
    description: "Faster with blockchain proof"
  }
];

export function BlockchainBenefits() {
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
          <h2 className={styles.title}>Blockchain Advantages</h2>
          <p className={styles.subtitle}>
            Measurable benefits of immutable records
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
              <div className={styles.metric}>
                <AnimatedCounter value={benefit.metric} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
