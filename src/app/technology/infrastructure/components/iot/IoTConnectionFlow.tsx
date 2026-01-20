'use client';

import { motion } from 'framer-motion';
import styles from './IoTConnectionFlow.module.css';

export default function IoTConnectionFlow() {
  const steps = [
    { icon: '⌚', label: 'Smart Device', description: 'Wearable Sensor', color: '#06b6d4' },
    { icon: '🌐', label: 'Gateway', description: 'Data Transfer', color: '#3b82f6' },
    { icon: '☁️', label: 'Cloud Process', description: 'Analyze Action', color: '#8b5cf6' },
    { icon: '📱', label: 'Your Phone', description: 'Real-Time Alert', color: '#10b981' },
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
          <h2>How IoT Connects Everything</h2>
          <p>From your wrist to your phone in milliseconds</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.18,
                type: "spring",
                stiffness: 90
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                animate={{ 
                  scale: [1, 1.08, 1],
                }}
                transition={{ 
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ borderColor: step.color }}
              >
                <span className={styles.icon}>{step.icon}</span>
                
                <motion.div
                  className={styles.signal}
                  animate={{ 
                    scale: [1, 2.5],
                    opacity: [0.6, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                  style={{ borderColor: step.color }}
                />
              </motion.div>
              
              <div className={styles.stepContent}>
                <motion.div 
                  className={styles.stepNumber}
                  style={{ backgroundColor: step.color }}
                  animate={{ 
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3>{step.label}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div className={styles.wave}>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.waveLine}
                      animate={{ 
                        x: [0, 80],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15 + index * 0.3
                      }}
                      style={{ backgroundColor: step.color }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
