'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AllOutAttackReveal from '@/components/AllOutAttackReveal'
import TechArsenal from '@/components/TechArsenal'

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-0 w-96 h-96 bg-p5-red/10 transform rotate-45"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 left-0 w-64 h-64 bg-p5-red/5 transform -rotate-12"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              {/* Capital One Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <div className="bg-p5-red/20 border border-p5-red px-4 py-2 transform skew-x-[-5deg]">
                  <span className="font-heading tracking-wider text-p5-red transform skew-x-[5deg] inline-block">
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
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-shadow-red">
                  I AM
                </h1>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-p5-red">
                  JACOB CHO
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Software Engineer & USC Computer Science Student.
                Always building and learning.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href="/contact" className="p5-btn">
                  GET IN TOUCH
                </Link>
                <Link href="/experience" className="p5-btn-outline">
                  VIEW EXPERIENCE
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p5-btn-outline">
                  VIEW RESUME
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <AllOutAttackReveal className="flex-1 flex justify-center" delay={0.3}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-p5-red transform rotate-3" />
                <div className="absolute -inset-4 bg-p5-black transform -rotate-3" />

                {/* Image container with diagonal clip */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden clip-corner">
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
            </AllOutAttackReveal>
          </div>
        </div>
      </section>

      {/* Skill Arsenal Section */}
      <TechArsenal />
    </main>
  )
}
