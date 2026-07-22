'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import BattleMenu from './BattleMenu'

const navItems = [
  { href: '#hero',       id: 'hero',       label: 'HOME' },
  { href: '#experience', id: 'experience', label: 'EXPERIENCE' },
  { href: '#projects',   id: 'projects',   label: 'PROJECTS' },
  { href: '#contact',    id: 'contact',    label: 'CONTACT' },
]

const socialLinks = [
  { href: 'https://github.com/jacho15', icon: FaGithub, hoverRotate: 5 },
  { href: 'https://www.linkedin.com/in/jacob-a-cho/', icon: FaLinkedin, hoverRotate: -5 },
  { href: 'https://devpost.com/jacho15', icon: SiDevpost, hoverRotate: 5 },
]

export default function P5Navigation() {
  const { isMetaverse } = useTheme()
  const activeSection = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-20 backdrop-blur-sm z-40 overflow-hidden transition-colors duration-300 ${
          isMetaverse
            ? 'md:hidden bg-p5-black/95 border-b-4 border-p5-red'
            : 'bg-p5-black/[0.97] border-b border-p5-white/[0.08] shadow-[0_1px_0_rgba(0,0,0,0.05)]'
        }`}
      >
        {/* Subtle diagonal accent stripe — metaverse only */}
        {isMetaverse && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-p5-red/5 transform -skew-x-12 translate-x-[60%]" />
            <div className="absolute inset-0 halftone opacity-30" />
          </div>
        )}

        <div className="container h-full flex items-center justify-between relative z-10">
          {/* Desktop nav links — real world only */}
          {!isMetaverse && (
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`p5-nav-link text-sm ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 md:gap-4 ml-auto">
            {/* Social links — desktop only */}
            <div className="hidden md:flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-p5-white hover:text-p5-red transition-colors text-xl md:text-2xl"
                >
                  <social.icon />
                </a>
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
      </nav>

      <BattleMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
