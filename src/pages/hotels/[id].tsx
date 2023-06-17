import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, Fragment } from "react";
import { FindHotelsRequest, GetHotelsRequest } from "@/redux-saga/action/hotelsAction";
import Layout from "@/component/layout";
import { GetFacilitiesRequest } from "@/redux-saga/action/facilitiesAction";
import FacilitiesCreate from "../facilities/FacilitiesCreate";
import FacilitiesUpdate from "../facilities/FacilitiesUpdate";
import ReactPaginate from "react-paginate";
import AddPhoto from "./UploadPhoto";

export default function HotelsId() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { hotels } = useSelector((state: any) => state.hotelsState);
  const hotel = hotels.items && hotels.items.find((data: any) => data.hotelId == id);

  const { facilities } = useSelector((state: any) => state.facilitiesState);
  const [display, setDisplay] = useState<any>(false);
  const [upload, setUpload] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [faciId, setFaciId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [photoId, setPhotoId] = useState<any>();
  const [selectedPage, setSelectedPage] = useState(1);
  const [payload, setPayload] = useState({ page: 1, name: "" });

  const handlePageClick = (data: { selected: number }) => {
    setSelectedPage(data.selected + 1);
  };

  useEffect(() => {
    if (router.isReady) {
      dispatch(GetHotelsRequest(payload));
      dispatch(GetFacilitiesRequest({ page: selectedPage, id: id }));
      dispatch(FindHotelsRequest(id));
    }
  }, [payload, dispatch, selectedPage, id, router.isReady]);

  const onClickUpdate = (faciId: any) => {
    setDisplayUpdate(true);
  };

  const setModal = (id: any) => {
    setShowModal(true);
    setFaciId(id);
  };

  const convertPrice = (price: string) => {
    return parseFloat(price.replace(/[$,RP.]/gi, ""));
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

  const onUpload = (id: any) => {
    setUpload(true);
    setPhotoId(id);
  };

  const Modal = ({ isVisible, onClose }: { isVisible: any; onClose: () => void }) => {
    if (!isVisible) return null;

    return (
      <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={() => setShowModal(false)}>
        <div className="w-[600px] flex flex-col">
          <button className="text-black p-2 rounded place-self-end" id="wrapper" onClick={() => onClose()}>
            X
          </button>
          <div className="border-solid border-2 border-black flex flex-col">
            <button className="bg-white p-2" onClick={() => onClickUpdate(faciId)}>
              Edit
            </button>
            <button className="bg-white p-2" onClick={() => onUpload(id)}>
              Upload Photos
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        {displayUpdate ? (
          <FacilitiesUpdate setRefresh={setRefresh} setDisplay={setDisplayUpdate} id={faciId} />
        ) : display ? (
          <FacilitiesCreate setRefresh={setRefresh} setDisplay={setDisplay} refresh={refresh} id={id} />
        ) : upload ? (
          <AddPhoto setDisplay={setUpload} id={faciId} setRefresh={setRefresh} />
        ) : (
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
                  {/* <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
                        </a>
                      </li> */}
                </ul>
              </div>
            </aside>

            <div>
              <h2 className="font-medium border text-xl ">Hotels</h2>

              <form className="flex items-start justify-start m-2">
                <div className="w-1/2">
                  <p className="font-medium text-xl"> {hotel?.hotelName}</p>
                  {hotel?.hotelAddr && <p>{`${hotel.hotelAddr?.addrLine1 ?? ""}, ${hotel.hotelAddr?.addrLine2 ?? ""}`}</p>}
                </div>
                <div>
                  <div> {hotel?.hotelPhonenumber}</div>

                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <span key={index} className={index <= hotel?.hotelRatingStar ? "text-yellow-400" : "off"}>
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                </div>
              </form>
              <h2 className="font-medium border text-xl ">Facility</h2>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="border text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Facility Name
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Room Number
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Max Vacant
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Start End Date
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Range Price
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Discount
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Rate Price
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Tax
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <button onClick={() => setDisplay(true)}> + Add </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {facilities.items &&
                      facilities.items.map((item: any, index: any) => {
                        return (
                          <Fragment key={item.facilitiesId}>
                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                              {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th> */}
                              <td className="px-6 py-4">{index + 1}</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.faciName}</td>
                              <td className="px-6 py-4 ">{item.faciRoomNumber}</td>
                              <td className="px-6 py-4">
                                {item.faciMaxNumber} {item.faciMeasureUnit}
                              </td>
                              <td className="px-6 py-4">
                                <div style={{ width: "130px" }}>
                                  <div>
                                    <div>{formatDate(item.faciStartdate, undefined, "numeric")} </div>
                                  </div>
                                  <div>
                                    <div>{formatDate(item.faciEnddate, undefined, "numeric")}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                {item.faciLowPrice} {item.faciHighPrice}
                              </td>
                              <td className="px-6 py-4">
                                <div>
                                  <p>{item.faciRatePrice && item.faciDiscount ? Math.round((convertPrice(item.faciDiscount) / convertPrice(item.faciRatePrice)) * 100) : 0}%</p>
                                </div>
                              </td>
                              <td className="px-6 py-4">{item.faciRatePrice}</td>
                              <td className="px-6 py-4">
                                {" "}
                                <div>
                                  <p>{item.faciRatePrice && item.faciTaxRate ? Math.round((convertPrice(item.faciTaxRate) / convertPrice(item.faciRatePrice)) * 100) : 0}%</p>
                                </div>
                              </td>
                              <td className="d-flex">
                                <div className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                  <div>
                                    <button className="text-indigo-600 hover:text-indigo-900" id="wrapper" onClick={() => setModal(item.faciId)}>
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
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={facilities.meta && facilities.meta.totalPages}
                previousLabel="<prev"
                containerClassName="flex gap-1"
                renderOnZeroPageCount={null}
                nextClassName="btn btn-sm rounded btn-outline"
                previousClassName="btn btn-sm rounded btn-outline"
                activeLinkClassName="bg-[#1C1C1C] text-white"
                pageLinkClassName="btn btn-sm rounded btn-outline"
              />
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}
