import { AddPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchaseOrderHeaderAction";
import { GetVendorRequest } from "@/redux-saga/action/vendorAction";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PoHeaderModalCreate(props: any) {
  const dispatch = useDispatch();
  const { PurchaseOrderHeaders } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const { vendors } = useSelector((state: any) => state.vendorState);

  useEffect(() => {
    dispatch(GetVendorRequest());
  }, [props.refresh]);

  const formik = useFormik({
    initialValues: {
      poheOrderDate: undefined,
      poheVendor: undefined,
      poheTotalAmount: undefined,
      poheStatus: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddPurchaseOrderHeaderRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  console.log(vendors);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Order</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div className="flex items-center justify-center p-12">
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">StockName</label>
                          <select
                            onChange={formik.handleChange}
                            id="poheVendor"
                            name="poheVendor"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            {vendors &&
                              vendors.map((target: any) => {
                                return (
                                  <>
                                    <option value={target.vendorId}>{target.vendorName}</option>
                                  </>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Total Amount</label>
                        <input
                          id="poheTotalAmount"
                          name="poheTotalAmount"
                          onChange={formik.handleChange}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <div className="mt-6">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
                          <select
                            onChange={formik.handleChange}
                            id="poheStatus"
                            name="poheStatus"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            <option selected>Status</option>
                            <option value="1">Pending</option>
                            <option value="2">Approve</option>
                            <option value="3">Rejected</option>
                            <option value="4">Used</option>
                            <option value="5">Completed</option>
                          </select>
                        </div>
                      </div>
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
