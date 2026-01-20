"use client";

import { motion } from "framer-motion";
import styles from "./PWACTASection.module.css";

export function PWACTASection() {
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
            <h2 className={styles.title}>The Future of Mobile Payments</h2>
            <p className={styles.subtitle}>
              PWAs represent the evolution of how we interact with apps—combining the reach of the web with the experience of native apps. No app store gatekeepers, no forced updates, no storage limitations. Just fast, reliable payment experiences that work anywhere, on any device, whenever you need them.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Experience Our PWA
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
