import { DatePicker, Space } from "antd";
import React, { useState } from "react";

export default function OrderSummary(props) {
  const { labelBtn } = props;
  const { RangePicker } = DatePicker;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl w-96 h-96 bg-white shadow-xl p-4">
      <Space direction="vertical">
        <RangePicker style={{ width: "100%" }} />
      </Space>
      <div>
        <p className="card-title">Rp60.412</p>
        <p className="text-sm font-thin">termasuk pajak</p>
        <p className="text-sm font-thin">Indonesia Standart Double</p>
      </div>
      <div className="flex justify-between items-center border p-4">
        <span className="w-[100%] cursor-pointer" onClick={handleOpenModal}>
          Get Coupon
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
              <label>
                <input className="mr-4" type="radio" name="coupon" />
                New Comer
              </label>
              <label>
                <input className="mr-4" type="radio" name="coupon" />
                Using GoTo
              </label>
              <label>
                <input className="mr-4" type="radio" name="coupon" />
                More Than 2 People
              </label>
              <label>
                <input className="mr-4" type="radio" name="coupon" />
                VIP Member
              </label>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={handleOpenModal}>
                Close
              </button>
              <button className="btn" onClick={handleOpenModal}>
                Save
              </button>
            </div>
          </div>
        </div>
        <span className="text-sm">Rp60.412</span>
      </div>
      <div className="summary-order">
        <div className="flex justify-between items-center">
          <p className="card-title">Your savings</p>
          <p className="text-sm">Rp. -50.000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="card-title">Total Price</p>
          <p className="text-sm">Rp. 350.000</p>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn w-[100%]">{labelBtn}</button>
      </div>
    </div>
  );
}
