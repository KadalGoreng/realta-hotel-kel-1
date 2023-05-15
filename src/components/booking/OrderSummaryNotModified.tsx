import {
  bookingDays,
  convertPrice,
  formatDate,
  formatPrice,
} from "@/utils/helpers";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

export default function OrderSummaryNotModified(props: any) {
  const {
    hotelName,
    dateStart,
    dateEnd,
    faciName,
    faciRatePrice,
    price,
    totalPrice,
    saving,
    hotelId,
    onClick,
  } = props;

  return (
    <div className="flex flex-col gap-5 rounded-xl w-[100%] bg-white shadow-xl p-4">
      <div>
        <div className="font-bold text-[18px]">{hotelName}</div>
        <div className="font-bold text-[14px]">{`${bookingDays(
          dateStart,
          dateEnd
        )} Night`}</div>
        <div>{`${formatDate(dateStart, "short", undefined)} - ${formatDate(
          dateEnd,
          "short",
          undefined
        )}`}</div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{faciName}</span>
        <span>{`Rp. ${formatPrice(faciRatePrice)}/Night`}</span>
      </div>
      <div className="summary-order">
        <div className="flex justify-between items-center">
          <div>{`Room price ${bookingDays(dateStart, dateEnd)} Night`}</div>
          <div className="text-sm">{`Rp. ${formatPrice(price)}`}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Discount Voucher</div>
          <div className="text-sm">{`-Rp. ${formatPrice(saving)}`}</div>
        </div>
        <div className="flex justify-between items-center border-b-2 pb-4 mb-2">
          <div>Price Drop</div>
          <div className="text-sm">{`-Rp. 0`}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="card-title">Total Price</p>
            <p className="text-sm font-thin">termasuk pajak</p>
          </div>
          <p className="text-sm">{`Rp. ${formatPrice(totalPrice)}`}</p>
        </div>
      </div>
      <div className="card-actions">
        <Link href={`/booking/room/${hotelId}/invoice/`} className="w-full">
          <Button label="Create Booking Order" fullWidth onClick={onClick} />
        </Link>
      </div>
    </div>
  );
}
