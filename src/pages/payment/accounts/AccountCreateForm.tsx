import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAccountRequest } from "../../../redux-saga/action/payment/AccountAction";
import { useFormik } from "formik";
import { GetBankRequest } from "@/redux-saga/action/payment/BankAction";
import { GetFintechRequest } from "@/redux-saga/action/payment/FintechAction";

export default function AccountCreateForm(props: any) {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const { fintechs } = useSelector((state: any) => state.fintechState);
  const provider = banks.concat(fintechs);
  console.log(provider);

  const formik = useFormik({
    initialValues: {
      entity_id: "",
      user_id: "",
      account_number: "",
      saldo: "",
      type: "",
    },
    onSubmit: async (values) => {
      let payload = {
        usac_entity_id: values.entity_id,
        usac_user_id: values.user_id,
        usac_acc_number: values.account_number,
        usac_saldo: values.saldo,
        usac_type: values.type,
      };

      dispatch(AddAccountRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Added.");
      props.setRefresh(true);
    },
  });
  useEffect(() => {
    dispatch(GetBankRequest());
    dispatch(GetFintechRequest());
  }, [dispatch]);

  return (
    <div>
      <nav className="flex my-4 mx-8" aria-label="Breadcrumb">
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
                Add Account
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="m-8 block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 light:bg-gray-800 light:border-gray-700 light:hover:bg-gray-700 flex flex-col item-center">
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Account Entity ID
          </label>
          <select
            name="entity_id"
            id="entity_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
            value={formik.values.entity_id}
            onChange={formik.handleChange}
            required
          >
            <option disabled>--Select Prov--</option>
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
                      {item.bankName != null ? item.bankName : item.pagaName}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Account User ID
          </label>
          <input
            type="text"
            name="user_id"
            id="user_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.user_id}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Account Number
          </label>
          <input
            type="text"
            name="account_number"
            id="account_number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.account_number}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Saldo
          </label>
          <input
            type="text"
            name="saldo"
            id="saldo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.saldo}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <option value="Debet">Debet</option>
            <option value="Credit Card">Credit</option>
            <option value="Payment">Fintech</option>
          </select>
        </div>
        {/* <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Expire Month
          </label>
          <input
            type="number"
            name="exp_month"
            id="exp_month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.exp_month}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 light:text-white">
            Expire Year
          </label>
          <input
            type="number"
            name="exp_year"
            id="exp_year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            value={formik.values.exp_year}
            onChange={formik.handleChange}
          ></input>
        </div> */}
        <div className="flex flex-row items-end my-4 mx-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
            onClick={() => formik.handleSubmit()}
          >
            Simpan
          </button>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 light:bg-gray-600 light:hover:bg-gray-700 light:focus:ring-gray-800"
            onClick={() => props.setDisplay(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
