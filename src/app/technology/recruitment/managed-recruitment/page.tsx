"use client";

import { motion } from "framer-motion";
import styles from "./ManagedRecruitment.module.scss";

export default function ManagedRecruitmentPage() {
  return (
    <div className={styles.wireframeContainer}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>SABBPE LOGO</div>
          <nav className={styles.navigation}>
            <span>Solutions</span>
            <span>How It Works</span>
            <span>Clients</span>
            <span>Contact</span>
          </nav>
        </div>
        <div className={styles.annotation}>Header with logo and navigation</div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBgPlaceholder}>
            <div className={styles.placeholderText}>HERO IMAGE</div>
            <div className={styles.placeholderText}>RECRUITMENT VISUAL</div>
          </div>
          <div className={styles.annotation}>Hero background image placeholder</div>
        </div>

        <div className={styles.heroRight}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.headline}>
              End-to-End Managed Recruitment Solutions
            </h1>
            <div className={styles.annotation}>Headline (Large typography)</div>

            <p className={styles.description}>
              Connect with top talent through our comprehensive recruitment platform. 
              We manage every step of the hiring process for quality results.
            </p>
            <div className={styles.annotation}>Short description</div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className={styles.ctaPrimary}
            >
              Get Started
            </motion.button>
            <div className={styles.annotation}>Primary CTA Button</div>
          </motion.div>
        </div>
      </section>

      {/* SUPPORTIVE IMAGERY SECTION */}
      <section className={styles.supportSection}>
        <div className={styles.supportImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderText}>SUPPORTING IMAGE</div>
            <div className={styles.placeholderText}>WORKFLOW / PROCESS</div>
          </div>
          <div className={styles.annotation}>Supportive imagery area</div>
        </div>
        <div className={styles.supportText}>
          <h2>Our Recruitment Expertise</h2>
          <p>
            With over a decade of experience, we've perfected the recruitment process. 
            From candidate sourcing to final placement, every step is optimized for success.
          </p>
          <div className={styles.annotation}>Text explanation</div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={styles.benefitsSection}>
        <h2>Why Partner With Us</h2>
        <div className={styles.annotation}>Summary of benefits section</div>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>Average time-to-hire: 25 days</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>90% placement retention rate</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>Access to 50K+ qualified candidates</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>Industry expertise & networks</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>Competitive salary benchmarking</span>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.bulletPoint}>•</div>
            <span>Dedicated recruitment team</span>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className={styles.socialProofSection}>
        <h2>Client Testimonials</h2>
        <div className={styles.annotation}>Social proof section with testimonial cards</div>
        
        <div className={styles.testimonialsGrid}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.testimonialCard}
          >
            <div className={styles.testimonialText}>
              "Quote from satisfied client about recruitment success and impact."
            </div>
            <div className={styles.clientInfo}>
              <div className={styles.clientAvatar} />
              <div>
                <div className={styles.clientName}>Client Name</div>
                <div className={styles.clientTitle}>Job Title, Company</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.testimonialCard}
          >
            <div className={styles.testimonialText}>
              "Another testimonial highlighting the efficiency and quality of service."
            </div>
            <div className={styles.clientInfo}>
              <div className={styles.clientAvatar} />
              <div>
                <div className={styles.clientName}>Client Name</div>
                <div className={styles.clientTitle}>Job Title, Company</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.testimonialCard}
          >
            <div className={styles.testimonialText}>
              "Third testimonial demonstrating ROI and business value delivered."
            </div>
            <div className={styles.clientInfo}>
              <div className={styles.clientAvatar} />
              <div>
                <div className={styles.clientName}>Client Name</div>
                <div className={styles.clientTitle}>Job Title, Company</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES / CASE STUDIES SECTION */}
      <section className={styles.caseStudiesSection}>
        <h2>How It Works</h2>
        <div className={styles.annotation}>Additional information section - process steps</div>
        
        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>1</div>
            <div className={styles.featureContent}>
              <h3>Position Analysis</h3>
              <p>Understand your unique requirements</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>2</div>
            <div className={styles.featureContent}>
              <h3>Candidate Sourcing</h3>
              <p>Access pre-screened talent pool</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>3</div>
            <div className={styles.featureContent}>
              <h3>Screening & Vetting</h3>
              <p>Comprehensive candidate evaluation</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>4</div>
            <div className={styles.featureContent}>
              <h3>Interview Process</h3>
              <p>Coordinated interviews and assessments</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>5</div>
            <div className={styles.featureContent}>
              <h3>Reference Checks</h3>
              <p>Verified candidate background</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureNumber}>6</div>
            <div className={styles.featureContent}>
              <h3>Offer & Onboarding</h3>
              <p>Seamless transition to your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY CTA SECTION */}
      <section className={styles.secondaryCtaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Hiring?</h2>
          <p>Let's discuss how our managed recruitment services can accelerate your growth.</p>
          <div className={styles.annotation}>Secondary CTA area</div>
          
          <div className={styles.ctaButtons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={styles.ctaSecondary}
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={styles.ctaTertiary}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>SABBPE LOGO</div>
            <p>© 2026 SABBPE. All rights reserved.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <span className={styles.linkTitle}>Company</span>
              <span>About</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
            
            <div className={styles.linkGroup}>
              <span className={styles.linkTitle}>Legal</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
            
            <div className={styles.linkGroup}>
              <span className={styles.linkTitle}>Contact</span>
              <span>Email</span>
              <span>Phone</span>
              <span>Address</span>
            </div>
          </div>
        </div>
        <div className={styles.annotation}>Footer: logo, policy links, copyright</div>
      </footer>
    </div>
  );
}
