import { takeEvery, all } from "redux-saga/effects";

import * as ActionBank from "../constant/payment/BankConstant";
import * as ActionAccount from "../constant/payment/AccountConstant";
import * as ActionFintech from "../constant/payment/FintechConstant";
import * as ActionTransaction from "../constant/payment/TransactionConstant";

import {
  handleBank,
  createBank,
  DeleteBank,
  FindBank,
  EditBank,
  SearchBank,
} from "./payment/BankSaga";

import {
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
  ]);
}

export default watchAll;
