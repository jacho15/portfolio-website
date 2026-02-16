'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'realworld' | 'metaverse'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isMetaverse: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'realworld',
  toggleTheme: () => {},
  isMetaverse: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('realworld')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'metaverse') {
      setTheme('metaverse')
      document.documentElement.setAttribute('data-theme', 'metaverse')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'realworld' ? 'metaverse' : 'realworld'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'metaverse') {
      document.documentElement.setAttribute('data-theme', 'metaverse')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isMetaverse: theme === 'metaverse' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
