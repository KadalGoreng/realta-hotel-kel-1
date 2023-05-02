import { GetBookingHotelRequest } from "@/Redux/Actions/BookingHotelAction";
import Card from "@/components/booking/Card";
import Filter from "@/components/booking/Filter";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Booking() {
  const { bookingHotel } = useSelector((state: any) => state.bookingHotelState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBookingHotelRequest());
  }, []);

  return (
    <div className="flex">
      <Filter />
      <div className="w-[75%]">
        <div className="flex">
          <div className="p-5">
            <div className="mb-3">Home</div>
            <div className="flex flex-col gap-10">
              {bookingHotel.length === 0 ? (
                <div className="h-[100vh]">Loading...</div>
              ) : (
                bookingHotel.map((item: any) => <Card {...item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
