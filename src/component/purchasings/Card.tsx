import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cart from "./Cart";

export default function Card(props: any) {
  const { sphoStock, veproPrice, veproStock, veproVendor, veproId } = props.item;
  const [open, setOpen] = useState(false);
  console.log(sphoStock);

  function onClickCard() {
    setOpen(true);
    props.setSelectCart([...props.selectCart, props.item]);
  }

  // console.log(props.selectCart);

  // function primary(params:type) {

  // }
  return (
    <div key={veproId} className="border-b-[2px] pb-4">
      <Cart setSelectCart={props.setSelectCart} setOpen={setOpen} open={open} selectCart={props.selectCart} />
      <div className="flex gap-5">
        {veproStock && (
          <>
            <div className="carousel w-[20%]">
              <div id={`slide1${veproId}`} className="carousel-item relative w-full">
                <img className="h-45" src={`http://localhost:3002/uploads/${veproStock.stockPhotos[0].sphoThumbnailFilename}`}></img>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div>
                <div className="title">{<p className="text-xl font-bold">{veproStock.stockName}</p>}</div>
              </div>

              <div>
                <div className="mb-6">
                  <div className="title">
                    <span className="mr-44">stocked : {veproStock.stockQuantity}</span>
                  </div>
                  <div className="title">
                    <span>Re-Order : {veproStock.stockReorderPoint}</span>
                  </div>
                  <div className="title">
                    {" "}
                    <span>Price : {veproPrice}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-around">{/* <span className="font-bold text-red-600 text-[20px]">{`Rp.${vendorProduct.veproPrice} }`}</span> */}</div>
                <div>
                  <button
                    onClick={onClickCard}
                    className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
