'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

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

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotate: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: -2,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Projects() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            className="p5-section-header"
            initial={{ opacity: 0, x: -100, skewX: -10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            PROJECT MEMENTOS
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
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  boxShadow: '12px 12px 0 0 #D80027',
                }}
                className="p5-calling-card group"
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-3 left-4 bg-p5-red px-4 py-1 transform skew-x-[-5deg] hover:bg-p5-red-dark transition-colors duration-200 z-10 flex items-center gap-2"
                >
                  <FaGithub className="text-p5-white text-xs transform skew-x-[5deg]" />
                  <span className="font-heading text-p5-white tracking-widest text-xs transform skew-x-[5deg] inline-block">
                    VIEW REPOSITORY
                  </span>
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <h3 className="font-heading text-2xl md:text-3xl text-p5-black tracking-wider mb-3 group-hover:text-p5-red transition-colors duration-300">
                    {project.name.toUpperCase()}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-p5-red font-heading tracking-wider text-sm">
                    <span>VIEW PROJECT</span>
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </a>

                <div className="absolute bottom-0 right-0 w-8 h-8 bg-p5-red clip-corner-small opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
