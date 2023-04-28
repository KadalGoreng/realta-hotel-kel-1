/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/component/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { GetEmpRequest } from "../redux-saga/action/wodeAction";
import {
  GetWodeRequest,
  AddWodeRequest,
} from "../redux-saga/action/wodeAction";

export default function WodeCreate(props: any) {
  const { workdetail } = useSelector((state: any) => state.wodeState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetEmpRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      id: undefined,
      name: undefined,
      emp: undefined,
      note: undefined,
    },
    onSubmit: async (values: any) => {
      let payload = {
        id: values.id,
        name: values.name,
        emp: values.emp,
        note: values.note,
      };

      dispatch(AddWodeRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
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
                    value={formik.values.id}
                    onChange={formik.handleChange}
              
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employee Name
                  </label>
                  <select
                    id="emp"
                    name="emp"
                    value={formik.values.emp}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled hidden>
                      Choose an Employee
                    </option>
                    {workdetail.map((item: any) => {
                      return (
                        <>
                          <option value={item.emp_emp_id}>
                            {item.users_user_full_name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Notes
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={formik.values.note}
                    onChange={formik.handleChange}
                    required
                  />
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
