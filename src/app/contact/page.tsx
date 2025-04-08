import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 shadow-lg">
        <div className="flex flex-col items-center space-y-12 text-2xl">
          <Link href="/" className="nav-link group" title="Home">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaHome />
            </span>
          </Link>
          <Link href="/about" className="nav-link group" title="About">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaUser />
            </span>
          </Link>
          <Link href="/projects" className="nav-link group" title="Projects">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaLaptopCode />
            </span>
          </Link>
          <Link href="/contact" className="nav-link group" title="Contact">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors text-primary">
              <FaEnvelope />
            </span>
          </Link>
        </div>
      </nav>

      <main className="pl-20 md:pl-24">
        <section className="min-h-screen flex items-center bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              
              <div className="space-y-8">
                <a
                  href="mailto:jacho@usc.edu"
                  className="btn btn-primary inline-flex items-center gap-2 text-lg"
                >
                  <FaEnvelope />
                  jacho@usc.edu
                </a>

                <div className="flex justify-center gap-8 text-3xl">
                  <a
                    href="https://github.com/jacho15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jacob-cho-b1a66b289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 