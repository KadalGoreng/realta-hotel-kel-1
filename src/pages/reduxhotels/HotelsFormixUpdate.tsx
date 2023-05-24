import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditHotelsRequest, FindHotelsRequest } from "@/redux-saga/action/hotelsAction";
import { GetAddressRequest, FindAddressRequest } from "../../redux-saga/action/master/addressAction";

export default function FormikHotelsUpdate(props: any) {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state: any) => state.hotelsState);
  const { hotel } = useSelector((state: any) => state.hotelsState);
  const [city, setCity] = useState<number>(hotel.hotelAddr && hotel.hotelAddr.addrId);
  const { addresses, address } = useSelector((state: any) => state.addressState);

  console.log(hotel);
  console.log(city);

  useEffect(() => {
    dispatch(FindHotelsRequest(props.id));
    dispatch(GetAddressRequest());
    dispatch(FindAddressRequest(city));
  }, [dispatch, props.id, city]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      hotelName: hotels.hotelName,
      hotelDescription: hotels.hotelDescription,
      hotelRatingStar: hotels.hotelRatingStar,
      hotelPhonenumber: hotels.hotelPhonenumber,
      hotelModifiedDate: hotels.hotelModifiedDate,
      hotelAdddr: hotels.hotelAdddr && hotels.hotelAddr.addrId,
    },

    onSubmit: async (values) => {
      const payload = {
        id: values.id,
        hotelName: values.hotelName,
        hotelDescription: values.hotelDescription,
        hotelPhonenumber: values.hotelPhonenumber,
        hotelAddr: city,
      };

      dispatch(EditHotelsRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Edit Hotels</h1>

                <div className="mb-4">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Hotel ID
                  </label>
                  <input
                    placeholder={props.id}
                    defaultValue={hotels.id}
                    type="text"
                    name="hotelId"
                    id="hotelId"
                    // value={formik.values.id}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    disabled
                  />
                </div>

                <div className="mb-4">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Hotels Name
                  </label>
                  <input
                    type="text"
                    name="hotelName"
                    id="hotelName"
                    onChange={formik.handleChange}
                    value={formik.values.hotelName}
                    defaultValue={hotel.hotelName}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-4">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hotelPhonenumber"
                    id="hotelPhonenumber"
                    value={formik.values.hotelPhonenumber}
                    onChange={formik.handleChange}
                    defaultValue={hotel.hotelPhonenumber}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">City</label>
                  <select name="hotelAddr" id="hotelAddr" onChange={handleChange} value={city} onBlur={formik.handleBlur} className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900">
                    <option value="" selected disabled hidden className="text-black ">
                      Search City
                    </option>

                    {addresses.map((item: any) => (
                      <option key={item.addrId} value={item.addrId} className="text-black">
                        {item.addrLine2}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 text-black">
                  <p className="block text-black text-sm font-bold mb-2">Address</p>
                  <p className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900">
                    {city === undefined
                      ? "Address"
                      : `${address.addrLine1}, ${address.addrLine2}, ${address.addrProv && address.addrProv.provName}, ${address.addrPostalCode}, ${
                          address.addrProv && address.addrProv.provCountry && address.addrProv.provCountry.countryName
                        }`}
                  </p>
                </div>

                <div className="mb-4">
                  <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formik.values.hotelAdddr}
                    onChange={formik.handleChange}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
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
                <button
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                  // onclick="modalHandler()"
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
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-12" id="button">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
              // onclick="modalHandler(true)"
            >
              Open Modal
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
