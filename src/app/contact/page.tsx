'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import P5SectionHeader from '@/components/P5SectionHeader'
import P5CallingCard from '@/components/P5CallingCard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container">
          <P5SectionHeader>CONTACT</P5SectionHeader>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
            {/* Calling Card Form */}
            <P5CallingCard className="max-w-lg">
              <div className="pt-4">
                <h3 className="font-heading text-3xl text-p5-black mb-2 tracking-wider">
                  REACH OUT
                </h3>
                <p className="text-gray-600 mb-8">
                  Send me a card and I&apos;ll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-p5-red font-heading tracking-wider mb-2">
                      CODENAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 text-p5-black
                                 focus:border-p5-red focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-p5-red font-heading tracking-wider mb-2">
                      COORDINATES
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 text-p5-black
                                 focus:border-p5-red focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-p5-red font-heading tracking-wider mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 text-p5-black
                                 focus:border-p5-red focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-p5-red text-p5-white font-heading text-xl tracking-wider
                               py-4 transform skew-x-[-5deg] hover:bg-p5-red-dark transition-colors
                               disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, skewX: 0 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="transform skew-x-[5deg] flex items-center gap-3">
                      {status === 'loading' ? (
                        'SENDING...'
                      ) : (
                        <>
                          SEND CALLING CARD
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
                      MESSAGE SENT SUCCESSFULLY!
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
            </P5CallingCard>

            {/* Alternative Contact Methods */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-heading text-2xl text-p5-white mb-6 tracking-wider">
                  OR REACH OUT DIRECTLY
                </h3>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:jacho@usc.edu"
                    className="flex items-center gap-4 p-4 bg-p5-gray border-l-4 border-p5-red
                               hover:translate-x-2 transition-transform group"
                    whileHover={{ x: 10 }}
                  >
                    <FaEnvelope className="text-2xl text-p5-red" />
                    <div>
                      <div className="font-heading tracking-wider text-p5-red">EMAIL</div>
                      <div className="text-p5-white group-hover:text-p5-red transition-colors">
                        jacho@usc.edu
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/jacob-a-cho/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-p5-gray border-l-4 border-p5-red
                               hover:translate-x-2 transition-transform group"
                    whileHover={{ x: 10 }}
                  >
                    <FaLinkedin className="text-2xl text-p5-red" />
                    <div>
                      <div className="font-heading tracking-wider text-p5-red">LINKEDIN</div>
                      <div className="text-p5-white group-hover:text-p5-red transition-colors">
                        Connect with me
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/jacho15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-p5-gray border-l-4 border-p5-red
                               hover:translate-x-2 transition-transform group"
                    whileHover={{ x: 10 }}
                  >
                    <FaGithub className="text-2xl text-p5-red" />
                    <div>
                      <div className="font-heading tracking-wider text-p5-red">GITHUB</div>
                      <div className="text-p5-white group-hover:text-p5-red transition-colors">
                        Check out my code
                      </div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Decorative element */}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
