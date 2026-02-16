'use client'

import { motion } from 'framer-motion'

const arcanaColors = {
  gold: { accent: '#FFD700', glow: 'rgba(255, 215, 0, 0.15)' },
  blue: { accent: '#00A5FF', glow: 'rgba(0, 165, 255, 0.15)' },
  pink: { accent: '#FF2D78', glow: 'rgba(255, 45, 120, 0.15)' },
  green: { accent: '#00E676', glow: 'rgba(0, 230, 118, 0.15)' },
  violet: { accent: '#B14EFF', glow: 'rgba(177, 78, 255, 0.15)' },
  orange: { accent: '#FF6D00', glow: 'rgba(255, 109, 0, 0.15)' },
} as const

type ArcanaKey = keyof typeof arcanaColors

interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  upcoming?: boolean
  arcana: ArcanaKey
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Capital One',
    period: 'Summer 2026',
    description: 'Incoming SWE Intern for Summer 2026.',
    skills: ['TBD'],
    upcoming: true,
    arcana: 'gold',
  },
  {
    title: 'Tech Fellow',
    company: 'CodePath',
    period: 'Aug 2025 - Present',
    description: 'Supporting students in learning software engineering concepts and guiding them through technical projects.',
    skills: ['Teaching', 'Mentorship', 'Technical Leadership'],
    arcana: 'blue',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coursistant',
    period: 'May 2025 - Aug 2025',
    description: 'Building and improving web applications to enhance the learning experience for students.',
    skills: ['HTML', 'CSS', 'React', 'REST APIs'],
    arcana: 'pink',
  },
  {
    title: 'Web Administrator',
    company: 'Soccer Shop USA',
    period: 'March 2025 - May 2025',
    description: 'Managed e-commerce platform and automated inventory management processes.',
    skills: ['Python', 'WooCommerce', 'WordPress', 'REST APIs'],
    arcana: 'green',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Advanced RF Technologies',
    period: 'May 2022 - Aug 2022',
    description: 'Developed backend solutions and participated in agile development practices.',
    skills: ['Python', 'Backend Development', 'Agile'],
    arcana: 'violet',
  },
]

interface ArcanaCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode
  arcana: ArcanaKey
  className?: string
}

function ArcanaCard({ children, arcana, className = '', ...motionProps }: ArcanaCardProps) {
  const { accent, glow } = arcanaColors[arcana]

  return (
    <motion.div
      className={`arcana-card ${className}`}
      style={{
        '--arcana-accent': accent,
        '--arcana-glow': glow,
      } as React.CSSProperties}
      {...motionProps}
    >
      <div
        className="absolute top-0 right-0 w-8 h-8"
        style={{
          backgroundColor: accent,
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: accent, opacity: 0.4 }}
      />

      {children}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              className="p5-section-header"
              initial={{ opacity: 0, x: -100, skewX: -10 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              EXPERIENCE
            </motion.h2>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p5-btn-outline whitespace-nowrap"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              VIEW RESUME
            </motion.a>
          </div>

          <div className="mt-16 relative">
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${arcanaColors.gold.accent}, ${arcanaColors.blue.accent}, ${arcanaColors.pink.accent}, ${arcanaColors.green.accent}, ${arcanaColors.violet.accent})`,
              }}
            />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const { accent, glow } = arcanaColors[exp.arcana]
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div
                      className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-2 md:-translate-x-1/2 mt-6 z-10"
                      style={{ backgroundColor: accent }}
                    >
                      <div
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{ boxShadow: `0 0 12px 4px ${glow}` }}
                      />
                    </div>

                    <div className={`flex-1 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <ArcanaCard
                        arcana={exp.arcana}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.upcoming && (
                          <div
                            className="inline-block px-3 py-1 font-heading text-sm mb-4 transform skew-x-[-5deg]"
                            style={{ backgroundColor: accent, color: '#0D0D0D' }}
                          >
                            UPCOMING
                          </div>
                        )}
                        <div
                          className="font-heading text-sm tracking-wider mb-2"
                          style={{ color: accent }}
                        >
                          {exp.period}
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-xl mb-4" style={{ color: accent }}>
                          {exp.company}
                        </div>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-p5-black text-sm text-p5-white"
                              style={{ borderWidth: '1px', borderColor: accent }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </ArcanaCard>
                    </div>

                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-24">
            <motion.h2
              className="p5-section-header"
              initial={{ opacity: 0, x: -100, skewX: -10 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              LEADERSHIP
            </motion.h2>

            <div className="mt-12">
              <ArcanaCard
                arcana="orange"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  className="font-heading text-sm tracking-wider mb-2"
                  style={{ color: arcanaColors.orange.accent }}
                >
                  Aug 2024 - Present
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                  Vice President
                </h3>
                <div className="text-xl mb-4" style={{ color: arcanaColors.orange.accent }}>
                  USC KSEA
                </div>
                <p className="text-gray-300 mb-4">
                  Managing finances and leading event planning for the USC Chapter of the Korean-American Scientists and Engineers Association.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Financial Management', 'Leadership', 'Event Planning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-p5-black text-sm text-p5-white"
                      style={{ borderWidth: '1px', borderColor: arcanaColors.orange.accent }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ArcanaCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
