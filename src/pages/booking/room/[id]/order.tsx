import OrderSummaryNotModified from "@/components/booking/OrderSummaryNotModified";
import React, { useEffect, useState } from "react";
import api from "@/api/BookingHotel";
import { useSelector } from "react-redux";
import {
  bookingOrderNumber,
  generateRandomString,
  transactionNumber,
} from "@/utils/helpers";

export default function Order() {
  const { bookingOrder } = useSelector((state: any) => state.bookingHotelState);

  const {
    hotelName,
    dateStart,
    dateEnd,
    faciName,
    price,
    totalPrice,
    saving,
    faciTaxRate,
    hotelId,
  } = bookingOrder;

  const [payload, setPayload] = useState({
    boorOrderDate: new Date(),
    boorArrivalDate: dateStart,
    boorTotalRoom: 1,
    boorTotalGuest: 1,
    boorDiscount: saving,
    boorTotalTax: faciTaxRate,
    boorTotalAmount: totalPrice,
    boorDownPayment: 0,
    boorPayType: "",
    boorIsPaid: "P",
    boorType: "",
    boorCardnumber: "",
    boorMemberType: "SILVER",
    boorStatus: "BOOKING",
    boorHotel: {
      hotelId: Number(hotelId),
    },
    boorUser: {
      userId: 1,
    },
  });

  const [payloadTrx, setPayloadTrx] = useState({
    patr_number: transactionNumber("6"),
    patr_debet: 0,
    patr_credit: totalPrice,
    patr_type: "TRB",
    patr_note: "Booking",
    order_number: "",
    source_id: 1623889545112,
    target_id: 13198989898,
    number_ref: generateRandomString(10),
    user_id: 1,
  });

  const onChangeState = (key: string, value: any) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const getOrderNumber = async () => {
    const result: any = await api.getBookingOrder();
    const numBo = result.data[0].boorId + 1;
    setPayloadTrx({
      ...payloadTrx,
      order_number: bookingOrderNumber(`${numBo}`),
    });
  };

  useEffect(() => {
    getOrderNumber();
  }, []);

  const booking = () => {
    api.createOrder(payload).then(() => {
      api.createTransaction(payloadTrx);
    });
    window.alert("Successfully Order");
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="my-[56px] mx-auto">
        {/* <span className="text-2xl font-bold">Modify your booking</span> */}
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col w-[700px] gap-5">
          <div className="border-2">
            <div className="p-5 bg-slate-500">
              <span className="font-bold text-xl text-white">
                1. Enter your details
              </span>
            </div>
            <div className="flex flex-wrap p-5 gap-3">
              <div>
                <span>
                  We will use these details to share your booking information
                </span>
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Full Name</label>
                <input
                  className="input input-bordered input-sm"
                  type="text"
                  onChange={(e) => console.log(e.target.value)}
                />
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
          <div className="border-2">
            <div className="p-5 bg-slate-500">
              <span className="font-bold text-xl text-white">2. Payment</span>
            </div>
            <div className="flex flex-wrap p-5 gap-3">
              <div className="flex flex-col gap-2" style={{ flex: "0 1 40%" }}>
                <label>Type</label>
                <select
                  className="select select-sm select-bordered w-full max-w-xs"
                  onChange={(e) => onChangeState("boorPayType", e.target.value)}
                >
                  <option disabled selected>
                    Select payment
                  </option>
                  <option selected={false} value={"GT"}>
                    GoTo
                  </option>
                  <option selected={true} value={"CR"}>
                    Pay at Hotel
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2" style={{ flex: "0 1 40%" }}>
                <label>Account Payment</label>
                <input
                  className="input input-bordered input-sm"
                  type="tel"
                  onChange={(e) =>
                    onChangeState("boorCardnumber", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[400px]">
          <OrderSummaryNotModified {...bookingOrder} onClick={booking} />
        </div>
      </div>
    </div>
  );
}
