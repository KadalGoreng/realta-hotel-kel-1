import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditPurchaseOrderHeaderRequest, FindPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchaseOrderHeaderAction";
import { EditPurchaseOrderDetailRequest } from "@/redux-saga/action/purchaseOrderDetailAction";

export default function EditPoDetail(props: any) {
  const dispatch = useDispatch();

  const { PurchaseOrderHeader } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const purchaseOrderDetail = props.purchaseOrderDetails.find((item: any) => item.podeId == props.podeId);
  const { stocks } = useSelector((state: any) => state.stocksState);

  useEffect(() => {
    dispatch(FindPurchaseOrderHeaderRequest(props.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      podeId: props.podeId,
      podeStock: purchaseOrderDetail.podeStock.stockId,
      podeOrderQty: purchaseOrderDetail.podeOrderQty,
      podeReceivedQty: purchaseOrderDetail.podeReceivedQty,
      podeRejectedQty: purchaseOrderDetail.podeRejectedQty,
      podeLineTotal: purchaseOrderDetail.podeLineTotal,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditPurchaseOrderDetailRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  console.log("header", PurchaseOrderHeader);

  console.log("detail", purchaseOrderDetail);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Detail</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div className="flex items-center justify-center p-12">
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">StockName</label>
                      <select
                        onChange={formik.handleChange}
                        id="podeStock"
                        name="podeStock"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      >
                        <option selected>Choose Stock</option>
                        {stocks &&
                          stocks.map((stock: any) => {
                            return (
                              <option key={stock.stockId} value={stock.stockId}>
                                {stock.stockName}
                              </option>
                            );
                          })}
                      </select>
                    </div>

                    <div className="flex flex-wrap mt-6 -mx-3 mb-6">
                      <div className="w-1/4 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Order Qty</label>
                        <input
                          id="podeOrderQty"
                          name="podeOrderQty"
                          defaultValue={purchaseOrderDetail.podeOrderQty}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Stock"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-1/4 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Receive</label>
                        <input
                          id="podeReceivedQty"
                          name="podeReceivedQty"
                          defaultValue={purchaseOrderDetail.podeReceivedQty}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Stock"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-1/4 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Rejected</label>
                        <input
                          id="podeRejectedQty"
                          name="podeRejectedQty"
                          defaultValue={purchaseOrderDetail.podeRejectedQty}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Rejected"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
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
