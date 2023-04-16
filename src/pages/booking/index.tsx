import Card from "@/components/booking/Card";
import Filter from "@/components/booking/Filter";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Booking() {
  const [hotel, setHotel] = useState([]);

  const getHotel = () => {
    axios
      .get("http://localhost:3002/booking/hotels")
      .then((res) => setHotel(res.data));
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <div className="flex">
      <Filter />
      <div className="w-[75%]">
        <div className="flex">
          <div className="p-5">
            <div className="mb-3">Home</div>
            <div className="flex flex-col gap-10">
              {hotel.map((item: any) => (
                <Card {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
