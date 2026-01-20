"use client";

import { motion } from "framer-motion";
import styles from "./BlockchainCTASection.module.css";

export function BlockchainCTASection() {
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
            <h2 className={styles.title}>Built on Trust and Transparency</h2>
            <p className={styles.subtitle}>
              Blockchain technology provides the foundation for secure, transparent, and tamper-proof payment records. It's not about hype—it's about creating a payment system where trust is built into the technology itself, giving you confidence in every transaction.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Blockchain Security
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
