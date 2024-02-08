import { Card, Title, Languages, SocialMedia, EmailButton } from '@/app/components/Designs'
import { RowContainer } from '@/app/components/'
import Logo from '@/public/logo.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: 'Bienvenido a mi página web'
    , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
    , type: 'website'
  },
}

export default function Home() {

  const item = {
    image: Logo
    , alt: 'proyectos de carlos amaro'
    , body: "En esta ocasión el cliente necesitaba una página web para su negocio, se le creo un sitio web con un diseño que se ajusto a su conveniencia, se le dio de alta en google my business, a su vez configuramos el correo electrónico con el dominio de su sitio web"
    , title: 'Vapor Ingenieria y Calderas'
    , className: 'card'
    , link: {
      url: 'https://www.vaporingenieriaycalderas.mx/'
      , name: 'Revisa el proyecto'
      , target: '_blank'
    }
  }

  return (
    <>
      <EmailButton />
      <SocialMedia />
      <Title className="subtitle">proyectos</Title>
      <RowContainer>
        <Card item={item} />
      </RowContainer>
      <Title className="subtitle">idiomas</Title>
      <Languages />

    </>
  )
}
