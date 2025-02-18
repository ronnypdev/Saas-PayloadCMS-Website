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
      <body className="h-dvh">
        <Header />
        <main className="w-7xl max-w-full mx-auto">{children}</main>
      </body>
    </html>
  )
}
