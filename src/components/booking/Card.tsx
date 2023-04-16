import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";

export default function Card(props: any) {
  const { hotelId, hotelName } = props;

  const hotels = [
    {
      id: 1,
      name: "Ciputra",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
    {
      id: 2,
      name: "Aston Sentul Hotel",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
    {
      id: 3,
      name: "Aston Sentul Hotel",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
    {
      id: 4,
      name: "Aston Sentul Hotel",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
    {
      id: 5,
      name: "Aston Sentul Hotel",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
    {
      id: 6,
      name: "Aston Sentul Hotel",
      image: "https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1",
      near: "Near Simpang Lima",
      price: 900000,
      rating: 757,
    },
  ];

  return (
    <div key={hotelId}>
      <div className="flex gap-5">
        <div className="carousel w-[20%]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+2"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+3"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+4"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <div>
            <div className="title">
              <p className="text-xl font-bold">{hotelName}</p>
              <span className="font-light">Near Sentul Golf</span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <span className="badge">4.5</span>
              <span className="font-thin">(114 Ratings)</span>
              <span className="font-light">Good</span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
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
          <div className="flex gap-7">
            <div className="flex flex-col justify-around">
              <span className="font-bold">Rp. 99.999</span>
              <span className="font-thin text-sm">per room per night</span>
            </div>
            <div className="flex items-end gap-5">
              <button className="btn btn-sm">View Details</button>
              <button className="btn btn-sm">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
