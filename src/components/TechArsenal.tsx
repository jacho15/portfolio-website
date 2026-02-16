'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

interface TechCategory {
  title: string
  items: string[]
}

const techData: TechCategory[] = [
  {
    title: 'FRONTEND',
    items: ['ReactJS', 'TailwindCSS'],
  },
  {
    title: 'BACKEND',
    items: ['SpringBoot', 'MongoDB'],
  },
  {
    title: 'LANGUAGES',
    items: ['Python', 'C++', 'Java', 'TypeScript', 'JavaScript'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, x: -80, skewX: -10 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export default function TechArsenal() {
  const { isMetaverse } = useTheme()

  return (
    <section
      className="py-32 bg-p5-gray/50 relative overflow-hidden"
      style={isMetaverse ? { clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)' } : undefined}
    >
      {/* Large background decorative text */}
      <div className="p5-bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] whitespace-nowrap">
        ARSENAL
      </div>

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 pointer-events-none decorative-stripe">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-p5-red/10 transform -skew-x-12" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-p5-red/10 transform skew-x-12" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-p5-red/10 transform -skew-x-12" />
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider text-p5-white inline-block relative text-shadow-red">
            SKILL ARSENAL
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-p5-red transform skew-x-[-20deg]" />
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="relative"
            >
              {/* Secondary offset shadow/border behind card */}
              <div className="absolute inset-0 border-2 border-p5-red translate-x-1 translate-y-1 clip-p5-panel" />

              {/* Category Card */}
              <div className="bg-p5-black/80 border-l-4 border-p5-red p-6 h-full relative overflow-hidden clip-p5-panel">
                {/* Jagged header background */}
                <div className={`absolute top-0 left-0 right-0 h-14 bg-p5-red origin-left ${isMetaverse ? 'transform -skew-y-2' : ''}`} />

                {/* Category Title */}
                <h3 className="relative font-heading text-2xl tracking-wider text-p5-white mb-6 z-10">
                  {category.title}
                </h3>

                {/* Tech Items */}
                <motion.ul
                  className="space-y-3"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2 + categoryIndex * 0.15,
                      },
                    },
                  }}
                >
                  {category.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-p5-white/80 text-lg group"
                    >
                      {/* Star bullet */}
                      <span className="text-p5-red text-sm transform group-hover:scale-125 group-hover:rotate-45 transition-transform duration-300">
                        ★
                      </span>
                      <span className="font-medium tracking-wide group-hover:text-p5-white group-hover:translate-x-1 transition-all duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-p5-red clip-corner-small" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
