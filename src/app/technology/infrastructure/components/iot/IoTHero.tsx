"use client";

import { motion } from "framer-motion";
import styles from "./IoTHero.module.css";

export function IoTHero() {
  return (
    <section className={styles.hero}>
      {/* Network pulses represent connected devices communicating */}
      <motion.div
        className={styles.networkGlow}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Signal icon pulses showing "active connections" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              📡
            </motion.span>
            <span className={styles.badgeText}>Internet of Things</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Devices That Talk to Your Payments
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Internet of Things (IoT) connects everyday devices to the internet so they can communicate and make smart decisions. Imagine your smartwatch approving a payment, your car paying for fuel automatically, or a vending machine processing transactions without you touching your phone. IoT makes payments happen seamlessly through connected devices, creating experiences where money moves as naturally as information—all while keeping your financial data secure and under your control.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
