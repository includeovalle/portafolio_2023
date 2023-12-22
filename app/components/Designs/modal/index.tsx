// 'use client'
// import React, { useRef, ReactElement, isValidElement, cloneElement } from 'react';
// import { Dialog, Button, Label } from "../../index";
// import { childrenInterface, classNamesInterface } from "../../../types/index";
//
// interface Props extends classNamesInterface, childrenInterface {
//     display: React.ReactNode;
//     autoFocus?: boolean;
// }
//
// const Index = ({ className, display, children, autoFocus }: Props) => {
//     const modalRef = useRef<HTMLDialogElement>(null);
//
//     const modalHandlerOpen = () => {
//         modalRef.current?.showModal();
//     };
//
//     const modalHandlerClose = () => {
//         modalRef.current?.close();
//     };
//
//     const newClassName = className ? className.charAt(0).toUpperCase() + className?.slice(1) : null;
//     const modalClassName = newClassName ? `modal${newClassName}` : 'modal';
//
//     return (
//         <>
//             <Button autoFocus={autoFocus} className={modalClassName} onClick={modalHandlerOpen}>
//                 {display}
//             </Button>
//
//             <Dialog className={modalClassName} ref={modalRef} onClick={modalHandlerClose}>
//                 {isValidElement(children) ? cloneElement(children as ReactElement, {
//                     onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
//                         children.props.onSubmit(e);
//                         modalHandlerClose();
//                     }
//                 }) : children}
//             </Dialog>
//
//         </>
//     );
// };
//
// export const LabelModal = ({ className, display, children }: Props) => {
//
//     const modalRef = useRef<HTMLDialogElement>(null);
//
//     const modalHandlerOpen = () => {
//         modalRef.current?.showModal();
//     };
//
//     const modalHandlerClose = () => {
//         modalRef.current?.close();
//     };
//
//     const newClassName = className ? className.charAt(0).toUpperCase() + className?.slice(1) : null;
//     const modalClassName = newClassName ? `modal${newClassName}` : 'modal';
//
//     return (
//         <>
//             <Label className={modalClassName} onClick={modalHandlerOpen}>
//                 {display}
//             </Label>
//
//             <Dialog className={modalClassName} ref={modalRef} onClick={modalHandlerClose}>
//                 {isValidElement(children) ? cloneElement(children as ReactElement, {
//                     onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
//                         children.props.onSubmit(e);
//                         modalHandlerClose();
//                     }
//                 }) : children}
//             </Dialog>
//
//         </>
//
//     );
// }
// export default Index;
