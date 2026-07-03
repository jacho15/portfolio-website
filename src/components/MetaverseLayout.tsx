'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import P5SideMenu from './P5SideMenu'
import MetaverseBg from './p5/MetaverseBg'
import TopBadge from './p5/TopBadge'

// SlashTransition's "entering the metaverse" splash runs for 1600ms —
// keep the side menu hidden until it finishes, then hold a beat longer
// before letting it slide in.
const ENTER_SPLASH_MS = 1600
const SIDE_MENU_EXTRA_DELAY_MS = 1800

export default function MetaverseLayout({ children }: { children: React.ReactNode }) {
  const { isMetaverse } = useTheme()
  const [showSideMenu, setShowSideMenu] = useState(false)

  useEffect(() => {
    if (!isMetaverse) {
      setShowSideMenu(false)
      return
    }
    const timer = setTimeout(() => setShowSideMenu(true), ENTER_SPLASH_MS + SIDE_MENU_EXTRA_DELAY_MS)
    return () => clearTimeout(timer)
  }, [isMetaverse])

  return (
    <>
      {isMetaverse && <MetaverseBg />}
      {showSideMenu && <P5SideMenu />}
      {isMetaverse && <TopBadge />}
      <div className={`transition-[margin] duration-500 ease-out ${showSideMenu ? 'md:ml-[340px]' : ''}`}>
        {children}
      </div>
    </>
  )
}
