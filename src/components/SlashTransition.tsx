'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SlashTransition() {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Red slash wipe */}
          <motion.div
            className="absolute inset-0 bg-p5-red"
            initial={{ x: '-100%', skewX: '-15deg' }}
            animate={{ x: '100%', skewX: '-15deg' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
          {/* Black follow-up */}
          <motion.div
            className="absolute inset-0 bg-p5-black"
            initial={{ x: '-100%', skewX: '-15deg' }}
            animate={{ x: '100%', skewX: '-15deg' }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
