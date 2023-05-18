import { combineReducers } from "redux";
import BankReduce from "./payment/BankReducer";
import FintechReduce from "./payment/FintechReducer";
import AccountReduce from "./payment/AccountReducer";
import TransactionReduce from "./payment/TransactionReducer";

const rootReducer = combineReducers({
  bankState: BankReduce,
  accountState: AccountReduce,
  fintechState: FintechReduce,
  transactionState: TransactionReduce,
});

export default rootReducer;
