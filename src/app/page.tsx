import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaHome, FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/*navi bar*/}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 shadow-lg">
        <div className="flex flex-col items-center space-y-12 text-2xl">
          <Link href="/" className="nav-link group" title="Home">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors text-primary">
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
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaEnvelope />
            </span>
          </Link>
        </div>
      </nav>

      <main className="pl-20 md:pl-24">
        {/*front page*/}
        <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-dark dark:to-gray-900">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-primary">Jacob Cho</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  I'm a sophomore USC Computer Engineering student with a passion for Software and Hardware Engineering.
                </p>
                <div className="flex gap-6 text-2xl">
                  <a href="https://github.com/jacho15" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/jacob-cho-b1a66b289/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <img
                    src="/portfolio-website/profile.jpg"
                    alt="Jacob Cho"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 