// 'use client';
// import { LabelModal } from '@/app/components/Designs';
// import { Form, ColLabel } from '@/app/components/';
// import React, { useRef } from "react";
//
// interface Props {
//     id: number,
//     task: string
// }
//
// const Index = ({ task, id }: Props) => {
//     const formRef = useRef<HTMLFormElement>(null);
//
//     async function updateTaskHandler(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         
//         if (formRef.current) {
//             const formValue = formRef.current.elements.namedItem("task") as HTMLInputElement;
//             const inputValue = formValue.value.trim();
//
//             if (inputValue === '') {
//                 alert('Please enter a new task');
//                 return;
//             }
//
//             const data = { id, task: inputValue };
//             const stringifiedData = JSON.stringify(data);
//
//             const FetchData = await fetch(`task/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: stringifiedData
//             })
//             
//             const response = await FetchData.json();
//             if (response.status === 200) {
//                 window.location.reload();
//             }
//         }
//     }
//
//     return (
//         <>
//             <LabelModal className={'table'} display={task} >
//                 <Form ref={formRef} buttonText={'actualizar'} onSubmit={updateTaskHandler}>
//                     <ColLabel autoFocus className={'dialog'} name={'task'} type={'text'} placeholder={'enter new task'} value={task}>
//                         Updating task #{id}
//                     </ColLabel>
//                 </Form>
//             </LabelModal>
//         </>
//     );
// };
//
// export default Index;
