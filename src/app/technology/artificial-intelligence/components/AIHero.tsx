"use client";

import { motion } from "framer-motion";
import styles from "./AIHero.module.css";

export function AIHero() {
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
            <span className={styles.badgeIcon}>🤖</span>
            <span className={styles.badgeText}>Artificial Intelligence</span>
          </motion.div>

          <h1 className={styles.title}>
            Intelligent Payment Solutions
          </h1>
          
          <p className={styles.subtitle}>
            Deploy advanced AI algorithms for fraud prevention, risk management, and intelligent transaction processing in real-time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
