import React from "react";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  CarOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { formatHotelRating } from "@/utils/helpers";

export default function Card(props: any) {
  const { hotelId, hotelName, hotelRatingStar, hotelReviews } = props;

  const { hotelFacility } = useSelector(
    (state: any) => state.bookingHotelState
  );

  return (
    <div key={hotelId}>
      <div className="flex gap-5">
        <div className="carousel w-[20%]">
          <div
            id={`slide1${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide4${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide2${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id={`slide2${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+2"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide1${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide3${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id={`slide3${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+3"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide2${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide4${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id={`slide4${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+4"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide3${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide1${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <div className="title">
              <p className="text-xl font-bold">{hotelName}</p>
              <span className="font-light">Near Sentul Golf</span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <span className="badge">
                {hotelRatingStar} <StarOutlined className="ml-2" />
              </span>
              <span className="font-thin">
                ({(hotelReviews && hotelReviews.length) || 0} Ratings)
              </span>
              <span className="font-light">
                {formatHotelRating(hotelRatingStar)}
              </span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div className="flex items-center gap-1">
                {/* <AiFillCar size={"25"} /> */}
                <CarOutlined style={{ fontSize: "20px" }} />
                <span className="font-thin">Parking</span>
              </div>
              <div className="flex items-center gap-1">
                {/* <GiCoffeeCup size={"25"} /> */}
                <CoffeeOutlined style={{ fontSize: "20px" }} />
                <span className="font-thin">Coffee/Tea</span>
              </div>
              <div className="flex items-center gap-1">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                {/* <FaCartPlus size={"23"} /> */}
                <span className="font-thin">Market</span>
              </div>
            </div>
          </div>
          {hotelFacility.length !== 0 && (
            <div className="flex gap-7">
              <div className="flex flex-col justify-around">
                <span className="font-bold">{hotelFacility[0].faciName}</span>
                <span className="font-bold">
                  {hotelFacility[0].faciLowPrice}
                </span>
                <span className="font-thin text-sm">per room per night</span>
              </div>
              <div className="flex items-end gap-5">
                <Link href={`/booking/room/${hotelId}`}>
                  <button className="btn btn-sm">View Details</button>
                </Link>
                <button className="btn btn-sm">Book Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
