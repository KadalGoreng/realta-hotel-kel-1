import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import { FindUsersRequest, EditUsersRequest } from "../../../../redux/action/users/usersAction";
import { FindUserRolesRequest, EditUserRolesRequest } from "../../../../redux/action/users/user-rolesAction";
import { FindUserProfilesRequest, EditUserProfilesRequest } from "../../../../redux/action/users/user-profilesAction";

export default function EditGeneral(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.usersState);
  const { UserRoles } = useSelector((state: any) => state.UserRolesState);
  const { userprofile } = useSelector((state: any) => state.userprofilesState);

  useEffect(() => {
    dispatch(FindUsersRequest(props.id));
    dispatch(FindUserRolesRequest(props.id));
    dispatch(FindUserProfilesRequest(props.id));
  }, [dispatch, props.id, showModal]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userId: props.id,
      userFullName: user.userFullName,
      userType: user.userType,
      userCompanyName: user.userCompanyName,
      userPhoneNumber: user.userPhoneNumber,
      userEmail: user.userEmail,
      usroUserId: props.id,
      usroRole: UserRoles.usroRole,
      usproId: props.id,
      usproNationalId: userprofile.usproNationalId,
      usproJobTitle: userprofile.usproJobTitle,
      usproGender: userprofile.usproGender,
      usproMartialStatus: userprofile.usproMartialStatus,
      usproBirtDate: userprofile.usproBirtDate,
    },
    onSubmit: async (values) => {
      const payload = {
        userId: props.id,
        userFullName: values.userFullName,
        userType: values.userType,
        userCompanyName: values.userCompanyName,
        userPhoneNumber: values.userPhoneNumber,
        userEmail: values.userEmail,
      }
      const payload1 = {
        usroUserId: props.id,
        usroRole: Number(values.usroRole),
      }
      const payload2 = {
        usproId: props.id,
        usproNationalId: values.usproNationalId,
        usproJobTitle: values.usproJobTitle,
        usproGender: values.usproGender,
        usproMartialStatus: values.usproMartialStatus,
        usproBirtDate: values.usproBirtDate,
      }
      // console.log(payload);
      // console.log(payload1);
      // console.log(payload2);
      dispatch(EditUsersRequest(payload));
      dispatch(EditUserRolesRequest(payload1));
      dispatch(EditUserProfilesRequest(payload2));
      props.setRefresh(true);
      setShowModal(false);
    },
  });

  const editButton = () => {
    setId(props.id);
    setShowModal(true);
  };

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };


  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        onClick={editButton}
      >
        <span>Edit</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" overflow-y-scroll max-h-96 relative w-auto my-6 max-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">General</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">
                            Username
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="userFullName"
                            id="userFullName"
                            onChange={formik.handleChange}
                            value={formik.values.userFullName}
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="userEmail" className="block text-black text-left text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            onChange={formik.handleChange}
                            value={formik.values.userEmail}
                            placeholder="name@flowbite.com"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">
                            Type
                          </label>
                          <select
                            name="userType"
                            id="userType"
                            onChange={formik.handleChange}
                            value={formik.values.userType}
                            onBlur={formik.handleBlur}
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black">
                              Type
                            </option>
                            <option value={"T"}>T=Travel Agent</option>
                            <option value={"C"}>C=Corporate</option>
                            <option value={"I"}>I=Individual</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="userCompanyName" className="block text-black text-left text-sm font-bold mb-2">
                            Company
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="userCompanyName"
                            id="userCompanyName"
                            onChange={formik.handleChange}
                            value={formik.values.userCompanyName}
                            placeholder="PT.XYZ"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-black text-left text-sm font-bold mb-2">
                            Handphone
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="tel"
                            name="userPhoneNumber"
                            id="userPhoneNumber"
                            onChange={formik.handleChange}
                            value={formik.values.userPhoneNumber}
                            placeholder="123-45-678"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">
                            Role Type
                          </label>
                          <select
                            name="usroRole"
                            id="usroRole"
                            onChange={formik.handleChange}
                            value={formik.values.usroRole}
                            onBlur={formik.handleBlur}
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black">
                              Role Type
                            </option>
                            <option value={"1"}>1=Guest</option>
                            <option value={"2"}>2=Manager</option>
                            <option value={"3"}>3=OfficeBoy</option>
                            <option value={"4"}>4=Admin</option>
                            <option value={"5"}>5=User</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Profile</h3>
                      </div>
                      {/*body*/}
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2"> National Id </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="usproNationalId"
                            id="usproNationalId"
                            onChange={formik.handleChange}
                            value={formik.values.usproNationalId}
                            placeholder="National Id"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">
                            Birthdate
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="Date"
                            name="usproBirtDate"
                            id="usproBirtDate"
                            onChange={formik.handleChange}
                            value={formik.values.usproBirtDate}
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2"> Job Title </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="usproJobTitle"
                            id="usproJobTitle"
                            onChange={formik.handleChange}
                            value={formik.values.usproJobTitle}
                            placeholder="Job Title"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">Gender</label>
                          <select
                            name="usproGender"
                            id="usproGender"
                            onChange={formik.handleChange}
                            value={formik.values.usproGender}
                            onBlur={formik.handleBlur}
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black"
                            >
                              Gender
                            </option>
                            <option value={"M"}>M=Male</option>
                            <option value={"F"}>F=Famale</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-black text-left text-sm font-bold mb-2">Marital</label>
                          <select
                            name="usproMartialStatus"
                            id="usproMartialStatus"
                            onChange={formik.handleChange}
                            value={formik.values.usproMartialStatus}
                            onBlur={formik.handleBlur}
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black">
                              Marital
                            </option>
                            <option value={"M"}>Married</option>
                            <option value={"S"}>Single</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Close
                        </button>
                        <button
                          className="bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </FormikProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}