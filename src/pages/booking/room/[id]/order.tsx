import OrderSummary from "@/components/booking/OrderSummary";
import React from "react";
import { useSelector } from "react-redux";

export default function Order() {
  const { coupon } = useSelector((state: any) => state.bookingHotelState);
  return (
    <div className="flex flex-col">
      <div className="my-[56px] mx-auto">
        {/* <span className="text-2xl font-bold">Modify your booking</span> */}
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col w-[700px] gap-5">
          <div className="border">
            <div className="p-5 bg-slate-500">
              <span className="font-bold text-xl">1. Enter your details</span>
            </div>
            <div className="flex flex-wrap p-5 gap-3">
              <div>
                <span>
                  We will use these details to share your booking information
                </span>
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Full Name</label>
                <input className="input input-bordered input-sm" type="text" />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Email</label>
                <input className="input input-bordered input-sm" type="text" />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Mobile Number</label>
                <input className="input input-bordered input-sm" type="tel" />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                &nbsp;
                <button className="btn btn-sm">Send passcode</button>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="p-5 bg-slate-500">
              <span className="font-bold text-xl">2. Payment</span>
            </div>
            <div className="flex flex-wrap p-5 gap-3">
              <div className="flex flex-col gap-2" style={{ flex: "0 1 40%" }}>
                <label>Type</label>
                <select className="select select-sm select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select payment
                  </option>
                  <option>GoTo</option>
                  <option>Pay at Hotel</option>
                </select>
              </div>
              <div className="flex flex-col gap-2" style={{ flex: "0 1 40%" }}>
                <label>Account Payment</label>
                <input className="input input-bordered input-sm" type="tel" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Order Summary</div>
        </div>
        {/* <OrderSummary /> */}
      </div>
    </div>
  );
}
