import Layout from "@/component/layout";
import Card from "@/component/photo/Card";
import Cart from "@/component/photo/Cart";

import { GetVendorProductRequest } from "@/redux-saga/action/purchasing/vendorProductAction";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const dispatch = useDispatch();
  const { stockPhotos } = useSelector((state: any) => state.StockPhotoState);
  const { vendors } = useSelector((state: any) => state.vendorState);
  const { vendorProducts } = useSelector((state: any) => state.vendorProductState);

  const [search, setSearch] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const [selectCart, setSelectCart] = useState<any>([]);

  useEffect(() => {
    dispatch(GetVendorProductRequest(search, price));
    // dispatch(GetStockPhotoRequest());
  }, [search, price]);

  console.log(vendorProducts);

  useEffect(() => {});

  return (
    <Layout>
      <div className="p-4 pt-0 sm:ml-64">
        <div>
          <div className="pt-20">
            <form className="flex items-center justify-center gap-2">
              <h2>Search</h2>
              <label className="sr-only">Search Product</label>
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
                  placeholder="Product Name"
                  // required
                />
              </div>
            </form>
          </div>

          <div className="pl-12">
            <select onChange={(e) => setPrice(e.target.value)} className="select w-full max-w-xs">
              <option disabled selected>
                Price
              </option>
              <option value={-1}>high</option>
              <option value={1}>lower</option>
            </select>
          </div>

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
    </Layout>
  );
}
