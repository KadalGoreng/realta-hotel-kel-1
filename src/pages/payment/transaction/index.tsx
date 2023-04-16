import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import {
  GetTransactionRequest,
  DelTransactionRequest,
} from "./../../../redux-saga/action/TransactionAction";

export default function TransactionViewSaga() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state: any) => state.transactionState);
  const [refresh, setRefresh] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetTransactionRequest());
  }, [dispatch, refresh]);

  return (
    <div>
      <Layout>
        <>
          <div className="container">
            <div className="card mt-4 mb-4">
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
                        User Transaction
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
                        Transaction Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Trx Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Debet
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Credit
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Note
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Order Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Source
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Target
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Transaction Ref
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions &&
                      transactions.map((item: any) => {
                        return (
                          <>
                            <tr
                              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                              key={item.patrId}
                            >
                              <th scope="row" className="px-6 py-4">
                                {item.patrTrxId}
                              </th>
                              <th scope="row" className="px-6 py-4">
                                {item.patrModifiedDate}
                              </th>
                              <td className="px-6 py-4">{item.patrDebet}</td>
                              <td className="px-6 py-4">{item.patrCredit}</td>
                              <td className="px-6 py-4">{item.patrNote}</td>
                              <td className="px-6 py-4">
                                {item.patrOrderNumber}
                              </td>
                              <td className="px-6 py-4">{item.patrSourceId}</td>
                              <td className="px-6 py-4">{item.patrTargetId}</td>
                              <td className="px-6 py-4">
                                {item.patrTrxNumberRef}
                              </td>
                              <td className="px-6 py-4">{item.patrtype}</td>
                              <td className="px-6 py-4">{item.patrUser}</td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
}
