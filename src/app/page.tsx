'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import TechArsenal from '@/components/TechArsenal'
import { projects } from '@/lib/projects'

// ─── Experience data ──────────────────────────────────────────────────────────

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
  period: string
  upcoming?: boolean
  arcana: ArcanaKey
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Capital One',
    period: 'June 2026',
    upcoming: true,
    arcana: 'orange',
  },
  {
    title: 'Tech Fellow',
    company: 'CodePath',
    period: 'Aug 2025 – April 2026',
    arcana: 'blue',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coursistant',
    period: 'May 2025 – Aug 2025',
    arcana: 'pink',
  },
  {
    title: 'Web Administrator',
    company: 'Soccer Shop USA',
    period: 'Mar 2025 – May 2025',
    arcana: 'green',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Advanced RF Technologies',
    period: 'May 2022 – Aug 2022',
    arcana: 'violet',
  },
]

const leadership = {
  title: 'Vice President',
  company: 'USC KSEA',
  period: 'Aug 2024 – Present',
  arcana: 'orange' as ArcanaKey,
}

// ─── ArcanaCard (metaverse experience cards) ─────────────────────────────────

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
        style={{ backgroundColor: accent, clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: accent, opacity: 0.4 }}
      />
      {children}
    </motion.div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

const cardVariantsMetaverse = {
  hidden: { opacity: 0, y: 40, rotate: -6 },
  visible: { opacity: 1, y: 0, rotate: -2, transition: { duration: 0.6, ease: 'easeOut' } },
}
const cardVariantsReal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

