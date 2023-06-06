import {
  GetCouponRequest,
  GetHotelByIdRequest,
  GetReviewByIdRequest,
} from "@/Redux/Actions/BookingHotelAction";
import { GetPolicyByCategRequest } from "@/Redux/Actions/masterAction";
import AnotherRoom from "@/components/booking/AnotherRoom";
import OrderSummary from "@/components/booking/OrderSummary";
import {
  calculateRating,
  calculateRatingBySingleStar,
  formatDate,
  removeDuplicates,
} from "@/utils/helpers";
import { StarFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BookingRoom() {
  const router = useRouter();

  const { id } = router.query;

  const { hotel } = useSelector((state: any) => state.bookingHotelState);
  const { review } = useSelector((state: any) => state.bookingHotelState);
  const { coupon } = useSelector((state: any) => state.bookingHotelState);
  const { policyByCategory } = useSelector((state: any) => state.masterState);

  const aminities = removeDuplicates([...hotel]);

  const moreFacility = aminities.length - 3;

  const [selected, setSelected] = useState<number>(0);
  const [showMore, setShowMore] = useState(false);

  const room = hotel.filter((item: any) => item.faciCagro.cagroId == 1);
  const facilitySelected = hotel.find((item: any) => item.faciId === selected);

  const dispatch = useDispatch();

  const rating = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarFilled key={i} className="text-[#ffc400]" />);
      } else {
        stars.push(<StarFilled key={i} className="text-[#d3e0f0]" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    if (router.isReady) {
      dispatch(GetHotelByIdRequest(id));
      dispatch(GetReviewByIdRequest(id));
      dispatch(GetCouponRequest());
      dispatch(GetPolicyByCategRequest(1));
    }
  }, [id]);

  return (
    <div className="flex flex-col">
      {hotel[0] && review && (
        <>
          <div className="flex">
            <img
              src={`http://localhost:3002/uploads/${hotel[0].facilityPhotos[0].faphoPhotoFilename}`}
              className="w-[25%]"
            />
            <img
              src={`http://localhost:3002/uploads/${hotel[0].facilityPhotos[0].faphoPhotoFilename}`}
              className="w-[25%]"
            />
            <img
              src={`http://localhost:3002/uploads/${hotel[0].facilityPhotos[0].faphoPhotoFilename}`}
              className="w-[25%]"
            />
            <img
              src={`http://localhost:3002/uploads/${hotel[0].facilityPhotos[0].faphoPhotoFilename}`}
              className="w-[25%]"
            />
          </div>
          <div className="flex my-5 mx-auto max-w-7xl w-[90%] gap-16">
            <div className="flex flex-col gap-4 w-[65%]">
              <div className="title">
                <div className="flex justify-between">
                  <span className="text-3xl font-bold mb-2">
                    {hotel[0].faciHotel.hotelName}
                  </span>
                  <span
                    className="flex items-center gap-1 font-bold badge text-gray-600 bg-transparent
               border-none rounded-md text-[16px]"
                  >
                    <StarFilled className="text-[#FFC400]" />{" "}
                    {calculateRating(review)}
                    <span className="text-gray-400 ">
                      ({(review && review.length) || 0} Rating)
                    </span>
                  </span>
                </div>
                <span className="font-light text-gray-600">
                  {`${hotel[0].faciHotel.hotelAddr.addrPostalCode}, ${hotel[0].faciHotel.hotelAddr.addrLine1}, ${hotel[0].faciHotel.hotelAddr.addrLine2}`}
                </span>
              </div>
              <div className="items-center">
                <p className="font-bold text-2xl mb-2">Description</p>
                <span className="font-light text-gray-600">
                  {hotel[0].faciHotel.hotelDescription}
                </span>
              </div>
              <div className="items-center leading-7">
                <p className="font-bold text-2xl mb-2">Amenities</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4 w-[45%] flex-wrap text-gray-600">
                    {showMore
                      ? aminities.map((facility: any) => (
                          <div className="flex items-center gap-1">
                            <img
                              src={`/icons/${facility.faciCagro.cagroIcon}`}
                              className="w-[20px]"
                            />
                            <span className="font-thin">
                              {facility.faciCagro.cagroName}
                            </span>
                          </div>
                        ))
                      : aminities.map(
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
                  </div>
                  {moreFacility > 0 && (
                    <span
                      className="font-bold text-[#b37d31] cursor-pointer mt-2"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {!showMore ? "Show more" : "Show less"}
                    </span>
                  )}
                </div>
              </div>
              <div className="">
                <p className="font-bold text-2xl my-3">Another Rooms</p>
                <div className="flex flex-col gap-3">
                  {room &&
                    room.map((item: any) => (
                      <AnotherRoom
                        {...item}
                        setSelected={setSelected}
                        selected={selected}
                      />
                    ))}
                </div>
              </div>
              <div>
                <p className="mb-2 font-bold text-2xl">Rating and Reviews</p>
                <div className="flex mb-5">
                  <div className="w-full">
                    {calculateRatingBySingleStar(review)
                      .reverse()
                      .map((rating: any, index: number) => (
                        <div className="flex items-center mt-4">
                          <span className="text-sm flex items-center gap-1 font-medium">
                            <StarFilled className="text-[#ffc400]" />{" "}
                            {5 - index}
                          </span>
                          <div className="w-3/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                              style={{
                                width: `${(rating / review.length) * 100}%`,
                              }}
                              className={`h-1 bg-green-500 rounded`}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {(rating / review.length) * 100} %
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="flex items-center">
                    <StarFilled className="text-[#ffc400]" />
                    <span className="p-5 gap-2 text-[40px]">
                      {calculateRating(review)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {review.map((item: any) => (
                    <div>
                      <div className="flex justify-between">
                        <div>
                          <span className="font-semibold">
                            {`${item.horeUser.userFullName} · `}
                          </span>
                          <span className="font-light text-[14px]">{`${formatDate(
                            item.horeCreatedOn,
                            undefined,
                            "numeric"
                          )}`}</span>
                        </div>
                        <span className="flex items-center gap-1 font-bold">
                          {rating(item.horeRating)}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.horeUserReview}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 font-bold text-2xl">Hotel Policies</p>
                <ul className="list-disc pl-5">
                  {policyByCategory &&
                    policyByCategory.map((item: any) => (
                      <li className="text-gray-600">{item.poliDescription}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="w-[35%]">
              <OrderSummary
                coupon={coupon}
                id={id}
                {...hotel[0]}
                {...facilitySelected}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
