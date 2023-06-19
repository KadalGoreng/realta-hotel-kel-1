import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import ModalCreate from "./StockModalCreate";
import ModalEdit from "./StockModalEdit";
import AddPhotos from "./AddPhoto";
import { DelStockRequest, GetStockRequest } from "@/redux-saga/action/purchasing/stocksAction";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function StocksSaga() {
  const dispatch = useDispatch();

  const [upload, setUpload] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [displayPhoto, setDisplayPhoto] = useState<any>(false);
  const { stocks } = useSelector((state: any) => state.stocksState);
  const [id, setId] = useState<any>();
  const [search, setSearch] = useState("");
  const [payload, setPayload] = useState({
    stockName: "",
    page: 1,
  });

  useEffect(() => {
    dispatch(GetStockRequest(payload));
    // setRefresh(false);
  }, [refresh, payload]);

  const onDelete = async (id: any) => {
    dispatch(DelStockRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onUpload = (id: any) => {
    setUpload(true);
    setId(id);
  };

  const onChangeState = (key: string, value: any) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const handlePageClick = (e: any) => {
    onChangeState("page", e.selected + 1);
  };

  useEffect(() => {
    onChangeState("page", 1);
  }, [payload.stockName]);

  console.log(stocks);

  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div>
            {display && <ModalCreate refresh={refresh} setRefresh={setRefresh} setDisplay={setDisplay} />}
            {displayEdit && <ModalEdit setDisplay={setDisplayEdit} refresh={refresh} id={id} setRefresh={setRefresh} />}
            {upload && <AddPhotos setDisplay={setDisplayPhoto} setUpload={setUpload} setRefresh={setRefresh} id={id} />}
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
                    onChange={(e) => onChangeState("stockName", e.target.value)}
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Stock"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <table className="p-0 text-center	min-w-full mb-5">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Stock
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Re-OrderPoint
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Qty
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Used
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Scrap
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Size Color
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {stocks.data &&
                            stocks.data.map((stock: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockName}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockReorderPoint}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockQuantity}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockUsed}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockScrap}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">
                                      {stock.stockSize}-{stock.stockColor}
                                    </td>
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
                                                  <li onClick={() => onClick(stock.stockId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Edit
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  // <li onClick={() => setUpload(true)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                  //   Upload Photo
                                                  // </li>
                                                  // <Link href={`/purchasing/UploadPhoto/${stock.stockId}`} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                  //   Upload Photo
                                                  // </Link>
                                                  // <li>
                                                  //   <AddPhoto id={stock.stockId} setRefresh={setRefresh} />
                                                  //   Upload Photo
                                                  // </li>
                                                  <li onClick={() => onUpload(stock.stockId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Upload Photo
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onDelete(stock.stockId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Delete
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <Link href={`/purchasing/Stocks/${stock.stockId}`} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Detail Info Stock
                                                  </Link>
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
                        pageCount={stocks.totalPages}
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
