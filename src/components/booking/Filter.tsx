import React from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

export default function Filter(props: any) {
  const { priceFilter, category, setPriceValue, setSelectedPage, setCategory } =
    props;

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

  return (
    <aside className="w-[25%] p-4 border-r-[2px] max-md:hidden">
      <div className="sticky top-0">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">Filters</span>
          <button>Clear All</button>
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
            <label>
              <input
                className="mr-4"
                type="checkbox"
                value="Restaurant"
                onChange={handleFilterChange}
              />
              Restaurant
            </label>
            <label>
              <input
                className="mr-4"
                type="checkbox"
                value="Gym"
                onChange={handleFilterChange}
              />
              Gym
            </label>
            <label>
              <input
                className="mr-4"
                type="checkbox"
                value="Room"
                onChange={handleFilterChange}
              />
              Ball Room
            </label>
            <label>
              <input
                className="mr-4"
                type="checkbox"
                value="Swimming Pool"
                onChange={handleFilterChange}
              />
              Swimming Pool
            </label>
          </div>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </aside>
  );
}
