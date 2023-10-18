import type { Metadata } from 'next'
import { Fraunces, Montserrat } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
