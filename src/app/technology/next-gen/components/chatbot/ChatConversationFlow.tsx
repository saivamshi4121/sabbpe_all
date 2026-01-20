'use client';

import { motion } from 'framer-motion';
import styles from './ChatConversationFlow.module.css';

export default function ChatConversationFlow() {
  const steps = [
    { icon: '👤', label: 'You Ask', description: '"Track my order"', color: '#3b82f6' },
    { icon: '🧠', label: 'Bot Thinks', description: 'Understands Intent', color: '#8b5cf6' },
    { icon: '💬', label: 'Bot Responds', description: 'Finds Answer', color: '#ec4899' },
    { icon: '✨', label: 'Action Taken', description: 'Problem Solved', color: '#10b981' },
  ];

  return (
    <section className={styles.flow}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>How Chatbots Work</h2>
          <p>From question to solution in under 2 seconds</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <motion.div 
                className={styles.bubble}
                style={{ backgroundColor: `${step.color}15`, borderColor: step.color }}
                animate={{ 
                  y: [0, -4, 0],
                }}
                transition={{ 
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className={styles.icon}>{step.icon}</span>
                
                <motion.div
                  className={styles.typing}
                  animate={{ 
                    opacity: [0, 1, 0],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </motion.div>
              </motion.div>
              
              <div className={styles.stepContent}>
                <motion.div 
                  className={styles.stepNumber}
                  style={{ backgroundColor: step.color }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3>{step.label}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div 
                  className={styles.arrow}
                  animate={{ 
                    x: [0, 5, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{ 
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  style={{ color: step.color }}
                >
                  ➜
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
