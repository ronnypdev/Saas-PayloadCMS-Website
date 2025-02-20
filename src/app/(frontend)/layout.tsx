import React from 'react'
import { Noto_Sans } from 'next/font/google'
import './global.css'

import Header from '@/Header/Component'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`h-dvh ${notoSans.variable}`}>
        <Header />
        <main className="w-7xl max-w-full mx-auto">{children}</main>
      </body>
    </html>
  )
}
