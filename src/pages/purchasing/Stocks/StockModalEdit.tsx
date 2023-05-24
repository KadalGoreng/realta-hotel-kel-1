import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditStockRequest, FindStockRequest } from "@/redux-saga/action/stocksAction";

export default function ModalEdit(props: any) {
  const dispatch = useDispatch();
  const { stock } = useSelector((state: any) => state.stocksState);
  console.log(stock);
  useEffect(() => {
    dispatch(FindStockRequest(props.id));
  }, []);

  // console.log(props.id);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      stockName: stock.stockName,
      stockReorderPoint: stock.stockReorderPoint,
      stockQuantity: stock.stockQuantity,
      stockUsed: stock.stockUsed,
      stockScrap: stock.stockScrap,
      stockSize: stock.stockSize,
      stockColor: stock.stockColor,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditStockRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Stock</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div className="flex items-center justify-center p-12">
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">ID</label>
                      <input disabled type="text" placeholder={props.id} className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Stock</label>
                        <input
                          id="stockName"
                          name="stockName"
                          defaultValue={stock.stockName}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Stock"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Re-OrderPoint</label>
                        <input
                          id="stockReorderPoint"
                          name="stockReorderPoint"
                          defaultValue={stock.stockReorderPoint}
                          onChange={formik.handleChange}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-40 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Quantity</label>
                        <input
                          id="stockQuantity"
                          name="stockQuantity"
                          onChange={formik.handleChange}
                          defaultValue={stock.stockQuantity}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-40 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Used</label>
                        <input
                          id="stockUsed"
                          name="stockUsed"
                          onChange={formik.handleChange}
                          defaultValue={stock.stockUsed}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-40 px-5 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Scrap</label>
                        <input
                          id="stockScrap"
                          name="stockScrap"
                          onChange={formik.handleChange}
                          defaultValue={stock.stockScrap}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Size</label>
                        <input
                          id="stockSize"
                          name="stockSize"
                          onChange={formik.handleChange}
                          defaultValue={stock.stockSize}
                          type="text"
                          placeholder="Size"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Color</label>
                        <input
                          id="stockColor"
                          name="stockColor"
                          onChange={formik.handleChange}
                          defaultValue={stock.stockColor}
                          type="text"
                          placeholder="Color"
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
