import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#0284c7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Safemail AI – Email Security, Simplified',
    template: '%s | Safemail AI'
  },
  description: 'Forward any suspicious email and get instant analysis. No installation. No configuration.',
  keywords: ['email security', 'phishing protection', 'email analysis', 'cybersecurity', 'email threat detection'],
  authors: [{ name: 'Sibylline Group' }],
  creator: 'Sibylline Group',
  publisher: 'Sibylline Group',
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://safemail.ai',
    title: 'Safemail AI – Email Security, Simplified',
    description: 'Forward any suspicious email and get instant analysis. No installation. No configuration.',
    siteName: 'Safemail AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Safemail AI - Email Security, Simplified',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safemail AI – Email Security, Simplified',
    description: 'Forward any suspicious email and get instant analysis. No installation. No configuration.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/safemail_ai_logo.png',
    shortcut: '/safemail_ai_logo.png',
    apple: '/safemail_ai_logo.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}