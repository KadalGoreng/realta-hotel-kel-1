import React, { useState, useEffect } from 'react';
import Layout from "../../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import EditGeneral from "./general/Edit";

import { GetUsersRequest } from '../../../redux/action/users/usersAction';
import { GetUserPasswordRequest } from '../../../redux/action/users/user-passwordAction';
import { GetUserBonusPointsRequest } from '../../../redux/action/users/user-bonus-pointsAction';
import { GetUserMembersRequest } from '../../../redux/action/users/user-membersAction';
import { GetRolesRequest } from '../../../redux/action/users/rolesAction';
import { GetUserProfilesRequest } from '../../../redux/action/users/user-profilesAction';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import Edit from './user-password/Edit'
import LayoutUser from '../layout';
import { Router, useRouter } from 'next/router';

export default function Index() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>(0);
    const [first, setFirst] = useState(0);
    const [refresh, setRefresh] = useState(false);

    const { UserProfile } = useSelector((state: any) => state.userState);
    const { userPassword } = useSelector((state: any) => state.userPasswordState);

    useEffect(() => {
        // console.log(UserProfile?.userBonusPoints);
        dispatch(GetUsersRequest());
        dispatch(GetUserPasswordRequest());
        dispatch(GetUserBonusPointsRequest());
        dispatch(GetUserMembersRequest());
        dispatch(GetRolesRequest());
        dispatch(GetUserProfilesRequest());
        setRefresh(false);
        setLoading(true);
    }, [refresh, dispatch]);

    // const kebabGeneral = (rowData: any) => {
    //     return (
    //         <div>
    //             <EditGeneral
    //             id={rowData.userId}
    //             setRefresh={setRefresh}/>
    //         </div>
    //     )
    // }
    // const EditGeneral = () => {
    //     router.push('/users/profile/general/')
    //  }
    // console.log(UserProfile?.userBonusPoints);


    // const kebabUserPassword = (rowData: any) => {
    //     return (
    //         <div>
    //             <Edit
    //             id={rowData.uspaUserId}
    //             setRefresh={setRefresh}/>
    //         </div>
    //     )
    // }

    return (
        <div>
            <Layout>
                <LayoutUser>
                    {!loading ? (
                        <div className="text-center">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                          <div className="text-left my-2 font-bold text-3xl">General</div>
                            <div className="max-w-mx p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        This Information will be display, so careful what you share</h5>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-black-500 dark:text-gray-400"> Username: {UserProfile?.userFullName}</div>
                                    <div className="text-black-500 dark:text-gray-400"> Email: {UserProfile?.userEmail}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-black-500 dark:text-gray-400"> Type: {UserProfile?.userType}</div>
                                    <div className="text-black-500 dark:text-gray-400"> Hand Phone: {UserProfile?.userPhoneNumber}</div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <div>
                                        <EditGeneral id={UserProfile?.userMembers.usmeUserId}
                                            setRefresh={setRefresh} />
                                    </div>
                                </div>
                            </div>
                            {/* <p> HandPhone{UserProfile.userBonusPoints.ubpoCreatedOn}</p> */}
                            {/* <Column
                    field="userId"
                    header={<EditGeneral setRefresh={setRefresh} />}
                    body={kebabGeneral}
                    ></Column> */}
                    <div className="text-left my-2 font-bold text-3xl">Security</div>
                            <div className="max-w-mx p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <form>
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="mb-3 text-black-500 dark:text-black-400"> Change Password </div>
                                        <div className="col-sm-5">
                                            <input type="password" className="border rounded w-small py-2 px-3 text-black border-slate-900" disabled placeholder='********'></input>
                                            {userPassword?.uspaPasswordhash}
                                        </div>
                                    </div>
                                </form>
                                <div className="col-md-12 bg-blue text-right">
                                    <div>
                                        <Edit id={UserProfile?.userMembers.usmeUserId}
                                            setRefresh={setRefresh} />
                                    </div>
                                </div>
                            </div>

                            {/* <Column
                  field="uspaUserId"
                  header={<Edit setRefresh={setRefresh} />}
                  body={kebabUserPassword}
                ></Column> */}
                <div className="text-left my-2 font-bold text-3xl">Bonus Points</div>
                            <div className="max-w-mx p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    
                                {/* <div className="mb-2 block"> Promo Date: {UserProfile?.userBonusPoints.ubpoCreatedOn}</div>
            <div className="mb-2 block"> Point: {UserProfile?.userBonusPoints.ubpoBonusType}</div>
            <div className="mb-2 block"> Status: {UserProfile?.userBonusPoints.ubpoTotalPoints}</div> */}

                                <DataTable
                                    value={UserProfile?.userBonusPoints}
                                    stripedRows
                                    tableStyle={{ minWidth: '50rem' }}
                                    className='bg-white text-black'
                                    paginator
                                    rows={5}
                                    first={first}
                                >
                                    <Column field="ubpoCreatedOn" header="Created On"></Column>
                                    <Column field="ubpoBonusType" header="Bonus Type"></Column>
                                    <Column field="ubpoTotalPoints" header="Point"></Column>
                                </DataTable>
                            </div>

                            <div className="text-left my-2 font-bold text-3xl">History Member</div>
                            <div className="max-w-mx p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {/* <div className="mb-3 text-black-500 dark:text-black-400"> Promo Date: {UserProfile?.userMembers.usmePromoteDate}</div>
                                <div className="mb-3 text-black-500 dark:text-black-400"> Point: {UserProfile?.userMembers.usmePoints}</div>
                                <div className="mb-3 text-black-500 dark:text-black-400"> Status: {UserProfile?.userMembers.usmeType}</div> */}
                                <DataTable 
            value={[UserProfile?.userMembers]} 
            stripedRows 
            tableStyle={{ minWidth: '50rem' }} 
            className='bg-white text-black' 
            paginator
            rows={5}
            first={first}>
                <Column field="usmePromoteDate" header="Promo Date"> </Column>
                <Column field="usmePoints" header="Point"></Column>
                <Column field="usmeType" header="Status"></Column>
            </DataTable>
                            </div>
                        </div>
                    )}
                </LayoutUser>
            </Layout>
        </div>
    );
}