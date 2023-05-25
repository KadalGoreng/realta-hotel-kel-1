import Layout from "@/component/layout";
import Card from "@/component/purchasings/Card";
import Cart from "@/component/purchasings/Cart";
import { GetStockPhotoRequest } from "@/redux-saga/action/stockPhotoAction";
import { GetVendorRequest } from "@/redux-saga/action/vendorAction";
import { GetVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const dispatch = useDispatch();
  const { stockPhotos } = useSelector((state: any) => state.StockPhotoState);
  const { vendors } = useSelector((state: any) => state.vendorState);
  const { vendorProducts } = useSelector((state: any) => state.vendorProductState);
  const [selectCart, setSelectCart] = useState<any>([]);

  useEffect(() => {
    dispatch(GetVendorProductRequest());
    // dispatch(GetStockPhotoRequest());
  }, []);

  console.log(vendorProducts);

  useEffect(() => {});

  return (
    <Layout>
      <div className="p-4 pt-0 sm:ml-64">
        <div>
          <div className="mt-20">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden min-h-screen">
                    {/*  */}
                    <div className="flex">
                      <div className="w-full lg:w-[75%]">
                        <div className="flex">
                          <div className="p-5">
                            {/* <div className="flex flex-col gap-10"> */}
                            <div className="mx-auto grid max-w-40 grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                              {vendorProducts.length === 0 ? (
                                <div className="h-[100vh]">Loading...</div>
                              ) : (
                                vendorProducts.map((item: any, index: number) => <Card selectCart={selectCart} setSelectCart={setSelectCart} item={item} key={index} />)
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="max-h-[80vh] w-[25%]">{selectCart.length > 0 && <Cart setSelectCart={setSelectCart} selectCart={selectCart}></Cart>}</div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
