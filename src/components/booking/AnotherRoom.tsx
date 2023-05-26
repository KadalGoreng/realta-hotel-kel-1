import { convertPrice, formatPrice } from "@/utils/helpers";
import { CheckCircleFilled } from "@ant-design/icons";
import React from "react";
import ButtonOutline from "./ButtonOutline";

export default function AnotherRoom(props: any) {
  const {
    faciName,
    faciId,
    faciRatePrice,
    faciMaxNumber,
    setSelected,
    selected,
    facilityPhotos,
  } = props;

  return (
    <div className="flex gap-4 rounded-lg p-4 bg-white shadow-[0px_2px_10px_2px_#00000024]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl flex items-center gap-2 flex-wrap">
              {faciName} {selected == faciName && <CheckCircleFilled />}
            </span>
            <span>Max Vacant: {faciMaxNumber}</span>
            <span>Rp. {formatPrice(convertPrice(faciRatePrice))}</span>
          </div>
          {/* <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <CarOutlined style={{ fontSize: "20px" }} />
              <span className="font-thin ">Parking</span>
            </div>
            <div className="flex items-center gap-1">
              <CoffeeOutlined style={{ fontSize: "20px" }} />
              <span className="font-thin">Coffee/Tea</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              <span className="font-thin">Market</span>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col gap-3">
          <img
            className="rounded w-72 h-40"
            src={`http://localhost:3002/uploads/${facilityPhotos[0].faphoPhotoFilename}`}
            alt=""
          />
          {selected === faciId ? (
            <ButtonOutline
              onClick={() => setSelected(faciId)}
              label={
                <div className="flex items-center gap-2">
                  <CheckCircleFilled /> Selected
                </div>
              }
              textColor
              borderColor
              background
            />
          ) : (
            <ButtonOutline onClick={() => setSelected(faciId)} label="Select" />
          )}
        </div>
      </div>
    </div>
  );
}
