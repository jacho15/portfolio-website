'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export default function Home() {
  const { isMetaverse } = useTheme()

  return (
    <main className="min-h-screen pt-20">
      {isMetaverse ? (
        /* ── METAVERSE HERO ──────────────────────────────────────── */
        <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
          {/* Subtle repeating diagonal line pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--color-p5-white)) 10px, rgb(var(--color-p5-white)) 11px)',
            }}
          />

          {/* Large decorative background text */}
          <div className="p5-bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] whitespace-nowrap">
            TAKE YOUR HEART
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none decorative-stripe">
            <motion.div
              className="absolute top-1/4 -left-20 w-[120%] h-[200px] bg-p5-red/10 transform rotate-[10deg]"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <motion.div
              className="absolute top-20 right-0 w-[500px] h-[500px] bg-p5-red/10 transform rotate-[30deg]"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-20 left-0 w-80 h-80 bg-p5-red/5 transform -rotate-12"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.div
              className="absolute bottom-1/3 -right-10 w-[110%] h-[120px] bg-p5-red/5 transform rotate-[-6deg]"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9 }}
            />
            <motion.div
              className="absolute top-[60%] -left-10 w-[110%] h-[80px] bg-p5-crimson/5 transform rotate-[4deg]"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.1 }}
            />
          </div>

          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                {/* Capital One Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20, skewX: -15 }}
                  animate={{ opacity: 1, y: 0, skewX: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <div className="bg-p5-red/20 border-2 border-p5-red px-4 py-2 transform skew-x-[-10deg] relative">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-p5-red" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }} />
                    <span className="font-heading tracking-wider text-p5-red transform skew-x-[10deg] inline-block pl-2">
                      INCOMING SWE INTERN @ CAPITAL ONE
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-outline">
                    I AM
                  </h1>
                  <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-p5-red text-shadow-heavy">
                    JACOB CHO
                  </h1>
                  {/* Slash divider */}
                  <div className="p5-slash-divider w-48 mt-4" />
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-xl md:text-2xl text-p5-white/80 max-w-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Software Engineer & USC Computer Science Student.
                  Always building and learning.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex gap-2 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* Decorative red line above buttons */}
                  <div className="absolute -top-4 left-0 w-32 h-[2px] bg-p5-red" />
                  <Link href="/contact" className="p5-btn whitespace-nowrap">
                    GET IN TOUCH
                  </Link>
                  <Link href="/experience" className="p5-btn-outline whitespace-nowrap">
                    VIEW EXPERIENCE
                  </Link>
                  <Link href="/projects" className="p5-btn-outline whitespace-nowrap">
                    VIEW PROJECTS
                  </Link>
                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <div className="relative p5-frame">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-p5-red transform rotate-6" />
                  <div className="absolute -inset-4 bg-p5-black transform -rotate-6" />

                  {/* Image container with slash clip */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden clip-slash">
                    <Image
                      src="/profile.jpg"
                      alt="Jacob Cho"
                      fill
                      className="object-cover"
                    />
                    {/* Red overlay accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-p5-red/50 to-transparent" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-p5-red transform rotate-45" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        /* ── REAL WORLD HERO ─────────────────────────────────────── */
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

              {/* Text Content */}
              <div className="flex-1 space-y-8">

                {/* Eyebrow badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-p5-red/30 bg-p5-red/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-p5-red flex-shrink-0" />
                  <span className="text-p5-red text-sm font-medium tracking-wide">
                    Incoming SWE Intern @ Capital One
                  </span>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="font-heading text-7xl md:text-8xl lg:text-[7rem] leading-[0.92] tracking-tight text-p5-white">
                    Jacob<br />Cho
                  </h1>
                  <div className="mt-5 w-14 h-[3px] rounded-full bg-p5-red" />
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-p5-white/60 max-w-md leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Software Engineer & USC Computer Science Student.
                  Always building and learning.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <Link href="/contact" className="p5-btn whitespace-nowrap">
                    Get in Touch
                  </Link>
                  <Link href="/experience" className="p5-btn-outline whitespace-nowrap">
                    Experience
                  </Link>
                  <Link href="/projects" className="p5-btn-outline whitespace-nowrap">
                    Projects
                  </Link>
                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                className="flex-1 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              >
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06]">
                    <Image
                      src="/profile.jpg"
                      alt="Jacob Cho"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Terracotta accent dot */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-p5-red shadow-lg" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      )}
    </main>
  )
}
