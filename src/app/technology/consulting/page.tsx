"use client";

import { motion } from "framer-motion";
import styles from "./TechnologyConsulting.module.scss";

export default function TechnologyConsultingPage() {
  const services = [
    {
      icon: "📊",
      title: "IT Strategy & Planning",
      description: "Comprehensive assessment and strategic roadmaps aligned with business objectives",
    },
    {
      icon: "🔄",
      title: "Digital Transformation",
      description: "End-to-end digital modernization to enhance operational efficiency",
    },
    {
      icon: "☁️",
      title: "Cloud Services & Migration",
      description: "Secure cloud infrastructure solutions tailored to your requirements",
    },
    {
      icon: "🔒",
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security frameworks protecting your digital assets",
    },
  ];

  const reasons = [
    { icon: "👨‍💼", title: "Expert Consultants", description: "Team of certified professionals with 15+ years experience" },
    { icon: "✅", title: "Proven Results", description: "500+ successful implementations across industries" },
    { icon: "🎯", title: "Tailored Solutions", description: "Custom strategies designed for your unique business needs" },
    { icon: "🏆", title: "Razorpay Trusted", description: "Verified partner with proven track record of success" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBackdropImage} />
          <div className={styles.heroOverlay} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Technology Consulting</h1>
          <p className={styles.heroSubtitle}>
            Expert Solutions to Drive Your Business Forward
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.contactBtn}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.aboutText}
          >
            <h2 className={styles.aboutTitle}>
              Empowering Your Business With Cutting-Edge Technology Expertise
            </h2>
            <p className={styles.aboutParagraph}>
              SabbPe Technology Consulting delivers strategic, enterprise-grade solutions designed to transform your business. Our team of certified experts combines deep industry knowledge with cutting-edge technology to accelerate your digital journey. From IT strategy to cloud migration, we provide comprehensive consulting services that align technology with your business goals, ensuring sustainable growth and competitive advantage.
            </p>
            <p className={styles.aboutParagraph}>
              With over 500 successful implementations across diverse industries, we understand the unique challenges of modern enterprises. Let us partner with you to unlock the full potential of technology.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.aboutImage}
          >
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageContent}>
                <div className={styles.imageGrid}>
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                </div>
                <div className={styles.imageText}>Team Collaboration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS ROW */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightsIntro}>
          <h2>Our Key Expertise Areas</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.highlightsGrid}
        >
          {services.slice(0, 3).map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>{service.icon}</div>
              <h3 className={styles.highlightTitle}>{service.title}</h3>
              <p className={styles.highlightDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.servicesHeader}
        >
          <h2>Our Technology Consulting Services</h2>
          <p>Comprehensive solutions designed for modern enterprises</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.servicesGrid}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              {/* Cloud-style decoration */}
              <div className={styles.cloudDecor1} />
              <div className={styles.cloudDecor2} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.servicesButtonContainer}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.exploreBtn}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </section>

      {/* WHY CHOOSE SABBPE SECTION */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseBackground}>
          <div className={styles.networkPattern} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.whyChooseContent}
        >
          <h2 className={styles.whyChooseTitle}>Why Choose SabbPe</h2>
          <p className={styles.whyChooseSubtitle}>
            Leading technology consulting partner trusted by enterprises worldwide
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className={styles.reasonsGrid}
          >
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={styles.reasonCard}
              >
                <div className={styles.reasonIcon}>{reason.icon}</div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.ctaContent}
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>Connect with our expert consultants to discuss your technology needs</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
