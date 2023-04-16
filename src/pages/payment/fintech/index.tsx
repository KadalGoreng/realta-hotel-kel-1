import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import FintechUpdateForm from "./FintechUpdateForm";
import FintechCreateForm from "./FintechCreateForm";
import {
  GetFintechRequest,
  DelFintechRequest,
} from "./../../../redux-saga/action/FintechAction";

export default function FintechViewSaga() {
  const dispatch = useDispatch();
  const { fintechs } = useSelector((state: any) => state.fintechState);
  const [refresh, setRefresh] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetFintechRequest());
  }, [dispatch, refresh]);

  const onUpdate = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DelFintechRequest(id));
    window.alert("Data Successfully Deleted.");
    if (refresh == true) {
      setRefresh(false);
    } else if (refresh == false) {
      setRefresh(true);
    }
  };
  return (
    <div>
      <Layout>
        <>
          <div className="container">
            <div className="card mt-4 mb-4">
              {displayEdit ? (
                <FintechUpdateForm
                  setRefresh={setRefresh}
                  setDisplay={setDisplayEdit}
                  id={id}
                />
              ) : display ? (
                <FintechCreateForm
                  setRefresh={setRefresh}
                  setDisplay={setDisplay}
                />
              ) : (
                <>
                  <nav className="flex mt-4 mx-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                          </svg>
                          Home
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <a
                            href="#"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            Fintech
                          </a>
                        </div>
                      </li>
                    </ol>
                  </nav>

                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-8">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                          <th scope="col" className="px-6 py-3">
                            Code
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Fintech
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
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
                        {fintechs &&
                          fintechs.map((item: any) => {
                            return (
                              <>
                                <tr
                                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                  key={item.pagaEntityId}
                                >
                                  <th scope="row" className="px-6 py-4">
                                    {item.pagaCode}
                                  </th>
                                  <td className="px-6 py-4">{item.pagaName}</td>
                                  <td className="px-6 py-4 text-center">
                                    <button
                                      type="submit"
                                      onClick={() =>
                                        onUpdate(item.pagaEntityId)
                                      }
                                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                      Edit
                                    </button>
                                    <button
                                      type="submit"
                                      onClick={() =>
                                        onDelete(item.pagaEntityId)
                                      }
                                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
                  </div>
                  {/* Main modal */}
                  <div
                    id="authentication-modal"
                    aria-hidden="true"
                    className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div className="relative w-full max-w-md max-h-full">
                      {/* Modal content */}
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                          data-modal-hide="authentication-modal"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Sign in to our platform
                          </h3>
                          <form className="space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your password
                              </label>
                              <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                  />
                                </div>
                                <label
                                  htmlFor="remember"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Remember me
                                </label>
                              </div>
                              <a
                                href="#"
                                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                              >
                                Lost Password?
                              </a>
                            </div>
                            <button
                              type="submit"
                              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Login to your account
                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                              Not registered?{" "}
                              <a
                                href="#"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                              >
                                Create account
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
}
