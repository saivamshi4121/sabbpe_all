'use client';

import { motion } from 'framer-motion';
import styles from './CloudScalingFlow.module.css';

export default function CloudScalingFlow() {
  const steps = [
    { icon: '🌱', label: 'Low Traffic', description: 'Start Small', color: '#10b981' },
    { icon: '📈', label: 'Growing', description: 'Auto Expand', color: '#3b82f6' },
    { icon: '🚀', label: 'Peak Load', description: 'Full Power', color: '#f59e0b' },
    { icon: '⚡', label: 'Scale Down', description: 'Save Money', color: '#8b5cf6' },
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
          <h2>How Cloud Scaling Works</h2>
          <p>Your resources grow and shrink automatically with demand</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{ 
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
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
                    boxShadow: [
                      `0 0 0 0 ${step.color}40`,
                      `0 0 0 8px ${step.color}00`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
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
                    x: [0, 8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
