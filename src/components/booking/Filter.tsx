import React from "react";

export default function Filter() {
  return (
    <aside className="w-[25%] p-4 border-r-[1px] max-md:hidden">
      <div className="sticky top-0">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">Filters</span>
          <button>Clear All</button>
        </div>
        <div className="facilities flex flex-col py-4 gap-3 border-b-[1px]">
          <p className="font-bold">Price Range</p>
          <div className="flex gap-1">
            <input type="number" className="w-[50%]" />
            <span className="px-4">sampai</span>
            <input type="number" className="w-[50%]" />
          </div>
        </div>
        <div className="facilities flex flex-col py-4 gap-3">
          <p className="font-bold">Hotel Facility</p>
          <div className="flex flex-col pl-4 gap-3">
            <label>
              <input className="mr-4" type="checkbox" name="" id="" />
              Parking
            </label>
            <label>
              <input className="mr-4" type="checkbox" name="" id="" />
              Security
            </label>
            <label>
              <input className="mr-4" type="checkbox" name="" id="" />
              Restaurant
            </label>
            <label>
              <input className="mr-4" type="checkbox" name="" id="" />
              Laundry
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-sm">Save Filter</button>
        </div>
      </div>
    </aside>
  );
}
