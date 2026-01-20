"use client";

import { motion } from "framer-motion";
import styles from "./AICTASection.module.css";

export function AICTASection() {
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
            <h2 className={styles.title}>Intelligence You Can Trust</h2>
            <p className={styles.subtitle}>
              AI isn't flashy technology for the sake of it - it's about making your payments safer, smarter, and simpler. Every feature is designed to work invisibly in the background, giving you peace of mind without the complexity.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
