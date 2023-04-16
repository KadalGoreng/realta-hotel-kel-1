import React from "react";

export default function Invoice() {
  return (
    <div className="flex flex-col m-12 gap-6">
      <div>
        <div className="mb-5">
          <span className="text-2xl font-bold">Invoice</span>
        </div>
        <div className="flex gap-40">
          <div className="flex flex-col w-40">
            <span className="text-xl">Booking Order</span>
            <span>BO-20230219-12</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Order Date</span>
            <span>23 Jan 2023</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Invoice Number</span>
            <span>TRX#2323232-1</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Invoice Date</span>
            <span>23 Jan 2023</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Status</span>
            <span>Paid</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Payment Type</span>
            <span>GoTo</span>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed">
        <div className="my-5">
          <span className="text-2xl font-bold">Customer</span>
        </div>
        <div className="flex gap-40">
          <div className="flex flex-col w-40">
            <span className="text-xl">Full Name</span>
            <span>Revydo Renada S</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Contact Number</span>
            <span>08122343242</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Member</span>
            <span>VIP</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Member Date</span>
            <span>23 Jan 2023</span>
          </div>
          <div className="flex flex-col w-40">
            <span className="text-xl">Remaining Points</span>
            <span>+140</span>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed">
        <div className="my-5">
          <span className="text-2xl font-bold">Biling</span>
        </div>
        <div className="flex gap-40">
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Facilities</span>
            <span>Indonesia Standard Double</span>
            <span>Extrabeds</span>
            <span>Softdrink</span>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Qty</span>
            <span>1</span>
            <span>1</span>
            <span>2</span>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Vacant</span>
            <span>2 Adult, 0 Child</span>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Price</span>
            <span>Rp.300.000</span>
            <span>Rp.300.000</span>
            <span>Rp.300.000</span>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Discount</span>
            <span>Rp.-300.000</span>
          </div>
          <div className="flex flex-col w-40 gap-2">
            <span className="text-xl mb-1">Sub Total</span>
            <span>Rp.300.000</span>
            <span>Rp.300.000</span>
            <span>Rp.300.000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed">
        <div className="my-5">
          <div>
            <div className="flex gap-3">
              <span>Total Amount</span>
              <span>Rp.300.000</span>
            </div>
            <div className="flex gap-3">
              <span>Tax</span>
              <span>10%</span>
            </div>
            <div className="flex gap-3">
              <span>Payment Amount</span>
              <span>Rp.300.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
