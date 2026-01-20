'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './AnchorNavigation.module.css';

export function AnchorNavigation() {
  const [activeSection, setActiveSection] = useState('artificial-intelligence');

  const sections = [
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', icon: '🤖' },
    { id: 'machine-learning', label: 'Machine Learning', icon: '🧠' },
    { id: 'big-data', label: 'Big Data Analytics', icon: '📊' },
  ];

  useEffect(() => {
    // Check URL hash on mount to highlight the correct section
    const hash = window.location.hash.slice(1); // Remove the # character
    if (hash && sections.some(s => s.id === hash)) {
      setActiveSection(hash);
      // Scroll to the section after a brief delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 140;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Update URL hash without scrolling
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      // Update URL hash
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.icon}>🚀</span>
          <span>AI & Data Technologies</span>
        </div>
        
        <div className={styles.links}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`${styles.link} ${activeSection === section.id ? styles.active : ''}`}
            >
              <span className={styles.linkIcon}>{section.icon}</span>
              <span className={styles.linkLabel}>{section.label}</span>
              {activeSection === section.id && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
