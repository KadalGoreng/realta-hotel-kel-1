import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditVendorRequest, FindVendorRequest } from "@/redux-saga/action/purchasing/vendorAction";

export default function VendorModalEdit(props: any) {
  const dispatch = useDispatch();
  const { vendor } = useSelector((state: any) => state.vendorState);
  console.log(vendor);
  useEffect(() => {
    dispatch(FindVendorRequest(props.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      vendorName: vendor.vendorName,
      vendorActive: vendor.vendorActive,
      vendorPriority: vendor.vendorPriority,
      vendorWeburl: vendor.vendorWeburl,
      vendorRegisterDate: vendor.vendorRegisterDate,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditVendorRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  console.log(props.status);
  console.log(props.priority);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Vendor</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div>
                <div className="flex items-center justify-center p-12">
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Vendor</label>
                          <input
                            id="vendorName"
                            name="vendorName"
                            defaultValue={vendor.vendorName}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Vendor Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        {/* <div className="w-full md:w-1/2 px-3">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Register Date</label>
                          <input
                            disabled
                            type="text"
                            placeholder={new Date().toString()}
                            className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div> */}
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
                          <select
                            onChange={formik.handleChange}
                            id="vendorActive"
                            name="vendorActive"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            {/* <option selected>{vendor.vendorActive}</option> */}
                            <option value="1" selected={props.status === 1}>
                              Active
                            </option>
                            <option value="0" selected={props.status === 0}>
                              Inactive
                            </option>
                          </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Priority</label>
                          <select
                            id="vendorPriority"
                            name="vendorPriority"
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            <option value="1" selected={props.priority === 1}>
                              Priority
                            </option>
                            <option value="0" selected={props.priority === 0}>
                              No Priority
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Site</label>
                        <input
                          id="vendorWeburl"
                          name="vendorWeburl"
                          onChange={formik.handleChange}
                          defaultValue={vendor.vendorWeburl}
                          type="text"
                          placeholder="Vendor WebUrl"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Register At</label>
                        <input
                          id="vendorRegisterDate"
                          name="vendorRegisterDate"
                          defaultValue={vendor.vendorRegisterDate}
                          onChange={formik.handleChange}
                          type="date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>

                      <div>
                        <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                          Submit
                        </button>
                        <button onClick={() => props.setDisplay(false)} className="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ======
// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { EditVendorRequest, FindVendorRequest } from "@/redux-saga/action/vendorAction";
// import VendorApi from "@/api/VendorApi";

// export default function VendorModalEdit(props: any) {
//   const dispatch = useDispatch();
//   // const { vendor } = useSelector((state: any) => state.vendorState);
//   // console.log(vendor);

//   const [vendor, setVendor] = useState<any>({
//     vendorId: null,
//     vendorName: "",
//     vendorActive: null,
//     vendorPriority: null,
//     vendorRegisterDate: "",
//   });
//   useEffect(() => {
//     // dispatch(FindVendorRequest(props.id));
//     VendorApi.FindData(props.id).then((data) => {
//       setVendor(data);
//     });
//   }, []);

//   console.log(vendor);
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       id: props.id,
//       // vendorName: vendor.vendorName,
//       // vendorActive: vendor.vendorActive,
//       // vendorPriority: vendor.vendorPriority,
//       // vendorWeburl: vendor.vendorWeburl,
//     },

//     onSubmit: async (values) => {
//       console.log(values);
//       dispatch(EditVendorRequest(values));
//       props.setDisplay(false);
//       window.alert("Data Successfully Insert");
//       props.setRefresh(!props.refresh);
//     },
//   });

//   return (
//     <>
//       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//         <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
//           {/*content*/}
//           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//             {/*header*/}
//             <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//               <h3 className="text-3xl font-semibold">Add Vendor</h3>
//               <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
//                 <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
//               </button>
//             </div>
//             {/*body*/}
//             {vendor && (
//               <div>
//                 <div>
//                   <div className="flex items-center justify-center p-12">
//                     <div>
//                       <form onSubmit={formik.handleSubmit}>
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                             <label className="mb-3 block text-base font-medium text-[#07074D]">Vendor</label>
//                             <input
//                               id="vendorName"
//                               name="vendorName"
//                               defaultValue={vendor.vendorName}
//                               onChange={formik.handleChange}
//                               type="text"
//                               placeholder="Vendor Name"
//                               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                           </div>
//                           <div className="w-full md:w-1/2 px-3">
//                             <label className="mb-3 block text-base font-medium text-[#07074D]">Register Date</label>
//                             <input
//                               disabled
//                               type="text"
//                               placeholder={new Date().toString()}
//                               className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             />
//                           </div>
//                         </div>

//                         <div className="flex flex-wrap -mx-3 mb-6">
//                           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                             <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
//                             <select
//                               onChange={formik.handleChange}
//                               id="vendorActive"
//                               name="vendorActive"
//                               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             >
//                               <option selected>{vendor.vendorActive}</option>
//                               <option value="1">Active</option>
//                               <option value="0">Inactive</option>
//                             </select>
//                           </div>

//                           <div className="w-full md:w-1/2 px-3">
//                             <label className="mb-3 block text-base font-medium text-[#07074D]">Priority</label>
//                             <select
//                               id="vendorPriority"
//                               name="vendorPriority"
//                               onChange={formik.handleChange}
//                               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                             >
//                               <option selected>{vendor.vendorPriority}</option>
//                               <option value="1">Priority</option>
//                               <option value="0">No Priority</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="mb-5">
//                           <label className="mb-3 block text-base font-medium text-[#07074D]">Site</label>
//                           <input
//                             id="vendorWeburl"
//                             name="vendorWeburl"
//                             onChange={formik.handleChange}
//                             defaultValue={vendor.vendorWeburl}
//                             type="text"
//                             placeholder="Vendor WebUrl"
//                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                           />
//                         </div>

//                         <div>
//                           <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
//                             Submit
//                           </button>
//                           <button onClick={() => props.setDisplay(false)} className="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
//                             Cancel
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
