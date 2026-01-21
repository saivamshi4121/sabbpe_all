"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import styles from "./LayeredServiceUI.module.scss";

interface ServiceLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  accentColor: string;
  component: React.ComponentType<{ isActive: boolean }>;
  stats?: Array<{ label: string; value: string }>;
}

interface LayeredServiceUIProps {
  services: ServiceLayer[];
  onServiceChange?: (serviceId: string) => void;
}

export default function LayeredServiceUI({ 
  services, 
  onServiceChange 
}: LayeredServiceUIProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index);
    onServiceChange?.(services[index].id);
  };

  const activeService = services[activeServiceIndex];

  // Variants for layered animation
  const layerVariants = {
    enter: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: direction > 0 ? 0.8 : 1.2,
      rotateX: direction > 0 ? -20 : 20,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        opacity: { duration: 0.5, ease: "easeOut" as const },
        scale: { duration: 0.6, ease: "easeOut" as const },
        rotateX: { duration: 0.6, ease: "easeOut" as const },
        zIndex: { duration: 0 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: direction > 0 ? 1.2 : 0.8,
      rotateX: direction > 0 ? 20 : -20,
      transition: {
        opacity: { duration: 0.4, ease: "easeIn" as const },
        scale: { duration: 0.5, ease: "easeIn" as const },
        rotateX: { duration: 0.5, ease: "easeIn" as const },
        zIndex: { duration: 0 },
      },
    }),
  };

  const navigationItemVariants = {
    idle: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    active: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
    },
  };

  const indicatorVariants = {
    active: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    inactive: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const },
    },
  };

  const direction = services.findIndex((s) => s.id === activeService.id) > 
    (services.findIndex((s) => s.id === services[activeServiceIndex].id) || 0) ? 1 : -1;

  return (
    <div className={styles.container}>
      {/* ANIMATED LAYER CONTAINER */}
      <div className={styles.layerContainer}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeService.id}
            custom={direction}
            variants={layerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.serviceLayer}
            style={{
              "--service-color": activeService.color,
              "--service-accent": activeService.accentColor,
            } as React.CSSProperties}
          >
            {/* Layer Background with Gradient */}
            <div 
              className={styles.layerBackground}
            />

            {/* Service Content */}
            <div className={styles.serviceContent}>
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={styles.headerSection}
              >
                <div className={styles.iconWrapper}>
                  <span 
                    className={styles.icon}
                  >
                    {activeService.icon}
                  </span>
                </div>

                <div className={styles.titleSection}>
                  <h1 className={styles.title}>{activeService.title}</h1>
                  <p className={styles.subtitle}>{activeService.subtitle}</p>
                </div>
              </motion.div>

              {/* Description Section */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={styles.description}
              >
                {activeService.description}
              </motion.p>

              {/* Stats Section */}
              {activeService.stats && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className={styles.statsGrid}
                >
                  {activeService.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                      className={styles.statItem}
                    >
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Service Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={styles.componentWrapper}
              >
                <activeService.component isActive={true} />
              </motion.div>
            </div>

            {/* Decorative Glows */}
            <div 
              className={styles.glow1}
            />
            <div 
              className={styles.glow2}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION SELECTOR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={styles.navigationContainer}
      >
        <div className={styles.selectorLabel}>Select Service</div>
        
        <div className={styles.serviceSelector}>
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              variants={navigationItemVariants}
              initial="idle"
              whileHover="hover"
              animate={index === activeServiceIndex ? "active" : "idle"}
              onClick={() => handleServiceChange(index)}
              className={styles.selectorItem}
              style={{
                "--nav-color": service.color,
              } as React.CSSProperties}
            >
              {/* Indicator Line */}
              <motion.div
                className={styles.indicator}
                variants={indicatorVariants}
                animate={index === activeServiceIndex ? "active" : "inactive"}
                style={{
                  backgroundColor: service.color,
                }}
              />

              {/* Icon */}
              <span className={styles.navIcon}>{service.icon}</span>

              {/* Label */}
              <span className={styles.navLabel}>{service.title}</span>

              {/* Hover Glow */}
              <div 
                className={styles.navGlow}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* PROGRESS INDICATORS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={styles.progressIndicators}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={styles.progressDot}
            animate={{
              scale: index === activeServiceIndex ? 1.2 : 1,
              backgroundColor: index === activeServiceIndex ? service.color : "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleServiceChange(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </motion.div>
    </div>
  );
}
