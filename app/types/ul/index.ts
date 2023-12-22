import { classNamesInterface, childrenInterface, ListInterface,  LinkInterface} from '@/app/types/'

export default interface Props extends classNamesInterface, ListInterface, LinkInterface, childrenInterface {
    onClick?: () => void;
    links?: boolean;
    exact?: boolean
    nav?: boolean
}
