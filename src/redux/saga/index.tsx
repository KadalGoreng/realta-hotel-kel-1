import { takeEvery, all } from "redux-saga/effects";

import * as ActionBank from "../constant/payment/BankConstant";
import * as ActionAccount from "../constant/payment/AccountConstant";
import * as ActionFintech from "../constant/payment/FintechConstant";
import * as ActionTransaction from "../constant/payment/TransactionConstant";

import * as ActionTypeUsers from "@/redux/constant/users/usersConstant";
import {
  handleGetUsers,
  handleFindUsers,
  handleCreateUsers,
  handleEditUsers,
  handleDelUsers,
} from "./users/usersSaga";
import * as ActionTypeUserRoles from "@/redux/constant/users/user-rolesConstant";
import {
  handleGetUserRoles,
  handleFindUserRoles,
  handleCreateUserRoles,
  handleEditUserRoles,
  handleDelUserRoles,
} from "./users/user-rolesSaga";
import * as ActionTypeUserProfiles from "@/redux/constant/users/user-profilesConstant";
import {
  handleGetUserProfiles,
  handleFindUserProfiles,
  handleCreateUserProfiles,
  handleEditUserProfiles,
  handleDelUserProfiles,
} from "./users/user-profilesSaga";
import * as ActionTypeUserPassword from "@/redux/constant/users/user-passwordConstant";
import {
  handleGetUserPassword,
  handleFindUserPassword,
  handleCreateUserPassword,
  handleEditUserPassword,
  handleDelUserPassword,
} from "./users/user-passwordSaga";
import * as ActionTypeUserMembers from "@/redux/constant/users/user-membersConstant";
import {
  handleGetUserMembers,
  handleFindUserMembers,
  handleCreateUserMembers,
  handleEditUserMembers,
  handleDelUserMembers,
} from "./users/user-membersSaga";
import * as ActionTypeUserBonusPoints from "@/redux/constant/users/user-bonus-pointsConstant";
import {
  handleGetUserBonusPoints,
  handleFindUserBonusPoints,
  handleCreateUserBonusPoints,
  handleEditUserBonusPoints,
  handleDelUserBonusPoints,
} from "./users/user-bonus-pointsSaga";
import * as ActionTypeRoles from "@/redux/constant/users/rolesConstant";
import {
  handleGetRoles,
  handleFindRoles,
  handleCreateRoles,
  handleEditRoles,
  handleDelRoles,
} from "./users/rolesSaga";
import * as ActionTypeUser from "@/redux/constant/users/userConstant";
import { handleSignin, handleSignout, handleSignup } from "./users/userSaga";

import {
  handleBank,
  createBank,
  DeleteBank,
  FindBank,
  EditBank,
  SearchBank,
} from "./payment/BankSaga";

import {
  GetAllAccount,
  handleAccount,
  createAccount,
  DeleteAccount,
  FindAccount,
  EditAccount,
} from "./payment/AccountSaga";

import {
  handleFintech,
  createFintech,
  DeleteFintech,
  FindFintech,
  EditFintech,
  SearchFintech,
} from "./payment/FintechSaga";

