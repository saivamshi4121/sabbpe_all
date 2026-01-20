"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Handle undefined or null values
    if (!value || typeof value !== 'string') {
      setDisplayValue("0");
      return;
    }

    // Extract number and suffix from the value
    const match = value.match(/^([<>≈]?)(\d+(?:\.\d+)?)(.*)?$/);
    
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const targetNum = parseFloat(numStr);

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNum = Math.floor(targetNum * easeOutQuart);
      
      setDisplayValue(`${prefix}${currentNum}${suffix || ""}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Set final exact value
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
}
