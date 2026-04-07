'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export default function Home() {
  const { isMetaverse, toggleTheme } = useTheme()

  return (
    <main className="min-h-screen pt-20">
      <section className={`min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden`}>

        {/* Metaverse-only background decorations */}
        {isMetaverse && (
          <>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--color-p5-white)) 10px, rgb(var(--color-p5-white)) 11px)' }}
            />
            <div className="p5-bg-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] whitespace-nowrap">
              TAKE YOUR HEART
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none decorative-stripe">
              <motion.div className="absolute top-1/4 -left-20 w-[120%] h-[200px] bg-p5-red/10 transform rotate-[10deg]" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
              <motion.div className="absolute top-20 right-0 w-[500px] h-[500px] bg-p5-red/10 transform rotate-[30deg]" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.div className="absolute bottom-20 left-0 w-80 h-80 bg-p5-red/5 transform -rotate-12" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.div className="absolute bottom-1/3 -right-10 w-[110%] h-[120px] bg-p5-red/5 transform rotate-[-6deg]" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4, delay: 0.9 }} />
            </div>
          </>
        )}

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

            {/* Text Content */}
            <div className="flex-1 space-y-8">

              {/* Name heading */}
              <motion.div
                initial={isMetaverse ? { opacity: 0, x: -100 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {isMetaverse ? (
                  <>
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-outline">
                      I AM
                    </h1>
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-none text-p5-red text-shadow-heavy">
                      JACOB CHO
                    </h1>
                    <div className="p5-slash-divider w-48 mt-4" />
                  </>
                ) : (
                  <>
                    <h1 className="font-heading text-7xl md:text-8xl lg:text-[7rem] leading-[0.92] tracking-tight text-p5-white">
                      Jacob<br />Cho
                    </h1>
                    <div className="mt-5 w-14 h-[3px] rounded-full bg-p5-red" />
                  </>
                )}
              </motion.div>

              {/* Reality toggle */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <button
                  onClick={toggleTheme}
                  className={isMetaverse ? 'p5-btn whitespace-nowrap' : 'p5-btn-outline whitespace-nowrap'}
                >
                  {isMetaverse ? 'RETURN TO REALITY' : 'ENTER THE METAVERSE'}
                </button>
                <p className={`mt-3 text-sm tracking-wide ${isMetaverse ? 'text-p5-white/40' : 'text-p5-white/50'}`}>
                  {isMetaverse ? 'Switch back to standard theme' : 'Switch to Persona 5 theme'}
                </p>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end"
              initial={isMetaverse ? { opacity: 0, scale: 0, rotate: -180 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={isMetaverse
                ? { duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100, damping: 15 }
                : { duration: 0.7, delay: 0.2, ease: 'easeOut' }
              }
            >
              {isMetaverse ? (
                <div className="relative p5-frame">
                  <div className="absolute -inset-4 bg-p5-red transform rotate-6" />
                  <div className="absolute -inset-4 bg-p5-black transform -rotate-6" />
                  <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden clip-slash">
                    <Image src="/profile.jpg" alt="Jacob Cho" fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-p5-red/50 to-transparent" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-p5-red transform rotate-45" />
                </div>
              ) : (
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06]">
                    <Image src="/profile.jpg" alt="Jacob Cho" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-p5-red shadow-lg" />
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}
