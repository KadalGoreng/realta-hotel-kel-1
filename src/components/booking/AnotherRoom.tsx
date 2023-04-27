import {
  CarOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

export default function AnotherRoom() {
  return (
    <div className="flex gap-4 rounded-lg p-4 bg-white">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Indonesia Standard Double</span>
            <span>Max Vacant: 6</span>
            <span>Rp. 265.000</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <CarOutlined style={{ fontSize: "20px" }} />
              {/* <AiFillCar size={"25"} /> */}
              <span className="font-thin ">Parking</span>
            </div>
            <div className="flex items-center gap-1">
              <CoffeeOutlined style={{ fontSize: "20px" }} />
              {/* <GiCoffeeCup size={"25"} /> */}
              <span className="font-thin">Coffee/Tea</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              {/* <FaCartPlus size={"23"} /> */}
              <span className="font-thin">Market</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:inline">
          <img
            className="rounded w-60"
            src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+4"
            alt=""
          />
          <button className="btn btn-sm mt-2 w-full">Select</button>
        </div>
      </div>
    </div>
  );
}
