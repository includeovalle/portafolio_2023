import { StaticImageData } from 'next/image';
import { childrenInterface, classNamesInterface} from  '@/app/types';

export default interface Props extends childrenInterface, classNamesInterface {
    src: string | StaticImageData
    figcaption?: boolean;
    alt: string
}
