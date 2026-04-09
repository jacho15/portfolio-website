'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export default function Projects() {
  const { isMetaverse } = useTheme()

  const cardVariants = {
    hidden: isMetaverse
      ? { opacity: 0, y: 40, rotate: -6 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: isMetaverse ? -2 : 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            className="p5-section-header"
            initial={isMetaverse ? { opacity: 0, x: -100, skewX: -10 } : { opacity: 0, y: 16 }}
            whileInView={isMetaverse ? { opacity: 1, x: 0, skewX: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {isMetaverse ? 'PROJECT MEMENTOS' : 'PROJECTS'}
          </motion.h2>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover={
                  isMetaverse
                    ? { rotate: 0, scale: 1.05, boxShadow: '12px 12px 0 0 rgb(var(--color-p5-red))' }
                    : { y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }
                }
                className="p5-calling-card group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <h3 className={`font-heading text-2xl md:text-3xl text-p5-white mb-3 group-hover:text-p5-red transition-colors duration-300 ${
                    isMetaverse ? 'tracking-wider uppercase' : 'tracking-tight'
                  }`}>
                    {project.name}
                  </h3>

                  <p className="text-p5-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-p5-red font-heading tracking-wider text-sm">
                    <span>{isMetaverse ? 'VIEW PROJECT' : 'View Project'}</span>
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </a>

                {isMetaverse && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-p5-red clip-corner-small opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
