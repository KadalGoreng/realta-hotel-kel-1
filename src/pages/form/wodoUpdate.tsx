/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/component/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { GetUsersRequest } from "../redux-saga/action/wodoAction";
import {
  EditWodoRequest,
  FindWodoRequest,
} from "../redux-saga/action/wodoAction";

export default function WodoUpdate(props: any) {
  const { wodo } = useSelector((state: any) => state.wodoState);
  const { workorder } = useSelector((state: any) => state.wodoState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FindWodoRequest(props.id)), dispatch(GetUsersRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      id: props.id,
      status: wodo.woroStatus,
      date: wodo.woroStartDate,
      user: wodo.woroUser,
    },
    onSubmit: async (values: any) => {
      let payload = {
        id: values.id,
        status: values.status,
        date: values.date,
        user: values.user,
      };

      dispatch(EditWodoRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Update");
      props.setRefresh(true);
    },
  });
  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    defaultValue={formik.values.id}
                    onChange={formik.handleChange}
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    defaultValue={formik.values.status}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled hidden>
                      Choose a Status
                    </option>

                    <option value="OPEN">OPEN</option>
                    <option value="CANCELED">CANCELED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Start Date
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    defaultValue={formik.values.date}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User
                  </label>
                  <select
                    id="user"
                    name="user"
                    // value={formik.values.user}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled hidden>
                      Choose an User
                    </option>
                    {workorder.map((item: any) => {
                      return (
                        <>
                          <option value={item.userId}>
                            {item.userFullName}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => formik.handleSubmit()}
                >
                  Submit
                </button>

                <button
                  type="submit"
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 
                  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  onClick={() => props.setplay(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"></div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
