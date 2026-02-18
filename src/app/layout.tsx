import './globals.css'
import P5Navigation from '@/components/P5Navigation'
import SlashTransition from '@/components/SlashTransition'
import PageTransition from '@/components/PageTransition'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Jacob Cho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-p5-black text-p5-white min-h-screen transition-colors duration-500">
        <ThemeProvider>
          <P5Navigation />
          <SlashTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
