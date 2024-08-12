import React from "react";
import { CustomImage, Htag } from '@/app/components/';
import Link from 'next/link';
import error from '@/public/error.png'

const Index = () => {
    //animated hiding airplane with upsy eyes


  return (
    < >
    <CustomImage  links href={'/'} className={'error'} src={error} alt={'error page'}/>
    
    <Link href={'/'}>Volver al inicio
    <Htag type={3}>
    No es por ahi
    </Htag>
    </Link>
    </>
  );
};

export default Index;

