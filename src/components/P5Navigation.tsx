'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import BattleMenu from './BattleMenu'

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/experience', label: 'EXPERIENCE' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
]

const socialLinks = [
  { href: 'https://github.com/jacho15', icon: FaGithub, hoverRotate: 5 },
  { href: 'https://www.linkedin.com/in/jacob-a-cho/', icon: FaLinkedin, hoverRotate: -5 },
]

export default function P5Navigation() {
  const pathname = usePathname()
  const { isMetaverse, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 h-20 bg-p5-black/95 backdrop-blur-sm border-b-4 border-p5-red z-40 overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Subtle diagonal accent stripe — metaverse only */}
        {isMetaverse && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-p5-red/5 transform -skew-x-12 translate-x-[60%]" />
          </div>
        )}

        <div className="container h-full flex items-center justify-between relative z-10">
          {/* Theme toggle — replaces logo on the left */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1 font-heading text-sm md:text-base tracking-wider select-none"
          >
            <span className={`transition-all duration-300 ${!isMetaverse ? 'text-p5-red' : 'text-p5-white/40 hover:text-p5-white/70'}`}>
              REAL WORLD
            </span>
            <span className="text-p5-white/30 mx-1">/</span>
            <span className={`transition-all duration-300 ${isMetaverse ? 'text-p5-red' : 'text-p5-white/40 hover:text-p5-white/70'}`}>
              METAVERSE
            </span>
          </button>

          {/* Desktop nav links — REAL WORLD ONLY */}
          {!isMetaverse && (
            <div className="hidden md:flex items-center gap-2 md:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p5-nav-link text-sm md:text-lg ${pathname === item.href ? 'active' : ''
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Game Menu Trigger — METAVERSE ONLY */}
          {isMetaverse && (
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setMenuOpen(true)}
                className="group relative px-6 py-2 bg-transparent overflow-hidden"
              >
                {/* Skewed background */}
                <span className="absolute inset-0 bg-p5-red transform skew-x-[-12deg] group-hover:bg-p5-red-dark transition-colors duration-300" />

                {/* Text */}
                <span className="relative font-heading text-xl tracking-widest text-p5-white group-hover:scale-110 transition-transform duration-200 inline-block">
                  MENU
                </span>
              </button>
            </div>
          )}

          <div className="flex items-center gap-3 md:gap-4">
            {/* Social links — desktop only */}
            <div className="hidden md:flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-p5-white hover:text-p5-red transition-colors text-xl md:text-2xl"
                  whileHover={{ scale: 1.2, rotate: social.hoverRotate }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-p5-white"
                animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-p5-white"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-p5-white"
                animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <BattleMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
