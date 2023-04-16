import { call, put } from "redux-saga/effects";
import {
  GetTransactionSuccess,
  GetTransactionFailed,
  AddTransactionSuccess,
  AddTransactionFailed,
  FindTransactionSuccess,
  FindTransactionFailed,
  EditTransactionSuccess,
  EditTransactionFailed,
  DelTransactionSuccess,
  DelTransactionFailed,
} from "../action/TransactionAction";
import TransactionApi from "@/pages/api/PaymentTransaction";

function* handleTransaction(): any {
  try {
    const result = yield call(TransactionApi.read);
    yield put(GetTransactionSuccess(result));
  } catch (error) {
    yield put(GetTransactionFailed(error));
  }
}
function* createTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TransactionApi.create, payload);
    yield put(AddTransactionSuccess(result.data));
  } catch (error) {
    yield put(AddTransactionFailed(error));
  }
}
function* FindTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TransactionApi.findOne, payload);
    yield put(FindTransactionSuccess(result));
  } catch (error) {
    yield put(FindTransactionFailed(error));
  }
}
function* EditTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TransactionApi.update, payload);
    yield put(EditTransactionSuccess(result.data));
  } catch (error) {
    yield put(EditTransactionFailed(error));
  }
}

function* DeleteTransaction(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(TransactionApi.deleted, payload);
    yield put(DelTransactionSuccess(result.data));
  } catch (error) {
    yield put(DelTransactionFailed(error));
  }
}

export {
  handleTransaction,
  createTransaction,
  FindTransaction,
  EditTransaction,
  DeleteTransaction,
};
