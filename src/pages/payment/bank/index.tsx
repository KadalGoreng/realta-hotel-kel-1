import { useFormik } from "formik";
import React, { Fragment, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Layout from "@/components/layout";
import { Dialog, Transition, Menu } from "@headlessui/react";
import BankUpdateForm from "./BankUpdateForm";
import BankCreateForm from "./BankCreateForm";
import {
  GetBankRequest,
  AddBankRequest,
  FindBankRequest,
  EditBankRequest,
  SearchBankRequest,
  DelBankRequest,
} from "@/redux-saga/action/payment/BankAction";
import { paginate } from "@/utils/paginate";
import Pagination from "@/components/Pagination";
import {
  PlusIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

export default function BankViewSaga(props: any) {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const { bank } = useSelector((state: any) => state.bankState);
  const [refresh, setRefresh] = useState<any>(false);
  const [id, setId] = useState();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setOpen] = useState<any>(false);
  const [isEdit, setEdit] = useState<any>(false);
  const cancelButtonRef = useRef<any>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: async (values) => {
      let keyword = values.keyword;
      if (keyword === "" || keyword === " ") {
        dispatch(GetBankRequest());
      } else {
        dispatch(SearchBankRequest(keyword));
      }
      setRefresh(true);
      setCurrentPage(1);
    },
  });

  const formikSave = useFormik({
    initialValues: {
      name: "",
      code: "",
    },
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        bank_code: values.code,
        bank_name: values.name,
      };

      dispatch(AddBankRequest(payload));
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
      name: bank.bankName,
      code: bank.bankCode,
    },
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        id: values.id,
        bank_name: values.name,
        bank_code: values.code,
      };

      dispatch(EditBankRequest(payload));
      window.alert("Data Successfully Updated.");
      dispatch(GetBankRequest());
      setRefresh(true);
      setEdit(false);
      resetForm();
    },
  });

  useEffect(() => {
    dispatch(GetBankRequest());
  }, [dispatch, refresh]);

  const onUpdate = (id: any) => {
    dispatch(FindBankRequest(id));
    setEdit(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DelBankRequest(id));
    window.alert("Data Successfully Deleted.");
    if (refresh == true) {
      setRefresh(false);
    } else if (refresh == false) {
      setRefresh(true);
    }
    dispatch(GetBankRequest());
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };  

  const search_parameters = Object.keys(Object.assign({}, ...banks));

  function search(banks: any) {
    return banks.filter(
      (item: any) =>
        item.bankName.includes(filter) &&
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query.toLowerCase())
        )
    );
  }

  const bankPaginate = paginate(search(banks), currentPage, pageSize);

  return (
    <Layout>
      <>
        <div className="container sm:rounded-lg ">
          <div className="card mt-4 mb-4">
            <div className="flex mx-8 my-4 mr-px-8 items-center">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 light:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input                  
                  name="keyword"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  placeholder="Search Bank..."
                  type="search"
                  onChange={(e: any) => { setQuery(e.target.value); setCurrentPage(1); }}
                  required
                />
              </div>
              <button
                type="button"                
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                Search
              </button>
            </div>

            <div className="relative shadow-md sm:rounded-lg mx-8 mr-x-8 mb-8">
              <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                  <tr className="border-b bg-gray-50 light:bg-gray-800 light:border-gray-700">
                    <th scope="col" className="px-6 py-3">
                      Bank Code
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Bank Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-end">
                      <button onClick={() => setOpen(true)}>
                        <PlusIcon />
                        <span className="flex-1 ml-1 whitespace-nowrap">
                          {" "}
                          Add
                        </span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bankPaginate.map((item: any) => {
                    return (
                      <>
                        <tr
                          className="bg-white border-b light:bg-gray-900 light:border-gray-700"
                          key={item.bankEntityId}
                        >
                          <td className="px-6 py-3 pb-3">{item.bankCode}</td>
                          <td className="px-2 py-3 pb-3">{item.bankName}</td>
                          <td className="px-6 py-3 pb-3 text-end">
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
                                          onUpdate(item.bankEntityId)
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
                                          onDelete(item.bankEntityId)
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
            <div className="w-full mb-4 justify-content-center">
              <Pagination
                items={search(banks).length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
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
                    <div className="bg-white p-4 sm:p-6 sm:pb-4">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold mb-4 items-center leading-6 text-gray-900"
                        >
                          Add Bank
                        </Dialog.Title>
                        <div className="mt-4 pr-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                            Bank Code
                          </label>
                          <input
                            type="text"
                            name="code"
                            id="code"
                            className="bg-gray-50 border border-gray-300 mr-x-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            value={formikSave.values.code}
                            onChange={formikSave.handleChange}
                          />
                        </div>
                        <div className="mt-4 pr-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                            Bank Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 pr-x-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            value={formikSave.values.name}
                            onChange={formikSave.handleChange}
                          />
                        </div>
                        <div className="bg-gray-50 mt-4 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                          Edit Bank
                        </Dialog.Title>
                        <div className="mt-4 pr-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                            Bank Code
                          </label>
                          <input
                            type="text"
                            name="code"
                            id="code"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            value={formikEdit.values.code}
                            onChange={formikEdit.handleChange}
                          />
                        </div>
                        <div className="mt-4 pr-6">
                          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                            Bank Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            value={formikEdit.values.name}
                            onChange={formikEdit.handleChange}
                          />
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
      </>
    </Layout>
  );
}
