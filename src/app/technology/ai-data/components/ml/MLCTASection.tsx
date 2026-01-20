"use client";

import { motion } from "framer-motion";
import styles from "./MLCTASection.module.css";

export function MLCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Technology That Gets Better Every Day</h2>
            <p className={styles.subtitle}>
              Unlike traditional software that stays the same until an update, Machine Learning means SabbPe is constantly evolving based on real usage. Every transaction adds to what the system knows, delivering better security, smarter insights, and more reliable payments month after month—without requiring any effort from you.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Experience Smart Payments
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
