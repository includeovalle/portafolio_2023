"use client"
import { useEffect } from 'react';
import {useSearchParams, useRouter } from "next/navigation";

const LIST = ["primary", "secondary", "tertiary"];

export default function Index() {

  const searchParams = useSearchParams();
  const theme = searchParams.get("theme")|| "primary"
  const router = useRouter();
  // get default Locales


  useEffect(()=>{

  if ( !LIST.includes(theme) ) {
    // no theme is passed so return a random theme
    const randomTheme = LIST[Math.floor(Math.random() * LIST.length)];

    router.push(`?theme=${randomTheme}`);
  } else {
    router.push(`?theme=${theme}`);
  }
  },[theme, router]);

  return null;
};
