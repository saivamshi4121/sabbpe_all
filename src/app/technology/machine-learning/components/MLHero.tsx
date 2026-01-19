"use client";

import { motion } from "framer-motion";
import styles from "./MLHero.module.css";

export function MLHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeIcon}>🧠</span>
            <span className={styles.badgeText}>Machine Learning</span>
          </motion.div>

          <h1 className={styles.title}>
            Self-Learning Payment Systems
          </h1>
          
          <p className={styles.subtitle}>
            Continuous model training and optimization for payment fraud detection, risk assessment, and transaction success prediction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
