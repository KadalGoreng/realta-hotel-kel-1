import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { StarFilled } from "@ant-design/icons";
import {
  addOneDay,
  calculateRating,
  convertPrice,
  formatHotelRating,
  formatPrice,
  removeDuplicates,
} from "@/utils/helpers";
import dayjs from "dayjs";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import { CreateBoSuccess } from "@/Redux/Actions/BookingHotelAction";
import { useRouter } from "next/router";

export default function Card(props: any) {
  const { hotelId, hotelName, hotelReviews, hotelAddr, facilities } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const aminities = removeDuplicates([...facilities]);

  const [bookingOrder, setBookingOrder] = useState({
    dateStart: dayjs(Date.now()),
    dateEnd: dayjs(addOneDay),
    hotelName: hotelName,
    hotelId: hotelId,
  });

  const moreFacility = aminities.length - 3;
  const primaryImage = facilities[0].facilityPhotos.map(
    (item: any) => item.faphoPrimary === true && item.faphoPhotoFilename
  );

  const onChangeState = (key: string, value: any) => {
    setBookingOrder((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    onChangeState("faciName", facilities[0].faciName);
    onChangeState("faciId", facilities[0].faciId);
    onChangeState("saving", 0);
    onChangeState("price", convertPrice(facilities[0].faciRatePrice));
    onChangeState("faciTaxRate", convertPrice(facilities[0].faciTaxRate));
    onChangeState("faciRatePrice", convertPrice(facilities[0].faciRatePrice));
    onChangeState("totalPrice", convertPrice(facilities[0].faciRatePrice));
    onChangeState("coupon", null);
  }, []);

  const createBooking = () => {
    dispatch(CreateBoSuccess(bookingOrder));
    router.push(`booking/room/${hotelId}/order`);
  };

  return (
    <div key={hotelId} className="border-b-[2px] pb-4">
      <div className="flex gap-5">
        <div className="flex w-[30%]">
          <div
            className="w-[500px] h-[206px] overflow-hidden"
            id={`slide1${hotelId}`}
          >
            {facilities[0].facilityPhotos.length > 0 ? (
              <img
                src={`http://localhost:3002/uploads/${primaryImage}`}
                className="min-w-full min-h-full"
              />
            ) : (
              <img
                src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <div className="title">
              <p className="text-xl font-bold">{hotelName}</p>
              <span className="font-light">{`${hotelAddr.addrPostalCode}, ${hotelAddr.addrLine1}, ${hotelAddr.addrLine2}`}</span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <span className="badge rounded-md bg-[#c78e3c] border-none">
                {calculateRating(hotelReviews)} <StarFilled className="ml-2" />
              </span>
              <span className="font-thin">
                ({(hotelReviews && hotelReviews.length) || 0} Ratings)
              </span>
              <span className="font-light">
                {formatHotelRating(calculateRating(hotelReviews))}
              </span>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              {aminities.map(
                (facility: any, index: number) =>
                  index < 3 && (
                    <div className="flex items-center gap-1">
                      <img
                        src={`/icons/${facility.faciCagro.cagroIcon}`}
                        className="w-[20px]"
                      />
                      <span className="font-thin">
                        {facility.faciCagro.cagroName}
                      </span>
                    </div>
                  )
              )}
              {moreFacility > 0 && <span>+ {moreFacility} more</span>}
            </div>
          </div>
          {facilities.length !== 0 && (
            <div className="flex gap-7">
              <div className="flex flex-col justify-around">
                <span className="font-bold">{facilities[0].faciName}</span>
                {/* <span className="font-bold text-[#B82B18] text-[20px]"> */}
                <span className="font-bold text-red-600 text-[20px]">
                  {`Rp. ${formatPrice(
                    convertPrice(facilities[0].faciRatePrice)
                  )}`}
                </span>
                <span className="font-thin text-sm">per room per night</span>
              </div>
              <div className="flex items-end gap-5">
                <Link href={`/booking/room/${hotelId}`}>
                  <ButtonOutline label="View Details" />
                </Link>
                <Button label="Book Now" btnSmall onClick={createBooking} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
