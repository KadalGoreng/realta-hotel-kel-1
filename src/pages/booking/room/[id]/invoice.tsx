import React, { useEffect, useState } from "react";
import api from "@/api/BookingHotel";

export default function Invoice() {
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

  const { boorOrderNumber, boorOrderDate, boorStatus, boorPayType, boorUser } =
    dataOrder;

  const getDataOrder = async () => {
    const result: any = await api.getBookingOrderByUser(1);
    setDataOrder(result.data);
  };
  useEffect(() => {
    getDataOrder();
  }, []);

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
                  <td>Indonesia Standard Double</td>
                  <td>1</td>
                  <td>1 Adult</td>
                  <td>Rp. 300.000</td>
                  <td>-Rp. 300.000</td>
                  <td>150</td>
                  <td>Rp. 300.000</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td colSpan={5} className="border-none"></td>
                  <td>Total Amount: </td>
                  <td>Rp. 300.000</td>
                </tr>
                <tr>
                  <td colSpan={5} className="border-none"></td>
                  <td>Tax: </td>
                  <td>Rp. 300.000</td>
                </tr>
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
                  <td>Rp. 300.000</td>
                </tr>
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}
