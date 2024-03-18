import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/custom/Navbar'

export const metadata: Metadata = {
  title: 'Previous Papers | Home',
  description:
    'Access question papers of different universities of Rajasthan easily. Boost your studies. Visit now!',
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
      </body>
    </html>
  )
}
