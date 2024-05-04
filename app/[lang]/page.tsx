import { Header, Card, SubtitleTag, Languages, SocialMedia, EmailButton, Footer, AboutMe } from '@/app/components/Designs';;
import { MainContainer, InnerContainer } from '@/app/components';
import { Metadata } from 'next'
import { getDictionary } from "./dictionaries"
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

  const bgColor = (searchParams as unknown as { theme: "blue" | "orange" | "purple" }).theme || "blue";

  const MAINTITLE = lang["titles"].title;
  const PROJECTSTITLE = lang["titles"].projects;
  const ABOUTMETITLE = lang["titles"].aboutme;
  const LANGTITLE = lang["titles"].languages;
  const DISPLAY = lang["networks"].copyEmail;
  const ALERT = lang["networks"].alert;
  const LANGUAGES = lang["footer"].languages;
  const PORTRAIT = lang["header"].portrait;
  const SKILLS = lang["header"].skills;
  const CARD = lang["projects"].vic
  const ABOUTME = lang["aboutme"];

  return (
    <>
      <Header theme={bgColor} title={MAINTITLE}
        display={DISPLAY} alert={ALERT}
        portrait={PORTRAIT}
        skills={SKILLS}
      />
      <MainContainer theme={bgColor}>
        <InnerContainer>
          <EmailButton display={DISPLAY} alert={ALERT} />
          <SocialMedia />
          <SubtitleTag theme={bgColor} text={PROJECTSTITLE} />
          <Card theme={bgColor} card={CARD} />
          <SubtitleTag theme={bgColor} text={ABOUTMETITLE} />
          <AboutMe theme={bgColor} text={ABOUTME} />
          <SubtitleTag theme={bgColor} text={LANGTITLE} />
          <Languages theme={bgColor} languages={LANGUAGES} />
        </InnerContainer >
      </MainContainer>
      <Footer theme={bgColor} />
    </>
  )
}
