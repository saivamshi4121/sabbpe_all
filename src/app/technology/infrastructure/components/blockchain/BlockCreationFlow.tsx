'use client';

import { motion } from 'framer-motion';
import styles from './BlockCreationFlow.module.css';

export default function BlockCreationFlow() {
  const steps = [
    { icon: '💳', label: 'Transaction', description: 'Payment Made', color: '#3b82f6' },
    { icon: '📦', label: 'Block Created', description: 'Data Packaged', color: '#8b5cf6' },
    { icon: '🔗', label: 'Chain Added', description: 'Linked Forever', color: '#ec4899' },
    { icon: '✅', label: 'Verified', description: 'Tamper Proof', color: '#10b981' },
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
          <h2>How Blockchain Works</h2>
          <p>Every transaction becomes a permanent, unchangeable record</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.25,
                type: "spring",
                stiffness: 120
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                animate={{ 
                  boxShadow: [
                    `0 0 0 0 ${step.color}60`,
                    `0 0 20px 10px ${step.color}00`,
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                style={{ borderColor: step.color }}
              >
                <span className={styles.icon}>{step.icon}</span>
              </motion.div>
              
              <div className={styles.stepContent}>
                <motion.div 
                  className={styles.stepNumber}
                  style={{ backgroundColor: step.color }}
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3>{step.label}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div 
                  className={styles.connector}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.25 + 0.4
                  }}
                >
                  <motion.div 
                    className={styles.pulse}
                    animate={{ 
                      x: [0, 60, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 1
                    }}
                    style={{ backgroundColor: step.color }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
