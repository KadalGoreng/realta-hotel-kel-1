import { useFormik } from "formik";
import React, { Fragment, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import AccountUpdateForm from "./AccountUpdateForm";
import AccountCreateForm from "./AccountCreateForm";
import {
  GetAccountRequest,
  AddAccountRequest,
  FindAccountRequest,
  EditAccountRequest,
  DelAccountRequest,
} from "@/redux/action/payment/AccountAction";
import { GetBankRequest } from "@/redux/action/payment/BankAction";
import { GetFintechRequest } from "@/redux/action/payment/FintechAction";
import { paginate } from "@/utils/paginate";
import Pagination from "@/components/Pagination";

import { Dialog, Transition, Menu } from "@headlessui/react";
import {
  PlusIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { getCookie } from "cookies-next";

export default function AccountViewSaga() {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const { fintechs } = useSelector((state: any) => state.fintechState);
  const provider = banks.concat(fintechs);

  const { accounts } = useSelector((state: any) => state.accountState);
  const { account } = useSelector((state: any) => state.accountState);
  const { UserProfile } = useSelector((state: any) => state.userState);

  const [refresh, setRefresh] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setOpen] = useState<any>(false);
  const [isEdit, setEdit] = useState<any>(false);
  const cancelButtonRef = useRef<any>(null);

  useEffect(() => {
    dispatch(GetAccountRequest(UserProfile.userId));
    dispatch(GetBankRequest());
    dispatch(GetFintechRequest());
  }, [dispatch, refresh]);

  const formikSave = useFormik({
    initialValues: {
      entity_id: "",
      user_id: "",
      account_number: "",
      saldo: "",
      type: "",
    },
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        usac_entity_id: values.entity_id,
        usac_user_id: UserProfile.userId,
        usac_acc_number: values.account_number,
        usac_saldo: values.saldo,
        usac_type: values.type,
      };

      dispatch(AddAccountRequest(payload));
      dispatch(GetAccountRequest(UserProfile.userId));
      window.alert("Data Successfully Added.");
      setRefresh(true);
      setOpen(false);
      resetForm();
    },
  });

  const formikEdit = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id,
      entity_id: account.usacEntityId,
      user_id: account.usacUserId,
      account_number: account.usacAccountNumber,
      saldo: account.usacSaldo,
      type: account.usacType,
    },
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        id: values.id,
        usac_entity_id: values.entity_id,
        usac_user_id: values.user_id,
        usac_acc_number: values.account_number,
        usac_saldo: values.saldo,
        usac_type: values.type,
      };

      dispatch(EditAccountRequest(payload));
      setRefresh(true);
      dispatch(GetAccountRequest(UserProfile.userId));
      window.alert("Data Successfully Updated.");
      setEdit(false);
      resetForm();
    },
  });

  const onUpdate = (id: any) => {
    dispatch(FindAccountRequest(id));
    setEdit(true);
    setId(id);
  };

  const onDelete = async (entityIid: any) => {
    dispatch(DelAccountRequest(entityIid));
    window.alert("Data Successfully Deleted.");
    if (refresh == true) {
      setRefresh(false);
    } else if (refresh == false) {
      setRefresh(true);
    }
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const accountPaginate = paginate(accounts, currentPage, pageSize);

  return (
    <div>
      <Layout>
        <>
          <div className="container">
            <div className="card mt-4 mb-4">
              <nav className="flex mt-4 mx-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 light:text-gray-400 light:hover:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 light:text-gray-400 light:hover:text-white"
                      >
                        User Account
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="relative shadow-md sm:rounded-lg m-8">
                <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                    <tr className="border-b bg-gray-50 light:bg-gray-800 light:border-gray-700">
                      <th scope="col" className="px-6 py-3">
                        Account Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Desc
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Saldo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-end">
                        <button onClick={() => setOpen(true)}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          Add{" "}
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountPaginate.map((item: any) => {
                      return (
                        <>
                          <tr
                            className="bg-white border-b light:bg-gray-900 light:border-gray-700"
                            key={item.usacEntityId}
                          >
                            <th scope="row" className="px-6 py-4">
                              {item.usacAccountNumber}
                            </th>
                            <td className="px-6 py-4">
                              {item.usacEntity["bank"] !== null
                                ? item.usacEntity["bank"]["bankName"]
                                : item.usacEntity["paymentGateway"]["pagaName"]}
                            </td>
                            <td className="px-6 py-4">{Intl.NumberFormat("id-ID", {style: "currency", currency: "idr"}).format(item.usacSaldo)}</td>
                            <td className="px-6 py-4">{item.usacType}</td>
                            <td className="px-6 py-4 text-end">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button>
                                    <EllipsisVerticalIcon
                                      className="-mr-1 h-7 w-7 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            onUpdate(item.usacAccountNumber)
                                          }
                                          className="flex text-gray-700 block px-4 py-2 text-sm"
                                        >
                                          <PencilSquareIcon className="w-4 h-4 ml-1" />
                                          <span className="flex-1 ml-3 whitespace-nowrap">
                                            Edit
                                          </span>
                                        </a>
                                      </Menu.Item>
                                      <Menu.Item>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            onDelete(item.usacAccountNumber)
                                          }
                                          className="flex text-gray-700 block px-4 py-2 text-sm"
                                        >
                                          <TrashIcon className="inline-flex w-4 h-4 ml-1" />
                                          <span className="flex-1 ml-3 whitespace-nowrap">
                                            Delete
                                          </span>
                                        </a>
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="w-full mt-2 mb-4 items-center">
                <Pagination
                  items={accounts.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </>
      </Layout>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold mb-4 items-center leading-6 text-gray-900"
                      >
                        Add Account Number
                      </Dialog.Title>

                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Account
                        </label>
                        <select
                          name="entity_id"
                          id="entity_id"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                          value={formikSave.values.entity_id}
                          onChange={formikSave.handleChange}
                          required
                        >
                          <option value="" disabled>
                            -- Choose Bank --
                          </option>
                          {provider &&
                            provider.map((item: any) => {
                              return (
                                <>
                                  <option
                                    value={
                                      item.bankEntityId != null
                                        ? item.bankEntityId
                                        : item.pagaEntityId
                                    }
                                  >
                                    {item.bankName != null
                                      ? item.bankName
                                      : item.pagaName}
                                  </option>
                                </>
                              );
                            })}
                        </select>
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Account Number
                        </label>
                        <input
                          type="number"
                          name="account_number"
                          id="account_number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikSave.values.account_number}
                          onChange={formikSave.handleChange}
                          required
                        />
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Saldo
                        </label>
                        <input
                          type="text"
                          name="saldo"
                          id="saldo"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikSave.values.saldo}
                          onChange={formikSave.handleChange}
                          required
                        />
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Type
                        </label>
                        <select
                          name="type"
                          id="type"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikSave.values.type}
                          onChange={formikSave.handleChange}
                          required
                        >
                          <option value="" disabled>
                            -- Choose Type --
                          </option>
                          <option value="Debet">Debet</option>
                          <option value="Credit Card">Credit</option>
                          <option value="Payment">Fintech</option>
                        </select>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={() => formikSave.handleSubmit()}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* \/Edit Modal */}
      <Transition.Root show={isEdit} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setEdit}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold mb-4 items-center leading-6 text-gray-900"
                      >
                        Edit Account Number
                      </Dialog.Title>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Account
                        </label>
                        <select
                          name="entity_id"
                          id="entity_id"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                          value={formikEdit.values.entity_id}
                          onChange={formikEdit.handleChange}
                          disabled
                          required
                        >
                          <option value="" disabled>
                            -- Choose Bank --
                          </option>
                          {provider &&
                            provider.map((item: any) => {
                              return (
                                <>
                                  <option
                                    value={
                                      item.bankEntityId != null
                                        ? item.bankEntityId
                                        : item.pagaEntityId
                                    }
                                  >
                                    {item.bankName != null
                                      ? item.bankName
                                      : item.pagaName}
                                  </option>
                                </>
                              );
                            })}
                        </select>
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Account Number
                        </label>
                        <input
                          type="number"
                          name="account_number"
                          id="account_number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikEdit.values.account_number}
                          onChange={formikEdit.handleChange}
                          readOnly={true}
                          required
                        />
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Saldo
                        </label>
                        <input
                          type="text"
                          name="saldo"
                          id="saldo"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikEdit.values.saldo}
                          onChange={formikEdit.handleChange}
                          required
                        />
                      </div>
                      <div className="mt-4 pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                          Type
                        </label>
                        <select
                          name="type"
                          id="type"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                          value={formikEdit.values.type}
                          onChange={formikEdit.handleChange}
                          required
                        >
                          <option value="" disabled>
                            -- Choose Type --
                          </option>
                          <option value="Debet">Debet</option>
                          <option value="Credit Card">Credit</option>
                          <option value="Payment">Fintech</option>
                        </select>
                      </div>
                      <div className="bg-gray-50 mt-4 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={() => formikEdit.handleSubmit()}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setEdit(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
