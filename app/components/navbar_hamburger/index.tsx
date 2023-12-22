'use client'

import React from 'react';
import { Ul, Hamburger } from '@/app/components'
import { UlInterface } from "@/app/types/";


const Index = ({ lis, otherLis, exact, links }: UlInterface) => {
  return (
    <>
      <Ul nav exact={exact} className="nav" lis={lis} links={links} />

      <Hamburger >
        <Ul nav exact={exact} className={'mobileNav'} otherLis={otherLis} links={links} />
      </Hamburger>
    </>
  );
};

export default Index;
