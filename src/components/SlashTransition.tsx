'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

// Theme-switch takeover. Entering the Metaverse plays a P5-style loading
// splash (red field, expanding rings, stamped title) before slashing open;
// returning to reality keeps the quicker triple-slash wipe.

export const ENTER_METAVERSE_MS = 1600

export default function SlashTransition() {
  const { isMetaverse } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), isMetaverse ? ENTER_METAVERSE_MS : 800)
    return () => clearTimeout(timer)
  }, [isMetaverse])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMetaverse ? (
            <>
              {/* Red field */}
              <motion.div
                className="absolute inset-0"
                style={{ background: '#D80027' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 1] }}
                transition={{ duration: 1.2, times: [0, 0.08, 0.8, 1] }}
              />

              {/* Spiral ring pulse */}
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ border: '10px solid rgba(0,0,0,0.22)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 9], opacity: [0, 0.9, 0] }}
                  transition={{ duration: 1.0, delay: 0.12 + i * 0.16, ease: 'easeOut' }}
                />
              ))}

              {/* Stamped title */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.1 }}
              >
                <motion.div
                  className="font-heading italic text-p5-white text-4xl md:text-7xl tracking-wider text-center px-6 py-3"
                  style={{
                    background: '#0D0D0D',
                    boxShadow: '10px 10px 0 rgba(0,0,0,0.35), 0 0 0 4px #FAFAFA',
                    transform: 'skewX(-8deg)',
                  }}
                  initial={{ scale: 2.6, rotate: -18, opacity: 0 }}
                  animate={{ scale: 1, rotate: -4, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  ENTERING THE METAVERSE
                </motion.div>
              </motion.div>

              {/* Star burst flash */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[70vmin] h-[70vmin] -translate-x-1/2 -translate-y-1/2 comic-burst bg-p5-white"
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: [0, 1.15, 0], rotate: 25, opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
              />

              {/* Black slash out */}
              <motion.div
                className="absolute inset-y-[-10%] w-[130%]"
                style={{ background: '#0D0D0D' }}
                initial={{ x: '-140%', skewX: '-15deg' }}
                animate={{ x: '140%', skewX: '-15deg' }}
                transition={{ duration: 0.5, delay: 1.15, ease: 'easeInOut' }}
              />
            </>
          ) : (
            <>
              {/* Leading thin red blade */}
              <motion.div
                className="absolute inset-y-0 w-[18vw] bg-p5-red"
                initial={{ x: '-120%', skewX: '-15deg' }}
                animate={{ x: '760%', skewX: '-15deg' }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
              />
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
              {/* Center burst flash */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] -translate-x-1/2 -translate-y-1/2 comic-burst bg-p5-white"
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: [0, 1.1, 0], rotate: 20, opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
