'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import P5SideMenu from './P5SideMenu'
import MetaverseBg from './p5/MetaverseBg'
import TopBadge from './p5/TopBadge'
import { ENTER_METAVERSE_MS } from './SlashTransition'

export default function MetaverseLayout({ children }: { children: React.ReactNode }) {
  const { isMetaverse } = useTheme()
  const [showSideMenu, setShowSideMenu] = useState(false)

  useEffect(() => {
    if (!isMetaverse) {
      setShowSideMenu(false)
      return
    }
    const timer = setTimeout(() => setShowSideMenu(true), ENTER_METAVERSE_MS)
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
