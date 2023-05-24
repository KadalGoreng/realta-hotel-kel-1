import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import {
  GetTransactionRequest,
  FindTransactionRequest,
  SearchTransactionRequest,
} from "@/redux/action/payment/TransactionAction";
import { paginate } from "@/utils/paginate";
import Pagination from "@/components/Pagination";
import PaymentTransaction from "@/pages/api/PaymentTransaction";

import { Dialog, Transition, Menu } from "@headlessui/react";
import { PlusIcon, EllipsisVerticalIcon } from "@heroicons/react/20/solid";

export default function Transaction() {
  const dispatch = useDispatch();
  const { transaction } = useSelector((state: any) => state.transactionState);
  const [refresh, setRefresh] = useState<any>(false);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { UserProfile } = useSelector((state: any) => state.userState);
  const [transaksi, setTransaksi] = useState(0);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(FindTransactionRequest(UserProfile.userId));
  }, [dispatch, refresh]);
 
  function search(transaksi: any) {
    if(filter === 'debet'){
      return transaksi.filter(
        (item: any) => item.patrDebet !== null
      );
    } else if(filter === 'credit'){
      return transaksi.filter(
        (item: any) => item.patrCredit !== null
      );
    } else {
      return transaksi.filter(
        (item: any) =>
          item.patrTrxId.toString().toLowerCase().includes(query)        
      );
    }
  }

  const trxPaginate = paginate(search(transaction), currentPage, pageSize);
      
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
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 light:text-gray-400 light:hover:text-white"
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
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 light:text-gray-400 light:hover:text-white"
                      >
                        User Transaction
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="flex mx-8 my-8 mx-r-8">
                <Menu as="div">
                  <Menu.Button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex pr-x-2 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 light:border-gray-700 light:text-white rounded-l-lg hover:bg-gray-200 focus:outline-none light:bg-gray-600 light:hover:bg-gray-700 "
                    style={{ width: 145 }}
                    type="button"
                  >
                    Payment Type{" "}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Menu.Button>
                  <Menu.Items
                    className="absolute z-10 text-sm text-gray-700 light:text-gray-200 rounded-md bg-gray-100 light:text-white rounded-l-lg hover:bg-gray-200 light:bg-gray-600 light:hover:bg-gray-700 shadow-lg ring-1 ring-opacity-5 focus:outline-none"
                    style={{ width: 145 }}
                    aria-labelledby="dropdown-button"
                  >
                    <Menu.Item>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                        onClick={() => {
                          setFilter('debet');
                          setCurrentPage(1);
                        }}
                      >
                        Debet
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        onClick={() => {
                          setFilter('credit');
                          setCurrentPage(1);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                      >
                        Credit
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        onClick={() => {
                          setFilter('');
                          dispatch(FindTransactionRequest(UserProfile.userId));
                          setCurrentPage(1);
                        }}
                        className="block text-center bg-white hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                      >
                        <span
                          className="text-center"
                          style={{
                            color: "blue",
                            fontSize: "10pt",
                            alignItems: "center",
                          }}
                        >
                          Reset
                        </span>
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="keyword"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:border-blue-500"
                    name="keyword"
                    placeholder="Transaction Number"
                    onChange={(e: any) => {
                      setFilter('');
                      setQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>

              <div className="relative shadow-md sm:rounded-lg mx-8 my-2 mx-r-8">
                <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                    <tr className="border-b bg-gray-50 light:bg-gray-800 light:border-gray-700">
                      <th scope="col" className="px-1 py-2">
                        Transaction Number
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Trx Date
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Debet
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Credit
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Note
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Order Number
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Source
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Target
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Transaction Ref
                      </th>
                      <th scope="col" className="px-1 py-2">
                        Type
                      </th>
                      <th scope="col" className="px-1 py-2">
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trxPaginate.map((item: any) => {
                      return (
                        <>
                          <tr
                            className="bg-white border-b light:bg-gray-900 light:border-gray-700"
                            key={item.patrId}
                          >
                            <th scope="row" className="px-1 py-2">
                              {item.patrTrxId}
                            </th>
                            <td scope="row" className="px-1 py-2">
                              {item.patrModifiedDate.slice(0, 10)}
                            </td>
                            <td className="px-1 py-2">
                              {item.patrDebet != null ? 
                              Intl.NumberFormat("id-ID", {style: "currency", currency: "idr"}).format(item.patrDebet) : " "}
                            </td>
                            <td className="px-1 py-2">
                              {item.patrCredit != null ? 
                              Intl.NumberFormat("id-ID", {style: "currency", currency: "idr"}).format(item.patrCredit) : " "}
                            </td>
                            <td className="px-1 py-2">{item.patrNote}</td>
                            <td className="px-1 py-2">
                              {item.patrOrderNumber}
                            </td>
                            <td className="px-1 py-2">{item.patrSourceId}</td>
                            <td className="px-1 py-2">{item.patrTargetId}</td>
                            <td className="px-1 py-2">
                              {item.patrTrxNumberRef}
                            </td>
                            <td className="px-1 py-2">{item.patrType}</td>
                            <td className="px-1 py-2">
                              {item.patrUser["userFullName"]}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 mb-8 items-center">
            <Pagination
              items={search(transaction).length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      </Layout>
    </div>
  );
}
