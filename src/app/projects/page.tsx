import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Projects() {
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
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
              <FaUser />
            </span>
          </Link>
          <Link href="/projects" className="nav-link group" title="Projects">
            <span className="block text-gray-600 hover:text-primary dark:text-gray-400 transition-colors text-primary">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Featured Projects
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/*adhd distraction tracker*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">ADHD Distraction Tracker</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A system that monitors environmental factors (light, sound, distance) using scikit-learn for distraction detection, with pandas for data processing and joblib for model persistence. Sends desktop notifications when potential distractions are detected.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    scikit-learn
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    pandas
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    joblib
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Raspberry Pi
                  </span>
                </div>
                <a href="https://github.com/jacho15/adhd-distraction-tracker" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>

              {/*clubber*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Clubber</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A full-stack web application for managing and discovering university clubs, built with React frontend and Spring Boot backend.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Java
                  </span>
                </div>
                <a href="https://github.com/CSCI201-Group7" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>

              {/*paypal payroll*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">PayPal Payroll</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A Python-based payroll management system integrated with PayPal's API for efficient payment processing and management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    PayPal API
                  </span>
                </div>
                <a href="https://github.com/jacho15/paypal-payroll" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>

              {/*automated recipe app*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">FlavorFetch - Automated Recipe App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An AI-powered recipe application that uses voice commands to provide ingredients and cooking steps, with integrated store locator functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    AI Voice Agent
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    DAIN API
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Google Maps API
                  </span>
                </div>
                <a href="https://github.com/yunhan842/Automated-Recipe-App" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>

              {/*auto-discount system*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Auto-Discount System</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated system that tracks soccer match results and applies discounts to winning teams' jerseys in WooCommerce store.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    WooCommerce
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    REST APIs
                  </span>
                </div>
                <a href="https://github.com/jacho15/autodiscount-system" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>

              {/*portfolio website*/}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern, responsive portfolio website built with Next.js and React, featuring dark mode support and smooth animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <a href="https://github.com/jacho15/portfolio-website" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 