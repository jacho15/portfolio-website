'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface BattleMenuProps {
  isOpen: boolean
  onClose: () => void
}

// Updated Order: PERSONA -> ATTACK (Experience) -> GUARD (Projects) -> ITEMS (Contact)
const battleItems = [
  { href: '/', label: 'HOME', battleTerm: 'PERSONA' },
  { href: '/experience', label: 'EXPERIENCE', battleTerm: 'ATTACK' },
  { href: '/projects', label: 'PROJECTS', battleTerm: 'GUARD' },
  { href: '/contact', label: 'CONTACT', battleTerm: 'ITEMS' },
]

const staggerDelay = 0.08

export default function BattleMenu({ isOpen, onClose }: BattleMenuProps) {
  const pathname = usePathname()
  const { isMetaverse } = useTheme()

  if (isMetaverse) {
    return <MetaverseMenu isOpen={isOpen} onClose={onClose} pathname={pathname} />
  }

  return <RealWorldDrawer isOpen={isOpen} onClose={onClose} pathname={pathname} />
}

function MetaverseMenu({ isOpen, onClose, pathname }: { isOpen: boolean; onClose: () => void; pathname: string }) {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  // KEYBOARD NAV: Up/Down for vertical column
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % battleItems.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + battleItems.length) % battleItems.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const target = battleItems[selectedIndex]
        if (target) {
          router.push(target.href)
          onClose()
        }
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, onClose, router])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-p5-black/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgb(var(--color-p5-red)) 20px, rgb(var(--color-p5-red)) 21px)',
            }}
          />

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 text-p5-white font-heading text-2xl tracking-wider z-10 hover:text-p5-red transition-colors"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
          >
            CLOSE
          </motion.button>

          {/* Vertical Column Layout */}
          <div className="flex flex-col items-center gap-6">
            {battleItems.map((item, i) => {
              const isActive = i === selectedIndex

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50, skewX: -10 }}
                  animate={{ opacity: 1, x: 0, skewX: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    delay: staggerDelay * i,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`block transform skew-x-[-12deg] transition-all duration-200 ${isActive
                        ? 'bg-p5-red text-p5-white scale-110 shadow-[0_0_20px_rgba(255,0,0,0.4)]'
                        : 'bg-p5-gray-mid text-p5-white hover:bg-p5-red/80'
                      }`}
                    style={{
                      clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)',
                      width: '320px'
                    }}
                  >
                    <div className="px-8 py-5 text-center">
                      <span className="block font-heading text-4xl tracking-widest skew-x-[12deg]">
                        {item.battleTerm}
                      </span>
                      <span className="block text-sm opacity-80 tracking-[0.3em] mt-1 skew-x-[12deg]">
                        {'// '}{item.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function RealWorldDrawer({ isOpen, onClose, pathname }: { isOpen: boolean; onClose: () => void; pathname: string }) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-p5-black shadow-[-4px_0_24px_rgba(0,0,0,0.12)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-p5-white hover:opacity-60 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Nav items */}
            <nav className="flex flex-col pt-20 px-6 gap-2">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg font-heading text-lg tracking-wider transition-all ${isActive
                        ? 'bg-p5-red text-white'
                        : 'text-p5-white hover:bg-p5-gray'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