export default function Home() {
  const { isMetaverse, toggleTheme } = useTheme()

  // Contact form state (metaverse mode only)
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }
      setStatus('success')
      setFormData({ name: '', email: '', message: '', phone: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <main className="min-h-screen pt-20">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">

        {/* Metaverse-only background decorations */}
        {isMetaverse && (
          <>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--color-p5-white)) 10px, rgb(var(--color-p5-white)) 11px)' }}
            />
            <div className="p5-bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] whitespace-nowrap">
              TAKE YOUR HEART
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none decorative-stripe">
              <motion.div className="absolute top-1/4 -left-20 w-[120%] h-[200px] bg-p5-red/10 transform rotate-[10deg]" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
              <motion.div className="absolute top-20 right-0 w-[500px] h-[500px] bg-p5-red/10 transform rotate-[30deg]" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.div className="absolute bottom-20 left-0 w-80 h-80 bg-p5-red/5 transform -rotate-12" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.div className="absolute bottom-1/3 -right-10 w-[110%] h-[120px] bg-p5-red/5 transform rotate-[-6deg]" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4, delay: 0.9 }} />
            </div>
          </>
        )}

        <div className="container relative z-10">
          <div className="space-y-8">
            <motion.div
              initial={isMetaverse ? { opacity: 0, x: -100 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {isMetaverse ? (
                <>
                  <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-outline">I AM</h1>
                  <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-p5-red text-shadow-heavy">JACOB CHO</h1>
                  <div className="p5-slash-divider w-48 mt-4" />
                </>
              ) : (
                <>
                  <h1 className="font-heading text-7xl md:text-8xl lg:text-[7rem] leading-[0.92] tracking-tight text-p5-white">
                    Jacob<br />Cho
                  </h1>
                  <div className="mt-5 w-10 h-[2px] rounded-full bg-p5-white/20" />
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <button
                onClick={toggleTheme}
                className={isMetaverse ? 'p5-btn whitespace-nowrap' : 'p5-btn-outline whitespace-nowrap'}
              >
                {isMetaverse ? 'RETURN TO REALITY' : 'ENTER THE METAVERSE'}
              </button>
              <p className={`mt-3 text-sm tracking-wide ${isMetaverse ? 'text-p5-white/40' : 'text-p5-white/30'}`}>
                {isMetaverse ? 'Switch back to standard theme' : 'Switch to Persona 5 theme'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
              <motion.h2
                className="p5-section-header"
                initial={{ opacity: 0, x: -100, skewX: -10 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                EXPERIENCE
              </motion.h2>

              <div className="mt-16 relative">
                <div
                  className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2"
                  style={{ background: `linear-gradient(to bottom, ${arcanaColors.blue.accent}, ${arcanaColors.pink.accent}, ${arcanaColors.green.accent}, ${arcanaColors.violet.accent})` }}
                />
                <div className="space-y-16">
                  {experiences.map((exp, index) => {
                    const { accent, glow } = arcanaColors[exp.arcana]
                    const isEven = index % 2 === 0
                    const dotColor = accent
                    const dotGlow = glow
                    const textAccent = accent
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
                          <div className="absolute inset-0 rounded-full animate-pulse" style={{ boxShadow: `0 0 12px 4px ${dotGlow}` }} />
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
                                style={{ backgroundColor: dotColor, color: 'rgb(var(--color-p5-black))' }}
                              >
                                UPCOMING
                              </div>
                            )}
                            <div className="font-heading text-sm tracking-wider mb-2" style={{ color: textAccent }}>{exp.period}</div>
                            <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">{exp.title}</h3>
                            <div className="text-xl mb-4" style={{ color: textAccent }}>{exp.company}</div>
                          </ArcanaCard>
                        </div>
                        <div className="hidden md:block flex-1" />
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Leadership — metaverse */}
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
                    arcana={leadership.arcana}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="font-heading text-sm tracking-wider mb-2" style={{ color: arcanaColors[leadership.arcana].accent }}>{leadership.period}</div>
                    <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">{leadership.title}</h3>
                    <div className="text-xl" style={{ color: arcanaColors[leadership.arcana].accent }}>{leadership.company}</div>
                  </ArcanaCard>
                </div>
              </div>
            </>
          ) : (
            /* Real world experience */
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="rw-section-label">Experience</span>
              <hr className="rw-rule" />
              <div className="space-y-0">
                {experiences.map((exp, i) => (
                  <div key={`${exp.company}-${exp.period}`}>
                    <div className="rw-exp-row">
                      <span className="rw-period">{exp.period}</span>
                      <div>
                        {exp.upcoming && <span className="rw-upcoming-tag">Upcoming</span>}
                        <span className="rw-company">{exp.company}</span>
                        <span className="rw-role">{exp.title}</span>
                      </div>
                    </div>
                    {i < experiences.length - 1 && <hr className="rw-rule-thin" />}
                  </div>
                ))}
              </div>

              {/* Leadership — real world */}
              <div className="mt-12 pt-4">
                <span className="rw-section-label">Leadership</span>
                <hr className="rw-rule" />
              </div>
              <div className="rw-exp-row">
                <span className="rw-period">{leadership.period}</span>
                <div>
                  <span className="rw-company">{leadership.company}</span>
                  <span className="rw-role">{leadership.title}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <TechArsenal />

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
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
                className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 pb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.name}
                    variants={cardVariantsMetaverse}
                    whileHover={{ rotate: 0, scale: 1.05, boxShadow: '12px 12px 0 0 rgb(var(--color-p5-red))' }}
                    className="p5-calling-card group"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block pt-2">
                      <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-2 tracking-wider uppercase group-hover:text-p5-red transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.badge && (
                        <div className="inline-block mb-2 px-3 py-0.5 font-heading text-xs tracking-wider transform skew-x-[-5deg] bg-p5-red text-p5-black">
                          <span className="inline-block skew-x-[5deg]">{project.badge.toUpperCase()}</span>
                        </div>
                      )}
                      <p className="text-p5-white/60 text-sm mb-3 leading-snug">{project.description}</p>
                      <div className="flex items-center gap-2 text-p5-red font-heading tracking-wider text-sm">
                        <span>VIEW PROJECT</span>
                        <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </a>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-p5-red clip-corner-small opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            /* Real world projects */
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="rw-section-label">Projects</span>
              <hr className="rw-rule" />
              <div>
                {projects.map((project, i) => (
                  <div key={project.name}>
                    <div className="rw-project-row">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="rw-project-name">
                            {project.name}
                          </a>
                          {project.badge && (
                            <span className="rw-upcoming-tag">{project.badge}</span>
                          )}
                        </div>
                        <span className="text-p5-white/45 text-sm">{project.description}</span>
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="rw-project-link" aria-label="Open project">
                        ↗
                      </a>
                    </div>
                    {i < projects.length - 1 && <hr className="rw-rule-thin" />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
              <motion.h2
                className="p5-section-header"
                initial={{ opacity: 0, x: -100, skewX: -10 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                CONTACT
              </motion.h2>
              <div className="mt-12">
                {/* Calling card form */}
                <motion.div
                  className="p5-calling-card max-w-lg"
                  initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-p5-red px-6 py-1">
                    <span className="font-heading text-p5-white tracking-widest text-sm">CALLING CARD</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-heading text-3xl text-p5-white mb-2 tracking-wider">TAKE YOUR HEART</h3>
                    <p className="text-p5-white/70 mb-8">Send me a calling card and I&apos;ll get back to you.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} tabIndex={-1} autoComplete="off" />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-p5-red font-heading tracking-wider mb-2">CODENAME</label>
                        <input type="text" id="name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white focus:border-p5-red focus:outline-none transition-colors rounded-lg"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-p5-red font-heading tracking-wider mb-2">COORDINATES</label>
                        <input type="email" id="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white focus:border-p5-red focus:outline-none transition-colors rounded-lg"
                          placeholder="your@email.com" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-p5-red font-heading tracking-wider mb-2">MESSAGE</label>
                        <textarea id="message" required rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white focus:border-p5-red focus:outline-none transition-colors resize-none rounded-lg"
                          placeholder="Your message..." />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-p5-red text-p5-white font-heading text-xl tracking-wider py-4 hover:bg-p5-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform skew-x-[-5deg]"
                        whileHover={{ scale: 1.02, skewX: 0 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center gap-3 transform skew-x-[5deg]">
                          {status === 'loading' ? 'SENDING...' : <><span>SEND CALLING CARD</span><FaPaperPlane /></>}
                        </span>
                      </motion.button>
                      {status === 'success' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-500 font-heading tracking-wider text-center">
                          MESSAGE SENT SUCCESSFULLY!
                        </motion.div>
                      )}
                      {status === 'error' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 font-heading tracking-wider text-center">
                          {errorMessage}
                        </motion.div>
                      )}
                    </form>
                  </div>
                </motion.div>
              </div>
            </>
          ) : (
            /* Real world contact */
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="rw-section-label">Contact</span>
              <hr className="rw-rule" />
              <p className="rw-contact-intro">Let&apos;s work together.</p>
              <a href="mailto:jacobcho99@gmail.com" className="rw-email-link">jacobcho99@gmail.com</a>
            </motion.div>
          )}
        </div>
      </section>

    </main>
  )
}
