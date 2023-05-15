import { GetBookingHotelRequest } from "@/Redux/Actions/BookingHotelAction";
import Card from "@/components/booking/Card";
import Filter from "@/components/booking/Filter";
import { convertPrice } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

export default function Booking() {
  const dispatch = useDispatch();

  const { bookingHotel } = useSelector((state: any) => state.bookingHotelState);

  useEffect(() => {
    dispatch(GetBookingHotelRequest());
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const [category, setCategory] = useState([]);
  const [priceFilter, setPriceValue] = React.useState<number[]>([
    100000, 10000000,
  ]);
  const [selectedPage, setSelectedPage] = useState(0);

  const hotelFilter = bookingHotel
    .map(
      (item: any) =>
        priceFilter[0] < convertPrice(item.facilities[0].faciRatePrice) &&
        priceFilter[1] > convertPrice(item.facilities[0].faciRatePrice) &&
        category.every((categ) =>
          item.facilities.some((ele: any) => ele.faciCagro.cagroName === categ)
        ) &&
        item
    )
    .filter(Boolean);

  const test = bookingHotel.map((item: any) =>
    category.every((categ) =>
      item.facilities.some((ele: any) => ele.faciCagro.cagroName === categ)
    )
  );
  console.log(test);

  const endOffset = itemOffset + 10;
  // const currentItems = bookingHotel.slice(itemOffset, endOffset);
  const itemsSearch = hotelFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(hotelFilter.length / 10);

  const handlePageClick = (event: any) => {
    setSelectedPage(event.selected);
  };

  useEffect(() => {
    const newOffset = (selectedPage * 10) % hotelFilter.length;
    setItemOffset(newOffset);
  });
  console.log(category);

  return (
    <div className="flex min-h-screen">
      <Filter
        priceFilter={priceFilter}
        category={category}
        setPriceValue={setPriceValue}
        setSelectedPage={setSelectedPage}
        setCategory={setCategory}
      />
      <div className="w-full lg:w-[75%]">
        <div className="flex">
          <div className="p-5">
            <div className="mb-3">Home</div>
            <div className="flex flex-col gap-10">
              {bookingHotel.length === 0 ? (
                <div className="h-[100vh]">Loading...</div>
              ) : (
                itemsSearch.map((item: any, index: number) => (
                  <Card {...item} />
                ))
              )}
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="< prev"
                containerClassName="flex gap-1"
                renderOnZeroPageCount={null}
                nextClassName="btn btn-sm rounded btn-outline"
                previousClassName="btn btn-sm rounded btn-outline"
                activeLinkClassName="bg-[#1C1C1C] text-white"
                pageLinkClassName="btn btn-sm rounded btn-outline"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
