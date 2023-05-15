import { GetCouponRequest } from "@/Redux/Actions/BookingHotelAction";
import AnotherRoom from "@/components/booking/AnotherRoom";
import OrderSummary from "@/components/booking/OrderSummary";
import {
  calculateRating,
  calculateRatingBySingleStar,
  formatDate,
  removeDuplicates,
} from "@/utils/helpers";
import { CarOutlined, StarFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BookingRoom() {
  const router = useRouter();

  console.log(router);
  const { id } = router.query;

  const { bookingHotel } = useSelector((state: any) => state.bookingHotelState);
  const { coupon } = useSelector((state: any) => state.bookingHotelState);

  if (!id) {
    return null;
  }

  const data = bookingHotel.find((item: any) => item.hotelId == id);

  const { hotelReviews } = data;
  const { facilities } = data;

  const aminities = removeDuplicates([...facilities]);

  const moreFacility = aminities.length - 3;

  const [selected, setSelected] = useState(facilities[0].faciName);
  const [showMore, setShowMore] = useState(false);

  const room = facilities.filter((item: any) => item.faciCagro.cagroId == 1);
  const facilitySelected = facilities.find(
    (item: any) => item.faciName === selected
  );

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

  const singleRating = calculateRatingBySingleStar(hotelReviews).reverse();

  useEffect(() => {
    dispatch(GetCouponRequest());
    // dispatch(GetFacilityByHotelRequest(id));
  }, []);
  // console.log(
  //   (hotelReviews.length / calculateRatingBySingleStar(hotelReviews)[2]) * 100
  // );
  console.log(
    (calculateRatingBySingleStar(hotelReviews)[4] / hotelReviews.length) * 100
  );

  // calculateRatingBySingleStar(hotelReviews);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
          className="w-[25%]"
        />
        <img
          src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
          className="w-[25%]"
        />
        <img
          src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
          className="w-[25%]"
        />
        <img
          src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
          className="w-[25%]"
        />
      </div>
      <div className="flex my-5 mx-auto max-w-7xl w-[90%] gap-16">
        <div className="flex flex-col gap-4 w-[65%]">
          <div className="title">
            <div className="flex justify-between">
              <span className="text-2xl font-bold mb-2">
                {data && data.hotelName}
              </span>
              <span
                className="flex items-center gap-1 font-bold badge text-gray-600 bg-transparent
               border-none rounded-md text-[16px]"
              >
                <StarFilled className="text-[#FFC400]" />{" "}
                {calculateRating(hotelReviews)}
                {/* <span className="text-gray-400 ">
                  ({(hotelReviews && hotelReviews.length) || 0} Rating)
                </span> */}
              </span>
            </div>
            <span className="font-light text-gray-600">
              {data &&
                `${data.hotelAddr.addrPostalCode}, ${data.hotelAddr.addrLine1}, ${data.hotelAddr.addrLine2}`}
            </span>
          </div>
          <div className="items-center">
            <p className="font-bold text-xl mb-2">Description</p>
            <span className="font-light text-gray-600">
              {data && data.hotelDescription}
            </span>
          </div>
          <div className="items-center leading-7">
            <p className="font-bold text-xl mb-2">Amenities</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4 w-[45%] flex-wrap text-gray-600">
                {showMore
                  ? aminities.map((facility: any) => (
                      <div className="flex items-center gap-1">
                        <CarOutlined style={{ fontSize: "20px" }} />
                        <span className="font-thin">
                          {facility.faciCagro.cagroName}
                        </span>
                      </div>
                    ))
                  : aminities.map(
                      (facility: any, index: number) =>
                        index < 3 && (
                          <div className="flex items-center gap-1">
                            <CarOutlined style={{ fontSize: "20px" }} />
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
              {/* <div className="flex items-center gap-1">
                  <CarOutlined style={{ fontSize: "20px" }} />
                  <span className="font-thin">Parking</span>
                </div>
                <div className="flex items-center gap-1">
                  <CoffeeOutlined style={{ fontSize: "20px" }} />
                  <span className="font-thin">Coffee/Tea</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                  <span className="font-thin">Market</span>
                </div> */}
            </div>
          </div>
          <div className="">
            <p className="font-bold text-xl my-3">Another Rooms</p>
            <div className="flex flex-col gap-3">
              {room &&
                room.map((item: any, index: any) => (
                  <AnotherRoom
                    {...item}
                    setSelected={setSelected}
                    selected={selected}
                  />
                ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold text-xl">Rating and Reviews</p>
            <div className="flex mb-5">
              <div className="w-full">
                {singleRating.map((rating: any, index: number) => (
                  <div className="flex items-center mt-4">
                    <span className="text-sm flex items-center gap-1 font-medium">
                      <StarFilled className="text-[#ffc400]" /> {5 - index}
                    </span>
                    <div className="w-3/4 h-1 mx-4 bg-gray-200 rounded ">
                      <div
                        className={`h-1 bg-green-500 rounded w-[${
                          (rating / hotelReviews.length) * 100
                        }%]`}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {(rating / hotelReviews.length) * 100} %
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <StarFilled className="text-[#ffc400]" />
                <span className="p-5 gap-2 text-[40px]">
                  {calculateRating(hotelReviews)}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {data &&
                hotelReviews.map((item: any) => (
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-semibold">
                          {`${item.horeUser.userFullName} · `}
                        </span>
                        <span className="font-light">{`${formatDate(
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
            <p className="mb-2 font-bold text-xl">Hotel Policies</p>
            <span className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quas
              saepe praesentium, mollitia expedita culpa ad accusamus eum
              nesciunt impedit maiores. Numquam fugit molestias repellendus iure
              corporis labore officia fuga?
            </span>
          </div>
        </div>
        <div className="w-[35%]">
          <OrderSummary
            coupon={coupon}
            id={id}
            {...data}
            {...facilitySelected}
          />
        </div>
      </div>
    </div>
  );
}
