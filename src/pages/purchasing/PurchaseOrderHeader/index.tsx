import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import PoHeaderModalCreate from "./PoHeaderModalCreate";
import SwitchStatusModalEdit from "./SwitchStatusModal";
import { DelPurchaseOrderHeaderRequest, GetPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchasing/purchaseOrderHeaderAction";

export default function PurchaseOrderHeaderSaga() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<any>(null);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { PurchaseOrderHeaders } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const [id, setId] = useState<any>();
  const [search, setSearch] = useState("");
  const [payload, setPayload] = useState({
    vendorName: "",
    page: 1,
    status: "",
  });

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    dispatch(GetPurchaseOrderHeaderRequest(payload));
    setRefresh(false);
  }, [refresh, payload]);

  const onDelete = async (id: any) => {
    dispatch(DelPurchaseOrderHeaderRequest(id));
    window.alert("Data Successfully Delete");
    setDisplay(false);
    setRefresh(!refresh);
  };

  const onClick = (id: any, statusId: any) => {
    setDisplayEdit(true);
    setId(id);
    setStatus(statusId);
  };

  const onChangeState = (key: string, value: any) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const handlePageClick = (e: any) => {
    onChangeState("page", e.selected + 1);
  };

  const poStatus = (status: number) => {
    switch (status) {
      case 1:
        return "Pending";
      case 2:
        return "Approve";
      case 3:
        return "Rejected";
      case 4:
        return "Received";
      case 5:
        return "Completed";
    }
  };

  const formatDate = (date: any, weekday: any, year: any) => {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: weekday,
      year: year,
      month: "short",
      day: "numeric",
    };
    return newDate.toLocaleString("id", options);
  };

  const convertPrice = (price: string) => {
    return parseFloat(price.replace(/[$,RP]/gi, ""));
  };

  const totalAmount = (price: any) => price.reduce((e: any, i: any) => e + convertPrice(i.podePrice), 0);

  useEffect(() => {
    onChangeState("page", 1);
  }, [payload.vendorName]);
  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div>
            {display && <PoHeaderModalCreate setDisplay={setDisplay} refresh={refresh} setRefresh={setRefresh} status={status} />}
            {displayEdit && <SwitchStatusModalEdit setDisplay={setDisplayEdit} status={status} refresh={refresh} id={id} setRefresh={setRefresh} />}

            <div className="mt-20">
              <form className="flex items-center justify-center gap-2">
                <h2>Search</h2>
                <label className="sr-only">Search</label>
                <div className="relative w-1/3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input
                    onChange={(e) => onChangeState("vendorName", e.target.value)}
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vendor Target"
                    // required
                  />
                </div>
              </form>
            </div>

            <div className="pl-8">
              <select onChange={(e) => onChangeState("status", e.target.value)} className="select w-full max-w-xs">
                <option disabled selected>
                  Status
                </option>
                <option value={1}>Pending</option>
                <option value={2}>Approve</option>
                <option value={3}>Rejected</option>
                <option value={4}>Received</option>
                <option value={5}>Completed</option>
              </select>
            </div>

            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <table className="p-0 text-center	min-w-full mb-5">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              PO Number
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Po Date
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Vendor Target
                            </th>
                            {/* <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Line Items
                            </th> */}
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total Amount
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Status
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {PurchaseOrderHeaders.data &&
                            PurchaseOrderHeaders.data.map((poHeader: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{poHeader.poheNumber}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{formatDate(poHeader.poheOrderDate, undefined, "numeric")}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poHeader.poheVendor ? poHeader.poheVendor.vendorName : undefined}</td>
                                    {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">1</td> */}
                                    {/* <p>{poHeader.purchaseOrderDetails[0].}</p> */}
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">Rp {totalAmount(poHeader.purchaseOrderDetails) + totalAmount(poHeader.purchaseOrderDetails) * 0.1}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poStatus(poHeader.poheStatus)}</td>
                                    <td>
                                      {/* dropDown  */}
                                      <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
                                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                            </svg>
                                          </Menu.Button>
                                        </div>

                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <Link href={`/purchasing/PurchaseOrderHeader/${poHeader.poheId}`} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Details
                                                  </Link>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onClick(poHeader.poheId, poHeader.poheStatus)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Switch Status
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onDelete(poHeader.poheId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Delete
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                          </Menu.Items>
                                        </Transition>
                                      </Menu>
                                      {/* dropDown */}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={PurchaseOrderHeaders.totalPages}
                        previousLabel="< prev"
                        forcePage={payload.page - 1}
                        containerClassName="flex gap-1 justify-center"
                        renderOnZeroPageCount={null}
                        nextLinkClassName="btn btn-sm bg-blue-500 border-none"
                        previousLinkClassName="btn btn-sm bg-blue-500 border-none"
                        activeLinkClassName="bg-red-500"
                        pageLinkClassName="btn btn-sm bg-blue-500 border-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
