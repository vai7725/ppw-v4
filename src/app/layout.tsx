import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/custom/Navbar'
import Footer from '@/components/custom/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import AdSense from '@/components/custom/AdSense'

export const metadata: Metadata = {
  title: 'Previous Papers | Home',
  description:
    'Access previous year question papers of different universities of Rajasthan easily. Boost your studies and prepare for your exam. Visit now!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId={process.env.NEXT_PUBLIC_ADSENSE_PID!} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={`G-${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  )
}
