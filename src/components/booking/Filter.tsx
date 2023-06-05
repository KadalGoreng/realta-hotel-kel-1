import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetCagroRequest } from "@/Redux/Actions/BookingHotelAction";

export default function Filter(props: any) {
  const { priceFilter, category, setPriceValue, setSelectedPage, setCategory } =
    props;

  const { cagroName } = useSelector((state: any) => state.bookingHotelState);

  const dispatch = useDispatch();

  const handleFilterChange = (e: any) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((item: any) => item !== value));
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSelectedPage(0);
    setPriceValue(newValue as number[]);
  };

  const resetFilter = () => {
    setCategory([]);
    setPriceValue([100000, 10000000]);
  };

  useEffect(() => {
    dispatch(GetCagroRequest());
  }, []);

  return (
    <aside className="w-[25%] p-4 border-r-[2px] hidden md:inline">
      <div className="sticky top-0">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">Filters</span>
          <button className="text-red-500 font-bold" onClick={resetFilter}>
            Clear All
          </button>
        </div>
        <div className="facilities flex flex-col py-4 gap-3 border-b-[2px]">
          <p className="font-bold">Price Range</p>
          <div className="flex gap-1">
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                onChange={handleChange}
                value={priceFilter}
                min={100000}
                max={1000000}
              />
              <div className="flex justify-between">
                <span>Rp. {priceFilter[0]}</span>
                <span>Rp. {priceFilter[1]}</span>
              </div>
            </Box>
          </div>
        </div>
        <div className="facilities flex flex-col py-4 gap-3">
          <p className="font-bold">Hotel Facility</p>
          <div className="flex flex-col pl-4 gap-3">
            {cagroName &&
              cagroName.map((item: any) => (
                <label>
                  <input
                    className="mr-4"
                    type="checkbox"
                    value={item.cagroName}
                    checked={category.includes(item.cagroName)}
                    onChange={handleFilterChange}
                  />
                  {item.cagroName}
                </label>
              ))}
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </aside>
  );
}
