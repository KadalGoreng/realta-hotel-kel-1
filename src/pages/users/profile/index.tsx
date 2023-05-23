import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import Layout from "../../../components/layout";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import { GetUsersRequest } from "../../../redux/action/users/usersAction";
import { GetUserPasswordRequest } from "../../../redux/action/users/user-passwordAction";
import { GetUserBonusPointsRequest } from "../../../redux/action/users/user-bonus-pointsAction";
import { GetUserMembersRequest } from "../../../redux/action/users/user-membersAction";
import { GetRolesRequest } from "../../../redux/action/users/rolesAction";
import { GetUserProfilesRequest } from "../../../redux/action/users/user-profilesAction";

import Edit from "./user-password/Edit";
import EditGeneral from "./general/Edit";
import LayoutUser from "../layout";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const { usmeUser } = useSelector((state: any) => state.usersState);
  const { userPassword } = useSelector((state: any) => state.userpasswordState);
  const { userBonusPoints } = useSelector(
    (state: any) => state.userbonuspointsState
  );
  const { userMembers } = useSelector((state: any) => state.usermembersState);
  const { UserRoles } = useSelector((state: any) => state.rolesState);
  const { userProfiles } = useSelector(
    (state: any) => state.userbonuspointsState
  );

  useEffect(() => {
    dispatch(GetUsersRequest());
    dispatch(GetUserPasswordRequest());
    dispatch(GetUserBonusPointsRequest());
    dispatch(GetUserMembersRequest());
    dispatch(GetRolesRequest());
    dispatch(GetUserProfilesRequest());
    setRefresh(false);
    setLoading(true);
  }, [refresh, dispatch]);

  const kebabGeneral = (rowData: any) => {
    return (
      <div>
        <EditGeneral id={rowData.userId} setRefresh={setRefresh} />
      </div>
    );
  };

  const kebabUserPassword = (rowData: any) => {
    return (
      <div>
        <Edit id={rowData.uspaUserId} setRefresh={setRefresh} />
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <LayoutUser>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div>
              <div className="m-6 min-h-screen bg-coldBlue p-6 rounded-lg">
                <h1 className="text-left font-bold text-2xl my-5">General</h1>
                <DataTable
                  value={usmeUser}
                  stripedRows
                  tableStyle={{ minWidth: "50rem" }}
                  className="bg-white text-black"
                  paginator
                  rows={5}
                  first={first}>
                  <Column field="userFullName" header="Username"></Column>
                  <Column field="#" header="Member"></Column>
                  <Column field="userType" header="Type"></Column>
                  <Column field="userEmail" header="Email"></Column>
                  <Column field="userPhoneNumber" header="Handphone"></Column>
                  <Column
                    field="userId"
                    header={<EditGeneral setRefresh={setRefresh} />}
                    body={kebabGeneral}></Column>
                </DataTable>

                <h2 className="text-left font-bold text-2xl my-5">Security</h2>
                <DataTable
                  value={userPassword}
                  stripedRows
                  tableStyle={{ minWidth: "50rem" }}
                  className="bg-white text-black"
                  paginator
                  rows={5}
                  first={first}
                  selectionMode="single">
                  <Column
                    field="uspaPasswordhash"
                    header="Change Password"></Column>
                  <Column
                    field="uspaUserId"
                    header={<Edit setRefresh={setRefresh} />}
                    body={kebabUserPassword}></Column>
                </DataTable>

                <h2 className="text-left font-bold text-2xl my-5">
                  Bonus Points
                </h2>
                <DataTable
                  value={userBonusPoints}
                  stripedRows
                  tableStyle={{ minWidth: "50rem" }}
                  className="bg-white text-black"
                  paginator
                  rows={5}
                  first={first}>
                  <Column field="ubpoCreatedOn" header="Created On"></Column>
                  <Column field="ubpoBonusType" header="Bonus Type"></Column>
                  <Column field="ubpoTotalPoints" header="Point"></Column>
                </DataTable>

                <h2 className="text-left font-bold text-2xl my-5">
                  History Member
                </h2>
                <DataTable
                  value={userMembers}
                  stripedRows
                  tableStyle={{ minWidth: "50rem" }}
                  className="bg-white text-black"
                  paginator
                  rows={5}
                  first={first}>
                  <Column field="usmePromoteDate" header="Promo Date"></Column>
                  <Column field="#" header="Member Type"></Column>
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
