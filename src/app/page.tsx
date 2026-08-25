'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import TechArsenal from '@/components/TechArsenal'
import RansomText from '@/components/p5/RansomText'
import TornDivider from '@/components/p5/TornDivider'
import { projects } from '@/lib/projects'

// ─── Experience data ──────────────────────────────────────────────────────────

interface Experience {
  title: string
  company: string
  period: string
  upcoming?: boolean
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Capital One',
    period: 'June 2026 – Aug 2026',
  },
  {
    title: 'Tech Fellow',
    company: 'CodePath',
    period: 'Aug 2025 – April 2026',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coursistant',
    period: 'May 2025 – Aug 2025',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Advanced RF Technologies',
    period: 'May 2022 – Jul 2022',
  },
]

const leadership = {
  title: 'Vice President',
  company: 'USC KSEA',
  period: 'Aug 2024 – Present',
}

// ─── Main page ────────────────────────────────────────────────────────────────

// Staff-card tilt cycle (deterministic, like the scattered credits on the Atlus site)
const staffTilts = [-2.5, 1.8, -1.2, 2.4, -1.8]

const cardVariantsReal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function HeroButtons({ isMetaverse, toggleTheme }: { isMetaverse: boolean; toggleTheme: () => void }) {
  return (
    <div className="flex flex-wrap items-start gap-4 md:gap-6">
      <div>
        <a
          href="https://drive.google.com/file/d/1D68zwZF79qTBtZjWTErPRbtX62BjDWOK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="p5-btn whitespace-nowrap inline-block"
        >
          View Resume
        </a>
        <p className={`mt-3 text-sm tracking-wide ${isMetaverse ? 'text-p5-white/40' : 'text-p5-white/30'}`}>
          View my current resume
        </p>
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="p5-btn-outline whitespace-nowrap"
        >
          {isMetaverse ? 'RETURN TO REALITY' : 'ENTER THE METAVERSE'}
        </button>
        <p className={`mt-3 text-sm tracking-wide ${isMetaverse ? 'text-p5-white/40' : 'text-p5-white/30'}`}>
          {isMetaverse ? 'Switch back to standard theme' : 'Switch to Persona 5 theme'}
        </p>
      </div>
    </div>
  )
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
            {/* Halftone dot texture */}
            <div className="absolute inset-0 pointer-events-none halftone halftone-fade opacity-40" />
            {/* Diagonal hatch */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--color-p5-white)) 10px, rgb(var(--color-p5-white)) 11px)' }}
            />
            <div className="p5-bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] whitespace-nowrap">
              TAKE YOUR HEART
            </div>

            {/* Spinning comic-burst emblem */}
            <motion.div
              className="absolute right-[-130px] top-[8%] hidden md:block pointer-events-none z-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.92 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="relative w-[440px] h-[440px]">
                <div className="absolute inset-0 comic-burst bg-p5-red" style={{ animation: 'p5BurstSpin 28s linear infinite' }} />
                <div className="absolute inset-10 comic-burst bg-p5-black" style={{ animation: 'p5BurstSpin 22s linear infinite reverse' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-heading italic text-7xl leading-none -rotate-6"
                    style={{ color: 'rgb(var(--color-p5-red))', WebkitTextStroke: '2px rgb(250 250 250)' }}
                  >
                    JC
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none decorative-stripe">
              <motion.div className="absolute top-1/4 -left-20 w-[120%] h-[200px] bg-p5-red/10 transform rotate-[10deg]" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
              <motion.div className="absolute bottom-20 left-0 w-80 h-80 bg-p5-red/5 transform -rotate-12" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.div className="absolute bottom-1/3 -right-10 w-[110%] h-[120px] bg-p5-red/5 transform rotate-[-6deg]" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4, delay: 0.9 }} />
            </div>
          </>
        )}

        <div className="container relative z-10">
          <div className="space-y-8">
            {isMetaverse ? (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="p5-bubble inline-block -rotate-1 mb-7">
                  <span className="p5-eyebrow text-base md:text-xl text-p5-white">
                    PHANTOM&nbsp;PROGRAMMER&nbsp;//&nbsp;PORTFOLIO
                  </span>
                </div>
                <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl leading-none text-outline -skew-x-6">I AM</h1>
                <div className="mt-4">
                  <RansomText text="JACOB CHO" className="text-5xl md:text-7xl lg:text-8xl" delay={0.25} />
                </div>
                <div className="p5-slash-divider w-48 mt-7" />
                <div className="p5-eyebrow text-p5-white/60 text-sm md:text-lg mt-4">
                  SOFTWARE&nbsp;ENGINEER&nbsp;·&nbsp;USC
                </div>
              </motion.div>
            ) : (
              <div>
                <h1 className="font-heading text-7xl md:text-8xl lg:text-[7rem] leading-[0.92] tracking-tight text-p5-white">
                  Jacob<br />Cho
                </h1>
                <div className="mt-5 w-10 h-[2px] rounded-full bg-p5-white/20" />
              </div>
            )}

            {isMetaverse ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <HeroButtons isMetaverse={isMetaverse} toggleTheme={toggleTheme} />
              </motion.div>
            ) : (
              <div>
                <HeroButtons isMetaverse={isMetaverse} toggleTheme={toggleTheme} />
              </div>
            )}
          </div>
        </div>
      </section>

      {isMetaverse && <TornDivider />}

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
              <h2>
                <RansomText text="EXPERIENCE" className="text-4xl md:text-6xl" />
              </h2>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, y: 60, rotate: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.08 }}
                  >
                    <div
                      className="p5-staff-wrap h-full"
                      style={{ transform: `rotate(${staffTilts[index % staffTilts.length]}deg)` }}
                    >
                      <div className="p5-staff-card px-7 pt-9 pb-6 h-full">
                        {/* Big faded rank number */}
                        <span
                          className="absolute right-3 bottom-1 font-heading italic leading-none select-none pointer-events-none"
                          style={{ fontSize: '4.5rem', color: 'rgba(216, 0, 39, 0.12)' }}
                        >
                          {String(experiences.length - index).padStart(2, '0')}
                        </span>
                        <RansomText text={exp.company} className="text-xl md:text-2xl" delay={0.12} />
                        <div className="mt-4 p5-eyebrow text-sm text-[#0d0d0d]/60">{exp.period}</div>
                      </div>
                      <span className="p5-staff-tag">{exp.title}</span>
                      {exp.upcoming && (
                        <span className="p5-staff-tag" style={{ left: 'auto', right: '1.1rem', background: '#0d0d0d' }}>
                          ★ UPCOMING
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Leadership — metaverse */}
              <div className="mt-28">
                <h2>
                  <RansomText text="LEADERSHIP" className="text-4xl md:text-6xl" />
                </h2>
                <motion.div
                  className="mt-16 max-w-xl"
                  initial={{ opacity: 0, y: 60, rotate: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <div className="p5-staff-wrap" style={{ transform: 'rotate(-1.5deg)' }}>
                    <div className="p5-staff-card px-7 pt-9 pb-6">
                      <RansomText text={leadership.company} className="text-xl md:text-2xl" delay={0.12} />
                      <div className="mt-4 p5-eyebrow text-sm text-[#0d0d0d]/60">{leadership.period}</div>
                    </div>
                    <span className="p5-staff-tag">{leadership.title}</span>
                  </div>
                </motion.div>
              </div>
            </>
          ) : (
            /* Real world experience */
            <div>
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
            </div>
          )}
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <TechArsenal />

      {isMetaverse && <TornDivider flip />}

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
              <h2>
                <RansomText text="PROJECT MEMENTOS" className="text-4xl md:text-6xl" />
              </h2>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-2 pb-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    className="group"
                    initial={{ opacity: 0, y: 70, rotate: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 240, damping: 22, delay: index * 0.07 }}
                  >
                    <div className="p5-cutin h-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {/* Diagonal striped band with name slab */}
                        <div className="p5-cutin-band h-11 relative">
                          <span
                            className="absolute left-4 -bottom-4 bg-[#FAFAFA] text-[#0d0d0d] font-heading italic text-lg md:text-xl uppercase tracking-wider px-3 py-1 border-2 border-[#0d0d0d] -rotate-2"
                            style={{ boxShadow: '4px 4px 0 rgb(216 0 39)' }}
                          >
                            {project.name}
                          </span>
                        </div>
                        <div className="px-6 pt-10 pb-6" style={{ transform: 'skewX(4deg)' }}>
                          {project.badge && (
                            <div className="inline-block mb-3 px-2.5 py-0.5 bg-p5-red text-p5-white font-display text-xs tracking-widest border border-p5-white transform skew-x-[-6deg]">
                              ★ {project.badge.toUpperCase()}
                            </div>
                          )}
                          <p className="text-p5-white/70 text-sm mb-4 leading-snug">{project.description}</p>
                          <div className="flex items-center gap-2 text-p5-red font-heading tracking-wider text-sm">
                            <span>VIEW PROJECT</span>
                            <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Real world projects */
            <div>
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
            </div>
          )}
        </div>
      </section>

      {isMetaverse && <TornDivider />}

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          {isMetaverse ? (
            <>
              <h2>
                <RansomText text="CONTACT" className="text-4xl md:text-6xl" />
              </h2>
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
                    <h3 className="p5-marker text-3xl md:text-4xl text-p5-red mb-2 -rotate-2 inline-block">Take Your Heart</h3>
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
            <div>
              <span className="rw-section-label">Contact</span>
              <hr className="rw-rule" />
              <p className="rw-contact-intro">Let&apos;s work together.</p>
              <a href="mailto:jacobcho99@gmail.com" className="rw-email-link">jacobcho99@gmail.com</a>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
