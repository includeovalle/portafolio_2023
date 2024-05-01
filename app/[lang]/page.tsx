import { Header, Card, SubtitleTag, Languages, SocialMedia, EmailButton, Footer, AboutMe } from '@/app/components/Designs';;
import { MainContainer, InnerContainer } from '@/app/components';
import { Metadata } from 'next'
import { getDictionary} from "./dictionaries"
import { type Locale } from "../../i18n-config";
export const metadata: Metadata = {
  title: 'Bienvenido a mi página web'
  , description: 'Soy Carlos Amaro, desarrollador web, me especializo en el desarrollo de aplicaciones web y sitios web. Me gusta trabajar con tecnologías como React, Nextjs, Nodejs, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, SASS, entre otras.'
}

interface Props {
  params: { lang: Locale }
  searchParams: URLSearchParams
}

export default async function Home({ searchParams, params }: Props) {

  const language = params.lang;

  const lang = await getDictionary(language)

  const bgColor = (searchParams as unknown as { theme: "blue"| "orange"| "purple" }).theme || "blue";

  const PROJECTSTITLE = lang["titles"].projects;
  const ABOUTMETITLE = lang["titles"].aboutme;
  const LANGTITLE = lang["titles"].languages;

  return (
    <>
      <Header theme={bgColor} lang={lang} />
      <MainContainer theme={bgColor}>
        <InnerContainer>
          <EmailButton lang={lang} />
          <SocialMedia />
          <SubtitleTag theme={bgColor} text={PROJECTSTITLE} />
          <Card theme={bgColor} lang={lang} />
          <SubtitleTag theme={bgColor} text={ABOUTMETITLE} />
          <AboutMe theme={bgColor} lang={lang} />
          <SubtitleTag theme={bgColor} text={LANGTITLE}/>
          <Languages theme={bgColor} lang={lang} />
        </InnerContainer >
      </MainContainer>
      <Footer theme={bgColor} />
    </>
  )
}
