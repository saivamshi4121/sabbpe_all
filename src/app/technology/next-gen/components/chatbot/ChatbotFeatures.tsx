"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotFeatures.module.css";

const features = [
  {
    icon: "🗣️",
    title: "Natural Conversations",
    description: "Chat naturally like texting a friend. Understands what you mean, not just keywords."
  },
  {
    icon: "⚡",
    title: "Instant Responses",
    description: "Get answers in seconds without waiting. Solves simple payment issues instantly on the spot."
  },
  {
    icon: "🌍",
    title: "Multiple Languages",
    description: "Communicate in your preferred language. Switches seamlessly to help customers feel comfortable."
  },
  {
    icon: "🧠",
    title: "Learns From Interactions",
    description: "Gets smarter with every conversation. Remembers questions and continuously improves answers."
  },
  {
    icon: "🔄",
    title: "Seamless Handoffs",
    description: "Complex issues connect to human agents. Shares conversation history so you don't repeat yourself."
  },
  {
    icon: "📊",
    title: "Personalized Help",
    description: "Recognizes your account and history. Gives relevant answers without asking basic details repeatedly."
  }
];

export function ChatbotFeatures() {
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
          <h2 className={styles.title}>What Makes Our Chatbots Smart</h2>
          <p className={styles.subtitle}>
            Features that create helpful, human-like conversations
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
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
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
