'use client'

import { motion } from 'framer-motion'

// Persona 5 "ransom note" lettering — each glyph gets its own tilted,
// bordered box in a deterministic (SSR-safe) pseudo-random style cycle.

const SCHEMES = [
  { background: '#FAFAFA', color: '#0D0D0D', borderColor: '#0D0D0D' },
  { background: '#D80027', color: '#FAFAFA', borderColor: '#FAFAFA' },
  { background: '#141414', color: '#FAFAFA', borderColor: '#D80027' },
  { background: '#FAFAFA', color: '#D80027', borderColor: '#0D0D0D' },
  { background: '#141414', color: '#D80027', borderColor: '#FAFAFA' },
]

const ROTATIONS = [-8, 5, -3, 9, -6, 2, 7, -4, 3, -9, 6]
const OFFSETS = [0, 4, -5, 2, -3, 5, -2, 3, -4, 2, -1]

interface RansomTextProps {
  text: string
  className?: string
  delay?: number
}

export default function RansomText({ text, className = '', delay = 0 }: RansomTextProps) {
  let glyph = -1

  return (
    <span
      className={`inline-flex flex-wrap items-baseline gap-x-[0.32em] gap-y-[0.18em] ${className}`}
      aria-label={text}
    >
      {text.split(' ').map((word, w) => (
        <span key={w} className="inline-flex items-baseline whitespace-nowrap" aria-hidden="true">
          {word.split('').map((char, i) => {
            glyph++
            const scheme = SCHEMES[(glyph * 3 + 1) % SCHEMES.length]
            const rotate = ROTATIONS[glyph % ROTATIONS.length]
            const y = OFFSETS[glyph % OFFSETS.length]
            const lowercase = glyph % 4 === 2
            const bebas = glyph % 6 === 4

            return (
              <motion.span
                key={i}
                className="inline-block leading-none select-none"
                initial={{ opacity: 0, scale: 2.4, rotate: rotate * 3, y: y - 26 }}
                whileInView={{ opacity: 1, scale: 1, rotate, y }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.32,
                  delay: delay + glyph * 0.035,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  background: scheme.background,
                  color: scheme.color,
                  border: `0.045em solid ${scheme.borderColor}`,
                  boxShadow: '0.07em 0.09em 0 rgba(0, 0, 0, 0.55)',
                  padding: '0.06em 0.11em',
                  marginRight: '-0.02em',
                  fontFamily: bebas ? "'Bebas Neue', sans-serif" : "'Anton', sans-serif",
                  fontStyle: 'italic',
                }}
              >
                {lowercase ? char.toLowerCase() : char.toUpperCase()}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
