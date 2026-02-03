import './globals.css'
import P5Navigation from '@/components/P5Navigation'
import SlashTransition from '@/components/SlashTransition'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Jacob Cho | Software Engineer',
  description: 'Portfolio of Jacob Cho - Software Engineer, USC Student, and Tech Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-p5-black text-p5-white min-h-screen">
        <P5Navigation />
        <SlashTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
