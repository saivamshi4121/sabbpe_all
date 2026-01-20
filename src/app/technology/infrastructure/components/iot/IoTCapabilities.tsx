"use client";

import { motion } from "framer-motion";
import styles from "./IoTCapabilities.module.css";

const capabilities = [
  {
    icon: "⌚",
    title: "Wearable Payments",
    description: "Pay with a tap of your smartwatch or fitness band. Your payment credentials sync securely to wearable devices for quick, contactless transactions."
  },
  {
    icon: "🚗",
    title: "Connected Vehicles",
    description: "Your car can pay for parking, tolls, and fuel automatically. Drive through, and payments happen seamlessly without stopping or pulling out your wallet."
  },
  {
    icon: "🏠",
    title: "Smart Home Integration",
    description: "Home devices can handle payments—smart refrigerators reordering groceries, thermostats paying utility bills, or speakers confirming purchases by voice."
  },
  {
    icon: "🏪",
    title: "Automated Retail",
    description: "Walk into a store, pick items, and walk out. IoT sensors track what you took and charge your account automatically—no checkout lines."
  },
  {
    icon: "📱",
    title: "Real-Time Notifications",
    description: "Connected devices instantly alert you about payments. Your watch buzzes for approvals, your phone shows confirmations—everything happens in real-time."
  },
  {
    icon: "🔐",
    title: "Secure Device Authentication",
    description: "Each IoT device has unique credentials that verify payments are authorized. Multiple security layers protect transactions across all connected devices."
  }
];

export function IoTCapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Connected Payment Experiences</h2>
          <p className={styles.subtitle}>
            How IoT makes payments more convenient
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{capability.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
