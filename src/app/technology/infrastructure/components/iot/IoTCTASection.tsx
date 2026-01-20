"use client";

import { motion } from "framer-motion";
import styles from "./IoTCTASection.module.css";

export function IoTCTASection() {
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
            <h2 className={styles.title}>The Future of Seamless Payments</h2>
            <p className={styles.subtitle}>
              IoT technology is making payments invisible and effortless. As more devices connect to the internet, the payment experience becomes increasingly natural—happening in the background while you focus on what matters. SabbPe's IoT integration ensures your connected devices can handle payments securely, quickly, and reliably.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Connected Payments
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
