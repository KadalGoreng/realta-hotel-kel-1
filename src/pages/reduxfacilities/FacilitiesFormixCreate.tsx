import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFacilitiesRequest } from "@/redux-saga/action/facilitiesAction";
import { GetCategoryGroupRequest } from "@/redux-saga/action/master/categoryGroupAction";

export default function FormikFacilitiesCreate(props: any) {
  const dispatch = useDispatch();
  const { categoryGroups } = useSelector((state: any) => state.categoryGroupState);

  useEffect(() => {
    dispatch(GetCategoryGroupRequest());
  }, [dispatch]);

  const convertPrice = (price: string) => {
    return parseFloat(price.replace(/[$,RP.]/gi, ""));
  };

  const formik = useFormik({
    initialValues: {
      faciName: "",
      faciDescription: "",
      faciRoomNumber: "",
      faciMaxNumber: "",
      faciMeasureUnit: "",
      faciLowPrice: "",
      faciHighPrice: "",
      faciRatePrice: "",
      faciDiscount: "",
      faciTaxRate: "",
      faciStartdate: "",
      faciEnddate: "",
      faciCagro: "",
      faciHotel: Number(props.id),
    },

    onSubmit: async (values) => {
      const payload = {
        faciName: values.faciName,
        faciDescription: values.faciDescription,
        faciRoomNumber: values.faciRoomNumber,
        faciMaxNumber: values.faciMaxNumber,
        faciMeasureUnit: values.faciMeasureUnit,
        faciLowPrice: values.faciLowPrice,
        faciHighPrice: values.faciHighPrice,
        faciRatePrice: ((convertPrice(values.faciHighPrice) + convertPrice(values.faciLowPrice)) / 2).toString(),
        faciDiscount: convertPrice(values.faciDiscount).toString(),
        faciTaxRate: convertPrice(values.faciTaxRate).toString(),
        faciStartdate: values.faciStartdate,
        faciEnddate: values.faciEnddate,
        faciCagro: Number(values.faciCagro),
        faciHotel: Number(props.id),
      };

      console.log(payload);

      dispatch(AddFacilitiesRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add Facility</h1>

              <div className="flex gap-3">
                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Facilities Name
                  </label>
                  <input
                    type="text"
                    name="faciName"
                    id="faciName"
                    value={formik.values.faciName}
                    onChange={formik.handleChange}
                    placeholder="Name"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Category
                  </label>
                  <select
                    name="faciCagro"
                    id="faciCagro"
                    value={formik.values.faciCagro}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  >
                    <option value="" selected disabled hidden className="text-black">
                      Room
                    </option>
                    {categoryGroups.map((item: any) => (
                      <option key={item.cagroId} value={item.cagroId} className="text-black">
                        {item.cagroName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Room Number
                  </label>
                  <input
                    type="text"
                    name="faciRoomNumber"
                    id="faciRoomNumber"
                    value={formik.values.faciRoomNumber}
                    onChange={formik.handleChange}
                    placeholder="Room Number"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Max Vacant
                  </label>
                  <input
                    type="number"
                    name="faciMaxNumber"
                    id="faciMaxNumber"
                    value={formik.values.faciMaxNumber}
                    onChange={formik.handleChange}
                    placeholder="Max Vacant"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">Measure Unit</label>
                  <select name="faciMeasureUnit" id="faciMeasureUnit" onChange={formik.handleChange} value={formik.values.faciMeasureUnit} onBlur={formik.handleBlur} className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                    <option value="" selected disabled hidden className="text-black">
                      Choose Measure Unit
                    </option>
                    <option value={"Room"}>Room</option>
                    <option value={"Beds"}>Beds</option>
                    <option value={"People"}>People</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Low Price
                  </label>
                  <input
                    type="text"
                    name="faciLowPrice"
                    id="faciLowPrice"
                    value={formik.values.faciLowPrice}
                    onChange={formik.handleChange}
                    placeholder="Low Price"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    High Price
                  </label>
                  <input
                    type="text"
                    name="faciHighPrice"
                    id="faciHighPrice"
                    value={formik.values.faciHighPrice}
                    onChange={formik.handleChange}
                    placeholder="High Price"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Disc %
                  </label>
                  <input
                    type="text"
                    name="faciDiscount"
                    id="faciDiscount"
                    value={formik.values.faciDiscount}
                    onChange={formik.handleChange}
                    placeholder="Disc %"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Tax
                  </label>
                  <input
                    type="text"
                    name="faciTaxRate"
                    id="faciTaxRate"
                    value={formik.values.faciTaxRate}
                    onChange={formik.handleChange}
                    placeholder="Tax %"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="faciStartdate"
                    id="faciStartdate"
                    value={formik.values.faciStartdate}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-2">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="faciEnddate"
                    id="faciEnddate"
                    value={formik.values.faciEnddate}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>

              <div className="flex items-center justify-start w-full">
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={() => props.setDisplay(false)}
                >
                  Cancel
                </button>
              </div>
              {/* <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                //   onclick="modalHandler()"
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-12" id="button">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            //   onclick="modalHandler(true)"
          >
            Open Modal
          </button>
        </div>
      </div>
    </form>
  );
}
