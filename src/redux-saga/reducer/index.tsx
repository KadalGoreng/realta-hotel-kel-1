import { combineReducers } from "redux";
import BankReduce from "./BankReducer";
import FintechReduce from "./FintechReducer";
import AccountReduce from "./AccountReducer";
import TransactionReduce from "./TransactionReducer";

const rootReducer = combineReducers({
  bankState: BankReduce,
  accountState: AccountReduce,
  fintechState: FintechReduce,
  transactionState: TransactionReduce,
});

export default rootReducer;
