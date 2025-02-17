import React from 'react'
import './styles.css'

import Header from '@/Header/Component'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="w-dvh">
        <Header />
        <main className="w-[1440px] max-w-full">{children}</main>
      </body>
    </html>
  )
}
