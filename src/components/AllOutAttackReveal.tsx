'use client'

import { motion } from 'framer-motion'

interface AllOutAttackRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AllOutAttackReveal({ children, className = '', delay = 0 }: AllOutAttackRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  )
}
