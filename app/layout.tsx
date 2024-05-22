import './styles/reset.css'
import './globals.css'
import './styles/typography.css'
import './styles/colors.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Causa Dev',
  description: 'Site institucional do Causa Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
