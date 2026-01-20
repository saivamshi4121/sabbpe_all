"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotHero.module.css";

export function ChatbotHero() {
  return (
    <section className={styles.hero}>
      {/* Conversation glow represents 24/7 active communication */}
      <motion.div
        className={styles.chatGlow}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
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
            {/* Chat bubble bounces showing "ready to respond" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.12, 1],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💬
            </motion.span>
            <span className={styles.badgeText}>Chatbot Development</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Your 24/7 Digital Assistant
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            A chatbot is like having a customer service representative who never sleeps, never takes breaks, and can talk to thousands of people at once. In SabbPe, chatbots answer payment questions instantly, help users track transactions, resolve issues, and guide people through services—all through natural conversation. Think of it as texting with a helpful friend who knows everything about your payments and is always ready to assist, whether it's 3 PM or 3 AM. They handle multiple languages and understand context perfectly.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
