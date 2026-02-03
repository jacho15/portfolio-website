'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/experience', label: 'EXPERIENCE' },
  { href: '/contact', label: 'CONTACT' },
]

export default function P5Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 h-20 bg-p5-black/95 backdrop-blur-sm border-b-2 border-p5-red z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-10 h-10 bg-p5-red flex items-center justify-center transform skew-x-[-5deg]"
            whileHover={{ scale: 1.1, skewX: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-heading text-2xl text-p5-white transform skew-x-[5deg]">J</span>
          </motion.div>
          <span className="font-heading text-xl tracking-wider hidden sm:block">JACOB CHO</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p5-nav-link text-sm md:text-lg ${
                pathname === item.href ? 'active text-p5-red' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/jacho15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-p5-white hover:text-p5-red transition-colors text-xl md:text-2xl"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jacob-a-cho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-p5-white hover:text-p5-red transition-colors text-xl md:text-2xl"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
