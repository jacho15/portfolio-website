'use client'

import { motion } from 'framer-motion'

interface P5CardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function P5Card({ children, className = '', delay = 0 }: P5CardProps) {
  return (
    <motion.div
      className={`p5-card ${className}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
