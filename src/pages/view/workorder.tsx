/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/component/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetWodoRequest,
  DelWodoRequest,
} from "../redux-saga/action/wodoAction";
import { Dropdown, Pagination } from "flowbite-react";
import WodoCreate from "../form/wodoCreate";
import WodoUpdate from "../form/wodoUpdate";
import Workdetail from "./workdetail";

export default function Workorder() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [id, setId] = useState();

  const { workorder } = useSelector((state: any) => state.wodoState);

  useEffect(() => {
    dispatch(GetWodoRequest());
  }, [refresh]);

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDetail = (id: any) => {
    setDisplayDetail(true);
    setId(id);
  };

  const onDelete = (id: any) => {
    dispatch(DelWodoRequest(id));
    window.alert("Data Successfully Delete");
    setDisplay(false);
    setRefresh(true);
    setId(id);
  };

  return (
    <div>
      <Layout>
        <>
          {displayDetail ? (
            <Workdetail
              setRefresh={setRefresh}
              setDisplay={setDisplayDetail}
              id={id}
            />
          ) : displayEdit ? (
            <WodoUpdate
              setRefresh={setRefresh}
              setDisplay={setDisplayEdit}
              id={id}
            />
          ) : display ? (
            <WodoCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <div className="p-4 sm:ml-64">
                <div className="p-4  border-gray-200 border-dashed rounded-lg ">
                  <br />
                  <br />
                  <div className="p-4">
                    <label htmlFor="table-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="table-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                      />
                    </div>
                  </div>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          User
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <button onClick={() => setDisplay(true)}>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                              ADD
                            </span>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workorder.map((item: any) => {
                        return (
                          <>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="px-6 py-4">{item.work_woro_id}</td>
                              <td className="px-6 py-4">
                                {item.work_woro_start_date}
                              </td>
                              <td className="px-6 py-4">
                                {item.work_woro_status}
                              </td>
                              <td className="px-6 py-4">
                                {item.users_user_full_name}
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Dropdown label="..." inline={true}>
                                  <Dropdown.Item
                                    onClick={() => onClick(item.work_woro_id)}
                                  >
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={() => onDetail(item.work_woro_id)}
                                  >
                                    Work Order Detail
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={() => onDelete(item.work_woro_id)}
                                  >
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  <>
                    <br />
                    <div className="flex items-center justify-center text-center">
                      <Pagination
                        currentPage={1}
                        layout="table"
                        onPageChange={Workorder}
                        totalPages={1000}
                      />
                    </div>
                  </>
                </div>
              </div>
            </>
          )}
        </>
      </Layout>

      {/* <Layout>
 
        <div className="p-4 sm:ml-64">
          <div className="p-4  border-gray-200 border-dashed rounded-lg ">
            <br />
            <br />
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    <button>ADD</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {department &&
                  department.map((item: any) => {
                    return (
                      <>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">{item.deptId}</td>
                          <td className="px-6 py-4">{item.deptName}</td>
                          <td className="px-6 py-4">{item.deptModifiedDate}</td>
                          <td className="px-6 py-4 text-right">
                            <Dropdown label="..." inline={true}>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
            <>
              <br />
              <div className="flex items-center justify-center text-center">
                <Pagination
                  currentPage={1}
                  layout="table"
                  onPageChange={department}
                  totalPages={1000}
                />
              </div>
            </>
          </div>
        </div>
      </Layout> */}
    </div>
  );
}

// import Layout from "@/component/layout";
// import React from "react";

// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// export default function department() {
//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "firstName",
//       headerName: "First name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "lastName",
//       headerName: "Last name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       width: 110,
//       editable: true,
//     },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//       valueGetter: (params: GridValueGetterParams) =>
//         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//     },
//   ];

//   const rows = [
//     { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//     { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   ];

//   return (
//     <div>
//       <Layout>
//         <div className="p-4 sm:ml-64">
//           <div className="p-4  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//             <Box sx={{ height: 400, width: "100%" }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: {
//                       pageSize: 5,
//                     },
//                   },
//                 }}
//                 pageSizeOptions={[5]}
//                 disableRowSelectionOnClick
//               />
//             </Box>
//           </div>
//         </div>
//       </Layout>
//     </div>
//   );
// }
