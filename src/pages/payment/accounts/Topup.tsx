import { useFormik } from "formik";
import React, { Fragment, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Layout from "@/components/layout";
import { Dialog, Transition } from "@headlessui/react";
import {
  GetTransactionRequest,
  AddTransactionRequest,
} from "@/redux-saga/action/payment/TransactionAction";
import {
  GetAccountRequest,
  FindAccountRequest,
  FindAccountSuccess,
} from "@/redux-saga/action/payment/AccountAction";
import { FindBankRequest } from "@/redux-saga/action/payment/BankAction";
import { FindFintechRequest } from "@/redux-saga/action/payment/FintechAction";
import UserAccount from "@/pages/api/UserAccount";
import Bank from "@/pages/api/Bank";
import moment from "moment";

export default function Topup(props: any) {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state: any) => state.accountState);
  const [refresh, setRefresh] = useState<any>(false);
  const [isOpen, setOpen] = useState<any>(false);
  const [source, setSource] = useState({
    account: undefined,
    saldo: undefined,
    bank: undefined,
    typeAccount: undefined,
  });
  const [target, setTarget] = useState({
    account: undefined,
    saldo: undefined,
    bank: undefined,
    typeAccount: undefined,
  });

  const cancelButtonRef = useRef<any>(null);
  const formik = useFormik({
    initialValues: {
      transfer: "",
      source_account: "",
      target_account: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const numb =
        "TP#" +
        moment(Date()).format("YYYYMMDD") +
        "-" +
        Math.floor(1000 + Math.random() * 9000);
      let payload = {};

      payload = {
        patr_number: numb,
        nominal: values.transfer,
        patr_type: "TP",
        patr_note: "Top Up",
        order_number: numb,
        source_id: values.source_account,
        target_id: values.target_account,
        number_ref: "",
        user_id: 6,
      };

      dispatch(AddTransactionRequest(payload));
      setOpen(false);
      window.alert("Data Successfully Added.");
      setRefresh(true);
      resetForm();
    },
  });
  const HandleChange = (name: any) => (event: any) => {
    if (name == "sourceAcc") {
      formik.setFieldValue("source_account", event.target.value);
      UserAccount.findOne(event.target.value).then((data) => {
        setSource({
          ...source,
          account: event.target.value,
          saldo: data.usacSaldo,
          typeAccount: data.usacType,
          bank:
            data.usacEntity["bank"] !== null
              ? data.usacEntity["bank"]["bankName"]
              : data.usacEntity["paymentGateway"]["pagaName"],
        });
      });
    } else if (name == "targetAcc") {
      formik.setFieldValue("target_account", event.target.value);
      UserAccount.findOne(event.target.value).then((data) => {
        setTarget({
          ...target,
          saldo: data.usacSaldo,
          typeAccount: data.usacType,
          bank:
            data.usacEntity["bank"] !== null
              ? data.usacEntity["bank"]["bankName"]
              : data.usacEntity["paymentGateway"]["pagaName"],
        });
      });
    }
  };

  useEffect(() => {
    dispatch(GetAccountRequest());
  }, [dispatch, refresh]);

  return (
    <div>
      <Layout>
        <>
          <div className="grid grid-cols-2 gap-2 m-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 light:bg-gray-800 light:border-gray-700">
            <div className="m-4 my-4">
              <form className="space-y-6" name="source" action="#">
                <h3 className="text-xl font-medium text-gray-900 light:text-white text-center">
                  Source
                </h3>
                <div>
                  <label
                    htmlFor="source"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Source Name
                  </label>
                  <input
                    type="text"
                    name="source"
                    id="source"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    placeholder="source name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="account"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Account
                  </label>
                  <select
                    name="source_account"
                    id="source_account"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    onChange={HandleChange("sourceAcc")}
                    required
                  >
                    <option disabled>--Select Account--</option>
                    {accounts &&
                      accounts.map((item: any) => {
                        return (
                          <>
                            <option value={item.usacAccountNumber}>
                              {item.usacAccountNumber} ||{" "}
                              {item.usacEntity["bank"] !== null
                                ? item.usacEntity["bank"]["bankName"]
                                : item.usacEntity["paymentGateway"]["pagaName"]}
                            </option>
                          </>
                        );
                      })}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="saldo"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Current Saldo
                  </label>
                  <input
                    type="text"
                    name="saldo"
                    id="saldo"
                    defaultValue={source == null ? " " : source.saldo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    readOnly
                  />
                </div>
                <hr
                  style={{
                    color: "#e4eaf2",
                    backgroundColor: "#e4eaf2",
                    height: 2.5,
                  }}
                />
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
                    Nominal Transfer
                  </label>
                  <input
                    type="number"
                    name="transfer"
                    id="transfer"
                    value={formik.values.transfer}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="m-4 my-4">
              <form className="space-y-6" name="target" action="#">
                <h3 className="text-xl font-medium text-gray-900 light:text-white text-center">
                  Target
                </h3>
                <div>
                  <label
                    htmlFor="target"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Target Name
                  </label>
                  <input
                    type="text"
                    name="target"
                    id="target"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    placeholder="target name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="account"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Account
                  </label>
                  <select
                    name="account"
                    id="account"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    onChange={HandleChange("targetAcc")}
                    required
                  >
                    <option disabled>--Select Account--</option>
                    {accounts &&
                      accounts.map((item: any) => {
                        return (
                          <>
                            <option value={item.usacAccountNumber}>
                              {item.usacAccountNumber} ||{" "}
                              {item.usacEntity["bank"] !== null
                                ? item.usacEntity["bank"]["bankName"]
                                : item.usacEntity["paymentGateway"]["pagaName"]}
                            </option>
                          </>
                        );
                      })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="saldo"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Current Saldo
                  </label>
                  <input
                    type="text"
                    name="saldo"
                    id="saldo"
                    defaultValue={target == null ? " " : target.saldo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                    readOnly
                  />
                </div>
                <hr
                  style={{
                    color: "#e4eaf2",
                    backgroundColor: "#e4eaf2",
                    height: 2.5,
                  }}
                />
                <div>
                  <label
                    htmlFor="transfer"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    <br />
                  </label>
                  <button
                    type="button"
                    name="transfer"
                    id="transfer"
                    onClick={() => setOpen(true)}
                    data-modal-target="modal"
                    data-modal-toggle="modal"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                  >
                    Transfer
                  </button>
                </div>
              </form>
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
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold mb-3 leading-6 text-gray-900"
                        >
                          Confirm Transfer
                        </Dialog.Title>
                        <div className="mt-2 mb-6">
                          <p className="text-sm text-gray-500">
                            You will transfer from{" "}
                            {source == null ? "..." : source.bank} to{" "}
                            {target == null ? "..." : target.bank}, klik Button
                            to confirm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={() => formik.handleSubmit()}
                    >
                      Transfer
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
