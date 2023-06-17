import React, { useEffect, useState, Fragment } from "react";
// import Hotels from "@/api/Hotels";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelHotelsRequest, GetHotelsRequest } from "@/redux-saga/action/hotelsAction";
import HotelsCreate from "./HotelsCreate";
import HotelsUpdate from "./HotelsUpdate";
import HotelsId from "./[id]";
import Link from "next/link";
import { log } from "console";
import ReactPaginate from "react-paginate";
import { FilterMatchMode } from "primereact/api";
// import Modal from "@/component/modal";

export default function HotelsRedux() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state: any) => state.hotelsState);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayUpdate, setDisplayUpdate] = useState<any>(false);
  const [displayAddFacilities, setDisplayAddFacilities] = useState<any>(false);
  const [id, setId] = useState<any>();
  const [showModal, setShowModal] = useState<any>(false);
  const [search, setSearch] = useState<string>("");
  const [itemOffset, setItemOffset] = useState(0);
  const [payload, setPayload] = useState({ page: 1, name: "" });
  // const [page, setpage] = useState<number>(1);

  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  // });

  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * 10) % hotelSearch.length;
  //   setItemOffset(newOffset);
  // };

  useEffect(() => {
    dispatch(GetHotelsRequest(payload));
    setRefresh(false);
  }, [payload, dispatch, refresh]);

  const setModal = (id: any) => {
    setShowModal(true);
    setId(id);
  };

  // const onClickAdd = (id: any) => {
  //   setDisplayAddFacilities(true);
  //   setId(id);
  // };

  const onClickUpdate = (id: any) => {
    setDisplayUpdate(true);
    setId(id);
    setRefresh(true);
  };
  const onChangeState = (key: string, value: any) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const handlePageClick = (e: any) => {
    onChangeState("page", e.selected + 1);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
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

  const Modal = ({ isVisible, onClose }: { isVisible: any; onClose: () => void }) => {
    if (!isVisible) return null;

    return (
      <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={() => setShowModal(false)}>
        <div className="w-[600px] flex flex-col">
          <div className="border-solid border-2 border-black flex flex-col">
            <button className="bg-white p-2" onClick={() => onClickUpdate(id)}>
              Edit
            </button>
            <Link href={`hotels/${id}`} className="bg-white p-2 flex justify-center items-center">
              <button className="bg-white p-2">Add Facilities</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <>
          {displayUpdate ? (
            <HotelsUpdate setRefresh={setRefresh} setDisplay={setDisplayUpdate} id={id} />
          ) : displayAddFacilities ? (
            <HotelsId />
          ) : display ? (
            <HotelsCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <div className="flex ">
                <aside id="default-sidebar" className="border left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h1 className="font-medium text-xl pb-2">Menu</h1>
                    <ul className="space-y-2 font-medium">
                      <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="ml-3">Hotel</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="flex-1 ml-3 whitespace-nowrap">Facilities</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div>
                  <h2 className="font-medium border text-xl ">Hotels</h2>

                  <form className="flex items-center justify-center gap-2">
                    <h2>Search Hotel</h2>
                    <label className="sr-only">Search</label>
                    <div className="relative w-1/3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Hotel"
                        onChange={(e) => onChangeState("name", e.target.value)}
                        required
                      />
                    </div>
                    {/* <button
                      type="submit"
                      className="p-2.5 ml-2 text-sm font-thin  text-[#B99982]   border box-border  w-32 border-[#B99982] hover:bg-[#B99982] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <h1>Search</h1>
                    </button> */}
                  </form>

                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="border text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Hotel Name
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Rating Star
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Phone Number
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Modified Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            <button onClick={() => setDisplay(true)}> + Add </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotels.items &&
                          Array.isArray(hotels.items) &&
                          hotels.items.map((item: any) => {
                            return (
                              <Fragment key={item.hotelId}>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th> */}
                                  <td className="px-6 py-4">{item.hotelId}</td>
                                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.hotelName}</td>
                                  <td className="px-6 py-4 ">
                                    <div className="star-rating">
                                      {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                          <span key={index} className={index <= item.hotelRatingStar ? "text-yellow-400" : "off"}>
                                            &#9733;
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4">{item.hotelPhonenumber}</td>
                                  <td className="px-6 py-4">{formatDate(item.hotelModifiedDate, undefined, "numeric")}</td>
                                  <td className="d-flex">
                                    <div className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                      <div>
                                        <button className="text-indigo-600 hover:text-indigo-900" id="wrapper" onClick={() => setModal(item.hotelId)}>
                                          EDIT
                                        </button>
                                      </div>
                                    </div>
                                    <Modal isVisible={showModal} onClose={() => false} />
                                  </td>
                                </tr>
                              </Fragment>
                            );
                          })}
                      </tbody>
                    </table>
                    {hotels.meta && (
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={hotels.meta.totalPages}
                        previousLabel="< prev"
                        forcePage={payload.page - 1}
                        containerClassName="flex gap-1"
                        renderOnZeroPageCount={null}
                        nextClassName="btn btn-sm rounded btn-outline"
                        previousClassName="btn btn-sm rounded btn-outline"
                        activeLinkClassName="bg-[#1C1C1C] text-white"
                        pageLinkClassName="btn btn-sm rounded btn-outline"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
