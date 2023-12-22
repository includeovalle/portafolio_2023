import React from "react";
import Link from "next/link";
import { CustomImage, Htag, Ul, Ptag } from '@/app/components/';
import Background from "@/public/bandera.png";
import { BannerInterface } from "@/app/types/";

interface BannerProps {
  data: BannerInterface;
}
const Banner = ({data}:BannerProps) => {
  const { title, subTitle, bullets, href, buttonText } = data
  return (
    <CustomImage figcaption className={'services-banner'} src={Background} alt="">
        <Htag type={3}>{title}</Htag>
        <span>
          <Ptag>{subTitle}</Ptag>
          <Ul className={'servicios'} lis={bullets} />
          <Link href={href}>{buttonText}</Link>
        </span>
    </CustomImage>
  );
};

export default Banner;

