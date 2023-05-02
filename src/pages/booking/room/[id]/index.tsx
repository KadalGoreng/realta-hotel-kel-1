import { GetCouponRequest } from "@/Redux/Actions/BookingHotelAction";
import AnotherRoom from "@/components/booking/AnotherRoom";
import OrderCard from "@/components/booking/OrderCard";
import OrderSummary from "@/components/booking/OrderSummary";
import { calculateRating, formatDate } from "@/utils/helpers";
import {
  CarOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

export default function BookingRoom() {
  const router = useRouter();

  const { id } = router.query;

  const { bookingHotel } = useSelector((state: any) => state.bookingHotelState);
  const { coupon } = useSelector((state: any) => state.bookingHotelState);

  const data = bookingHotel.find((item: any) => item.hotelId == id);

  const { hotelReviews } = data;
  const { facilities } = data;

  const [selected, setSelected] = useState(facilities[0].faciName);

  const room = facilities.filter((item: any) => item.faciCagro.cagroId == 1);
  const facilitySelected = facilities.find(
    (item: any) => item.faciName === selected
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCouponRequest());
    // dispatch(GetFacilityByHotelRequest(id));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+1"
          className="w-[25%]"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+2"
          className="w-[25%]"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+3"
          className="w-[25%]"
        />
        <img
          src="https://dummyimage.com/300x220/8f8f8f/ffffff.jpg&text=image+4"
          className="w-[25%]"
        />
      </div>
      <div className="flex my-5 mx-auto max-w-7xl w-[90%] gap-16">
        <div className="w-[65%]">
          <div className="title">
            <div className="flex justify-between">
              <span className="text-2xl font-bold">
                {data && data.hotelName}
              </span>
              <span className="flex items-center gap-1 font-bold badge badge-lg">
                {calculateRating(hotelReviews)} <StarOutlined />
              </span>
            </div>
            <span className="font-light">
              {data &&
                `${data.hotelAddr.addrPostalCode}, ${data.hotelAddr.addrLine1}, ${data.hotelAddr.addrLine2}`}
            </span>
          </div>
          <div className="mt-2 items-center">
            <p className="font-bold text-xl">Description</p>
            <span className="font-light">{data && data.hotelDescription}</span>
          </div>
          <div className="mt-2 items-center leading-7">
            <p className="font-bold text-xl">Amenities</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <CarOutlined style={{ fontSize: "20px" }} />
                {/* <AiFillCar size={"25"} /> */}
                <span className="font-thin">Parking</span>
              </div>
              <div className="flex items-center gap-1">
                <CoffeeOutlined style={{ fontSize: "20px" }} />
                {/* <GiCoffeeCup size={"25"} /> */}
                <span className="font-thin">Coffee/Tea</span>
              </div>
              <div className="flex items-center gap-1">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                {/* <FaCartPlus size={"23"} /> */}
                <span className="font-thin">Market</span>
              </div>
            </div>
          </div>
          <div className="mt-2">
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
          <div className="mt-2">
            <p className="mb-3 font-bold text-xl">Rating and Reviews</p>
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
                          item.horeCreatedOn
                        )}`}</span>
                      </div>
                      <span className="flex items-center gap-1 font-bold badge">
                        {item.horeRating}
                        <StarOutlined />
                      </span>
                    </div>
                    <p>{item.horeUserReview}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="mb-2 font-bold text-xl">Hotel Policies</p>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quas
              saepe praesentium, mollitia expedita culpa ad accusamus eum
              nesciunt impedit maiores. Numquam fugit molestias repellendus iure
              corporis labore officia fuga?
            </span>
          </div>
        </div>
        <div className="w-[35%]">
          <OrderSummary
            labelBtn="Continue to Book"
            coupon={coupon}
            id={id}
            {...facilitySelected}
          />
        </div>
      </div>
    </div>
  );
}
