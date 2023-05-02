import { convertPrice } from "@/utils/helpers";
import {
  CarOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

export default function AnotherRoom(props: any) {
  const { faciName, faciRatePrice, faciMaxNumber, setSelected, selected } =
    props;
  return (
    <div className="flex gap-4 rounded-lg p-4 bg-white">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl flex items-center gap-2 flex-wrap">
              {faciName} {selected == faciName && <CheckCircleFilled />}
            </span>
            <span>Max Vacant: {faciMaxNumber}</span>
            <span>Rp. {convertPrice(faciRatePrice)}</span>
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
          <button
            className="btn btn-sm mt-2 w-full"
            onClick={() => setSelected(faciName)}
          >
            {selected === faciName ? (
              <div className="flex items-center gap-2">
                <CheckCircleFilled /> Selected
              </div>
            ) : (
              "Select"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
