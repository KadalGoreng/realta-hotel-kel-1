import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  CarOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";
import {
  calculateRating,
  convertPrice,
  formatHotelRating,
  formatPrice,
  removeDuplicates,
} from "@/utils/helpers";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

export default function Card(props: any) {
  const { hotelId, hotelName, hotelReviews, hotelAddr, facilities } = props;
  console.log(facilities);

  const aminities = removeDuplicates([...facilities]);

  const moreFacility = aminities.length - 3;
  const primaryImage = facilities[0].facilityPhotos.map(
    (item: any) => item.faphoPrimary === true && item.faphoPhotoFilename
  );

  return (
    <div key={hotelId} className="border-b-[2px] pb-4">
      <div className="flex gap-5">
        <div className="flex w-[30%]">
          <div
            className="w-[500px] h-[206px] overflow-hidden"
            id={`slide1${hotelId}`}
            // className="carousel-item relative w-full"
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
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide4${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide2${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div> */}
          </div>
          {/* <div
            id={`slide2${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide1${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide3${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id={`slide3${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide2${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide4${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id={`slide4${hotelId}`}
            className="carousel-item relative w-full"
          >
            <img
              src="https://www.fastcat.com.ph/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-masonry-100.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide3${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide1${hotelId}`}
                className="btn btn-circle opacity-50"
              >
                ❯
              </a>
            </div>
          </div> */}
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
                <Button label="Book Now" btnSmall />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
