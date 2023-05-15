import {
  addOneDay,
  bookingDays,
  convertPrice,
  formatPrice,
  reduceOneDay,
} from "@/utils/helpers";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CreateBoSuccess } from "@/Redux/Actions/BookingHotelAction";
import { RangePickerProps } from "antd/es/date-picker";
import Button from "./Button";

export default function OrderSummary(props: any) {
  const { coupon, faciRatePrice, faciName, id, hotelName, faciTaxRate } = props;

  const dispatch = useDispatch();

  const [totalBooking, setTotalBooking] = useState(1);
  const [couponDiscount, setCouponDiscount] = useState({
    spofId: 0,
    spofName: "",
    spofDescription: "",
    spofType: "",
    spofDiscount: "0",
    spofStartDate: "",
    spofEndDate: "",
    spofMinQty: 0,
    spofMaxQty: 0,
    spofModifiedDate: "",
  });

  const [bookingOrder, setBookingOrder] = useState({
    dateStart: dayjs(Date.now()),
    dateEnd: dayjs(addOneDay),
    hotelName: hotelName,
    hotelId: id,
  });

  const { RangePicker } = DatePicker;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const onChangeState = (key: string, value: any) => {
    setBookingOrder((prev) => ({ ...prev, [key]: value }));
  };

  const onClear = () => {
    setCouponDiscount({
      spofId: 0,
      spofName: "",
      spofDescription: "",
      spofType: "",
      spofDiscount: "0",
      spofStartDate: "",
      spofEndDate: "",
      spofMinQty: 0,
      spofMaxQty: 0,
      spofModifiedDate: "",
    });
    setOpenModal(!openModal);
  };

  let totalPrice =
    convertPrice(faciRatePrice) * totalBooking -
    convertPrice(couponDiscount.spofDiscount);

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    return current && current <= dayjs(reduceOneDay);
  };

  useEffect(() => {
    onChangeState("faciName", faciName);
    onChangeState("saving", convertPrice(couponDiscount.spofDiscount));
    onChangeState("price", convertPrice(faciRatePrice) * totalBooking);
    onChangeState("faciTaxRate", convertPrice(faciTaxRate));
    onChangeState("faciRatePrice", convertPrice(faciRatePrice));
    onChangeState("totalPrice", totalPrice);
    onChangeState("coupon", couponDiscount.spofName);
  }, [faciName, couponDiscount, totalPrice]);

  return (
    <div className="flex flex-col gap-5 rounded-xl w-[100%] h-96 bg-white shadow-[0px_2px_10px_2px_#00000024] p-4">
      <Space direction="vertical">
        <RangePicker
          defaultValue={[dayjs(Date.now()), dayjs(addOneDay)]}
          allowClear={false}
          disabledDate={disabledDate}
          style={{ width: "100%" }}
          onChange={(value, dateString) => {
            setTotalBooking(bookingDays(dateString[0], dateString[1]));
            onChangeState("dateStart", dateString[0]);
            onChangeState("dateEnd", dateString[1]);
          }}
        />
      </Space>
      <div>
        <p className="card-title">{`Rp. ${formatPrice(
          convertPrice(faciRatePrice) * totalBooking
        )}`}</p>
        <p className="text-sm font-thin">termasuk pajak</p>
        <p className="text-sm font-thin">{faciName}</p>
      </div>
      <div className="flex justify-between items-center border p-4">
        <span className="w-full cursor-pointer" onClick={handleOpenModal}>
          {couponDiscount.spofName ? couponDiscount.spofName : "Get Coupon"}
        </span>
        <input
          type="checkbox"
          checked={openModal}
          onChange={handleOpenModal}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box w-[20%]">
            <p className="font-bold text-xl mb-4">Coupon</p>
            <div className="flex flex-col gap-3">
              {coupon.map(
                (item: any, index: number) =>
                  index <= 5 && (
                    <label>
                      <input
                        className="mr-4"
                        type="radio"
                        name="coupon"
                        checked={couponDiscount.spofName === item.spofName}
                        value={JSON.stringify(item)}
                        onChange={(e) =>
                          setCouponDiscount(JSON.parse(e.target.value))
                        }
                        onClick={handleOpenModal}
                      />
                      {item.spofName}
                    </label>
                  )
              )}
            </div>
            <div className="modal-action">
              <button className="btn" onClick={onClear}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <span className="text-sm">
          {couponDiscount.spofDiscount
            ? `Rp.${convertPrice(couponDiscount.spofDiscount)}`
            : "Rp.0"}
        </span>
      </div>
      <div className="summary-order">
        <div className="flex justify-between items-center">
          <p className="card-title">Your savings</p>
          <p className="text-sm">
            {couponDiscount.spofDiscount
              ? `Rp. ${convertPrice(couponDiscount.spofDiscount)}`
              : "Rp. 0"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="card-title">Total Price</p>
          <p className="text-sm">{`Rp. ${formatPrice(totalPrice)}`}</p>
        </div>
      </div>
      <div className="card-actions">
        <Link
          href={`${id}/order`}
          className="w-full"
          onClick={() => {
            dispatch(CreateBoSuccess(bookingOrder));
          }}
        >
          <Button label="Continue to Book" fullWidth />
        </Link>
      </div>
    </div>
  );
}
