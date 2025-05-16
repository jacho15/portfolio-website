import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/*top bar*/}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-8 text-2xl">
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
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/jacho15" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jacob-cho-b1a66b289/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-transform hover:scale-110">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {/*about me*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  About Me
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    I am currently pursuing my Computer Engineering and Computer Science degree at the University of Southern California, where I combine my passion for hardware and software development. My academic journey has equipped me with a strong foundation in both electrical engineering principles and software development practices.
                  </p>
                  <p className="text-lg mt-4 leading-relaxed">
                    I'm particularly interested in software engineering and have worked on various projects that demonstrate my ability to create efficient, scalable solutions. From developing payment processing systems to creating AI-powered applications, I enjoy tackling complex problems and turning innovative ideas into reality.
                  </p>
                  <p className="text-lg mt-4 leading-relaxed">
                    When I'm not coding, I'm probably snowboarding, watching basketball, or playing video games. I love watching sports and looking at sports analytics in particular!
                  </p>
                </div>
              </div>

              {/*experience*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Experience</h2>
                <div className="space-y-8">
                  {/*coursistant*/}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">May 2025 - Present</div>
                    </div>
                    <div className="text-lg font-medium text-primary mb-4">Coursistant</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HTML</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">REST APIs</span>
                    </div>
                  </div>
                  
                  {/*soccer shop*/}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">Web Administrator</h3>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Mar 2025 - May 2025</div>
                    </div>
                    <div className="text-lg font-medium text-primary mb-4">Soccer Shop USA</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WooCommerce</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WordPress</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">REST APIs</span>
                    </div>
                  </div>

                  {/*advanced rf technologies*/}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">May 2022 - Aug 2022</div>
                    </div>
                    <div className="text-lg font-medium text-primary mb-4">Advanced RF Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Backend Development</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agile</span>
                    </div>
                  </div>

                  {/*ksea leadership*/}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">Financial Department Lead</h3>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Aug 2024 - Present</div>
                    </div>
                    <div className="text-lg font-medium text-primary mb-4">USC KSEA</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Financial Management</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Leadership</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Event Planning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/*skills*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Node.js', 'Next.js', 'Git', 'Docker', 'Google Cloud Platform', 'REST APIs', 'AWS'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/*relevant coursework*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Relevant Coursework</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Data Structures and Object Oriented Design',
                    'Principles of Software Development',
                    'Introduction to Algorithms and Theory of Computing',
                    'Discrete Math',
                    'Linear Algebra',
                    'Probability Theory'
                  ].map((course) => (
                    <span key={course} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
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