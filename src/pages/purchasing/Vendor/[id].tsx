import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelVendorProductRequest, GetVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import ModalAddItemProduct from "./AddItemProductModal";
import { GetVendorRequest } from "@/redux-saga/action/vendorAction";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import EditItemProductModal from "./EditItemProductModal";

export default function ProdCategorySaga() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  const [stockName, setStockName] = useState<any>(null);
  const [vendorId, setVendorId] = useState<any>();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { vendors } = useSelector((state: any) => state.vendorState);
  const vendor = vendors.find((item: any) => item.vendorId == id);
  const { vendorProducts } = vendor;

  console.log(vendor);
  console.log(vendors);

  //   const [id, setId] = useState<any>();
  const [search, setSearch] = useState("");

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    dispatch(GetVendorRequest());
    // dispatch(GetVendorProductRequest());
    // setRefresh();
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelVendorProductRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any, stockName: any) => {
    setDisplayEdit(true);
    setVendorId(id);
    setStockName(stockName);
    // setId(id);
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  const currentItems = vendorProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(vendorProducts.length / 5);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % vendorProducts.length;
    setItemOffset(newOffset);
  };

  console.log(refresh);
  return (
    <div className="pt-20">
      <Layout>
        <div className="p-4 sm:ml-64">
          {displayEdit && <EditItemProductModal stockName={stockName} refresh={refresh} setDisplay={setDisplayEdit} id={vendorId} setRefresh={setRefresh} />}

          {display && <ModalAddItemProduct refresh={refresh} setRefresh={setRefresh} vendorId={id} setDisplay={setDisplay} />}
          <div className="mb-0">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden min-h-screen">
                    <div className="mb-12 p-0 text-center	min-w-full">
                      <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">{vendor.vendorName}</span>
                    </div>
                    <table className="p-0 text-center	min-w-full mb-5">
                      <thead className="bg-blue-400 border-b">
                        <tr>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Stock
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Qty Stocked
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Qty Remaining
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Price
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            <button onClick={() => setDisplay(true)}>+ Add</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendorProducts &&
                          currentItems.map((vepro: any) => {
                            return (
                              <>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproStock.stockName}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproQtyStocked}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproQtyRemaining}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproPrice}</td>
                                  <td>
                                    {/* dropDown  */}
                                    <Menu as="div" className="relative inline-block text-left">
                                      <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                                <li onClick={() => onClick(vepro.veproId, vepro.veproStock.stockName)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                  Edit
                                                </li>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <li onClick={() => onDelete(vepro.veproId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
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
                      pageRangeDisplayed={2}
                      pageCount={pageCount}
                      previousLabel="< previous"
                      containerClassName="flex gap-1 justify-center"
                      renderOnZeroPageCount={null}
                      activeLinkClassName="bg-red-500"
                      nextLinkClassName="btn btn-sm bg-blue-500 border-none"
                      pageLinkClassName="btn btn-sm bg-blue-500 border-none"
                      previousLinkClassName="btn btn-sm bg-blue-500 border-none"
                    />
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
