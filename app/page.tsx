import {Card, Title, Languages, SocialMedia, EmailButton } from '@/app/components/Designs'
import {RowContainer} from '@/app/components/'
import Logo from '@/public/logo.png'
import type { Metadata } from 'next'

export const metadata : Metadata = {
  openGraph: {
    title: 'Bienvenido a mi página web'
    , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
    , type: 'website'
  },
}

export default function Home() {

  const item={
    image: Logo
    ,alt: 'proyectos de carlos amaro'
    ,body: 'Este cliente no tenia presencia en internet, se elaboro una estrategia la cual consiste en varios pasos. Con el fin de que sus clientes pudieran ver sus productos e identificar los servicios. Se le rediseño el logo, se crearon redes sociales, se dio de alta con el correo electronico de su dominio web, finalmente se creo un sitio web con para satisfacer las necesidad primaria del proyecto.'
    , title: 'Vapor Ingenieria y Calderas'
    , className:'card'
    , link: {
      url: 'https://www.vaporingenieriaycalderas.mx/'
      , name: 'Revisa el proyecto'
      , target: '_blank'
    }
  }

  return (
    <>
      <EmailButton/>
      <SocialMedia/>
      <Title className="subtitle">proyectos</Title>
      <RowContainer>
        <Card item={item}/>
      </RowContainer>
      <Title className="subtitle">idiomas</Title>
      <Languages />
      
</>
  )
}
