'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 h-20 bg-p5-black/95 backdrop-blur-sm border-b-4 border-p5-red z-40 overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Subtle diagonal accent stripe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-p5-red/5 transform -skew-x-12 translate-x-[60%]" />
      </div>
      <div className="container h-full flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-10 h-10 bg-p5-red flex items-center justify-center transform skew-x-[-10deg]"
            whileHover={{ scale: 1.1, skewX: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-heading text-2xl text-p5-white transform skew-x-[10deg]">J</span>
          </motion.div>
          <span className="font-heading text-xl tracking-wider hidden sm:block">JACOB CHO</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p5-nav-link text-sm md:text-lg ${
                pathname === item.href ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
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
      </div>
    </motion.nav>
  )
}
