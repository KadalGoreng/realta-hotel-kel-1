import { EditStockDetailRequest, FindStockDetailRequest, GetStockDetailRequest } from "@/redux-saga/action/stockDetailAction";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StatusModalEdit(props: any) {
  const dispatch = useDispatch();
  const { stockDetail } = useSelector((state: any) => state.stockDetailState);
  const { stockDetails } = useSelector((state: any) => state.stockDetailState);
  console.log(stockDetail);
  useEffect(() => {
    dispatch(FindStockDetailRequest(props.id));
    dispatch(GetStockDetailRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      stodStatus: stockDetail.stodStatus,
      id: props.id,
      stodId: props.stodId,
      stodFaci: null,
      // faciRoomNumber: stockDetail.stodFaci.faciRoomNumber,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(EditStockDetailRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  console.log(props.stockUsed);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Switch Status</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div className="flex items-center justify-center p-12">
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="-mx-3 mb-6">
                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
                        <select
                          onChange={formik.handleChange}
                          id="stodStatus"
                          name="stodStatus"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          {/* <option selected></option> */}
                          <option value="1" selected={props.status === "1"}>
                            Stocked
                          </option>
                          <option value="2" selected={props.status === "2"}>
                            Expired
                          </option>
                          <option value="3" selected={props.status === "3"}>
                            Broken
                          </option>
                          <option value="4" selected={props.status === "4"}>
                            Used
                          </option>
                        </select>
                      </div>

                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Used In</label>
                        <select
                          onChange={formik.handleChange}
                          id="stodFaci"
                          name="stodFaci"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          {stockDetails &&
                            stockDetails.map((stock: any, index: number) => {
                              return (
                                <option key={index} value={stock.stodFaci.faciId} selected={props.stockUsed === stock.stodFaci.faciRoomNumber}>
                                  Room-{stock.stodFaci.faciRoomNumber}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      {/* <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Used In</label>
                          <input
                            id="faciRoomNumber"
                            name="faciRoomNumber"
                            defaultValue={stockDetail.stodFaci.faciRoomNumber}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Used In"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div> */}
                    </div>

                    <div>
                      <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                      </button>
                      <button onClick={() => props.setDisplay(false)} className="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
