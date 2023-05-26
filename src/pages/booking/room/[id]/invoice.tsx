import React, { useEffect, useState } from "react";
import api from "@/api/BookingHotel";
import { useSelector } from "react-redux";
import { convertPrice } from "@/utils/helpers";

export default function Invoice() {
  const { boex } = useSelector((state: any) => state.bookingHotelState);
  const { bookingOrder } = useSelector((state: any) => state.bookingHotelState);

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

  const [dataOrder, setDataOrder] = useState({
    boorId: null,
    boorOrderNumber: "",
    boorOrderDate: "",
    boorArrivalDate: "",
    boorTotalRoom: null,
    boorTotalGuest: null,
    boorDiscount: "",
    boorTotalTax: "",
    boorTotalAmount: "",
    boorDownPayment: "",
    boorPayType: "",
    boorIsPaid: "",
    boorType: "",
    boorCardnumber: "",
    boorMemberType: "",
    boorStatus: "",
    bookingOrderDetail: null,
    boorUser: {
      userId: null,
      userFullName: "",
      userType: "",
      userCompanyName: "",
      userEmail: "",
      userPhoneNumber: "",
      userModifiedDate: "",
    },
  });

  const {
    boorOrderNumber,
    boorOrderDate,
    boorStatus,
    boorPayType,
    boorUser,
    boorTotalAmount,
    boorTotalTax,
    boorType,
    boorTotalGuest,
    boorTotalRoom,
    boorDiscount,
  } = dataOrder;

  const getDataOrder = async () => {
    const result: any = await api.getBookingOrderByUser(1);
    setDataOrder(result.data);
  };
  useEffect(() => {
    getDataOrder();
  }, []);

  const subTotalAddOns = boex.reduce(
    (prev: any, curr: any) => prev + curr.boexSubtotal,
    0
  );
  console.log(dataOrder);

  return (
    <div className="min-h-screen">
      <div className="absolute w-full px-16 h-full">
        <table className="relative top-[20%] table w-full">
          {/* head */}
          {dataOrder && (
            <>
              <thead>
                <tr>
                  <th>Booking Order</th>
                  <th>Order Date</th>
                  <th>Invoice Number</th>
                  <th>Invoice Date</th>
                  <th>Status</th>
                  <th colSpan={2}>Payment Type</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{boorOrderNumber}</td>
                  <td>{boorOrderDate}</td>
                  <td>TRX#3433</td>
                  <td>{boorOrderDate}</td>
                  <td>{boorStatus}</td>
                  <td colSpan={2}>{boorPayType}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>FullName</th>
                  <th>Contact Number</th>
                  <th>Member</th>
                  <th>Member Date</th>
                  <th colSpan={3}>Remaining Points</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{boorUser.userFullName}</td>
                  <td>{boorUser.userPhoneNumber}</td>
                  <td>{boorUser.userType}</td>
                  <td>23 Jan 2023</td>
                  <td colSpan={3}>+150</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Facilities</th>
                  <th>Qty</th>
                  <th>Vacant</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Point Member</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody className="px-16">
                {/* row 1 */}
                <tr>
                  <td>Deluxe Room</td>
                  <td>1</td>
                  <td>{boorTotalGuest} Adult</td>
                  <td>Rp. {price}</td>
                  <td>-Rp. {convertPrice(boorDiscount)}</td>
                  <td>150</td>
                  <td>Rp. {totalPrice}</td>
                </tr>
                {boex &&
                  boex.map((item: any) => (
                    <tr>
                      <td>{item.pritName}</td>
                      <td>{item.boexQty}</td>
                      <td></td>
                      <td>{`Rp.${item.boexPrice}`}</td>
                      <td></td>
                      <td></td>
                      <td>{`Rp. ${item.boexSubtotal}`}</td>
                    </tr>
                  ))}
              </tbody>
              <tbody>
                {/* <tr>
                  <td colSpan={5} className="border-none"></td>
                  <td>Total Amount: </td>
                  <td>Rp. {totalPrice + subTotalAddOns}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="border-none"></td>
                  <td>Tax: </td>
                  <td>Rp. {convertPrice(boorTotalTax)}</td>
                </tr> */}
                <tr>
                  <td colSpan={4}></td>
                  <td className="max-w-[190px]">
                    <button className="btn btn-sm">Send To Email</button>
                    <button
                      className="btn btn-sm ml-3"
                      onClick={() => window.print()}
                    >
                      Save PDF
                    </button>
                  </td>
                  <td className="font-bold">Payment Amount: </td>
                  <td>
                    Rp. {Number(convertPrice(boorTotalAmount) + subTotalAddOns)}
                  </td>
                </tr>
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}
