"use client";

import { motion } from "framer-motion";
import styles from "./MetaverseCTASection.module.css";

export function MetaverseCTASection() {
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
            <h2 className={styles.title}>Ready for Tomorrow's Commerce</h2>
            <p className={styles.subtitle}>
              The metaverse and AR/VR represent the next evolution of how people shop, socialize, and do business. SabbPe is building payment infrastructure for these virtual spaces today, ensuring that when immersive commerce becomes mainstream, your payment experience will be as seamless in virtual reality as it is on your phone.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the Future
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
