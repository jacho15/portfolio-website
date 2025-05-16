import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaHome, FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/*top bar*/}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-8 text-2xl">
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
        {/*front page*/}
        <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-dark dark:to-gray-900">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-primary">Jacob Cho</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  I'm a sophmore at USC studying Computer Engineering and Computer Science with a focus on software development.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <img
                    src="/profile.jpg"
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