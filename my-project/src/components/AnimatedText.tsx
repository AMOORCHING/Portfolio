"use client"

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
}

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.05 
}: AnimatedTextProps) => {
  // Split text into words while preserving React elements and HTML
  const words = children.split(' ')

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{
            display: "inline-block",
            willChange: "transform",
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"} {/* Non-breaking space */}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default AnimatedText
