'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Capital One',
    period: 'Summer 2026',
    description: 'Incoming SWE Intern for Summer 2026.',
    skills: ['TBD'],
    upcoming: true,
  },
  {
    title: 'Tech Fellow',
    company: 'CodePath',
    period: 'Aug 2025 - Present',
    description: 'Supporting students in learning software engineering concepts and guiding them through technical projects.',
    skills: ['Teaching', 'Mentorship', 'Technical Leadership'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Coursistant',
    period: 'May 2025 - Aug 2025',
    description: 'Building and improving web applications to enhance the learning experience for students.',
    skills: ['HTML', 'CSS', 'React', 'REST APIs'],
  },
  {
    title: 'Web Administrator',
    company: 'Soccer Shop USA',
    period: 'March 2025 - May 2025',
    description: 'Managed e-commerce platform and automated inventory management processes.',
    skills: ['Python', 'WooCommerce', 'WordPress', 'REST APIs'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Advanced RF Technologies',
    period: 'May 2022 - Aug 2022',
    description: 'Developed backend solutions and participated in agile development practices.',
    skills: ['Python', 'Backend Development', 'Agile'],
  },
]

export default function Experience() {
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
            EXPERIENCE
          </motion.h2>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-p5-red transform md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-p5-red rounded-full transform -translate-x-2 md:-translate-x-1/2 mt-6 z-10">
                    <div className="absolute inset-0 bg-p5-red rounded-full animate-pulse-red" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      className={`p5-card ${exp.upcoming ? 'border-p5-yellow border-l-4' : ''}`}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {exp.upcoming && (
                        <div className="inline-block bg-p5-yellow text-p5-black px-3 py-1 font-heading text-sm mb-4 transform skew-x-[-5deg]">
                          UPCOMING
                        </div>
                      )}
                      <div className="text-p5-red font-heading text-sm tracking-wider mb-2">
                        {exp.period}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-xl text-p5-red mb-4">{exp.company}</div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-p5-black border border-p5-red text-sm text-p5-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
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
              <motion.div
                className="p5-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-p5-red font-heading text-sm tracking-wider mb-2">
                  Aug 2024 - Present
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-p5-white mb-1">
                  Vice President
                </h3>
                <div className="text-xl text-p5-red mb-4">USC KSEA</div>
                <p className="text-gray-300 mb-4">
                  Managing finances and leading event planning for the USC Chapter of the Korean-American Scientists and Engineers Association.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Financial Management', 'Leadership', 'Event Planning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-p5-black border border-p5-red text-sm text-p5-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
