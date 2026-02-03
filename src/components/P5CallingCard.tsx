'use client'

import { motion } from 'framer-motion'

interface P5CallingCardProps {
  children: React.ReactNode
  className?: string
}

export default function P5CallingCard({ children, className = '' }: P5CallingCardProps) {
  return (
    <motion.div
      className={`p5-calling-card ${className}`}
      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ rotate: 0, scale: 1.02 }}
    >
      {/* Top banner */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-p5-red px-6 py-1">
        <span className="font-heading text-p5-white tracking-widest text-sm">CALLING CARD</span>
      </div>
      {children}
    </motion.div>
  )
}
