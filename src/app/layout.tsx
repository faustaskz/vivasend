import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'VivaSend – Naujienlaiškių Marketingo Platforma',
  description:
    'Profesionali el. laiškų marketingo platforma. Automatizuokite komunikaciją, auginkite pardavimus. Sender padalinys Lietuvoje.',
  keywords: 'naujienlaiškiai, email marketing, automatizacija, vivasend, sender',
  openGraph: {
    title: 'VivaSend – Naujienlaiškių Marketingo Platforma',
    description: 'Automatizuota naujienlaiškių platforma jūsų verslui.',
    locale: 'lt_LT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
