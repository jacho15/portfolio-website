'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import TechArsenal from '@/components/TechArsenal'

const arcanaColors = {
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
  location: string
  period: string
  bullets: string[]
  skills: string[]
  upcoming?: boolean
  arcana: ArcanaKey
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Capital One',
    location: 'Plano, TX',
    period: 'June 2026',
    bullets: [],
    skills: [],
    upcoming: true,
    arcana: 'orange',
  },
  {
    title: 'Tech Fellow',
    company: 'CodePath',
    location: 'Remote',
    period: 'Aug 2025 – Present',
    bullets: [
      'Enabled the success of 200+ students by tutoring them on core interview concepts and data structures, and by coaching them on how to communicate their solutions effectively to interviewers.',
      'Provided personalized support to 10+ students per lecture by solving complex interview questions and offering tailored explanations, helping students grasp challenging concepts and build strong interview habits.',
    ],
    skills: ['Teaching', 'Mentorship', 'Data Structures', 'Technical Leadership'],
    arcana: 'blue',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coursistant',
    location: 'Remote',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Engineered 10+ front end pages using TypeScript, React, and Vite, enabling complex features to improve UX.',
      'Architected and deployed 20+ RESTful APIs with Java/Spring Boot on AWS (EC2, RDS, S3), designing backend services for payment processing and transactional workflows with a focus on data integrity and reliability.',
      'Collaborated with fullstack, product, and design teams in daily SCRUM meetings to identify and refine 15+ UI/UX specifications, leading to direct improvements in product design and user flows.',
    ],
    skills: ['TypeScript', 'React', 'Vite', 'Java', 'Spring Boot', 'AWS'],
    arcana: 'pink',
  },
  {
    title: 'Web Administrator',
    company: 'Soccer Shop USA',
    location: 'Los Angeles, CA',
    period: 'Mar 2025 – May 2025',
    bullets: [
      'Developed Python automation scripts to process 10,000+ backlogged product listings with incorrect formatting, reducing website runtime by 40% and eliminating 10+ hours of manual checking per week.',
      'Automated WooCommerce CSV import systems, reducing manual input errors by 75% for 1,200+ monthly listings.',
      'Engineered a full-stack automation system that scraped live soccer match results (EPL, La Liga, etc.) and triggered WooCommerce jersey discounts via WooCommerce API, increasing jersey sales by 10% monthly.',
    ],
    skills: ['Python', 'WooCommerce', 'WordPress', 'REST APIs', 'Web Scraping'],
    arcana: 'green',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Advanced RF Technologies',
    location: 'Burbank, CA',
    period: 'May 2022 – Aug 2022',
    bullets: [
      'Developed a Python algorithm for frequency sorting, reducing manual developer workload by 10+ hours per week.',
      'Deployed the algorithm to all engineers, accompanied by an instructional video, which standardized workflows and improved data processing speed by 40%.',
      'Contributed to website upkeep using WordPress, writing scripts and optimizing plugins to reduce runtime by 30%.',
    ],
    skills: ['Python', 'Algorithm Development', 'WordPress'],
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
  const { isMetaverse } = useTheme()

  return (
    <motion.div
      className={`arcana-card ${className}`}
      style={isMetaverse ? {
        '--arcana-accent': accent,
        '--arcana-glow': glow,
      } as React.CSSProperties : {
        '--arcana-accent': 'rgb(var(--color-p5-red))',
        '--arcana-glow': 'transparent',
      } as React.CSSProperties}
      {...motionProps}
    >
      {isMetaverse && (
        <div
          className="absolute top-0 right-0 w-8 h-8"
          style={{
            backgroundColor: accent,
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />
      )}

      {isMetaverse && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ backgroundColor: accent, opacity: 0.4 }}
        />
      )}

      {children}
    </motion.div>
  )
}

export default function Experience() {
  const { isMetaverse } = useTheme()

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
            EXPERIENCE
          </motion.h2>

          <div className="mt-16 relative">
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2"
              style={isMetaverse ? {
                background: `linear-gradient(to bottom, ${arcanaColors.blue.accent}, ${arcanaColors.pink.accent}, ${arcanaColors.green.accent}, ${arcanaColors.violet.accent})`,
              } : {
                background: 'rgb(var(--color-p5-red))',
              }}
            />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const { accent, glow } = arcanaColors[exp.arcana]
                const isEven = index % 2 === 0
                const dotColor = isMetaverse ? accent : 'rgb(var(--color-p5-red))'
                const dotGlow = isMetaverse ? glow : 'transparent'
                const textAccent = isMetaverse ? accent : 'rgb(var(--color-p5-red))'

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
                      style={{ backgroundColor: dotColor }}
                    >
                      {isMetaverse && (
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ boxShadow: `0 0 12px 4px ${dotGlow}` }}
                        />
                      )}
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
                            className={`inline-block px-3 py-1 font-heading text-sm mb-4 ${isMetaverse ? 'transform skew-x-[-5deg]' : 'rounded'}`}
                            style={{ backgroundColor: dotColor, color: 'rgb(var(--color-p5-black))' }}
                          >
                            UPCOMING
                          </div>
                        )}
                        <div
                          className="font-heading text-sm tracking-wider mb-2"
                          style={{ color: textAccent }}
                        >
                          {exp.period}
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-xl mb-1" style={{ color: textAccent }}>
                          {exp.company}
                        </div>
                        <div className="text-sm text-p5-white/50 mb-4 tracking-wide">
                          {exp.location}
                        </div>
                        {exp.bullets.length > 0 && (
                          <ul className="mb-4 space-y-2 text-left">
                            {exp.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex gap-2 text-p5-white/80 text-sm leading-relaxed">
                                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: textAccent }} />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
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
              initial={isMetaverse ? { opacity: 0, x: -100, skewX: -10 } : { opacity: 0, y: 16 }}
              whileInView={isMetaverse ? { opacity: 1, x: 0, skewX: 0 } : { opacity: 1, y: 0 }}
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
                  style={{ color: isMetaverse ? arcanaColors.orange.accent : 'rgb(var(--color-p5-red))' }}
                >
                  Aug 2024 - Present
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                  Vice President
                </h3>
                <div className="text-xl mb-4" style={{ color: isMetaverse ? arcanaColors.orange.accent : 'rgb(var(--color-p5-red))' }}>
                  USC KSEA
                </div>
                <ul className="mb-4 space-y-2">
                  {[
                    'Managing finances and leading event planning for the USC Chapter of the Korean-American Scientists and Engineers Association.',
                  ].map((bullet, bi) => (
                    <li key={bi} className="flex gap-2 text-p5-white/80 text-sm leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isMetaverse ? arcanaColors.orange.accent : 'rgb(var(--color-p5-red))' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['Financial Management', 'Leadership', 'Event Planning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-p5-black text-sm text-p5-white rounded"
                      style={{ borderWidth: '1px', borderColor: isMetaverse ? arcanaColors.orange.accent : 'rgb(var(--color-p5-red))' }}
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

      {/* Skill Arsenal Section */}
      <TechArsenal />
    </main>
  )
}
