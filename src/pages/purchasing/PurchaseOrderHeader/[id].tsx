import React, { useState, useEffect, Fragment } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
// import { DelStockDetailRequest, FindStockDetailRequest, GetStockDetailByStockIdRequest, GetStockDetailRequest } from "@/redux-saga/action/stockDetailAction";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import api from "@/api/StockDetailApi";
import { DelPurchaseOrderHeaderRequest, GetPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchaseOrderHeaderAction";
import EditPoDetail from "./EditPoDetailModal";
import AddPoDetail from "./AddPoDetailModal";
import { DelPurchaseOrderDetailRequest } from "@/redux-saga/action/purchaseOrderDetailAction";
import { Menu, Transition } from "@headlessui/react";
// import { GetStockRequest } from "@/redux-saga/action/stocksAction";

export default function DetailPurchasing() {
  const dispatch = useDispatch();
  const router = useRouter();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const { id } = router.query;

  const [podeId, setpodeId] = useState<any>();
  const [stockUsed, setStockUsed] = useState<any>("");
  const [status, setStatus] = useState<any>(null);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);

  const { PurchaseOrderHeaders } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const PurchaseOrderHeader = PurchaseOrderHeaders.find((item: any) => item.poheId == id);
  const { purchaseOrderDetails } = PurchaseOrderHeader;

  useEffect(() => {
    dispatch(GetPurchaseOrderHeaderRequest());
  }, [refresh]);

  const onDelete = async (id: any, stodId: any) => {
    dispatch(DelPurchaseOrderDetailRequest(id, stodId));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setpodeId(id);
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
        return "Used";
      case 5:
        return "Completed";
    }
  };
  const convertPrice = (price: string) => {
    return parseFloat(price.replace(/[$,RP]/gi, ""));
  };

  const subTotal = (price: any) => {
    return price.reduce((sum: any, el: any) => sum + el.Salary, 0);
  };
  // function calculate() {
  //   return props.selectCart.reduce((prev: any, cur: any) => prev + convertPrice(cur.vendorProducts[0].veproPrice), 0);
  // }

  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          {displayEdit && <EditPoDetail refresh={refresh} purchaseOrderDetails={purchaseOrderDetails} podeId={podeId} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />}
          {display && <AddPoDetail refresh={refresh} setRefresh={setRefresh} id={id} setDisplay={setDisplay} />}
          <div>
            <div className="mt-20">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <div className="grid grid-cols-3 gap-4 place-items-start mb-0">
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">PO Number : {PurchaseOrderHeader.poheNumber}</span>
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Vendor : {PurchaseOrderHeader.poheVendor.vendorName}</span>
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Sub Total : {PurchaseOrderHeader.poheSubtotal}</span>
                      </div>
                      <div className="mb-0 grid grid-cols-3 gap-4 place-items-start">
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">PO Date : {PurchaseOrderHeader.poheOrderDate}</span>
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Status : {poStatus(PurchaseOrderHeader.poheStatus)}</span>
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Total Amount: {PurchaseOrderHeader.poheTotalAmount}</span>
                      </div>
                      <table className="p-0 text-center	min-w-full mb-5">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Stock Name
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Qty
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Price
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Receive Qty
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Reject Qty
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total
                            </th>
                            {/* <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Action
                            </th> */}
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {purchaseOrderDetails &&
                            purchaseOrderDetails.map((PoDetail: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podeStock.stockName}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podeOrderQty}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podePrice}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podeReceivedQty}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podeRejectedQty}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{PoDetail.podePrice}</td>
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
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onClick(PoDetail.podeId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Edit
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onDelete(PoDetail.podePoheId, PoDetail.podeId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
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
