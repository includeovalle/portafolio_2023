// 'use client'
// import StatusHandler from './statusDataUpdate';
// import UserDataUpdate from './userDataUpdate';
// import React, { useState } from 'react';
// import { classNamesInterface, TableInterface } from '../../types/index'
// import { dataSort, DeleteHandler } from './utils';
// import { CloseButton, RowLabel } from '../index';
//
// interface Props extends classNamesInterface, TableInterface {
// }
//
// const Index = ({ className, dataTable }: Props) => {
//     const [data, setData] = useState(dataSort(dataTable));
//
//     const [reversed, setReversed] = useState(false);
//
//     const idSorter = (data: any) => {
//         const tempData = dataSort([...data]);
//         setReversed(!reversed);
//         if (!reversed) return setData(tempData.reverse());
//         if (reversed) return setData(tempData);
//     }
//
//
//     return (
//         <>
//             <table className={className}>
//                 <thead>
//                     <tr>
//                         <th onClick={() => idSorter(dataTable)}>ID</th>
//                         <th>Tarea</th>
//                         <th>Completed</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data?.map((datas: any) => {
//                             const { id, task, completed } = datas;
//
//                             return (
//                                 < tr key={id} >
//                                     <td>{id}</td>
//
//                                     <td >
//                                         <UserDataUpdate id={id} task={task} />
//                                     </td>
//                                     <td >
//                                         <StatusHandler id={id} completed={completed} />
//                                     </td>
//                                     <td onClick={e => DeleteHandler(e)} >
//                                         <CloseButton className={'pointerTask'} />
//
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                         )
//                     }
//                 </tbody>
//             </table >
//         </>
//
//     );
// };
//
// export default Index;
