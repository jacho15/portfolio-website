'use client'

import { useTheme } from '@/context/ThemeContext'
import P5SideMenu from './P5SideMenu'

export default function MetaverseLayout({ children }: { children: React.ReactNode }) {
  const { isMetaverse } = useTheme()

  return (
    <>
      {isMetaverse && <P5SideMenu />}
      <div className={isMetaverse ? 'md:ml-[340px]' : ''}>
        {children}
      </div>
    </>
  )
}
