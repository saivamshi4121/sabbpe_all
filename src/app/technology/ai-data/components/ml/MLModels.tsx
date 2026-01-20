"use client";

import { motion } from "framer-motion";
import styles from "./MLModels.module.css";

const models = [
  {
    icon: "🛡️",
    title: "Learning Your Normal",
    description: "The app watches your typical spending habits—favorite stores, usual amounts, regular times—so it can instantly spot when something doesn't fit your pattern."
  },
  {
    icon: "📊",
    title: "Smarter Over Time",
    description: "Every payment you make teaches the app something new. The more you use SabbPe, the better it understands what's normal for you and what's suspicious."
  },
  {
    icon: "🎯",
    title: "Personalized Insights",
    description: "Based on what it's learned about your habits, the app can give you meaningful spending insights that actually make sense for your lifestyle."
  },
  {
    icon: "⚡",
    title: "Better Payment Routes",
    description: "The app learns which payment paths work best for you and automatically uses them, making your transactions faster and more reliable over time."
  },
  {
    icon: "🔍",
    title: "Spotting the Unusual",
    description: "When a payment looks different from everything the app has learned about you—wrong location, odd amount, strange merchant—it notices immediately."
  },
  {
    icon: "💡",
    title: "Adapting to You",
    description: "Your home screen, shortcuts, and suggestions evolve based on how you actually use the app, creating an experience that feels custom-built for you."
  }
];

export function MLModels() {
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
          <h2 className={styles.title}>How Your App Gets Smarter</h2>
          <p className={styles.subtitle}>
            Simple ways Machine Learning improves with every transaction
          </p>
        </motion.div>

        <div className={styles.grid}>
          {models.map((model, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.iconWrapper}>
                {/* Icon gently scales on hover - shows this feature is "activating" */}
                <motion.div 
                  className={styles.icon}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {model.icon}
                </motion.div>
              </div>

              {/* Title appears after card */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {model.title}
              </motion.h3>
              
              {/* Description follows */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {model.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
