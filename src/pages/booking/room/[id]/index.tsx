import AnotherRoom from "@/components/booking/AnotherRoom";
import OrderSummary from "@/components/booking/OrderSummary";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

export default function BookingRoom() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1"
          className="w-full"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+2"
          className="w-full"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+3"
          className="w-full"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+4"
          className="w-full"
        />
      </div>
      <div className="flex my-5 mx-12 gap-5">
        <div>
          <div className="title">
            <p className="text-2xl font-bold">Aston Sentul Hotel</p>
            <span className="font-light">Near Sentul Golf</span>
          </div>
          <div className="mt-2 items-center">
            <p className="font-bold text-xl">Description</p>
            <span className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptates cumque at, accusantium omnis alias, laudantium
              inventore magni iste quae maiores itaque impedit dignissimos
              dolorem? Odit animi repudiandae aperiam aut. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Minus recusandae,
              exercitationem nulla aliquid placeat fuga, accusamus esse vero
              autem voluptatum nobis tempora aspernatur. Amet sed labore rerum,
              esse animi deserunt!
            </span>
          </div>
          <div className="mt-2 items-center leading-7">
            <p className="font-bold text-xl">Amenities</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <AiFillCar size={"25"} />
                <span className="font-thin">Parking</span>
              </div>
              <div className="flex items-center gap-1">
                <GiCoffeeCup size={"25"} />
                <span className="font-thin">Coffee/Tea</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCartPlus size={"23"} />
                <span className="font-thin">Market</span>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold text-xl my-3">Another Rooms</p>
            <div className="flex flex-col gap-3 w-[50%]">
              <AnotherRoom />
              <AnotherRoom />
            </div>
          </div>
          <div className="mt-2 w-[35%]">
            <p className="mb-2 font-bold text-xl">Hotel Policies</p>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quas
              saepe praesentium, mollitia expedita culpa ad accusamus eum
              nesciunt impedit maiores. Numquam fugit molestias repellendus iure
              corporis labore officia fuga?
            </span>
          </div>
        </div>
        <div>
          <OrderSummary labelBtn="Continue to Book" />
        </div>
      </div>
    </div>
  );
}
