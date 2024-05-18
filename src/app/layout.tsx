import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/custom/Navbar'
import Footer from '@/components/custom/Footer'

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
