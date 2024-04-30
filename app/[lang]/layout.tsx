import '../styles/globals.scss'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { type Locale } from "../../i18n-config";


const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }, {lang: 'es'}]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
                {children}
        <Analytics />
      </body>
    </html>
  )
}
