import { combineReducers } from "redux";
import BankReduce from "./payment/BankReducer";
import FintechReduce from "./payment/FintechReducer";
import AccountReduce from "./payment/AccountReducer";
import TransactionReduce from "./payment/TransactionReducer";

import UserReducer from "./users/userReducer";
import UsersReducer from "./users/usersReducer";
import UserRolesReducer from "./users/user-rolesReducer";
import UserProfilesReducer from "./users/user-profilesReducer";
import UserPasswordReducer from "./users/user-passwordReducer";
import UserMembersReducer from "./users/user-membersReducer";
import UserBonusPointsReducer from "./users/user-bonus-pointsReducer";
import RolesReducer from "./users/rolesReducer";

const rootReducer = combineReducers({
  //Payment
  bankState: BankReduce,
  accountState: AccountReduce,
  fintechState: FintechReduce,
  transactionState: TransactionReduce,

  //Users
  userState: UserReducer,
  usersState: UsersReducer,
  userrolesState: UserRolesReducer,
  userprofilesState: UserProfilesReducer,
  userpasswordState: UserPasswordReducer,
  usermembersState: UserMembersReducer,
  userbonuspointsState: UserBonusPointsReducer,
  rolesState: RolesReducer,
});

export default rootReducer;
