import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import BankUpdateForm from "./BankUpdateForm";
import BankCreateForm from "./BankCreateForm";
import {
  GetBankRequest,
  SearchBankRequest,
  DelBankRequest,
} from "./../../../redux-saga/action/BankAction";
import { useFormik } from "formik";
import { paginate } from "@/utils/paginate";
import Pagination from "@/components/Pagination";

export default function BankViewSaga() {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const [refresh, setRefresh] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: async (values) => {
      let keyword = values.keyword;
      if (keyword == "") {
        dispatch(GetBankRequest());
      } else {
        dispatch(SearchBankRequest(keyword));
      }
      setRefresh(true);
    },
  });

  useEffect(() => {
    dispatch(GetBankRequest());
  }, [dispatch, refresh]);

  const onUpdate = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DelBankRequest(id));
    window.alert("Data Successfully Deleted.");
    if (refresh == true) {
      setRefresh(false);
    } else if (refresh == false) {
      setRefresh(true);
    }
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const bankPaginate = paginate(banks, currentPage, pageSize);

  return (
    <Layout>
      <>
        <div>
          <div className="card mt-4 mb-4">
            {displayEdit ? (
              <BankUpdateForm
                setRefresh={setRefresh}
                setDisplay={setDisplayEdit}
                id={id}
              />
            ) : display ? (
              <BankCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
            ) : (
              <>
                <div className="flex mx-8 my-4 mr-px-8 items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
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
                      name="keyword"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Bank..."
                      value={formik.values.keyword}
                      onChange={formik.handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => formik.handleSubmit()}
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 -ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    Search
                  </button>
                </div>

                <div className="relative shadow-md sm:rounded-lg m-8">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="col" className="px-6 py-3">
                          Bank Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Bank Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                          <button onClick={() => setDisplay(true)}>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                            Add{" "}
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bankPaginate.map((item: any) => {
                        return (
                          <>
                            <tr
                              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                              key={item.bankEntityId}
                            >
                              <td className="px-6">{item.bankCode}</td>
                              <td className="px-6">{item.bankName}</td>
                              <td className="px-6 text-end">
                                <button
                                  type="submit"
                                  onClick={() => onUpdate(item.bankEntityId)}
                                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Edit
                                </button>
                                <button
                                  type="submit"
                                  onClick={() => onDelete(item.bankEntityId)}
                                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="w-full mt-8 items-center">
                    <Pagination
                      items={banks.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
}
