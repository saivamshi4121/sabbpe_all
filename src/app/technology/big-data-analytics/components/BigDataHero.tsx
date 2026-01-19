"use client";

import { motion } from "framer-motion";
import styles from "./BigDataHero.module.css";

export function BigDataHero() {
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
            <span className={styles.badgeIcon}>📊</span>
            <span className={styles.badgeText}>Big Data & Analytics</span>
          </motion.div>

          <h1 className={styles.title}>
            Scalable Payment Data Analytics
          </h1>
          
          <p className={styles.subtitle}>
            Process billions of transactions with distributed computing, real-time streaming analytics, and comprehensive business intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
