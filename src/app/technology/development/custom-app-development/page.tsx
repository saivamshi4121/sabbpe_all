"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./CustomAppDevelopment.module.scss";

export default function CustomAppDevelopmentPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const appCategories = [
    {
      title: "Fintech Apps",
      description: "Payment solutions, wallets, and trading platforms",
      icon: "💳",
      color: "#0f6bff",
    },
    {
      title: "E-commerce Apps",
      description: "Shopping, marketplace, and vendor platforms",
      icon: "🛍️",
      color: "#14b8a6",
    },
    {
      title: "Enterprise Apps",
      description: "Business tools, CRM, and management systems",
      icon: "🏢",
      color: "#7c3aed",
    },
    {
      title: "Startup Apps",
      description: "MVP development and scalable solutions",
      icon: "🚀",
      color: "#ec4899",
    },
  ];

  const technologies = [
    { name: "Flutter", icon: "📱", glow: "#0f6bff" },
    { name: "React Native", icon: "⚛️", glow: "#14b8a6" },
    { name: "Swift", icon: "🍎", glow: "#7c3aed" },
    { name: "Kotlin", icon: "🔷", glow: "#ec4899" },
    { name: "Node.js", icon: "💚", glow: "#06b6d4" },
  ];

  const approach = [
    { step: "Ideation", icon: "💡", description: "Understanding your vision" },
    { step: "UI Design", icon: "🎨", description: "Creating beautiful interfaces" },
    { step: "Development", icon: "⚙️", description: "Building robust code" },
    { step: "QA Testing", icon: "✓", description: "Ensuring quality" },
    { step: "Deployment", icon: "🚀", description: "Going live" },
    { step: "Scaling", icon: "📈", description: "Growing together" },
  ];

  const trustLogos = [
    { name: "Google Cloud", emoji: "☁️" },
    { name: "AWS", emoji: "📦" },
    { name: "Microsoft Azure", emoji: "◇" },
    { name: "Razorpay", emoji: "✓" },
    { name: "ISO Certified", emoji: "🏆" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
          <div className={styles.glow3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Custom App Development</h1>
          <p className={styles.heroSubtitle}>
            Innovative Apps Built for Performance and Growth
          </p>

          <div className={styles.heroButtons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Request Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Mockups */}
        <div className={styles.mockupsContainer}>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={styles.mobileMockup}
          >
            <div className={styles.mockupFrame}>
              <div className={styles.mockupScreen}>
                <div className={styles.screenElement} />
                <div className={styles.screenElement} />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className={styles.laptopMockup}
          >
            <div className={styles.mockupFrame}>
              <div className={styles.mockupScreen}>
                <div className={styles.screenElement} />
                <div className={styles.screenElement} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className={styles.trustSection}>
        <div className={styles.trustContent}>
          <p className={styles.trustLabel}>TRUSTED BY LEADING PLATFORMS</p>
          <div className={styles.logosGrid}>
            {trustLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.logoItem}
              >
                <span className={styles.logoEmoji}>{logo.emoji}</span>
                <span className={styles.logoName}>{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section className={styles.whatWeBuildSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <h2>What We Build</h2>
          <p>Showcase of innovative applications across industries</p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className={styles.carouselGrid}
          >
            {appCategories.map((app, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className={styles.appCard}
                onMouseEnter={() => setActiveSlide(idx)}
                style={{ "--card-color": app.color } as React.CSSProperties}
              >
                <div className={styles.cardIcon}>{app.icon}</div>
                <h3 className={styles.cardTitle}>{app.title}</h3>
                <p className={styles.cardDescription}>{app.description}</p>
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className={styles.techStackSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <h2>Technology Stack</h2>
          <p>Cutting-edge tools and frameworks</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.techGrid}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              className={styles.techCard}
              style={{ "--glow-color": tech.glow } as React.CSSProperties}
            >
              <div className={styles.techIcon}>{tech.icon}</div>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techGlow} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className={styles.approachSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <h2>Our Development Approach</h2>
          <p>Six-step process for success</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.approachGrid}
        >
          {approach.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.approachCard}
            >
              <div className={styles.stepNumber}>{idx + 1}</div>
              <div className={styles.stepIcon}>{item.icon}</div>
              <h3 className={styles.stepTitle}>{item.step}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
              <div className={styles.cardBorder} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGlow1} />
          <div className={styles.ctaGlow2} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.ctaContent}
        >
          <h2 className={styles.ctaTitle}>Let's Build Your App Today</h2>
          <p className={styles.ctaSubtitle}>
            Transform your ideas into powerful, scalable applications
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Talk to Our Experts
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
