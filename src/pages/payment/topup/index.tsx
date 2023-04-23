import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/layout";
import {
  GetTransactionRequest,
  DelTransactionRequest,
} from "./../../../redux-saga/action/TransactionAction";
export default function index() {
  return (
    <div>
      <Layout>
        <>
          <div className="grid grid-cols-2 gap-2 m-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="m-4 my-4">
              <form className="space-y-6" name="source" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                  Source
                </h3>
                <div>
                  <label
                    htmlFor="source"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Source Name
                  </label>
                  <input
                    type="text"
                    name="source"
                    id="source"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="source name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="account"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Account
                  </label>
                  <select
                    name="account"
                    id="account"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  >
                    <option disabled>--Select Account--</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="saldo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Saldo
                  </label>
                  <input
                    type="text"
                    name="saldo"
                    id="saldo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="transfer"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nominal Transfer
                  </label>
                  <input
                    type="text"
                    name="transfer"
                    id="transfer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="m-4 my-4">
              <form className="space-y-6" name="target" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                  Target
                </h3>
                <div>
                  <label
                    htmlFor="target"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Target Name
                  </label>
                  <input
                    type="text"
                    name="target"
                    id="target"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="target name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="account"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Account
                  </label>
                  <select
                    name="account"
                    id="account"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  >
                    <option disabled>--Select Account--</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="saldo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Saldo
                  </label>
                  <input
                    type="text"
                    name="saldo"
                    id="saldo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="transfer"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    &nbsp
                  </label>
                  <button
                    type="submit"
                    name="transfer"
                    id="transfer"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Transfer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
}
