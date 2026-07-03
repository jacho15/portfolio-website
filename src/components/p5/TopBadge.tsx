'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Jagged comic-burst "TOP" badge, bottom-right — like the Morgana TOP
// button on the official site. Appears after scrolling down a bit.

export default function TopBadge() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-40 w-[74px] h-[74px] comic-burst bg-p5-red flex items-center justify-center"
          aria-label="Back to top"
          initial={{ scale: 0, rotate: -60 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 60 }}
          whileHover={{ scale: 1.18, rotate: -8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 380, damping: 18 }}
        >
          <span className="flex flex-col items-center leading-none font-heading text-p5-white select-none">
            <span className="text-sm">▲</span>
            <span className="text-xs tracking-widest">TOP</span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
