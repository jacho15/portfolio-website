'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { useTheme } from '@/context/ThemeContext'

const socials: { href: string; icon: IconType; label: string; desc: string }[] = [
  { href: 'https://www.linkedin.com/in/jacob-a-cho/', icon: FaLinkedin, label: 'LINKEDIN', desc: 'Connect with me' },
  { href: 'https://github.com/jacho15', icon: FaGithub, label: 'GITHUB', desc: 'Check out my code' },
]

export default function Contact() {
  const { isMetaverse } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '', // Honeypot field
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            className="p5-section-header"
            initial={isMetaverse ? { opacity: 0, x: -100, skewX: -10 } : { opacity: 0, y: 16 }}
            whileInView={isMetaverse ? { opacity: 1, x: 0, skewX: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            CONTACT
          </motion.h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Card */}
            <motion.div
              className="p5-calling-card max-w-lg"
              initial={isMetaverse ? { opacity: 0, rotate: -10, scale: 0.8 } : { opacity: 0, y: 20 }}
              whileInView={isMetaverse ? { opacity: 1, rotate: -2, scale: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={isMetaverse ? { rotate: 0, scale: 1.02 } : { y: -4 }}
            >
              {/* Top banner — metaverse only */}
              {isMetaverse && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-p5-red px-6 py-1">
                  <span className="font-heading text-p5-white tracking-widest text-sm">CALLING CARD</span>
                </div>
              )}

              <div className="pt-4">
                <h3 className="font-heading text-3xl text-p5-white mb-2 tracking-wider">
                  {isMetaverse ? 'TAKE YOUR HEART' : 'Send a message'}
                </h3>
                <p className="text-p5-white/70 mb-8">
                  {isMetaverse
                    ? "Send me a calling card and I'll get back to you."
                    : "Fill out the form and I'll get back to you."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-p5-red font-heading tracking-wider mb-2">
                      {isMetaverse ? 'CODENAME' : 'Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white
                                 focus:border-p5-red focus:outline-none transition-colors rounded-lg"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-p5-red font-heading tracking-wider mb-2">
                      {isMetaverse ? 'COORDINATES' : 'Email'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white
                                 focus:border-p5-red focus:outline-none transition-colors rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-p5-red font-heading tracking-wider mb-2">
                      {isMetaverse ? 'MESSAGE' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-p5-gray border border-p5-white/15 text-p5-white
                                 focus:border-p5-red focus:outline-none transition-colors resize-none rounded-lg"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-p5-red text-p5-white font-heading text-xl tracking-wider
                               py-4 hover:bg-p5-red-dark transition-colors
                               disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3
                               ${isMetaverse ? 'transform skew-x-[-5deg]' : 'rounded-xl'}`}
                    whileHover={isMetaverse ? { scale: 1.02, skewX: 0 } : { scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`flex items-center gap-3 ${isMetaverse ? 'transform skew-x-[5deg]' : ''}`}>
                      {status === 'loading' ? (
                        isMetaverse ? 'SENDING...' : 'Sending...'
                      ) : (
                        <>
                          {isMetaverse ? 'SEND CALLING CARD' : 'Send Message'}
                          <FaPaperPlane />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 font-heading tracking-wider text-center"
                    >
                      {isMetaverse ? 'MESSAGE SENT SUCCESSFULLY!' : "Message sent — I'll be in touch."}
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 font-heading tracking-wider text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Alternative Contact Methods */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-heading text-2xl text-p5-white mb-6 tracking-wider">
                  {isMetaverse ? 'OR CHECK OUT MY SOCIALS' : 'Or find me on'}
                </h3>

                <div className="space-y-4">
                  {socials.map(({ href, icon: Icon, label, desc }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-p5-gray border-l-4 border-p5-red
                                 transition-all duration-200 group rounded-lg"
                      whileHover={{ x: isMetaverse ? 10 : 0, y: isMetaverse ? 0 : -2 }}
                    >
                      <Icon className="text-2xl text-p5-red flex-shrink-0" />
                      <div>
                        <div className="font-heading tracking-wider text-p5-red">{label}</div>
                        <div className="text-p5-white/70 text-sm group-hover:text-p5-white/90 transition-colors">
                          {desc}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Decorative element — metaverse only */}
              {isMetaverse && (
                <motion.div
                  className="hidden lg:block relative h-64"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-p5-red/20 transform rotate-45" />
                  <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-p5-red/10 transform -rotate-12" />
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-p5-red/15 transform rotate-12" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
