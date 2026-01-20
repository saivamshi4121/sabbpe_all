"use client";

import { motion } from "framer-motion";
import styles from "./CloudCTASection.module.css";

export function CloudCTASection() {
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
            <h2 className={styles.title}>Infrastructure You Can Trust</h2>
            <p className={styles.subtitle}>
              Cloud computing means your payments are backed by enterprise-grade infrastructure that never sleeps. You get reliability, speed, and peace of mind—all working invisibly in the background so you can focus on growing your business.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Experience Cloud-Powered Payments
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
