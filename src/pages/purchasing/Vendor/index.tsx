import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelVendorRequest, GetVendorRequest } from "@/redux-saga/action/vendorAction";
import ReactPaginate from "react-paginate";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import VendorModalCreate from "./VendorModalCreate";
import VendorModalEdit from "./VendorModalEdit";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

export default function VendorSaga() {
  const dispatch = useDispatch();

  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [displayFindOne, setDisplayFindOne] = useState(false);

  const [status, setStatus] = useState<any>(null);
  const [priority, setPriority] = useState<any>(null);

  const [search, setSearch] = useState("");

  const { vendors } = useSelector((state: any) => state.vendorState);
  const [id, setId] = useState<any>();

  const vendorsSearch = vendors.map((item: any) => item.vendorName.toLowerCase().indexOf(search.toLowerCase()) > -1 && item.vendorActive == status && item);

  const searchFilter = vendorsSearch.filter((item: any) => item);

  useEffect(() => {
    dispatch(GetVendorRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelVendorRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any, statusId: any, priorityId: any) => {
    setDisplayEdit(true);
    setId(id);
    setStatus(statusId);
    setPriority(priorityId);
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 10;
  const currentItems = vendors.slice(itemOffset, endOffset);
  const itemsSearch = searchFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(search === "" && status === null ? vendors.length / 10 : searchFilter.length / 10);

  const handlePageClick = (event: any) => {
    // if (search !== "" || status !== null) {
    //   event.selected = 0;
    // }

    const newOffset = (event.selected * 10) % vendors.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className="mt-20">
            {display && <VendorModalCreate setDisplay={setDisplay} setRefresh={setRefresh} />}
            {displayEdit && <VendorModalEdit status={status} priority={priority} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />}
            <div>
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
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vendor Name"
                    required
                  />
                </div>
              </form>
            </div>

            <select onChange={(e) => setStatus(e.target.value)} className="select w-full max-w-xs">
              <option disabled selected>
                Status
              </option>
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </select>

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden min-h-screen">
                    <table className="p-0 text-center	min-w-full mb-5">
                      <thead className="bg-blue-400 border-b">
                        <tr>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Vendor
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Priority
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Register At
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            WebUrl
                          </th>
                          <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            <button onClick={() => setDisplay(true)}>+ Add</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendors && search === "" && status === null
                          ? currentItems.map((vendore: any) => (
                              <>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorName}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorActive ? "Active" : "Inactive"}</td>

                                  {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority}</td> */}
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority ? "Priority" : "No Priority"}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorRegisterDate}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorWeburl}</td>
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
                                                <li
                                                  onClick={() => onClick(vendore.vendorId, vendore.vendorActive, vendore.vendorPriority)}
                                                  className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}
                                                >
                                                  Edit
                                                </li>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <Link href={`/purchasing/Vendor/${vendore.vendorId}`} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                  Add Item Product
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <li onClick={() => onDelete(vendore.vendorId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
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
                            ))
                          : itemsSearch.map((vendore: any) => (
                              <>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorName}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorActive ? "Active" : "Inactive"}</td>

                                  {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority}</td> */}
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority ? "Priority" : "No Priority"}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorRegisterDate}</td>
                                  <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorWeburl}</td>
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
                                                <li
                                                  onClick={() => onClick(vendore.vendorId, vendore.vendorActive, vendore.vendorPriority)}
                                                  className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}
                                                >
                                                  Edit
                                                </li>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <Link href="/purchasing/VendorProduct" className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                  Add Item Product
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <li onClick={() => onDelete(vendore.vendorId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
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
                            ))}
                      </tbody>
                    </table>
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel="next >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={2}
                      pageCount={pageCount}
                      previousLabel="<previous"
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
      {/* <previous>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName="flex gap-2 justify-center"
          renderOnZeroPageCount={null}
          activeLinkClassName="bg-red-500"
          nextLinkClassName="btn btn-sm bg-blue-500 border-none"
          pageLinkClassName="btn btn-sm bg-blue-500 border-none"
          previousLinkClassName="btn btn-sm bg-blue-500 border-none"
        />
      </previous> */}
    </div>
  );
}
