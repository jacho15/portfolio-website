import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/*top bar*/}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-8 text-2xl">
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
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/jacho15" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jacob-cho-b1a66b289/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <main className="pt-16">
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:jacho@usc.edu"
                    className="btn btn-primary inline-flex items-center gap-2 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                    jacho@usc.edu
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jacob-cho-b1a66b289/"
                    className="btn btn-primary inline-flex items-center gap-2 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                    Message on LinkedIn
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