import {
  handleTransaction,
  createTransaction,
  FindTransaction,
  SearchTransaction,
} from "./payment/TransactionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionBank.GET_BANK_REQUEST, handleBank),
    takeEvery(ActionBank.ADD_BANK_REQUEST, createBank),
    takeEvery(ActionBank.FIND_BANK_REQUEST, FindBank),
    takeEvery(ActionBank.EDIT_BANK_REQUEST, EditBank),
    takeEvery(ActionBank.DEL_BANK_REQUEST, DeleteBank),
    takeEvery(ActionBank.SEARCH_BANK_REQUEST, SearchBank),

    takeEvery(ActionAccount.GET_ALL_ACCOUNT_REQUEST, GetAllAccount),
    takeEvery(ActionAccount.GET_ACCOUNT_REQUEST, handleAccount),
    takeEvery(ActionAccount.ADD_ACCOUNT_REQUEST, createAccount),
    takeEvery(ActionAccount.FIND_ACCOUNT_REQUEST, FindAccount),
    takeEvery(ActionAccount.EDIT_ACCOUNT_REQUEST, EditAccount),
    takeEvery(ActionAccount.DEL_ACCOUNT_REQUEST, DeleteAccount),

    takeEvery(ActionFintech.GET_FINTECH_REQUEST, handleFintech),
    takeEvery(ActionFintech.ADD_FINTECH_REQUEST, createFintech),
    takeEvery(ActionFintech.FIND_FINTECH_REQUEST, FindFintech),
    takeEvery(ActionFintech.EDIT_FINTECH_REQUEST, EditFintech),
    takeEvery(ActionFintech.DEL_FINTECH_REQUEST, DeleteFintech),
    takeEvery(ActionFintech.SEARCH_FINTECH_REQUEST, SearchFintech),

    takeEvery(ActionTransaction.GET_TRANSACTION_REQUEST, handleTransaction),
    takeEvery(ActionTransaction.ADD_TRANSACTION_REQUEST, createTransaction),
    takeEvery(ActionTransaction.FIND_TRANSACTION_REQUEST, FindTransaction),
    takeEvery(ActionTransaction.SEARCH_TRANSACTION_REQUEST, SearchTransaction),

    //Users Saga
    takeEvery(ActionTypeUsers.GET_USERS_REQUEST, handleGetUsers),
    takeEvery(ActionTypeUsers.FIND_USERS_REQUEST, handleFindUsers),
    takeEvery(ActionTypeUsers.ADD_USERS_REQUEST, handleCreateUsers),
    takeEvery(ActionTypeUsers.EDIT_USERS_REQUEST, handleEditUsers),
    takeEvery(ActionTypeUsers.DEL_USERS_REQUEST, handleDelUsers),

    takeEvery(ActionTypeUserRoles.GET_USERROLES_REQUEST, handleGetUserRoles),
    takeEvery(ActionTypeUserRoles.FIND_USERROLES_REQUEST, handleFindUserRoles),
    takeEvery(ActionTypeUserRoles.ADD_USERROLES_REQUEST, handleCreateUserRoles),
    takeEvery(ActionTypeUserRoles.EDIT_USERROLES_REQUEST, handleEditUserRoles),
    takeEvery(ActionTypeUserRoles.DEL_USERROLES_REQUEST, handleDelUserRoles),

    takeEvery(
      ActionTypeUserProfiles.GET_USERPROFILES_REQUEST,
      handleGetUserProfiles
    ),
    takeEvery(
      ActionTypeUserProfiles.FIND_USERPROFILES_REQUEST,
      handleFindUserProfiles
    ),
    takeEvery(
      ActionTypeUserProfiles.ADD_USERPROFILES_REQUEST,
      handleCreateUserProfiles
    ),
    takeEvery(
      ActionTypeUserProfiles.EDIT_USERPROFILES_REQUEST,
      handleEditUserProfiles
    ),
    takeEvery(
      ActionTypeUserProfiles.DEL_USERPROFILES_REQUEST,
      handleDelUserProfiles
    ),

    takeEvery(
      ActionTypeUserPassword.GET_USERPASSWORD_REQUEST,
      handleGetUserPassword
    ),
    takeEvery(
      ActionTypeUserPassword.FIND_USERPASSWORD_REQUEST,
      handleFindUserPassword
    ),
    takeEvery(
      ActionTypeUserPassword.ADD_USERPASSWORD_REQUEST,
      handleCreateUserPassword
    ),
    takeEvery(
      ActionTypeUserPassword.EDIT_USERPASSWORD_REQUEST,
      handleEditUserPassword
    ),
    takeEvery(
      ActionTypeUserPassword.DEL_USERPASSWORD_REQUEST,
      handleDelUserPassword
    ),

    takeEvery(
      ActionTypeUserMembers.GET_USERMEMBERS_REQUEST,
      handleGetUserMembers
    ),
    takeEvery(
      ActionTypeUserMembers.FIND_USERMEMBERS_REQUEST,
      handleFindUserMembers
    ),
    takeEvery(
      ActionTypeUserMembers.ADD_USERMEMBERS_REQUEST,
      handleCreateUserMembers
    ),
    takeEvery(
      ActionTypeUserMembers.EDIT_USERMEMBERS_REQUEST,
      handleEditUserMembers
    ),
    takeEvery(
      ActionTypeUserMembers.DEL_USERMEMBERS_REQUEST,
      handleDelUserMembers
    ),

    takeEvery(
      ActionTypeUserBonusPoints.GET_USERBONUSPOINTS_REQUEST,
      handleGetUserBonusPoints
    ),
    takeEvery(
      ActionTypeUserBonusPoints.FIND_USERBONUSPOINTS_REQUEST,
      handleFindUserBonusPoints
    ),
    takeEvery(
      ActionTypeUserBonusPoints.ADD_USERBONUSPOINTS_REQUEST,
      handleCreateUserBonusPoints
    ),
    takeEvery(
      ActionTypeUserBonusPoints.EDIT_USERBONUSPOINTS_REQUEST,
      handleEditUserBonusPoints
    ),
    takeEvery(
      ActionTypeUserBonusPoints.DEL_USERBONUSPOINTS_REQUEST,
      handleDelUserBonusPoints
    ),

    takeEvery(ActionTypeRoles.GET_ROLES_REQUEST, handleGetRoles),
    takeEvery(ActionTypeRoles.FIND_ROLES_REQUEST, handleFindRoles),
    takeEvery(ActionTypeRoles.ADD_ROLES_REQUEST, handleCreateRoles),
    takeEvery(ActionTypeRoles.EDIT_ROLES_REQUEST, handleEditRoles),
    takeEvery(ActionTypeRoles.DEL_ROLES_REQUEST, handleDelRoles),

    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
  ]);
}

export default watchAll;
