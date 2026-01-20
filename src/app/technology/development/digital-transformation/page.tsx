"use client";

import { motion } from "framer-motion";
import styles from "./DigitalTransformation.module.scss";

export default function DigitalTransformationPage() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.pageHeader}
      >
        <h1 className={styles.title}>Digital Transformation</h1>
        <p className={styles.subtitle}>
          SabbPe Mobile Payment Checkout Experience
        </p>
      </motion.div>

      {/* MOBILE SCREENS SHOWCASE */}
      <section className={styles.mobileShowcase}>
        <div className={styles.showcaseIntro}>
          <h2>Modern Payment Checkout UI</h2>
          <p>Inspired by Razorpay - Three-screen payment flow for seamless transactions</p>
        </div>

        <div className={styles.screenContainer}>
          {/* SCREEN 1: PAYMENT SUMMARY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.mobileScreen}
          >
            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} />
              <div className={styles.screenContent}>
                {/* Header */}
                <div className={styles.screenHeader}>
                  <div className={styles.logoSection}>
                    <div className={styles.logoCircle}>S</div>
                    <div>
                      <div className={styles.companyName}>SabbPe</div>
                      <div className={styles.companySubtitle}>Payment Gateway</div>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className={styles.trustBadge}>
                  ✓ Razorpay Trusted Business
                </div>

                {/* Payment Summary */}
                <div className={styles.summarySection}>
                  <h3>Payment Summary</h3>
                  <div className={styles.amountDisplay}>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.amount}>6,000</span>
                  </div>
                </div>

                {/* Phone Input */}
                <div className={styles.inputSection}>
                  <label>Phone Number</label>
                  <div className={styles.phoneInput}>
                    <span className={styles.countryCode}>+91</span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      readOnly
                    />
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.proceedBtn}
                >
                  Proceed
                </motion.button>

                {/* Footer */}
                <div className={styles.securityFooter}>
                  🔒 Secured by Razorpay
                </div>
              </div>
            </div>

            {/* Screen Label */}
            <div className={styles.screenLabel}>Screen 1: Payment Summary</div>
          </motion.div>

          {/* SCREEN 2: PAYMENT METHODS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.mobileScreen}
          >
            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} />
              <div className={styles.screenContent}>
                {/* Header */}
                <div className={styles.screenHeader}>
                  <h3>Cards, UPI & More</h3>
                </div>

                {/* Payment Methods List */}
                <div className={styles.paymentMethodsList}>
                  {/* Card */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.04)" }}
                    className={styles.paymentMethod}
                  >
                    <span className={styles.methodIcon}>💳</span>
                    <span className={styles.methodName}>Card</span>
                    <span className={styles.methodArrow}>›</span>
                  </motion.div>

                  {/* UPI */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.04)" }}
                    className={styles.paymentMethod}
                  >
                    <span className={styles.methodIcon}>📱</span>
                    <span className={styles.methodName}>UPI/QR</span>
                    <span className={styles.methodArrow}>›</span>
                  </motion.div>

                  {/* Netbanking - Highlighted */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.1)" }}
                    className={`${styles.paymentMethod} ${styles.active}`}
                  >
                    <span className={styles.methodIcon}>🏦</span>
                    <span className={styles.methodName}>Netbanking</span>
                    <span className={styles.methodCheck}>✓</span>
                  </motion.div>

                  {/* Wallet */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.04)" }}
                    className={styles.paymentMethod}
                  >
                    <span className={styles.methodIcon}>👛</span>
                    <span className={styles.methodName}>Wallet</span>
                    <span className={styles.methodArrow}>›</span>
                  </motion.div>

                  {/* EMI */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.04)" }}
                    className={styles.paymentMethod}
                  >
                    <span className={styles.methodIcon}>📊</span>
                    <span className={styles.methodName}>EMI</span>
                    <span className={styles.methodArrow}>›</span>
                  </motion.div>

                  {/* Pay Later */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(15, 107, 255, 0.04)" }}
                    className={styles.paymentMethod}
                  >
                    <span className={styles.methodIcon}>⏰</span>
                    <span className={styles.methodName}>Pay Later</span>
                    <span className={styles.methodArrow}>›</span>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className={styles.spacer} />
              </div>

              {/* Bottom Sticky Bar */}
              <div className={styles.stickyBar}>
                <div className={styles.amountSmall}>₹6,000</div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.payNowBtn}
                >
                  Pay Now
                </motion.button>
              </div>
            </div>

            {/* Screen Label */}
            <div className={styles.screenLabel}>Screen 2: Payment Methods</div>
          </motion.div>

          {/* SCREEN 3: BANK SELECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.mobileScreen}
          >
            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} />
              <div className={styles.screenContent}>
                {/* Header */}
                <div className={styles.screenHeader}>
                  <h3>Select Bank</h3>
                </div>

                {/* Bank Grid */}
                <div className={styles.bankGrid}>
                  {/* SBI */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>🏦</div>
                    <div className={styles.bankName}>SBI</div>
                  </motion.div>

                  {/* ICICI */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>🏛️</div>
                    <div className={styles.bankName}>ICICI</div>
                  </motion.div>

                  {/* Axis */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>🏢</div>
                    <div className={styles.bankName}>Axis</div>
                  </motion.div>

                  {/* Kotak */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>💼</div>
                    <div className={styles.bankName}>Kotak</div>
                  </motion.div>

                  {/* Yes Bank */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>✓</div>
                    <div className={styles.bankName}>Yes Bank</div>
                  </motion.div>

                  {/* IDBI */}
                  <motion.div
                    whileHover={{ transform: "translateY(-4px)" }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.bankCard}
                  >
                    <div className={styles.bankLogo}>🏤</div>
                    <div className={styles.bankName}>IDBI</div>
                  </motion.div>
                </div>

                {/* Dropdown */}
                <div className={styles.dropdownSection}>
                  <select className={styles.bankDropdown}>
                    <option>Select a different bank</option>
                    <option>HDFC Bank</option>
                    <option>Central Bank</option>
                    <option>PUNJAB National Bank</option>
                  </select>
                </div>

                {/* Spacer */}
                <div className={styles.spacer} />
              </div>

              {/* Bottom Sticky Bar */}
              <div className={styles.stickyBar}>
                <div className={styles.amountSmall}>₹6,000</div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.payNowBtn}
                >
                  Pay Now
                </motion.button>
              </div>
            </div>

            {/* Screen Label */}
            <div className={styles.screenLabel}>Screen 3: Bank Selection</div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>
          <h2>Transformation Benefits</h2>
          <p>Why SabbPe's Modern Payment UI Drives Success</p>
        </div>

        <div className={styles.benefitsGrid}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0 }}
            className={styles.benefitCard}
          >
            <div className={styles.benefitIcon}>⚡</div>
            <h3>Seamless UX</h3>
            <p>Intuitive 3-screen checkout flow reduces friction</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={styles.benefitCard}
          >
            <div className={styles.benefitIcon}>🔒</div>
            <h3>Secure Payments</h3>
            <p>Enterprise-grade security with Razorpay integration</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.benefitCard}
          >
            <div className={styles.benefitIcon}>📈</div>
            <h3>Higher Conversion</h3>
            <p>Clean design increases payment completion rates</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.benefitCard}
          >
            <div className={styles.benefitIcon}>🌐</div>
            <h3>Multi-Payment Support</h3>
            <p>Cards, UPI, Netbanking, Wallets, EMI & Pay Later</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
