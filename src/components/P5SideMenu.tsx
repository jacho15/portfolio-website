'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'

const ITEMS = [
  { id: 'hero',       term: 'PERSONA', label: 'HOME',       skewX: -6,  skewY: 10,  size: 72, offsetY: 0 },
  { id: 'experience', term: 'ATTACK',  label: 'EXPERIENCE', skewX: -11, skewY: -10, size: 58, offsetY: 10 },
  { id: 'projects',   term: 'GUARD',   label: 'PROJECTS',   skewX: 0,   skewY: -4,  size: 62, offsetY: 8 },
  { id: 'contact',    term: 'ITEMS',   label: 'CONTACT',    skewX: -3,  skewY: 5,   size: 66, offsetY: 10 },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function P5SideMenu() {
  const activeSection = useActiveSection()
  const [active,  setActive]  = useState(0)
  const [mounted, setMounted] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  // Sync highlighted item with the active scroll section
  useEffect(() => {
    const idx = ITEMS.findIndex(item => item.id === activeSection)
    if (idx >= 0) setActive(idx)
  }, [activeSection])

  // Staggered entry
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120)
    return () => clearTimeout(t)
  }, [])

  const handleSelect = useCallback((i: number) => {
    setActive(i)
    setAnimKey(k => k + 1)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          setActive(prev => Math.max(0, prev - 1))
          setAnimKey(k => k + 1)
          break
        case 'ArrowDown':
          e.preventDefault()
          setActive(prev => Math.min(ITEMS.length - 1, prev + 1))
          setAnimKey(k => k + 1)
          break
        case 'ArrowRight':
        case 'Enter':
          e.preventDefault()
          scrollToSection(ITEMS[active].id)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <div
      className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 flex-col"
      style={{ width: 340, background: '#0D0D0D' }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Right accent stripes */}
      <div
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 5, background: 'rgb(216 0 39)', zIndex: 10 }}
      />
      <div
        className="absolute top-0 bottom-0"
        style={{ right: 7, width: 2, background: 'rgba(255,23,68,0.22)', zIndex: 10 }}
      />

      {/* Menu items */}
      <nav className="flex flex-col justify-center flex-1 py-6 relative">
        {ITEMS.map((item, i) => {
          const isActive    = i === active
          const dist        = Math.abs(i - active)
          const textOpacity = isActive ? 1 : dist === 1 ? 0.55 : 0.28

          return (
            <div
              key={item.id}
              className="relative overflow-hidden"
              style={{
                marginTop: i === 0 ? 0 : item.offsetY,
                paddingTop: 14,
                paddingBottom: 14,
                opacity:   mounted ? 1 : 0,
                transform: mounted ? 'translateX(0)' : 'translateX(36px)',
                transition: [
                  `opacity 0.38s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                  `transform 0.38s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                ].join(', '),
              }}
            >
              {/* Glow */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 25% center, rgba(216,0,39,0.32) 0%, transparent 70%)',
                    filter: 'blur(18px)',
                  }}
                />
              )}

              {/* Shadow triangle — bounce pop */}
              {isActive && (
                <div
                  key={`sh-${animKey}`}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:      'rgba(163,0,32,0.85)',
                    clipPath:        'polygon(0 0, 100% 50%, 0 100%)',
                    animation:       'p5ShadowPop 0.18s cubic-bezier(0.34,1.56,0.64,1) forwards',
                    transformOrigin: 'left center',
                  }}
                />
              )}

              {/* White highlight triangle */}
              {isActive && (
                <div
                  key={`hi-${animKey}`}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:      '#FAFAFA',
                    clipPath:        'polygon(0 0, 86% 50%, 0 100%)',
                    animation:       'p5ShadowPop 0.22s cubic-bezier(0.34,1.56,0.64,1) forwards',
                    transformOrigin: 'left center',
                  }}
                />
              )}

              {/* Button / hit area */}
              <button
                className="relative w-full flex items-center px-5"
                style={{
                  transform: `skewX(${item.skewX}deg) skewY(${item.skewY}deg)`,
                  minHeight: item.size * 1.1,
                }}
                onMouseEnter={() => handleSelect(i)}
                onClick={() => { handleSelect(i); scrollToSection(item.id) }}
              >
                <span
                  className="block font-heading italic leading-none select-none"
                  style={{
                    fontSize:      item.size,
                    letterSpacing: '2px',
                    lineHeight:    0.85,
                    color:         isActive ? '#6b0010' : `rgba(216,0,39,${textOpacity})`,
                    textShadow:    isActive ? 'none' : `0 0 14px rgba(216,0,39,${textOpacity * 0.5})`,
                    transition:    'color 0.12s ease',
                  }}
                >
                  {item.term}
                </span>

                {isActive && (
                  <span
                    className="absolute left-5 inset-y-0 flex items-center font-heading italic leading-none pointer-events-none select-none"
                    style={{
                      fontSize:      item.size,
                      letterSpacing: '2px',
                      lineHeight:    0.85,
                      color:         '#ff2a2a',
                    }}
                  >
                    {item.term}
                  </span>
                )}
              </button>
            </div>
          )
        })}
      </nav>

      {/* Keyboard hints */}
      <motion.div
        className="absolute bottom-[76px] right-4 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        style={{ zIndex: 11 }}
      >
        <div className="space-y-0.5">
          <div className="font-heading text-[10px] tracking-widest" style={{ color: 'rgba(250,250,250,0.3)' }}>
            ↑↓ NAVIGATE
          </div>
          <div className="font-heading text-[10px] tracking-widest" style={{ color: 'rgba(250,250,250,0.3)' }}>
            →/↵ SCROLL
          </div>
        </div>
      </motion.div>
    </div>
  )
}
