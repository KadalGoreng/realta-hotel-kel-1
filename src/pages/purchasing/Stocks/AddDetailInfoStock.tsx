import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import { AddStockRequest, GetStockRequest } from "@/redux-saga/action/stocksAction";
import { AddStockDetailRequest, GetStockDetailRequest } from "@/redux-saga/action/stockDetailAction";

export default function AddDetailInfoStock(props: any) {
  const dispatch = useDispatch();
  const { stockDetails } = useSelector((state: any) => state.stockDetailState);
  const formik = useFormik({
    initialValues: {
      stodStockId: props.id,
      stodStatus: undefined,
      stodNotes: undefined,
      stodFaci: undefined,
      stodPohe: undefined,
    },
    onSubmit: async (values: any) => {
      //   console.log(values);
      dispatch(AddStockDetailRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  useEffect(() => {
    dispatch(GetStockDetailRequest());
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Detail Stock Product</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div>
                <div className="flex items-center justify-center p-12">
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
                        <select
                          id="stodStatus"
                          name="stodStatus"
                          onChange={formik.handleChange}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option selected>Select Status</option>
                          <option value="1">Stocked</option>
                          <option value="2">Expired</option>
                          <option value="3">Broken</option>
                          <option value="4">Used</option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0 mt-6">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Notes</label>
                        <input
                          id="stodNotes"
                          name="stodNotes"
                          onChange={formik.handleChange}
                          type="text"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0 mt-6">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Used In</label>
                        <select
                          onChange={formik.handleChange}
                          id="stodFaci"
                          name="stodFaci"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option selected>Choose Room</option>
                          {stockDetails &&
                            stockDetails.map((stock: any, index: number) => {
                              return (
                                <option key={index} value={stock.stodFaci.faciId}>
                                  Room-{stock.stodFaci.faciRoomNumber}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0 mt-6">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Pohe</label>
                        <input
                          id="stodPohe"
                          name="stodPohe"
                          onChange={formik.handleChange}
                          type="number"
                          min="2"
                          placeholder="2"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div className="mt-6">
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
      </div>
    </>
  );
}
