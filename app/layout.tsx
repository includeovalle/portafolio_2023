import './styles/globals.scss'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/app/components/Designs'
import { MainContainer, InnerContainer } from '@/app/components';
import BgColorProvider from '@/app/utils/context.js';
import LanguageContext from '@/app/utils/language';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bienvenido a mi página web'
  , description: 'Soy Carlos Raul Amaro Ovalle, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageContext>
      <body className={inter.className}>
        <BgColorProvider>
          <Header />
          <MainContainer>
            <InnerContainer>
              {children}
            </InnerContainer>
            <Footer />
          </MainContainer>
        </BgColorProvider>
        <Analytics />
      </body>
    </LanguageContext>
  )
}
