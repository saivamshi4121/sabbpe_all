"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotCTASection.module.css";

export function ChatbotCTASection() {
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
            <h2 className={styles.title}>Help When You Need It Most</h2>
            <p className={styles.subtitle}>
              Chatbots aren't about replacing human support—they're about making help available instantly for common questions, freeing up human agents for complex issues that need personal attention. It's the best of both worlds: fast automated help when you need it, and human expertise when the situation calls for it.
            </p>
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Our Chatbot
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
