import { Card, ProjectsTag, LanguagesTag, Languages, SocialMedia, EmailButton } from '@/app/components/Designs';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: 'Bienvenido a mi página web'
    , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
    , type: 'website'
  },
}

export default function Home() {


  return (
    <>
      <EmailButton />
      <SocialMedia />
      <ProjectsTag />
      <Card />
      <LanguagesTag />
      <Languages />

    </>
  )
}
