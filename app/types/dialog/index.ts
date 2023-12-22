import { childrenInterface, classNamesInterface } from '@/app/types'

export default interface Props extends childrenInterface, classNamesInterface {
    closeBtn?: React.ReactNode;
    onClick: () => void;
}
