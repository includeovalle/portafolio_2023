import { Header, Card, ProjectsTag, LanguagesTag, Languages, SocialMedia, EmailButton, Footer } from '@/app/components/Designs';;
import { redirect } from 'next/navigation';
import { MainContainer, InnerContainer } from '@/app/components';
import { Metadata } from 'next'
import { getDictionary } from "./dictionaries.js"

export const metadata: Metadata = {
  title: 'Bienvenido a mi página web'
  , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
}

interface Props {
  params: { lang: string }
  searchParams: URLSearchParams
}

export default async function Home({ searchParams, params }: Props) {

  const validLangs = ["es", "en", "pt"];
  const language = params.lang || "es";

  if (!validLangs.includes(language)) {
    return redirect("/es")
  }

  const lang = await getDictionary(language)

  const bgColor = (searchParams as unknown as { theme: string }).theme || "blue";

  return (
    <>
      <Header theme={bgColor} lang={lang} />
      <MainContainer theme={bgColor}>
        <InnerContainer>
          <EmailButton lang={lang} />
          <SocialMedia />
          <ProjectsTag theme={bgColor} lang={lang} />
          <Card theme={bgColor} lang={lang} />
          <LanguagesTag theme={bgColor} lang={lang} />
          <Languages theme={bgColor} lang={lang} />
        </InnerContainer >
      </MainContainer>
      <Footer theme={bgColor} />
    </>
  )
}
