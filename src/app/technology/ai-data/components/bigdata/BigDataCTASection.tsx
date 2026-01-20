"use client";

import { motion } from "framer-motion";
import styles from "./BigDataCTASection.module.css";

export function BigDataCTASection() {
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
            <h2 className={styles.title}>Transparency That Builds Trust</h2>
            <p className={styles.subtitle}>
              In payments, knowing what's happening with your money builds confidence. Analytics gives you complete visibility into transaction history, settlement timings, and revenue trends—making your financial operations clearer, more predictable, and easier to manage.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See Your Data at Work
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
