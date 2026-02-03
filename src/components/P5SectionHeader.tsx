'use client'

import { motion } from 'framer-motion'

interface P5SectionHeaderProps {
  children: React.ReactNode
  className?: string
}

export default function P5SectionHeader({ children, className = '' }: P5SectionHeaderProps) {
  return (
    <motion.h2
      className={`p5-section-header ${className}`}
      initial={{ opacity: 0, x: -100, skewX: -10 }}
      whileInView={{ opacity: 1, x: 0, skewX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.h2>
  )
}
