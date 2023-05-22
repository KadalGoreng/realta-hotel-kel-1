import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import { FindUsersRequest, EditUsersRequest } from "../../../../redux/action/users/usersAction";
import { FindRolesRequest, EditRolesRequest } from "../../../../redux/action/users/rolesAction";
import { FindUserProfilesRequest, EditUserProfilesRequest } from "../../../../redux/action/users/user-profilesAction";

export default function EditGeneral(props: any) {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState<number>();
    const dispatch = useDispatch();
    const { usmeUser } = useSelector((state: any) => state.usersState);
    const { UserRoles } = useSelector((state: any) => state.rolesState);
    const { userProfiles } = useSelector((state: any) => state.userprofilesState);

useEffect(() => {
    dispatch(FindUsersRequest(id));
    dispatch(FindRolesRequest(id));
    dispatch(FindUserProfilesRequest(id));
}, [dispatch, id, showModal]);

const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
        userId: props.id,
        userFullName: usmeUser.userFullName,
        userType: usmeUser.userType,
        userPhoneNumber: usmeUser.userPhoneNumber,
        userEmail: usmeUser.userEmail,
        roleId: props.id,
        roleName: UserRoles.roleName,
        usproId: props.id,
        usproNationalId: userProfiles.usproNationalId,
        usproJobTitle: userProfiles.usproJobTitle,
        usproGender: userProfiles.usproGender,
        usproMartialStatus: userProfiles.usproMartialStatus,
        usproBirtDate: userProfiles.usproBirtDate,
    },
    onSubmit: async (values) => {
      const payload = {
        userId: values.userId,
        userFullName: values.userFullName,
        userType: values.userType,
        userPhoneNumber: values.userPhoneNumber,
        userEmail: values.userEmail,
        roleId: values.roleId,
        roleName: values.roleName,
        usproId: values.usproId,
        usproNationalId: values.usproNationalId,
        usproJobTitle: values.usproJobTitle,
        usproGender: values.usproGender,
        usproMartialStatus: values.usproMartialStatus,
        usproBirtDate: values.usproBirtDate,
      }
        dispatch(EditUsersRequest(payload));
        dispatch(EditRolesRequest (payload));
        dispatch(EditUserProfilesRequest(payload));
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
        className="p-2 bg-emerald-700 text-white active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={editButton}
      >
        <span>Edit</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
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
                          <label className="block text-black text-sm font-bold mb-2">
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
                          <label htmlFor="userEmail" className="block text-black text-sm font-bold mb-2">
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
                          <label className="block text-black text-sm font-bold mb-2">
                            Type
                          </label>
                          <select
                              name="roleName"
                              id="roleName"
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
                              <option value={"T"}>Travel Agent</option>
                              <option value={"C"}>Corporate</option>
                              <option value={"I"}>Individual</option>
                            </select>
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-black text-sm font-bold mb-2">
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
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            Role Type
                          </label>
                            <select
                              name="roleName"
                              id="roleName"
                              onChange={formik.handleChange}
                              value={formik.values.roleName}
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
                              <option value={"Guest"}>Guest</option>
                              <option value={"Manajer"}>Manager</option>
                              <option value={"OfficeBoy"}>OfficeBoy</option>
                              <option value={"Admin"}>Admin</option>
                              <option value={"User"}>User</option>
                            </select>
                            </div>
                            </div>
<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-3xl font-semibold">Profile</h3>
            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
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
                        <label className="block text-black text-sm font-bold mb-2"> National Id </label>
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
                            <label className="block text-black text-sm font-bold mb-2">
                              Birddate
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="Date"
                              name="faciEnddate"
                              id="faciEnddate"
                              onChange={formik.handleChange}
                              value={formik.values.usproBirtDate}
                            />
                          </div>
                      </div>
                    <div className="flex gap-10">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2"> Job Title </label>
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
                        <label className="block text-black text-sm font-bold mb-2">Gender</label>
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
                              <option value={"M"}>Male</option>
                              <option value={"F"}>Famale</option>
                            </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2">Marital</label>
                            <select
                              name="usproGender"
                              id="usproGender"
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
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Close
                        </button>
                        <button
                          className="bg-sky-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </FormikProvider>
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