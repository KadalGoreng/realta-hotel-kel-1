import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserSignupRequest } from '../redux/action/users/userAction'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Yup from 'yup';

export default function Signup() {
    const dispatch = useDispatch();
    const router =useRouter();
    const validationSchema = Yup.object().shape({
        userPhoneNumber: Yup.string().max(14).required("Phone Number is required"),
     });
    const formik = useFormik({
        initialValues: {
            userPhoneNumber: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = {
                userPhoneNumber: values.userPhoneNumber,
            }
            dispatch(UserSignupRequest(payload));
            router.push("/signin");
        }
})

return (
<div>
<section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            REALTA HOTEL   
        </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Guest Signup
            </h1>
    <form className="space-y-4 md:space-y-6" action="#">
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="userPhoneNumber" name="userPhoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  value={formik.values.userPhoneNumber} onChange={formik.handleChange} />
        </div>
    <div className="mt-6 space-y-2">
        <div className="flex gap-x-2">
            <button type="submit" className="w-full px-8 py-3 text-blue-100 bg-blue-600 rounded-md">Signup</button>
            <button formAction="/signin" className="w-full px-8 py-3 text-blue-600 border border-blue-600 rounded-md">Cancel</button>
        </div>
    </div>
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        <Link href="/signupEmployee" className="font-medium text-primary-600 hover:underline dark:text-primary-500">if you are realta hotel, click this for signup</Link>
    </p>
            </form>
        </div>
    </div>
</div>
</section>
</div>
    )
}