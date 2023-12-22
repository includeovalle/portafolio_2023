// export const dataSort = (data: any) => {
//     return data?.sort((a: any, b: any) => a.id - b.id)
// };
//
// export const SHOW_MORE = 'Mostrar todas las columnas';
// export const SHOW_RECENT = 'Mostrar más recientes';
// export const SHOW_COLUMNS = 'Cuantas columnas quieres ver?';
// export const SORT = 'sort';
// export const DEFAULT_ROWS =10;
// export const DEFAULT_PAGE = 1;
// export { default as arrow } from 'public/arrow.png';
//
// export const userDataUpdate = (data: string, id: number, newData: string) => {
//     return console.log('user_update');
// }
//
// export async function DeleteHandler(e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) {
//         const target = e.target as HTMLElement;
//         const id = target.previousSibling?.previousSibling?.previousSibling?.textContent;
//         const FetchData = await fetch(`task/${id}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//         })
//         const response = await FetchData.json();
//         if (response.status === 200) {
//             window.location.reload();
//         }
//     };
//
//     export async function UpdateStatusHandler(e: React.ChangeEvent<HTMLInputElement>, id: number, completed: boolean) {
//         const data = { id, completed: !completed }
//         const stringifiedData = JSON.stringify(data);
//         console.log(stringifiedData);
//         const FetchData = await fetch(`task/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: stringifiedData
//         })
//
//         const response = await FetchData.json();
//         if (response.status === 200) {
//             window.location.reload();
//         }
//     };
