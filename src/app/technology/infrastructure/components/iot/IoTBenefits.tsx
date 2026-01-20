"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./IoTBenefits.module.css";

const benefits = [
  {
    title: "Connected Devices",
    metric: "15B+",
    description: "IoT devices worldwide by 2025"
  },
  {
    title: "Transaction Speed",
    metric: "<1s",
    description: "Contactless payment completion"
  },
  {
    title: "User Convenience",
    metric: "80%",
    description: "Faster checkout experience"
  },
  {
    title: "Adoption Growth",
    metric: "45%",
    description: "Annual IoT payment increase"
  }
];

export function IoTBenefits() {
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
          <h2 className={styles.title}>The IoT Payment Revolution</h2>
          <p className={styles.subtitle}>
            Numbers showing the growth of connected payments
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
