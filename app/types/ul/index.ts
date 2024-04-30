import { classNamesInterface, childrenInterface, ListInterface } from '@/app/types/'

export default interface Props extends classNamesInterface, ListInterface, childrenInterface {
    onClick?: () => void;
    links?: boolean;
    exact?: boolean
    nav?: boolean
}
