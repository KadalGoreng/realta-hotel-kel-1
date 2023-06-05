import OrderSummaryNotModified from "@/components/booking/OrderSummaryNotModified";
import React, { useEffect, useState } from "react";
import api from "@/api/BookingHotel";
import apiUser from "@/api/Users";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingOrderNumber,
  convertPrice,
  formatPrice,
  generateRandomString,
  transactionNumber,
} from "@/utils/helpers";
import {
  CreateBoexRequest,
  GetAddOnItemRequest,
} from "@/Redux/Actions/BookingHotelAction";
import { useRouter } from "next/router";

export default function Order() {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const router = useRouter();

  const { bookingOrder } = useSelector((state: any) => state.bookingHotelState);
  const { stocks } = useSelector((state: any) => state.bookingHotelState);

  const {
    hotelName,
    dateStart,
    dateEnd,
    faciName,
    price,
    totalPrice,
    faciId,
    saving,
    faciTaxRate,
    hotelId,
  } = bookingOrder;

  const [addOnsOrder, setAddOnsOrder] = useState<any>([]);

  const subTotalAddOns = addOnsOrder.reduce(
    (prev: any, curr: any) => prev + curr.boexSubtotal,
    0
  );

  const [user, setUser] = useState<any>({});
  const [payload, setPayload] = useState({
    boorOrderDate: new Date(),
    boorArrivalDate: dateStart,
    boorTotalRoom: 1,
    boorTotalGuest: 2,
    boorDiscount: saving,
    boorTotalTax: faciTaxRate,
    boorTotalAmount: totalPrice,
    boorDownPayment: 0,
    boorPayType: "",
    boorIsPaid: "P",
    boorType: "I",
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
    patr_number: transactionNumber(),
    patr_debet: 0,
    patr_credit: totalPrice + subTotalAddOns,
    patr_type: "TRB",
    patr_note: "Booking",
    order_number: "",
    source_id: 1623889545112,
    target_id: 13198989898,
    number_ref: generateRandomString(10),
    user_id: 1,
  });

  const [payloadBorde, setPayloadBorde] = useState({
    borderBoorId: null,
    bordeCheckin: dateStart,
    bordeCheckout: dateEnd,
    bordeAdults: 2,
    bordeKids: 0,
    bordePrice: totalPrice,
    bordeExtra: null,
    bordeDiscount: saving,
    bordeTax: faciTaxRate,
    bordeSubtotal: totalPrice + subTotalAddOns,
  });

  const onChangeState = (key: string, value: any) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const getOrderNumber = async () => {
    const result: any = await api.getBookingOrder();
    const numBo = result.data[0].boorId + 1;
    setPayloadBorde({
      ...payloadBorde,
      borderBoorId: result.data[0].boorId,
    });
    setPayloadTrx({
      ...payloadTrx,
      order_number: bookingOrderNumber(`${numBo}`),
    });
  };

  const addToCart = (item: any) => {
    const existingItem = addOnsOrder.find(
      (cartItem: any) => cartItem.pritName === item.pritName
    );

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        boexSubtotal: existingItem.boexSubtotal + convertPrice(item.pritPrice),
        boexQty: existingItem.boexQty + 1,
      };

      const itemIndex = addOnsOrder.findIndex(
        (cartItem: any) => cartItem.pritName === item.pritName
      );

      setAddOnsOrder([
        ...addOnsOrder.slice(0, itemIndex),
        updatedItem,
        ...addOnsOrder.slice(itemIndex + 1),
      ]);
    } else {
      const newItem = {
        pritName: item.pritName,
        boexPrice: convertPrice(item.pritPrice),
        boexQty: 1,
        boexSubtotal: convertPrice(item.pritPrice),
        boexMeasureUnit: "Unit",
        boexPrit: {
          pritId: item.pritId,
        },
      };
      setAddOnsOrder([...addOnsOrder, newItem]);
    }
  };

  const removerItem = (item: any) => {
    const existingItem = addOnsOrder.find(
      (cartItem: any) => cartItem.pritName === item.pritName
    );

    if (existingItem) {
      if (existingItem.boexQty > 1) {
        const updatedItem = {
          ...existingItem,
          boexSubtotal:
            existingItem.boexSubtotal - convertPrice(item.pritPrice),
          boexQty: existingItem.boexQty - 1,
        };

        const itemIndex = addOnsOrder.findIndex(
          (cartItem: any) => cartItem.pritName === item.pritName
        );

        setAddOnsOrder([
          ...addOnsOrder.slice(0, itemIndex),
          updatedItem,
          ...addOnsOrder.slice(itemIndex + 1),
        ]);
      } else {
        const itemIndex = addOnsOrder.findIndex(
          (cartItem: any) => cartItem.pritName === item.pritName
        );
        setAddOnsOrder([
          ...addOnsOrder.slice(0, itemIndex),
          ...addOnsOrder.slice(itemIndex + 1),
        ]);
      }
    }
  };

  const findAddOn = (item: any) => {
    return addOnsOrder.find((order: any) => order.pritName === item.pritName);
  };

  const getUser = async () => {
    const user = await apiUser.findOne(1);
    setUser(user);
  };

  useEffect(() => {
    getUser();
    getOrderNumber();
    dispatch(GetAddOnItemRequest());
  }, []);
  console.log(user);

  useEffect(() => {
    setPayloadBorde({
      ...payloadBorde,
      bordeExtra: subTotalAddOns,
    });
  }, [subTotalAddOns]);

  const booking = () => {
    if (payload.boorPayType === "") {
      alert("Mohon pilih pembayaran!");
      return;
    } else {
      if (payload.boorPayType === "D") {
        if (user.userAccounts[0].usacSaldo > totalPrice + subTotalAddOns) {
          api.createOrder(payload).then(() => {
            api.createOrderDetail(payloadBorde);
            api.createTransaction(payloadTrx);
          });
          addOnsOrder &&
            addOnsOrder.map((order: any) =>
              dispatch(
                CreateBoexRequest(order)
                // CreateBoexRequest(Object.fromEntries(Object.entries(order).slice(1)))
              )
            );
        } else {
          window.alert("Saldo Kurang");
          return;
        }
      }
    }

    window.alert("Successfully Order");
    router.push({
      pathname: `/booking/room/${hotelId}/invoice`,
    });
  };
  console.log(user.userAccounts);

  return (
    <div className="flex flex-col min-h-[100vh] mb-10">
      <div className="my-[56px] mx-auto">
        {/* <span className="text-2xl font-bold">Modify your booking</span> */}
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col w-[700px] gap-5">
          <div className="border-2 ">
            <div className="p-5 bg-slate-400">
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
                  disabled
                  className="input input-bordered input-sm"
                  type="text"
                  value={user.userFullName}
                />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Email</label>
                <input
                  disabled
                  className="input input-bordered input-sm"
                  type="text"
                  value={user.userEmail}
                />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                <label>Mobile Number</label>
                <input
                  disabled
                  className="input input-bordered input-sm"
                  type="tel"
                  value={user.userPhoneNumber}
                />
              </div>
              <div className="flex flex-col" style={{ flex: "0 1 40%" }}>
                &nbsp;
                {/* <button className="btn btn-sm">Send passcode</button> */}
              </div>
            </div>
          </div>
          <div className="border-2">
            <div className="p-5 bg-slate-400">
              <span className="font-bold text-xl text-white">
                2. Add your extra order
              </span>
            </div>
            <div className="p-5">
              <table className="w-2/3">
                <thead>
                  <tr>
                    <th className="text-left">Item</th>
                    <th className="text-left">Price</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {!showMore
                    ? stocks.map(
                        (item: any, index: number) =>
                          index < 5 && (
                            <tr key={index}>
                              <td>{item.pritName}</td>
                              <td>
                                Rp.
                                {formatPrice(convertPrice(item.pritPrice))}
                              </td>
                              <td className="flex gap-3">
                                <span
                                  className="btn btn-xs"
                                  onClick={() => removerItem(item)}
                                >
                                  -
                                </span>
                                <span>
                                  {addOnsOrder && findAddOn(item)
                                    ? findAddOn(item).boexQty
                                    : "0"}
                                </span>
                                <span
                                  className="btn btn-xs"
                                  onClick={() => addToCart(item)}
                                >
                                  +
                                </span>
                              </td>
                            </tr>
                          )
                      )
                    : stocks.map((item: any, index: number) => (
                        <tr key={index}>
                          <td>{item.pritName}</td>
                          <td>
                            Rp.
                            {formatPrice(convertPrice(item.pritPrice))}
                          </td>
                          <td className="flex gap-3">
                            <span
                              className="btn btn-xs"
                              onClick={() => removerItem(item)}
                            >
                              -
                            </span>
                            <span>
                              {addOnsOrder && findAddOn(item)
                                ? findAddOn(item).boexQty
                                : "0"}
                            </span>
                            <span
                              className="btn btn-xs"
                              onClick={() => addToCart(item)}
                            >
                              +
                            </span>
                          </td>
                        </tr>
                      ))}
                  <tr>
                    <td>
                      {stocks.length > 5 && (
                        <span
                          className="font-bold text-[#b37d31] cursor-pointer mt-2"
                          onClick={() => setShowMore(!showMore)}
                        >
                          {!showMore ? "Show more" : "Show less"}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      <span>Total Price</span>
                    </td>
                    <td>
                      <span className="font-bold">
                        Rp.
                        {addOnsOrder && formatPrice(subTotalAddOns)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-2">
            <div className="p-5 bg-slate-400">
              <span className="font-bold text-xl text-white">3 . Payment</span>
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
                  <option value={"CR"}>Credit Card</option>
                  <option value={"C"}>Pay at Hotel</option>
                  <option value={"D"}>Debit</option>
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
          <OrderSummaryNotModified
            {...bookingOrder}
            onClick={booking}
            subTotalAddOn={subTotalAddOns}
          />
        </div>
      </div>
    </div>
  );
}
