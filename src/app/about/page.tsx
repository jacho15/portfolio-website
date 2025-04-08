import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen">
      {/*navi bar*/}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 shadow-lg">
        <div className="flex flex-col items-center space-y-12 text-2xl">
          <Link href="/" className="nav-link group" title="Home">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaHome />
            </span>
          </Link>
          <Link href="/about" className="nav-link group" title="About">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors text-primary">
              <FaUser />
            </span>
          </Link>
          <Link href="/projects" className="nav-link group" title="Projects">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaLaptopCode />
            </span>
          </Link>
          <Link href="/contact" className="nav-link group" title="Contact">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaEnvelope />
            </span>
          </Link>
        </div>
      </nav>

      <main className="pl-20 md:pl-24">
        <section className="min-h-screen py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/*about me*/}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
                <div className="prose dark:prose-invert">
                  <p className="text-lg">
                    I am currently pursuing my Computer Engineering and Computer Science degree at the University of Southern California, where I combine my passion for hardware and software development. My academic journey has equipped me with a strong foundation in both electrical engineering principles and software development practices.
                  </p>
                  <p className="text-lg mt-4">
                    I'm particularly interested in software engineering and have worked on various projects that demonstrate my ability to create efficient, scalable solutions. From developing payment processing systems to creating AI-powered applications, I enjoy tackling complex problems and turning innovative ideas into reality.
                  </p>
                  <p className="text-lg mt-4">
                    When I'm not coding, I'm probably snowboarding, watching basketball, or playing video games. I love watching sports and looking at sports analytics in particular!
                  </p>
                </div>
              </div>

              {/*experience*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/*work experience*/}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Work Experience</h2>
                  <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">Software Engineer</h3>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Mar 2025 - Present</div>
                      </div>
                      <div className="text-lg font-medium text-primary mb-4">Soccer Shop USA</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">WooCommerce</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">WordPress</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">REST APIs</span>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">Backend Developer</h3>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">May 2022 - Aug 2022</div>
                      </div>
                      <div className="text-lg font-medium text-primary mb-4">Advanced RF Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Backend Development</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Agile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/*leadership*/}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Leadership</h2>
                  <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">Financial Department Lead</h3>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Aug 2024 - Present</div>
                      </div>
                      <div className="text-lg font-medium text-primary mb-4">USC KSEA</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Financial Management</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Leadership</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">Event Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*skills*/}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Frameworks & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Next.js', 'Git', 'Docker', 'Google Cloud Platform', 'REST APIs', 'AWS'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/*relevant coursework*/}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Relevant Coursework</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures and Object Oriented Design',
                    'Principles of Software Development',
                    'Introduction to Algorithms and Theory of Computing',
                    'Discrete Math',
                    'Linear Algebra',
                    'Probability Theory'
                  ].map((course) => (
                    <span key={course} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 