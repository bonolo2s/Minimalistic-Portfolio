import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'ImpossibleCommits | Full-Stack Software Developer',
  description:
    'Driven by detail and a passion for innovation, I craft top-notch web applications. Explore my work, skills, and experience in full-stack development, DevOps, and cloud infrastructure.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ImpossibleCommits-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ImpossibleCommits-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ImpossibleCommits-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
