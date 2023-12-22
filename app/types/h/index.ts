import { childrenInterface, classNamesInterface } from  '@/app/types';

export default interface Props extends childrenInterface, classNamesInterface {
    type?: 1 | 2 | 3 | 4;
}
