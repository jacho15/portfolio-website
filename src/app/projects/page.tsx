import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa'

export default function Projects() {
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
      </nav>

      <main className="pl-20 md:pl-24">
        <section className="min-h-screen flex items-center bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/*paypal payroll*/}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">💰</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">PayPal Payroll</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A Python-based payroll management system integrated with PayPal's API for efficient payment processing and management.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      PayPal API
                    </span>
                  </div>
                  <div className="mt-4">
                    <a href="https://github.com/jacho15/paypal-payroll" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>

              {/*automated recipe app*/}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">🍳</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">FlavorFetch - Automated Recipe App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    An AI-powered recipe application that uses voice commands to provide ingredients and cooking steps, with integrated store locator functionality.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      AI Voice Agent
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      Google Maps API
                    </span>
                  </div>
                  <div className="mt-4">
                    <a href="https://github.com/yunhan842/Automated-Recipe-App" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>

              {/*auto-discount system*/}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">⚽</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Auto-Discount System</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automated system that tracks soccer match results and applies discounts to winning teams' jerseys in WooCommerce store.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      WooCommerce
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      API Integration
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      SQLite
                    </span>
                  </div>
                  <div className="mt-4">
                    <a href="https://github.com/jacho15/autodiscount-system" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>

              {/*portfolio website*/}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A modern, responsive portfolio website built with Next.js and React, featuring dark mode support and smooth animations.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      TailwindCSS
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="mt-4">
                    <a href="https://github.com/jacho15/portfolio-website" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 