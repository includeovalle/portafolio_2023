import './styles/globals.scss'
import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
// import { Header, Hero, Footer } from '@/app/components/Designs';
import { Header } from '@/app/components/Designs'
import { Ptag, MainContainer } from '@/app/components';
import BgColorProvider from '@/app/utils/context.js';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Vapor Ingeniería y Calderas Bienvenidos',
//   description: 'Equipo Industrial, Calderas de presión, calderas industriales cdmx, Calderas de vapor, servicios industriales',
// }
// const HeroImage = () => Hero.home();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BgColorProvider>
          <Header />
          <MainContainer>
            {children}
          </MainContainer>
        </BgColorProvider>
        <Ptag className={'brand'}> Soultech studio... 🚀</Ptag>

        {//<Analytics />
        }
      </body>
    </html>
  )
}
